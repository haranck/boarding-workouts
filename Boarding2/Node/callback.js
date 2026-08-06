// function processUserData(name, callback) {
//     console.log(`Processing data for ${name}...`);
//     callback(name);
// }

// function displayUserData(user) {
//     console.log(`User ${user} data processed successfully.`);
// }

// processUserData("Bob", displayUserData);

function processUserData(name) {
    return new Promise((res, rej) => {
        console.log(`Processing data for ${name}...`);
        res(name);
    });
}

function displayUserData(user) {
    return new Promise((res, rej) => {
        console.log(`User ${user} data processed successfully.`);
    });
}

processUserData("Haran").then((user) => displayUserData(user));