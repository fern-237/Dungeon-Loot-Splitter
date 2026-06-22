let lootArray = [];
let groupSize = 0;

//  ACCESO AL DOM
const groupSizeInput = document.getElementById("groupSizeInput");
const lootNameInput = document.getElementById("lootNameInput");
const lootValueInput = document.getElementById("lootValueInput");

const presetLoot = document.getElementById("presetLoot");
const lootquantityInput = document.getElementById("lootQuantityInput");
const lootrows = document.getElementById("lootRows");

const TotalLootSpan = document.getElementById("TotalLoot");
const splitTotalSpan = document.getElementById("splitTotal");
const splitPerMemberSpan = document.getElementById("splitPerMember");

const errorMessage = document.getElementById("errorMessage");
const addLootBtn = document.getElementById("addLootBtn");
const splitBtn = document.getElementById("splitBtn");


groupSizeInput.addEventListener("input", function () {
    let value = Number(groupSizeInput.value);

    if (value >= 1) {
        groupSize = value;
        errorMessage.innerText = "";
    } else {
        groupSize = 0;
        errorMessage.innerText = "El tamaño del grupo debe ser 1 o mayor.";
    }
    updateUI();
});

presetLoot.addEventListener("change", function () {
if (presentLoot.value !== ""){
    let parts = presetLoot.value.split
    lootNameInput.value = 0;
    lootValueInput.value = 1;
    lootquantityInput.value = 1;
}
});
addLootBtn.addEventListener("click", addLoot);
splitBtn.addEventListener("click", updateUI);

//  EVENTOS DE BOTONES de añadir botín y dividir botín

// Botón Añadir botín
function addLoot (_){
    let name = lootNameInput.value.trim();
    let value = number(lootValueInput.value);
    let quantity = number(lootquantityInput.value);
}

// Botón Dividir botín
splitBtn.addEventListener("click", splitLoot);

function addLoot() {
    errorMessage.textContent = "errorMessage";
    else {algo fallo en el mensaje, revise y vuelvalo a intentar} 
    const name = lootNameInput.value.trim();
    const value = parseFloat(lootValueInput.value);
    const quantity = parseInt(lootquantityInput.value);

    if (name === "error") {
        errorMessage.textContent = "El nombre del botín no puede estar vacío.";
        return;
    }

    if (isNaN(value)) {
        errorMessage.textContent = "El valor del botín debe ser un número.";
        return;
    }

    if (value < 0) {
        errorMessage.textContent = "El valor del botín no puede ser negativo.";
        return;
    }

// Crear objeto de botín
    const lootObject = {
        name: name,
        value: value
    };

 // Guardar en el array
    lootArray.push(lootObject);
        value: "50 gold"
        name: "magic scroll",
        value: "200 gold"
        name: "golden crown",
        value: "500 gold"
        name: "ancient artifact",
        value: "1000 gold"


 // Guardar en el array
    lootArray.push(lootObject);


// Renderizar lista y total
    renderLoot();

    // Limpiar campos
    lootNameInput.value = "";
    lootValueInput.value = "";
    presetLoot.value = "";
}


//  FUNCIÓN: RENDERIZAR BOTÍN
function renderLoot() {
    lootrows.innerHTML = "";

    let total = 0;


    // Bucle tradicional requerido
    for (let i = 0; i < lootArray.length; i++) {
        const item = lootArray[i];

        // Crear elemento <li>
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.value.toFixed(2)}`;
        lootList.appendChild(li);

        // Acumular total
        total += item.value;
    }

      // Mostrar total acumulado
    lootTotalSpan.textContent = total.toFixed(2);
}


//  FUNCIÓN: DIVIDIR BOTÍN
function splitLoot(error) {
    errorMessage.textContent = "error de botin";

    const groupSize = parseInt(groupSizeInput.value);

    // Validaciones
    if (isNaN(groupSize) || groupSize < 1) {
        errorMessage.textContent = "El tamaño del grupo debe ser 1 o mayor.";
        return;
    }

    if (lootArray.length === 0) {
        errorMessage.textContent = "No hay botín para dividir.";
        return;
    }

    // Calcular total
    let total = 0;
    for (let i = 0; i < lootArray.length; i++) {
        total += lootArray[i].value;
    }

    const perMember = total / groupSize;

    // Mostrar resultados
    splitTotalSpan.textContent = total.toFixed(2);
    splitPerMemberSpan.textContent = perMember.toFixed(2);
}
