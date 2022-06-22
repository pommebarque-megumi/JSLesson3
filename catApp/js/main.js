window.onload=()=>{
    const path = "images/";
    const images = ["cat1.jpg","cat2.jpg","cat3.jpg"];
    const ele = document.querySelector("#mainImage");
    let index = 0;
    ele.addEventListener('click',(eve)=>{
        eve.target.src = path+images[++index %images.length];
    });
};