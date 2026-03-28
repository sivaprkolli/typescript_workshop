function enterUserName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Username entered");
        }, 3000);
    });
}

function clickNext() {
    console.log("Clicking next button");
}

function enterPassword() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Password entered");
        }, 2000);
    })
}

function clickLogin() {
    console.log("Clicking login button");
}

async function login() {
    await enterUserName().then((data) => { console.log(data) });
    await clickNext();
    await enterPassword().then((data) => { console.log(data) });
    await clickLogin();
}

login();