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

    }

}

function clearField() {
    var slot = field.lastElementChild;
    while (slot) {
        field.removeChild(slot);
        slot = field.lastElementChild;
    }
}




// function deleteChild() {
//     var e = document.querySelector("ul");
    
//     //e.firstElementChild can be used.
//     var child = e.lastElementChild; 
//     while (child) {
//         e.removeChild(child);
//         child = e.lastElementChild;
//     }
// }
// var btn = document.getElementById(
// "btn").onclick = function() {
//     deleteChild();
// }
