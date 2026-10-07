 function encenderAmpolleta() {
            document.getElementById("imgEncendida").src = "../img/encendida.jpg";

        }
function apagarAmpolleta() {
            document.getElementById("imgEncendida").src = "../img/apagada.jpg";
        }
        function sumar() {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            let resultado = num1 + num2;
            document.getElementById("resultado").innerText = "El resultado es: " + resultado;
        }
        function restar() {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            let resultado = num1 - num2;
            document.getElementById("resultado").innerText = "El resultado es: " + resultado;
        }
        function multiplicar() {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            let resultado = num1 * num2;
            document.getElementById("resultado").innerText = "El resultado es: " + resultado;
        }
        function dividir() {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            let resultado = num1 / num2;
            document.getElementById("resultado").innerText = "El resultado es: " + resultado;
        }
        