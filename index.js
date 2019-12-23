// Display time & date
document.addEventListener('DOMContentLoaded', displayDate());
setInterval(displayDate, 1000);
function displayDate(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    //add suffix to day
    if (day == 1){
        day += "st"
    }
    else if (day == 2){
        day += "nd"
    }
    else if (day == 3){
        day += "rd"
    }else{
        day += "th"
    }
    
    
    // months number to word
    let months= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    for(i=1; i<months.length+1;i++){
        if(i == month){
         
            month = months[i];
        }
        
    }
    
    let fullDate = day + " of " + month + " " + year;
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    //  0 before h,m,s if < 10
    if(h < 10){
        h = "0"+h;
    }
    if(m < 10){
        m = "0"+m;
    }
    if(s < 10){
        s = "0"+s;
    }

    let time = h + ":" + m + ":" + s;
    document.getElementById('time').innerHTML = time + " --- "+ fullDate;
};







// projects

// fix transitions



//uniques 
let element = [];
for( i = 0; i < 50; i++){
const id = Math.floor((Math.random() * 100) + 1);
element.push(id);
    
}
const unique = Array.from(new Set(element));
console.log("randoms: " + element);
console.log("uniques: " + unique);