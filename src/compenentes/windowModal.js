
 //Creando ventana modal para cargar imagenes
//Añadir un objeto de atributos a un elemento
const addAttributes = (element, attrObj) => {
for  (let attr in attrObj){
if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr,attrObj[attr])
}
};

//Crear elementos con atributos e hijo
const createCustomElement = (element, attributes, children) =>{
let customElement = document.createElement(element);
if(children !== undefined) children.forEach(el => {
  if (el.nodeType){
     if(el.nodeType === 1 || el.nodeType === 11) 
     customElement.appenChild(el);
  } else{
     customElement.innerHTML += el;
  }
  });
    addAttributes(customElement,attributes);
    return customElement;
};

//Imprimir Modal
 export const printModal = content => {
//crear contenedor interno 
const modalContentEl = createCustomElement('div',{
   id: 'modal-content',
   class: 'modal-content'
 },[content])
 //crear contenedor principal
 const modalContainerEl = createCustomElement('div',{
   id: 'modal-container',
   class: 'modal-container'
 },[modalContentEl]);
  document.appendChild(modalContentEl);
}
 printModal(`<h1> Hola </h1>`)