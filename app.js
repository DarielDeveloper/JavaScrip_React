//Funciones
/* function hola(nombre) {
  return 'Hola '+nombre;
}
hola('Dariel') */

//Asignar valores por defecto
/* function add(x = 0, y = 0) {
  return x + y;
} */

//Objetos
/* const user = {
  name: 'Dariel',
  lastName: 'Nuñez Acosta',
  age: '32',
  address: {
    city: 'Artemisa'
  },
  sendEmail: (text) => {
    return text;
  }
} */

//Otra forma de declarar objeto
/* const name = 'Movil';
const price = '300';
const newProduct = {
  name,
  price
} */

//Manipulación del DOM
/* const h2 = document.createElement('h2');
h2.textContent = 'Hola mundo desde JavaScript';
document.body.append(h2);
const button = document.createElement('button');
button.textContent = 'Manipular';
document.body.append(button);
button.addEventListener('click', e => {
  h2.textContent = 'Se manipulo el elemento';
  button.setAttribute('disabled', 'disabled');
  console.log('click');
}); */

//Destructuring
/* const user = {
  userName: 'darielna',
  name: 'Dariel'
}
function getUser({ userName, name }) {
  return "<h2> " + name + " (" + userName + ") </h2>";
}
document.body.innerHTML = getUser(user); */

//Funciones anónimas
/* console.log(function () {
  return 'Hola Mundo';
}()); */

//Función flecha(Arrow functions)
/* const add = (a, b) => {
  return a + b;
}
console.log(add(2, 3));  */

//Inline Arrow Functions
/* const saludar = () => 'Hola';
console.log(saludar());
const showObject = () => ({ name: 'Dariel' });
console.log(showObject());
*/

//Template literals (Template string)
/* const saludar = (nombre) => `Hola ${nombre}`;
console.log(saludar('Dariel')); */

//Métodos de array
/* const nombres = ['Daniel', 'Dariel', 'Dalia'];
nombres.map(nombre => {
  return nombre;
});

nombres.find(nombre => {
  if (nombre === 'Dariel') {
    return nombre;
  }
});

nombres.filter(nombre => {
  if (nombre.includes('D')) {
    return nombre;
  }
});

const names = ['name1', 'name2', 'name3'];
const newName = ['name4', 'name5', 'name6'];
const newArrayName = names.concat(newName); */

//Spread operator
/* const names = ['name1', 'name2', 'name3'];
const newName = ['name4', 'name5', 'name6'];
const newArrayName = [...names, ...newName];

const user = {
  name: 'Dariel',
  lastName: 'Nuñez Acosta'
};

const address = {
  street: 'lisa',
  city: 'habana'
}

const userInfo = {
  ...user,
  ...address
}
console.log(userInfo); */

//Ecmascript Modules
/* Cuando se quiere exportar funciones, variables y objetos. Desde el fichero .js se declara export o export default. Ejemplo
tengo el add.js que tiene la funcionalidad 
export function sumar(a,b){
return a+b;
}
o la otra forma
export default sumar;
***************************************************************
Cuando se quiere importar se utiliza la palabra clave import. Ejemplo
import sumar from "./add.js";
para que funcione hay que incorporar en el html en la importación del js
 <script type="module" src="app.js"></script>
 type="module"--> de esta forma le dices al navegador que se activa la característica de export e import del js.
*/

//Optional Chaining (?)
/* const person = {
  name: 'Dariel',
  address: {
    city: "Lodon"
  }
}
console.log(person.address?.city); */

//async await
const elementUl = document.createElement('ul');

/// La forma antigua utilizando .then
/* fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    ///llevo la respuesta a formato json 
    return response.json();
  })
  .then(function (dataUsers) {
    ///Espero la respuesta en json 
    dataUsers.forEach((user) => {
      let elementLi = document.createElement('li');
      elementLi.setAttribute('user-id', user?.id);
      elementLi.textContent = `${user?.name} (${user?.username} )`;
      elementUl.append(elementLi);
    });
    document.body.append(elementUl);

  });  */
/// La forma moderna utilizando async await
///Para ejecutar el código debe estar en una function para activar el async
async function dataUsers() {
  /// Por cada espera hay que poner await
  const dataUrl = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await dataUrl.json();
  ///Espero la respuesta en json 
  dataUsers.forEach((user) => {
    let elementLi = document.createElement('li');
    elementLi.setAttribute('user-id', user?.id);
    elementLi.textContent = `${user?.name} (${user?.username} )`;
    elementUl.append(elementLi);
  });
  document.body.append(elementUl);

}
///LLamada de la function
dataUsers();