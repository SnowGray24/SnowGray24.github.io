const eventos = [
    {
        nome: "O mundo",
        dia: 17,
        mes: 3,
        ano: 2022,
        color: 'red',
    },
    {
        nome: "Show de Bola",
        dia: 14,
        mes: 3,
        ano: 2022,
        color: 'blue',
    },
    {
        nome: 'teste',
        dia: 5,
        mes: 4,
        ano: 2022,
        color: 'pink',
    },
    {
        nome: "O mundo",
        dia: 30,
        mes: 4,
        ano: 2022,
        color: 'red',
    },
]



const loadingDate = (year, month, day, limitDay, today) =>{
    let date2 = new Date(year, month, 1);

    let dados=``;
    let sub = 0;
    let aux = 0;
    for(let i = 1; i <= 6; i++){
        dados+=`<tr>`;
        for(let j = 1; j <= 7; j++){

            if(i===1){
                if(j-1 >= date2.getDay()){
                    dados+=`<td id='${j+aux-sub}-${month+1}-${year}' class='day'>${(j+aux-sub < 10)?'0':''}${j+aux-sub}</td>`             
                }else{
                    dados+=`<td></td>`;
                    sub++;
                }
            }else{
                if(j+aux-sub <= limitDay){ 
                    dados+=`<td id='${j+aux-sub}-${month+1}-${year}' class='day' >${(j+aux-sub < 10)?'0':''}${j+aux-sub}</td>`;  
                }else{
                    dados+=`<td></td>`;
                }
            }
        }
        dados+=`</tr>`
        aux+=7;
    }


    const TableCalendar = document.querySelector('#calendar tbody');
    TableCalendar.innerHTML = dados;

    let dayToday = document.getElementById(today);
    if(dayToday != null){
        dayToday.classList.add('dayToday');
    } 
}

const limitMonth = (year, month) =>{
    if(month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11){
        return(31);
    }else if (month == 3 || month == 5 || month == 8 || month == 10){
        return(30);
    }else{
        if(year % 4 === 0){
            return(29);
        }else{
            return(28);
        }
    }
}

const nameMonth = (month) =>{
    if(month === 0){
        return('Janeiro');
    }else if(month === 1){
        return('Fevereiro');
    }else if(month === 2){
        return('Março');
    }else if(month === 3){
        return('Abril');
    }else if(month === 4){
        return('Maio');
    }else if(month === 5){
        return('Junho');
    }else if(month === 6){
        return('Julho');
    }else if(month === 7){
        return('Agosto');
    }else if(month === 8){
        return('Setembro');
    }else if(month === 9){
        return('Outubro');
    }else if(month === 10){
        return('Novembro');
    }else if(month === 11){
        return('Dezembro');
    }else{
        return('Mês não encontrado');
    }
}

const makerEvent = (eventos, month) =>{
    let containerEvent = ``;
    
    for(i=0; i<eventos.length; i++){
        let id = `${eventos[i].dia}-${eventos[i].mes}-${eventos[i].ano}`;

        let idSelect = document.getElementById(id);
        if (idSelect != undefined){  
            idSelect.style.backgroundColor = eventos[i].color;

            containerEvent += `
                <div style="width: 100%; height: 30px; display: grid; grid-template-columns: 1fr 3fr; margin-top: .5em;">
                    <div style="background-color: ${eventos[i].color}; display: flex; align-items: center; justify-content: center; color: white;">${eventos[i].dia}</div>
                    <div style="text-align: center;">${eventos[i].nome}</div>
                </div>
            `
        }
    }
    document.querySelector('#myEvents').innerHTML = containerEvent;
}

let date = new Date();
let day = date.getDate();
let year = date.getFullYear();
let month = date.getMonth();

const today = `${day}-${month+1}-${year}`;

loadingDate(year, month, day, limitMonth(year, month), today);

const NameMonth = document.querySelector('#month-Calendar');
NameMonth.innerHTML = nameMonth(month);

makerEvent(eventos, month);


//Evento de Clique >



const next = () =>{
    month++;
    if(month > 11){
        month = 0;
    }
    loadingDate(year, month, day, limitMonth(year, month), today);
    NameMonth.innerHTML = nameMonth(month);
    makerEvent(eventos, month);


}

const later = () =>{
    month--;
    if(month < 0){
        month = 11;
    }
    loadingDate(year, month, day, limitMonth(year, month), today);
    NameMonth.innerHTML = nameMonth(month);
    makerEvent(eventos, month);


}




const btn = document.querySelector("#submit");
document.getElementById('modal-new-event').style.display = 'none';
btn.addEventListener("click", function(e) {
    
    e.preventDefault();

    
});

const btnNewEvent = document.querySelector("#btnNewEvent");
btnNewEvent.addEventListener("click", ()=>{
    const modal = document.getElementById('modal-new-event');
    modal.style.display = 'flex';
    modal.classList.remove('closed-modal');
    modal.classList.add('open-modal');
})

const btnClosedModal = document.querySelector("#closed-modal");
btnClosedModal.addEventListener("click", ()=>{
    const modal = document.getElementById('modal-new-event');
    modal.classList.remove('open-modal');
    modal.classList.add('closed-modal');

    setTimeout(()=>{
        modal.style.display = 'none';
    },400);
})



//let date = new Date (year, month);

//console.log(date.getMonth()+1);