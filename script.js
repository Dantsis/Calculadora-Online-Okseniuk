function append(char) {
    document.getElementById("display").value += char;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
    document.getElementById("result").innerText = "";
  }
  
  function calculate() {
    const display = document.getElementById("display");
    const resultDiv = document.getElementById("result");
    const expression = display.value;
  
    try {
      if (!expression) {
        resultDiv.style.color = "orange";
        resultDiv.innerText = "Ingresá una operación primero";
        return;
      }
  
      const result = eval(expression);
  
      if (isNaN(result)) {
        resultDiv.style.color = "orange";
        resultDiv.innerText = "Operación inválida";
      } else {
        resultDiv.style.color = result > 0 ? "lime" : result < 0 ? "red" : "white";
        resultDiv.innerText = `Resultado: ${result}`;
      }
    } catch (e) {
      resultDiv.style.color = "orange";
      resultDiv.innerText = "Error de cálculo";
    }
  }
  