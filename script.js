//  ARRAY GLOBAL PARA GUARDAR EL BOTÍN
let lootArray = []; // Cada elemento será { name: "...", value: número }


//  ACCESO AL DOM (solo getElementById)
const groupSizeInput = document.getElementById("groupSizeInput");
const lootNameInput = document.getElementById("lootNameInput");
const lootValueInput = document.getElementById("lootValueInput");

const addLootBtn = document.getElementById("addLootBtn");
const splitBtn = document.getElementById("splitBtn");

const lootList = document.getElementById("lootList");
const lootTotalSpan = document.getElementById("lootTotal");

const splitTotalSpan = document.getElementById("splitTotal");
const splitPerMemberSpan = document.getElementById("splitPerMember");

const errorMessage = document.getElementById("errorMessage");


//  EVENT LISTENERS
addLootBtn.addEventListener("click", addLoot);
splitBtn.addEventListener("click", splitLoot);

//  FUNCIÓN: AÑADIR BOTÍN
function addLoot() {
    errorMessage.textContent = ""; // limpiar errores

    const name = lootNameInput.value.trim();
    const value = parseFloat(lootValueInput.value);

    // VALIDACIONES
    if (name === "") {
        errorMessage.textContent = "El nombre del botín no puede estar vacío.";
        return;
    }

    if (isNaN(value)) {
        errorMessage.textContent = "El valor del botín debe ser un número válido.";
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

    // Guardarlo en el array global
    lootArray.push(lootObject);

    // Renderizar lista y total
    renderLoot();

    // Limpiar inputs
    lootNameInput.value = "";
    lootValueInput.value = "";
}


//  FUNCIÓN: RENDERIZAR LISTA DE BOTÍN
function renderLoot() {
    lootList.innerHTML = ""; // limpiar lista

    let total = 0;

    // BUCLE OBLIGATORIO (for tradicional)
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
function splitLoot() {
    errorMessage.textContent = ""; // limpiar errores

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

    // Calcular total usando un bucle
    let total = 0;
    for (let i = 0; i < lootArray.length; i++) {
        total += lootArray[i].value;
    }

    const perMember = total / groupSize;

    // Mostrar resultados
    splitTotalSpan.textContent = total.toFixed(2);
    splitPerMemberSpan.textContent = perMember.toFixed(2);
}
