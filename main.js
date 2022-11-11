const dateOfBirth = document.querySelector(`#date-of-birth`);
const luckyNumber = document.querySelector(`#lucky-number`);
const checkNumberButton = document.querySelector(`#check-number`);
const outputBox = document.querySelector(`#output-box`);

checkNumberButton.addEventListener(`click`, checkBirthDateIsLucky);

function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (sum && dob) {
        compareValues(sum, luckyNumber.value)
    }
    else {
        outputBox.innerText = `Please enter both the fields😒`;
    }
}

function calculateSum(dob) {
    dob = dob.replaceAll(`-`, ``);
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

function compareValues(sum, lkNumber) {

    if (sum % lkNumber === 0) {
        outputBox.innerText = `Your Birthday is lucky!🤩`;
    } else {
        outputBox.innerText = `Your Birthday is not lucky🤐`;
    }
}