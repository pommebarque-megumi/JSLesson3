window.onload=()=>{
    const result = document.querySelector("#sum");
    const fruits = document.querySelectorAll(".fruits");
    for(let fruit of fruits){
        fruit.addEventListener("change",numberChange);
    }
    function numberChange(){
        let sum = 0;
        for(let fruit of fruits){
            sum += fruit.value * fruit.getAttribute("data-Price");
            console.log(fruit.value);
            console.log(fruit.getAttribute("value"));
        }
        result.textContent = `合計${sum}円です`
    };
};