let bar = document.querySelector('.bar');
let sideBar = document.querySelector('#sideBar');
let cross = document.querySelector('.cross');
bar.addEventListener(`click`, function(){
    sideBar.classList.add(`active`);
})
cross.addEventListener(`click`, function(){
    sideBar.classList.remove (`active`);
    
})
sideBar.addEventListener(`click`,function(e){
    if(e.target.classList.contains(`active`) == true){
        
        sideBar.classList.remove (`active`);
    }
})

let getHour = document.querySelector(`.hour`);
let getMin = document.querySelector(`.min`);
let getSec = document.querySelector(`.sec`);


setInterval(function(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    getHour.innerHTML = hour;
    getMin.innerHTML = min;
    getSec.innerHTML = sec;
},1000)









setInterval(function(){
    let tail = document.querySelector(`title`);
    let arr = [`2401`, `2402`, `2403`, `2404`, `2405`, `2406`, `2407`, `2408`, `2409`, `2410`, `2411`, `2412`, `2413`, `2414`, `2415`, `2416`, `2417`, ];
    tail.innerHTML = arr[length ++ ];
    
},1800);




















let bot = document.querySelector(`.bot`);
let input = document.querySelector(`.input`);
let img = document.querySelector(`#img`);
let qrImg = document.querySelector(`.qrImg`);


bot.addEventListener(`click`,function(){
    
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=` + input.value;

})