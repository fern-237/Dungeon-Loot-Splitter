let lootArray = [];
let groupSize = 0;

//  ACCESO AL DOM
const groupSizeInput = document.getElementById("groupSizeInput");
const lootNameInput = document.getElementById("lootNameInput");
const lootValueInput = document.getElementById("lootValueInput");
const lootQuantityInput = document.getElementById("lootQuantityInput");
const presetLoot = document.getElementById("presetLoot");

const lootRows = document.getElementById("lootRows");
const noLootMessage = document.gitElementById("noLootMessage")

const TotalLootSpan = document.getElementById("TotalLoot");
const splitTotalSpan = document.getElementById("splitTotal");
const splitPerMemberSpan = document.getElementById("splitPerMember");

const errorMessage = document.getElementById("errorMessage");
const addLootBtn = document.getElementById("addLootBtn");
const splitBtn = document.getElementById("splitBtn");

//events
groupSizeInput.addEventListener("input", function () {
    let value = Number(groupSizeInput.value);

    if (value >= 1) {
        groupSize = value;
        errorMessage.Textcontent = "hubo un error";
    } else {
        groupSize = 0;
        errorMessage.Textcontent = "El tamaño del grupo debe ser 1 o mayor.";
    }
    updateUI();
});

presetLoot.addEventListener("change", function () {
if (presentLoot.value !== ""){
    const parts = presetLoot.value.split("|")
    lootNameInput.value = [0];
    lootValueInput.value = [1];
    lootQuantityInput.value = [1];
}
});

addLootBtn.addEventListener("click", addLoot);
splitBtn.addEventListener("click", updateUI);


// Botón Añadir botín
function addLoot (_){
    const Name = lootNameInput.value.trim();
    const Value = parseFloat(lootValueInput.value);
    const Quantity = parseInt(lootQuantityInput.value);
}

// Botón Dividir botín
splitBtn.addEventListener("click", splitLoot);

function addLoot() {
    errorMessage.textContent = "errorMessage";
    else {algo fallo en el mensaje, revise y vuelvalo a intentar} 
    const name = lootNameInput.value.trim();
    const value = parseFloat(lootValueInput.value);
    const quantity = parseInt(lootquantityInput.value);
//validation
    if (name === "error") {
        errorMessage.textContent = "Hubo un error con el botin, porfavor intentelo de nuevo";
        return;
    }
    if (isNaN(value) || value < 0) {
        errorMessage.textContent = "El valor debe ser un número válido y no negativo.";
        return;
    }
    if (isNaN(quantity) || quantity < 1) {
        errorMessage.textContent = "La cantidad debe ser 1 o mayor.";
        return;
    }
}
errorMessage.textContent = "hubo un error, vuelva a intentarlo";

//crear objeto de botin
const lootObject = {
name: name;
Value: Value;
Quantity: Quantity
};

 // Guardar en el array
    lootArray.push(lootObject);

//limpiaar campos
lootNameInput = "";
lootValueInput = "";
lootQuantityInput = 1;
presentLoot = "";

updateUI();

// Crear elemento <li>
const li = document.createElement("li");
li.textContent = `${item.name} - $${item.value.toFixed(2)}`;
lootList.appendChild(li);


//funcion para eliminar botin
function removeLoot(index) {
    lootArray.splice(index, 1);
    updateUI();
}

//UpdateUI()
function updateUI() {
    // primera funtion: Renderizar Lista
     lootsRows.innerHTML = "";

     if (lootArray.Length === 0){
        noLootMessage.classList.remove("hidden");
     } else {
        noLootMessage.classList.add("hidden");
     }
     for (let i = 0; i < lootArray.length; i++) {
        const item = lootArray[i];

        let row = document.createElement("div");
        row.className = "loot-row";

        let nameCell = document.createElement("div");
        nameCell.className = "loot-cell";
        nameCell.innerText = item.name;

         let valueCell = document.createElement("div");
        valueCell.className = "loot-cell";
        valueCell.innerText = item.value.toFixed(2);

        let quantityCell = document.createElement("div");
        quantityCell.className = "loot-cell";
        quantityCell.innerText = item.quantity;

        let actionCell = document.createElement("div");
        actionCell.className = "loot-cell";

        let removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.addEventListener("click", function () {
            removeLoot(i);
        });
        actionCell.appendChild(removeBtn);

        row.appendChild(nameCell);
        row.appendChild(valueCell);
        row.appendChild(quantityCell);
        row.appendChild(actionCell);

        lootRows.appendChild(row);
     }

    //segunda funtion Calcular total
     let total = 0;

     for (let i = 0; i < lootArray.length; i++) {
        total += lootArray[i].value * lootArray[i].quantity;
     }

     totalLootSpan.Textcontent = total.toFixed(2);

     
    //tercera funtion: Calcular división
        if (groupSize >= 1 && lootArray.length > 0) {
        const perMember = total / groupSize;

        splitTotalSpan.textContent = total.toFixed(2);
        splitPerMemberSpan.textContent = perMember.toFixed(2);

        document.querySelectorAll(".split-result").forEach(el =>
            el.classList.remove("hidden")
        );
     } else {
        splitTotalSpan.textContent = "0.00";
        splitPerMemberSpan.textContent = "0.00";

        document.querySelectorAll(".split-result").forEach(el =>
            el.classList.add("hidden")
        );
     }

    //quinta funtion: puerta del botón Split
     splitBtn.disabled = !(groupSize >= 1 && lootArray.length > 0);
}
 