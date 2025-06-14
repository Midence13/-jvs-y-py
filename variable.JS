function calcular(num1, num2, operacion) {
    switch (operacion) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 === 4 ? "Error: división por cero" : num1 / num2;
      default:
        return "Operación no válida"

