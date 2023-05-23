const textInput = document.querySelector('#name-input');
const outPut = document.querySelector('#name-output');

textInput.addEventListener("input", (event) => {
    outPut.textContent = event.currentTarget.value;
});