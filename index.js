 const monthEl= document.querySelector(".date h1")
 const fullDay= document.querySelector(".date p")
 const dayEl= document.querySelector(".days")
 const monthInx = new Date().getMonth();
 
 const lastDay = new Date( new Date().getFullYear(), monthInx + 1, 0).getDate();
 const firstDay = new Date( new Date().getFullYear(), monthInx, 1).getDay() -1;
 console.log(firstDay);

 const months= [
    "January",
    "February1",
    "February2",
    "February3",
    "February4",
    "February5",
    "February6",
    "February7",
    "February8",
    "February9",
    "February0",
    "February1",
];


monthEl.innerText = months[monthInx];
fullDay.innerText = new Date().toDateString();

let days= "";

for (let i = firstDay; i > 0 ; i--){
        days +=`<div class="empty"></div>`;
    }

for(let i=1;i <= lastDay ; i++){
    if(i === new Date().getDate()){
        days += `<div class="today">${i}</div>`
        
    }else{
        days += `<div>${i}</div>`;
    }
}

dayEl.innerHTML = days;