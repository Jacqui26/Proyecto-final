let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('“El ejercicio es clave para la salud física y de la mente.” Nelson Mandela.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
