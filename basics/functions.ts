
function signIn(a:number, b:string) {
    console.log("User signed in");
}

function signIn10(a:string, test12:()=>void) {
    console.log(a);
    test12();
}

function test12():void {
    console.log("Test12 executed");
}

signIn10("Hello", test12);


let signIn1 = function () {
    console.log("User1 signed in");
}

let signIn2 = () => {
    console.log("User2 signed in");
}

signIn(1, "user");
signIn1();
signIn2();