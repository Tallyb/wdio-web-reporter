WDIO web Reporter
==================

[![Build Status](https://travis-ci.org/webdriverio/wdio-web-reporter.svg?branch=master)](https://travis-ci.org/webdriverio/wdio-web-reporter) [![Code Climate](https://codeclimate.com/github/webdriverio/wdio-web-reporter/badges/gpa.svg)](https://codeclimate.com/github/webdriverio/wdio-web-reporter) [![Test Coverage](https://codeclimate.com/github/webdriverio/wdio-web-reporter/badges/coverage.svg)](https://codeclimate.com/github/webdriverio/wdio-web-reporter/coverage) [![dependencies Status](https://tallyb.org/webdriverio/wdio-web-reporter/status.svg)](https://david-dm.org/webdriverio/wdio-web-reporter)

***

> A WebdriverIO plugin to send webhook with condensed tests results and environment information.
> For each suite (or feature in cucumber), the total number of failed tests, skipped tests and passed tests are sent). In addition, environment variables are sent which is useful for reporting on CI processes, such as run number or execution environment. 

![web Reporter](http://webdriver.io/images/web.png "web Reporter")

## Installation

The easiest way is to keep `wdio-web-reporter` as a devDependency in your `package.json`.

```json
{
  "devDependencies": {
    "wdio-web-reporter": "~0.1.0"
  }
}
```

You can simple do it by:

```bash
npm install wdio-web-reporter --save-dev
```

Instructions on how to install `WebdriverIO` can be found [here](http://webdriver.io/guide/getstarted/install.html).

## Configuration

Following code shows the default wdio test runner configuration. Just add `'web'` as reporter
to the array.

```js
// wdio.conf.js
module.exports = {
  // ...
  reporters: ['dot', 'web'],
  // ...
};
```

The following options exist: 
- `url`: The webhook url to where results will be published
- `environment`: An array of environmet variables from the execution environment to be sent to the webhook together with the results

## Development

All commands can be found in the package.json. The most important are:

Watch changes:

```sh
$ npm run watch
```

Run tests:

```sh
$ npm test

# run test with coverage report:
$ npm run test:cover
```

Build package:

```sh
$ npm build
```

----

For more information on WebdriverIO see the [homepage](http://webdriver.io).
