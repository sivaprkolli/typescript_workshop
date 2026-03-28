function test1(scenario: string, verify: () => void) {
    console.log("Executing test for " + scenario);
    verify();
}

function verify() {
    console.log("Verification logic executed");
}

test1("Login functionality", verify);