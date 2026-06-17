let lootArray = [];

//  ACCESO AL DOM (solo getElementById)
const groupSizeInput = document.getElementById("groupSizeInput");
const lootNameInput = document.getElementById("lootNameInput");
const lootValueInput = document.getElementById("lootValueInput");
const presetLoot = document.getElementById("presetLoot");

const lootList = document.getElementById("lootList");
const lootTotalSpan = document.getElementById("lootTotal");

const splitTotalSpan = document.getElementById("splitTotal");
const splitPerMemberSpan = document.getElementById("splitPerMember");

const errorMessage = document.getElementById("errorMessage");

const addLootBtn = document.getElementById("addLootBtn");
const splitBtn = document.getElementById("splitBtn");


presetLoot.addEventListener("change", () => {
    if (presetLoot.value === "") return;

    const [name, value] = presetLoot.value.split("|");
    lootNameInput.value = name;
    lootValueInput.value = Number(value);
});

// Botón Añadir botín
addLootBtn.addEventListener("click", addLoot);

// Botón Dividir botín
splitBtn.addEventListener("click", splitLoot);


//  FUNCIÓN: AÑADIR BOTÍN
function addLoot() {
    errorMessage.textContent = "";

    const name = lootNameInput.value.trim();
    const value = parseFloat(lootValueInput.value);

    // Validaciones
    if (name === "") {
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

    // Renderizar lista
    renderLoot();

    // Limpiar campos
    lootNameInput.value = "";
    lootValueInput.value = "";
    presetLoot.value = "";
}


//  FUNCIÓN: RENDERIZAR BOTÍN
function renderLoot() {
    lootList.innerHTML = "";

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
function splitLoot() {
    errorMessage.textContent = "";

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
