// a set of test statements to show the style itself will be built over time...

async function test() {
    function something(orOther) {
        return orOther;
    }

    const someKeys = ['one', 'two', 'three'];
    for (let keyName of someKeys) {
        console.log(keyName); // eslint-disable-line no-console
    }
    return await something('a value', (boolean) => {
        if (boolean === true) {
            return 'yay';
        }
        return 'boo';
    });
}

test()
    .then((anything) => {
        return console.log(`anything: ${anything}`); // eslint-disable-line no-console
    })
    .catch((error) => {
        if (error) {
            return console.log(`there was an error: ${error}`); // eslint-disable-line no-console
        }
        return console.log(`there was no error: ${error}`); // eslint-disable-line no-console
    });
