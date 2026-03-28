let sum = () => {

}

function add(a: number, b: number): void {
    console.log(a + b);
}

function add1(a: number, b: number): number {
    return a + b;
}

add(10, 20);

let result: number = add1(20, 20);
console.log(result);