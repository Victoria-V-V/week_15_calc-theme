//Практическое задание №1
function showTheme() {
    switch (document.getElementById("theme").value) {
        case "light":
            // document.body.style.backgroundColor = 'white';
            // document.body.style.color = 'black';
            document.body.classList.remove('blueStyle');
            document.body.classList.remove('darkStyle');
            document.body.classList.add('lightStyle');
            break;

        case "blue":
            // document.body.style.backgroundColor = 'lightblue';
            // document.body.style.color = 'blue';
            document.body.classList.remove('lightStyle');
            document.body.classList.remove('darkStyle');
            document.body.classList.add('blueStyle');
            break;

        case "dark":
            // document.body.style.backgroundColor = 'rgb(43, 43, 43)';
            // document.body.style.color = 'white';
            document.body.classList.remove('lightStyle');
            document.body.classList.remove('blueStyle');
            document.body.classList.add('darkStyle');
            break;
    }
}

//Практическое задание №2
function operation() {
    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;

        case '-':
            result = number1 - number2;
            break;

        case '*':
            result = number1 * number2;
            break;

        case '/':
            if (!number2) {
                result = ("На ноль делить нельзя!");
                break;
            } else {
                result = number1 / number2;
                break;
            }
    }

    document.getElementById('result').innerHTML = result;
}