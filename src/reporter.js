const events = require('events');
const request = require('sync-request');

/**
 * Initialize a new `web` test reporter.
 *
 * @param {Runner} runner
 * @api public
 */
class WebReporter extends events.EventEmitter {
    constructor (baseReporter, config, options = {}) {
        super()

        this.baseReporter = baseReporter
        this.config = config
        this.options = options
        console.log('OPTIONS', options)

        this.runner = {}
        this.results = {
        }

        this.on('runner:start', function (runner) {
            this.runner = runner
        })

        this.on('suite:start', function (suite) {
            console.log('SUITE START', suite.specHash, suite.uid, suite.parent);
            if (suite.parent === null) { // it's a feature
                this.results[suite.specHash] = {
                    title: suite.title,
                    failed: 0,
                    skipped: 0,
                    passed:0,
                    failures: []
                }    
            }
        })

        this.on('test:pending', function (test) {
            this.results[test.specHash].skipped++;
        })

        this.on('test:pass', function (test) {
            console.log('TEST', test.parent, test.specHash, test.uid, test.title);
            this.results[test.specHash].passed++;
        })

        this.on('test:fail', function (test) {
            console.log('TEST', test.parent, test.specHash, test.uid, test.title, test.err);
            this.results[test.specHash].failed++;
            this.results[test.specHash].failures.push({
                title: test.title,
                error: test.err.message
            });
        })

        this.on('suite:end', function (suite) {
        })

        this.on('runner:end', function (runner) {
        })

        this.on('end', function () {
            if (this.options.url) {
                console.log('POSTING TO ', this.options.url)                 
                request('POST',this.options.url, {json: this.results});
            }
            console.dir(this.results)
        })
    }
}

export default WebReporter;
