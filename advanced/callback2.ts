function logout() {

}

function test2() {
    console.log("Test2 executed");
}

function add(a, sum) {
    console.log(a);
    sum();
}

function sum1() {
    console.log("Sum logic executed");
}


add(10, sum1);