//funciones declarativas
//funcion sin parametro
function saludar(){
    //todo el codigo que sabe hacer la funcion
    document.write(`<p>Hola mundo</p>`);
}

//funcion con parametros
function saludoCompleto(nombreIngresado, apellidoIngresado){
    const nombreCompleto = nombreIngresado +' '+apellidoIngresado;
    console.log(nombreCompleto);
    document.write(`<p>Hola ${nombreIngresado}, ${apellidoIngresado} que tengas un buen día.</p>`);
}

//llamar o invocar a un funcion
saludar();

saludoCompleto('Tony', 'Stark');

const nombre = prompt('Ingrese su nombre');
const apellido = prompt('Ingrese su apellido');

saludoCompleto(nombre, apellido);
saludoCompleto();



