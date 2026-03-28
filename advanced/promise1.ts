function wait1() {
    console.log("Wait1");
    return new Promise((resolve, reject) => {
        resolve("Promise resolved successfully");
    }
    );
}

function wait2() {
    console.log("Wait2");
    return new Promise((resolve, reject) => {
        reject("Promise rejected");
    });
}

function wait3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Wait3");
            resolve("Promise resolved after 3 seconds");
        }, 3000)
    });
}

wait3().then((data) => {
    console.log(data);
});

wait1().then((data) => {
    console.log(data);
});

wait2().catch((error) => {
    console.log(error);
});