let rn0 = document.querySelector("#rn0");
let rn1 = document.querySelector("#rn1");
let rn2 = document.querySelector("#rn2");
let rn3 = document.querySelector("#rn3");
let rn4 = document.querySelector("#rn4");
let rn5 = document.querySelector("#rn5");
let rn6 = document.querySelector("#rn6");
let rn7 = document.querySelector("#rn7");
let rn8 = document.querySelector("#rn8");
let rn9 = document.querySelector("#rn9");
let btnAtualiza = document.querySelector("#btn-mostra")
let camp1 = document.querySelector("#primeiro")
let camp2 = document.querySelector("#segundo")
let camp3 = document.querySelector("#terceiro")
let camp4 = document.querySelector("#quarto")
let camp5 = document.querySelector("#quinto")

conta()
function conta (){
    let rn0 = 0;
    let rn1 = 0;
    let rn2 = 0;
    let rn3 = 0;
    let rn4 = 0;
    let rn5 = 0;
    let rn6 = 0;
    let rn7 = 0;
    let rn8 = 0;
    let rn9 = 0;
}

let count0 = 0;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;
let count5 = 0;
let count6 = 0;
let count7 = 0;
let count8 = 0;
let count9 = 0;
let lista = [0,0,0,0,0,0,0,0,0];

function acrescentar0(){
    count0++
    rn0.value = count0
    lista[0] = count0
}
function acrescentar1(){
    count1++
    rn1.value = count1
    lista[1] = count1
}
function acrescentar2(){
    count2++
    rn2.value = count2
    lista[2] = count2
}
function acrescentar3(){
    count3++
    rn3.value = count3
    lista[3] = count3
}
function acrescentar4(){
    count4++
    rn4.value = count4
    lista[4] = count4
}
function acrescentar5(){
    count5++
    rn5.value = count5
    lista[5] = count5
}
function acrescentar6(){
    count6++
    rn6.value = count6
    lista[6] = count6
}
function acrescentar7(){
    count7++
    rn7.value = count7
    lista[7] = count7
}
function acrescentar8(){
    count8++
    rn8.value = count8
    lista[8] = count8
}
function acrescentar9(){
    count9++
    rn9.value = count9
    lista[9] = count9
}

function btnMostra(){
    lista
    maiorNumero()
}

function maiorNumero(){
    let maior = 0
    let smaior = 0
    let tmaior = 0
    let quamaior = 0
    let quimaior = 0
    
    for(let i = 0; i < lista.length; i++){
        let number = lista[i]
        if(number > maior){
            maior = number
            camp1.value = lista.indexOf(maior)
        }
    }

    for(let i = 0; i < lista.length; i++){
        let number1 = lista[i]
        let descobre;
        descobre = lista.indexOf(maior)
        descobre = descobre + 1;
        if(maior == lista[lista.indexOf(number1, [descobre])]){
            alert(`Impasse na casa ${lista.indexOf(maior)} e ${lista.indexOf(number1, [descobre])}`)
            smaior = lista[lista.indexOf(number1, [descobre])]
            camp2.value = lista.indexOf(smaior, [descobre]);
            break
        }else{
            if(number1 > smaior && number1 != maior){
                smaior = number1;
                camp2.value = lista.indexOf(smaior)
            }
        }
    }

    for(let i = 0; i < lista.length; i++){
        let number3 = lista[i]
        let descobre2;
        descobre2 = lista.indexOf(smaior)
        descobre2 = descobre2 + 1;
        if(smaior == lista[lista.indexOf(number3, [descobre2])]){
            alert(`Impasse na casa ${lista.indexOf(smaior)} e ${lista.indexOf(number3, [descobre2])}`)
            tmaior = lista[lista.indexOf(number3, [descobre2])]
            camp3.value = lista.indexOf(number3, [descobre2])
            break
        }else if(number3 > tmaior && number3 != maior && number3 != smaior){
            tmaior = number3
            camp3.value = lista.indexOf(tmaior)
        }
    }

    for(let i = 0; i < lista.length; i++){
        let number4 = lista[i]
        let descobre4;
        descobre4 = lista.indexOf(tmaior)
        descobre4 = descobre4 + 1;
        if(tmaior == lista[lista.indexOf(number4, [descobre4])]){
            alert(`Impasse na casa ${lista.indexOf(tmaior)} e ${lista.indexOf(number4, [descobre4])}`)
            quamaior = lista[lista.indexOf(number4, [descobre4])]
            camp4.value = lista.indexOf(number4, [descobre4])
            break
        }else if(number4 > quamaior && number4 != maior && number4 != smaior && number4 != tmaior){
            quamaior = number4
            camp4.value = lista.indexOf(quamaior)
        }
    } 

    for(let i = 0; i < lista.length; i++){
        let number5 = lista[i]
        let descobre5;
        descobre5 = lista.indexOf(quamaior)
        descobre5 = descobre5 + 1;
        if(quamaior == lista[lista.indexOf(number5, [descobre5])]){
            alert(`Impasse na casa ${lista.indexOf(quamaior)} e ${lista.indexOf(number5, [descobre5])}`)
            quimaior = lista[lista.indexOf(number5, [descobre5])]
            camp5.value = lista.indexOf(number5, [descobre5])
            break
        }else if(number5 > quimaior && number5 != quamaior && number5 != tmaior && number5 != smaior && number5 != maior){
            quimaior = number5
            camp5.value = lista.indexOf(quimaior)
        }
    }
}