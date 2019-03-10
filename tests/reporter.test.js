import WebReporter from '../src/reporter';

import { SUITE_FEATURE, SUITE_SCENARIO, TEST_PASS, TEST_FAIL } from './fixtures';

jest.mock('sync-request');
import request from 'sync-request';

describe('webhook-reporter', () => {
    const baseReporter = {};
    const options = {url: 'dummy'};
    let config = {specs: {
        a: false,
        b: 1
    }};

    beforeEach(() => {
        request.mockReset();
    });

    it('should initialize the reporter', () => {        
        let reporter = new WebReporter(baseReporter, config, options);
        expect(reporter.options).toEqual(options);
        expect(reporter.config).toEqual(config);
    });

    it('should send results if url provided', () => {
        let reporter = new WebReporter(baseReporter, config, {url: 'dummy'});
        reporter.emit('end');
        expect(request).toHaveBeenCalled();

    });

    it('should not send results if no url provided', () => {
        let reporter = new WebReporter(baseReporter, config, {});
        reporter.emit('end');
        expect(request).not.toHaveBeenCalled();
    });

    it('should send environment variables', () => {
        process.env.DUMMY='MY_TEST_DUMMY';
        let reporter = new WebReporter(baseReporter, config, {
            url: 'https://dummy.com',
            environment: ['DUMMY']
        });
        reporter.emit('end');
        expect(request).toHaveBeenCalled();
        expect(request.mock.calls[0]).toMatchSnapshot();
        expect(request.mock.calls[0][2].json.environment).toEqual({DUMMY: 'MY_TEST_DUMMY'});
    });

    it('should emit results', () => {
        let reporter = new WebReporter(baseReporter, config, options);
        reporter.emit('runner:start');
        reporter.emit('suite:start', SUITE_FEATURE);
        reporter.emit('suite:start', SUITE_SCENARIO);
        reporter.emit('test:pass', TEST_PASS);
        reporter.emit('test:pass', TEST_PASS);
        reporter.emit('test:fail', TEST_FAIL);
        reporter.emit('test:pending', TEST_PASS);
        reporter.emit('runner:end');
        reporter.emit('end');
        expect(request).toHaveBeenCalled();
        expect(request.mock.calls[0]).toMatchSnapshot();
    });

});
