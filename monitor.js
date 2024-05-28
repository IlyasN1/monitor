// Получите текущую ориентацию экрана
var screenOrientation = window.screen.orientation;

// Доступ к свойствам ориентации
var angle = screenOrientation.angle;
var orientation = screenOrientation.type;
var onscreen = screenOrientation.onscreen;
var portrait = screenOrientation.portrait;

console.log("Ориентация экрана: " + orientation);
console.log("Угол поворота: " + angle);//Этот код возможно будет не нужен
console.log("Экран в портретной ориентации: " + portrait);
console.log("Элемент на экране: " + onscreen);
