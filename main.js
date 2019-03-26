const addButton = document.getElementById('addButton');
const inputIngredient = document.getElementById('inputIngredient');

const ingredients = [];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
const domStringBuilder = (arrrayToPrint) => {
    let domString = '';
    arrrayToPrint.forEach((ingredient) => {
        domString += `<div class ="card col-3">`;
        domString +=    `<div class="card-body">`;
        domString +=    `<h5 class="card-title">${ingredient.item}</h5>`;
        domString +=    `<a href="#" class="btn btn-primary">Go somewhere</a>`;
        domString +=    `</div>`;
        domString += `</div>`;
     
    });

    printToDom('ingredient-container', domString);
}

const addIngredient = (e) =>{
    e.preventDefault();
    const inputText = inputIngredient.value;

    const newIngredient = {
        item: inputText
    };
    ingredients.push(newIngredient);
    
    domStringBuilder(ingredients);
    inputIngredient.value = '';
}
const eventListener = () => {
    addButton.addEventListener ('click', addIngredient);
};

const init = () => {
    eventListener();
};
init();