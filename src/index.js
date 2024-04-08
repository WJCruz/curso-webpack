import Template from '@templates/Template.js';
import '@styles/main.css'; // se añade porque se compila con webpack al compilarse el archivo index.js
import '@styles/vars.styl';

(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
