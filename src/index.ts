const nameInputElement = document.getElementById('name');
if (nameInputElement) {
    nameInputElement.addEventListener("change", handleChange)
}

export function handleChange() {
    const name = document.getElementById('name') as HTMLInputElement;
    console.log(`Change Event ${name.value}`)
}