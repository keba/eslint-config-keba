// a set of test statements to show the style itself will be built over time...

async function testAllTheThings() {
    function something(orOther) {
        return orOther;
    }

    const oneKey = ['one'];
    const twoKeys = [
        'one',
        'two'
    ];
    const someKeys = [
        'one',
        'two',
        'three'
    ];
    for (let keyName of oneKey) {
        console.log(keyName); // eslint-disable-line no-console
    }
    for (let keyName of twoKeys) {
        console.log(keyName); // eslint-disable-line no-console
    }
    for (let keyName of someKeys) {
        console.log(keyName); // eslint-disable-line no-console
    }

    const h = 'used by vue';
    const x = 'used by vue';
    const y = 'used by vue';
    const el = 'used by vue';
    const to = 'used by vue';

    console.log(h + x + y + el + to);

    return await something('a value', (boolean) => {
        if (boolean === true) {
            return 'yay';
        }
        return 'boo';
    });
}

testAllTheThings()
    .then((anything) => {
        return console.log(`anything: ${anything}`); // eslint-disable-line no-console
    })
    .catch((error) => {
        if (error) {
            return console.log(`there was an error: ${error}`); // eslint-disable-line no-console
        }
        return console.log(`there was no error: ${error}`); // eslint-disable-line no-console
    });
