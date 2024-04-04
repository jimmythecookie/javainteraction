const messages = [
  "POO POO",
  "PEE PEE POO POO.",
  "DINOSAUR",
  "COOKIE MONSTER.",
  "PATRICK THE STARFISH"
]; /*https://www.w3schools.com/js/js_const.asp */

function generator(name) {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = name + " IS A .. ." + messages[randomIndex];
  document.getElementById('output').innerText = message;
  restyle(); // Call restyle here to apply new styles every time the thing is generated
}

function restyle() {
  const outputElement = document.getElementById('output');
  
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  const randomFontSize = Math.floor(Math.random() * (11)) + 14 + 'px';
  const randomFontStyle = Math.random() > 0.5 ? 'italic' : 'normal';
  
  outputElement.style.color = randomColor;
  outputElement.style.fontSize = randomFontSize;
  outputElement.style.fontStyle = randomFontStyle;
}
