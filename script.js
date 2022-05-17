// creo il link al container

const field = document.getElementById("field_container");

// creo link ai tre bottoni, uno per difficoltà

const easyField = document.getElementById("easy");

const mediumField = document.getElementById("medium");

const hardField = document.getElementById("hard");

// il listener applica la classe e il numero di celle del campo (opzionale, fa scomparire i bottoni e l'header)

easyField.addEventListener("click", 
    function () {

        field.innerHTML = "";
        fieldGen(100, " easy_slot ");

    }
)

mediumField.addEventListener("click", 
    function () {

        field.innerHTML = "";
        fieldGen(81, " medium_slot ");

    }
)

hardField.addEventListener("click", 
    function () {

        field.innerHTML = "";
        fieldGen(49, " hard_slot ");

    }
)

// la funzione crea le cellette dentro il campo

function fieldGen(nSlot, slotClass) {

    let allSlot = [];

    let bombSlot = [];
    
    let score = 0;

    let play = 1;

    while ( allSlot.length < nSlot && play == 1) {

        let tagSlot = Math.floor(Math.random() * nSlot + 1 );
        
        if (!allSlot.includes(tagSlot)) {

            if (tagSlot <= 16 ) {

                allSlot.push(tagSlot);

                bombSlot.push(tagSlot);

                slot = document.createElement("div");

                slot.className = "base_slot" + slotClass + tagSlot;
                
                field.append(slot);
                
                slot.append(tagSlot);
                

                slot.addEventListener("click",
                    function() {
                        
                        // play = 0;

                        this.classList.add("bombexplode");
                        
                        console.log("Sei morto sulla bomba nr",tagSlot,".Hai totalizzato",score,"punti.");

                            // let oldSlot = field.children;
                            // console.log(oldSlot);
                            
                            // let endList = Array.from(oldSlot);
                            // console.log(endList);
                            
                            // endList.forEach(Element => {
                            //     classList.remove("bese_slot");
                            // });
                        
                        // this.parentNode.childNodes.removeClass("base_slot");
                        
                        // let revealedSlot = document.querySelector(slotClass)
                        
                        // revealedSlot = document.removeClass("base_slot");
                        
                        
                        // var elements = field.getElementsByClassName("base_slot");
                        

                        // while (elements[0]) {
                        //         elements[0].parentNode.className.(elements[0]);
                        //     }

                        // debugger;

                            
                        // }


                    }
                )
                
            }
            else {

                allSlot.push(tagSlot);

                slot = document.createElement("div");

                slot.className = "base_slot" + slotClass + tagSlot;

                field.append(slot);

                slot.append(tagSlot);    

                slot.addEventListener("click",

                    function() {
                        if (this.classList == "base_slot" + slotClass + tagSlot) {
                            
                            this.classList.add("checked");

                            score++;

                            console.log(score);

                        }

                        else {
                        
                            console.log(score);
                        
                        }
                        
                    } 
                    ) 
            }
        }
        
    }

    console.log(allSlot);
    console.log(bombSlot);

}

// !!aggiunta numeri e bombe!!

// creo i numeri univoci non consequenziali generando anche una lista dei 16 "bomba" 

// li stampo per capirci qualcosa

// faccio un while per giocare e stampare il punteggio

// se il punteggio arriva al massimo (3 classi di difficoltà) o si scoppia, interrompo il while.

// Si svelano le bombe e si mostra il punteggio 

function endgame(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].field.removeChild(elements[0]);
    }
}

// una funzione evita la sovrascrittura (in effetti abb inutile)

function gameOver() {
    let oldSlot = field.lastElementChild;
    while (oldSlot) {
        field.removeChild(oldSlot);
        oldSlot = field.lastElementChild;
    }
}