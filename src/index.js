import { saludar } from './js/componentes';
import './css/componentes.css';  // Importamos el css como si fuese un archivo js, esto gracias al style y css loader esto no funciona en componentes.js revisar
import './styles.css';  // Importamos el css de forma global
import webpacklogo from './assets/img/webpack-logo.png';

const nombre = 'Roberto';
saludar( nombre ); 

console.log( webpacklogo );
const img = document.createElement('img');
img.src = webpacklogo;
document.body.append( img )