#!/usr/bin/env node

// 🎉 Добро пожаловать в Node.js!
// Это простой проект для проверки установки Node.js и npm

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('🚀 Node.js работает! Поздравляем!');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Показываем информацию о системе
console.log('📊 Информация о вашей системе:');
console.log(`   Node.js версия: ${process.version}`);
console.log(`   Платформа: ${process.platform}`);
console.log(`   Архитектура: ${process.arch}\n`);

// Простая функция для демонстрации
function greet(name = 'Разработчик') {
  return `Привет, ${name}! 👋`;
}

console.log('💬 ' + greet('Новичок'));
console.log('💬 ' + greet());

// Простая математика
console.log('\n🔢 Простые вычисления:');
const a = 5;
const b = 3;
console.log(`   ${a} + ${b} = ${a + b}`);
console.log(`   ${a} × ${b} = ${a * b}`);

// Работа с массивами
console.log('\n📋 Работа с массивами:');
const languages = ['JavaScript', 'Python', 'Go', 'Rust'];
console.log(`   Языки программирования: ${languages.join(', ')}`);
console.log(`   Всего языков: ${languages.length}`);

// Текущая дата и время
console.log('\n📅 Текущая дата и время:');
const now = new Date();
console.log(`   ${now.toLocaleString('ru-RU')}`);

// Успешное завершение
console.log('\n✅ Всё работает отлично!');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
console.log('💡 Совет: Попробуйте изменить этот файл с помощью Vibe Code!');
console.log('   Например, попросите ИИ добавить новую функцию.\n');
