let main;
let drink;
let side;





document.querySelector("#mySubmit").onclick = function() {
    main = document.querySelector("#myMain").value;
    drink = document.querySelector("#myDrink").value;
    side = document.querySelector("#mySide").value;
    document.querySelector("#order").textContent = `Your order is ${main}, ${side}, and ${side}.`
}
