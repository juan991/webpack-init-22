import '../css/componentes.css';  // Importamos el css como si fuese un archivo js, esto gracias al style y css loader esto no funciona en componentes.js revisar
// import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = ( nombre ) => {
    console.log('Creando etiqueta h1');
    
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre } !!!`;

    document.body.append( h1 );
};

/* console.log( webpacklogo ); no puedo cargar imagenes tampoco
const img = document.createElement('img');
img.src = webpacklogo;
document.body.append( img ) */

/* module.exports = {  Esto no funcionó cuando quise importar estilos 
    saludar 
} */