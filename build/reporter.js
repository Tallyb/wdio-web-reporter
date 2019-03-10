'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _events = require('events');

var _syncRequest = require('sync-request');

var request = _interopRequireWildcard(_syncRequest);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

class WebReporter extends _events.EventEmitter {
    constructor(baseReporter, config, options = {}) {
        super();

        this.baseReporter = baseReporter;
        this.config = config;
        this.options = options;

        this.runner = {};
        this.results = {};

        this.on('runner:start', function (runner) {
            this.runner = runner;
        });

        this.on('suite:start', function (suite) {
            console.log('SUITE START', suite);
            if (suite.parent === null) {
                // it's a feature
                this.results[suite.specHash] = {
                    title: suite.title,
                    failed: 0,
                    skipped: 0,
                    passed: 0,
                    failures: []
                };
            }
        });

        this.on('test:pending', function (test) {
            this.results[test.specHash].skipped++;
        });

        this.on('test:pass', function (test) {
            console.log('TEST:PASS', test);
            this.results[test.specHash].passed++;
        });

        this.on('test:fail', function (test) {
            console.log('TEST:FAIL', test);
            this.results[test.specHash].failed++;
            this.results[test.specHash].failures.push({
                title: test.title,
                error: test.err.message
            });
        });

        this.on('suite:end', function (suite) {
            console.log('SUITE END', suite);
        });

        this.on('runner:end', function () {});

        this.on('end', function () {
            let environment = {};
            this.options.environment.forEach(i => {
                environment[i] = process.env[i];
            });
            if (this.options.url) {
                request('POST', this.options.url, { json: {
                        results: this.results, environment
                    } });
            }
            console.dir(this.results, { colors: true, depth: 10 });
        });
    }
}

exports.default = WebReporter;
module.exports = exports.default;