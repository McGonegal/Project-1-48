

const overLay = document.querySelector("#overLay");

document.querySelector("#modalButton").addEventListener('click', function(){
    overLay.style.display = "block";
})

document.querySelector("#closeModal").addEventListener('click', function(){
    overLay.style.display = "none";
})