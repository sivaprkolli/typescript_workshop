
import { A } from "./A";

export class B extends A {
    constructor() {
        super();
        console.log("B class constructor");
    }

    test14() {
        console.log("test14");
    }
}

const b = new B();
b.test14();