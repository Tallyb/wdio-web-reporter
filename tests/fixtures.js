export const TEST_PASS = { event: 'test:pass',
    cid: '0-0',
    uid: 'Following locations exist: "Chandelier, La Fayette"5',
    title: 'Following locations exist: "Chandelier, La Fayette"',
    pending: false,
    parent: 'Test feature4',
    type: 'test',
    file: '/src/test/test.feature',
    err: {},
    duration: 7186,
    runner:
   { '0-0': { 
       browserName: 'firefox',
       version: '',
       name: 'test  - local' 
   } 
   },
    specs:
   [ '/Users/tallyb/Documents/yoobic/yoobic-e2e-6/src/test/test.feature' ],
    tags: [],
    specHash: 'a6c6e5d30799348316f0995d2b867b7b' };

export const TEST_FAIL = { event: 'test:pass',
    cid: '0-0',
    uid: 'Following locations exist: "Chandelier, La Fayette"5',
    title: 'Following locations exist: "Chandelier, La Fayette"',
    pending: false,
    parent: 'Test feature4',
    type: 'test',
    file: '/src/test/test.feature',
    err: {
        message: 'it failed',
    },
    duration: 7186,
    runner:
   { '0-0': { 
       browserName: 'firefox',
       version: '',
       name: 'test  - local' 
   } 
   },
    specs:
   [ '/Users/tallyb/Documents/yoobic/yoobic-e2e-6/src/test/test.feature' ],
    tags: [],
    specHash: 'a6c6e5d30799348316f0995d2b867b7b' };

export const SUITE_FEATURE = { event: 'suite:start',
    cid: '0-0',
    uid: 'Test feature1',
    title: 'Test feature',
    pending: false,
    parent: null,
    type: 'suite',
    file: 'src/test/test.feature',
    err: {},
    runner:
        { '0-0':
            { browserName: 'firefox',
                version: '',
                name: 'test  - local' }
        },
    specs:
     [ 'src/test/test.feature' ],
    tags: [],
    specHash: 'a6c6e5d30799348316f0995d2b867b7b'
};    

export const SUITE_SCENARIO = { event: 'suite:start',
    cid: '0-0',
    uid: 'Test feature4',
    title: 'Test feature',
    pending: false,
    parent: 'Test feature1',
    type: 'suite',
    file: '/src/test/test.feature',
    err: {},
    runner:
 { '0-0':
    { browserName: 'firefox',
        version: '',
        name: 'test  - local' } 
 },
    specs:
 [ 'test.feature' ],
    tags: [],
    specHash: 'a6c6e5d30799348316f0995d2b867b7b' };

export const SUITE_END = { event: 'suite:end',
    cid: '0-0',
    uid: 'Test feature1',
    title: 'Test feature',
    pending: false,
    parent: null,
    type: 'suite',
    file: '/src/test/test.feature',
    err: {},
    duration: 67927,
    runner:
 { '0-0':
    { browserName: 'firefox',
        version: '',
        name: 'test  - local' } },
    specs:
 [ '/Users/tallyb/Documents/yoobic/yoobic-e2e-6/src/test/test.feature' ],
    tags: [],
    specHash: 'a6c6e5d30799348316f0995d2b867b7b' 
}; 
