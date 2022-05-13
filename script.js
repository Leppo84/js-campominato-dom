// creo il link al container

const field = document.getElementById("field_container");

// creo link ai tre bottoni, uno per difficoltà

const easyField = document.getElementById("easy");

const mediumField = document.getElementById("medium");

const hardField = document.getElementById("hard");

// il listener applica la classe e il numero di celle del campo (opzionale, fa scomparire i bottoni e l'header)

easyField.addEventListener("click", 
    function () {

        clearField();
        fieldGen(100, " easy_slot");
    }
)

mediumField.addEventListener("click", 
    function () {

        clearField();
        fieldGen(81, " medium_slot");
    }
)

hardField.addEventListener("click", 
    function () {

        clearField();
        fieldGen(49, " hard_slot");
    }
)

// la funzione crea le cellette dentro il campo


function fieldGen(nSlot, slotClass) {
    for (let i = 0; i < nSlot; i++) {

        const slot = document.createElement("div");
        slot.className = "base_slot" + slotClass;

        field.append(slot)

        slot.addEventListener("click",
        function() {
            this.classList.add("checked");
        }
        )
    }

}

// una funzione evita la sovrascrittura

function clearField() {
    let oldSlot = field.lastElementChild;
    while (oldSlot) {
        field.removeChild(oldSlot);
        oldSlot = field.lastElementChild;
    }
}