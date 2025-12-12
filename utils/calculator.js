// Простой калькулятор для демонстрации функций

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Деление на ноль невозможно!');
  }
  return a / b;
}

// Демонстрация работы калькулятора
console.log('🧮 Калькулятор запущен!\n');
console.log('Примеры вычислений:');
console.log(`10 + 5 = ${add(10, 5)}`);
console.log(`10 - 5 = ${subtract(10, 5)}`);
console.log(`10 × 5 = ${multiply(10, 5)}`);
console.log(`10 ÷ 5 = ${divide(10, 5)}\n`);

// Экспорт функций для использования в других модулях
module.exports = {
  add,
  subtract,
  multiply,
  divide
};
