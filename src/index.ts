function handleChange() {
    const nameInputElement = document.getElementById('name') as HTMLInputElement;
    console.log(`Change Event ${nameInputElement.value}`)
}

function handleClick() {
    const numberOneInputElement = document.getElementById('numberOne') as HTMLInputElement;
    const numberTwoInputElement = document.getElementById('numberTwo') as HTMLInputElement;

    const a : number = numberOneInputElement.valueAsNumber;
    const b : number = numberTwoInputElement.valueAsNumber;

    const result: number = a + b;

    const resultElement = document.getElementById('numberThree') as HTMLInputElement;
    resultElement.setAttribute('value', String(result));

}