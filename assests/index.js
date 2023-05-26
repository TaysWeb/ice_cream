// a function to get number of ice creams and calculate the total, display 
function iceCreamPr(Number, Cost) {
     let total = " " ;
     total = parseFloat(Number * Cost).toFixed(2) ;
     document.getElementById("Price").textContent = total ;
     console.log(Number);
     console.log(Cost);
}
