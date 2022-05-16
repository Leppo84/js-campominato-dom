// creo il link al container

const field = document.getElementById("field_container");

// creo link ai tre bottoni, uno per difficoltà

const easyField = document.getElementById("easy");

const mediumField = document.getElementById("medium");

const hardField = document.getElementById("hard");

let allSlot = [];
let check = allSlot.length;

let bombSlot = [];

// let nSlot = 100 ;

// console.log( Math.floor(Math.random() * nSlot + 1 ));

// il listener applica la classe e il numero di celle del campo (opzionale, fa scomparire i bottoni e l'header)

easyField.addEventListener("click", 
    function () {

        field.innerHTML = "";
        fieldGen(100, " easy_slot");


    }
)

mediumField.addEventListener("click", 
    function () {

        field.innerHTML = "";
        fieldGen(81, " medium_slot");

    }
)

hardField.addEventListener("click", 
    function () {

        field.innerHTML = "";
        fieldGen(49, " hard_slot");

    }
)

// la funzione crea le cellette dentro il campo

function fieldGen(nSlot, slotClass) {

    // debugger;

    while ( allSlot.length < nSlot ) {

        let tagSlot = Math.floor(Math.random() * nSlot + 1 );

        
        console.log(tagSlot);
        
        // const slot = document.createElement("div");
        // slot.className = "base_slot" + slotClass;
        
        // field.append(slot);
        
        // slot.append(tagSlot);
        
        
        if (!allSlot.includes(tagSlot)) {

            if (tagSlot <= 16 ) {

                allSlot.push(tagSlot);

                bombSlot.push(tagSlot);

                slot = document.createElement("div");
                slot.className = "base_slot bomb" + slotClass;

        
                field.append(slot);
                slot.append(tagSlot);

                slot.addEventListener("click",
                    function() {
                        this.classList.add("checked");
                    }
                )
                
            }
            else {
                allSlot.push(tagSlot);
                slot = document.createElement("div");
                slot.className = "base_slot" + slotClass;

                field.append(slot);
                slot.append(tagSlot);    

                slot.addEventListener("click",
                    function() {
                        this.classList.add("checked");
                    } 
                ) 
            }

        }

        else {

        }
        
    }
        





}

// for (let i = 0; i < nSlot; i++) {}

// !!aggiunta numeri e bombe!!

// creo i numeri univoci non consequenziali generando anche una lista dei 16 "bomba" 

// function bombGen (nslot) {
//     const allSlot = [];
//     const bombSlot [];
//     while (allSlot.lenght < nslot ) {
//         let tagSlot = Math.floor(Math.random) * ( nslot + 1 )
//         if (!allSlot.includes(tagSlot)) && tagSlot <= 16 {
//             allSlot.push(tagSlot);
//             bombSlot.push(tagSlot);
//         }
//         else if (!allSlot.includes(tagSlot)) && tagSlot > 16 {
//             allSlot.push(tagSlot);            
//         }
        
        
//     }
    
// }

// function randomSlot(nslot) {

    
// }

// li stampo per capirci qualcosa

// faccio un while per giocare e stampare il punteggio

// se il punteggio arriva al massimo (3 classi di difficoltà) o si scoppia, interrompo il while.

// Si svelano le bombe e si mostra il punteggio 







// una funzione evita la sovrascrittura (in effetti abb inutile)

function clearField() {
    let oldSlot = field.lastElementChild;
    while (oldSlot) {
        field.removeChild(oldSlot);
        oldSlot = field.lastElementChild;
    }
}