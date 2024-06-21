//Declarations
const d = document
const symbols = ["=","+", "-","*","/"]
const actions = ["C","CE"]
// Calc Object
const calc =  {
    a: "",
    operator: "",
    b : "",
    result : ""
}
const calculator = d.getElementById('Calc')
//Functions
const numbers = () => {
    const container = d.createElement("div");
    for(let i = 0; i <= 9; i++){
        container.innerHTML+= `<button>${i}</button>`;
    }
    calculator.appendChild(container);
}
const renderElements= (array) => {
    const container = d.createElement("div");
    array.forEach(btn => container.innerHTML+= `<button>${btn}</button>`)
    calculator.appendChild(container);
}

numbers();
renderElements(symbols);
renderElements(actions);

