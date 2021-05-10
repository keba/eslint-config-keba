'use strict';
// a set of test statements to show the style itself will be built over time...

async function testAllTheThings() {
    function something(orOther) {
        return orOther;
    }

    function consistent(one, two, three) {
        return one + two + three;
    }

    const consistent1 = consistent(1, 2, 3);
    const consistent2 = consistent(1,
        2,
        3);
    console.log('consistent ' + consistent1 + consistent2); // eslint-disable-line no-console

    const oneKey = ['one'];
    const twoKeys = ['one', 'two'];
    const threeKeys = ['one', 'two', 'three'];
    const anotherThreeKeys = [
        'one',
        'two',
        'three'
    ];
    const fourKeys = [
        'one',
        'two',
        'three',
        'four'
    ];
    for (let keyName of oneKey) {
        console.log(keyName); // eslint-disable-line no-console
    }
    for (let keyName of twoKeys) {
        console.log(keyName); // eslint-disable-line no-console
    }
    for (let keyName of threeKeys) {
        console.log(keyName); // eslint-disable-line no-console
    }
    for (let keyName of anotherThreeKeys) {
        console.log(keyName); // eslint-disable-line no-console
    }
    for (let keyName of fourKeys) {
        console.log(keyName); // eslint-disable-line no-console
    }

    const h = 'used by vue ';
    const x = 'used by vue ';
    const y = 'used by vue ';
    const el = 'used by vue ';
    const to = 'used by vue ';

    console.log(h + x + y + el + to); // eslint-disable-line no-console

    // prefer-named-capture-group
    const preferNamedCaptureGroup = /(?<ids>test[s])/u;
    console.log(preferNamedCaptureGroup.exec('tests').groups.ids); // eslint-disable-line no-console

    return await something('a value', (boolean) => {
        if (boolean === true) {
            return 'yay';
        }
        return 'boo';
    });
}

testAllTheThings()
    .then((anything) => {
        if (Boolean(anything) === true) {
            if (Boolean(anything) === true) {
                if (Boolean(anything) === true) {
                    if (Boolean(anything) === true) {
                        if (Boolean(anything) === true) {
                            if (Boolean(anything) === true) {
                                if (Boolean(anything) === true) {
                                    if (Boolean(anything) === true) {
                                        if (Boolean(anything) === true) {
                                            if (Boolean(anything) === true) {
                                                return console.log(`anything: ${anything}`); // eslint-disable-line no-console
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return console.log(`not anything: ${anything}`); // eslint-disable-line no-console
    })
    .catch((error) => {
        if (error) {
            return console.log(`there was an error: ${error}`); // eslint-disable-line no-console
        }
        return console.log(`there was no error: ${error}`); // eslint-disable-line no-console
    });
