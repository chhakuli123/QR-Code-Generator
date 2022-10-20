let main = document.getElementById("main");
let submit = document.getElementById("submit");
let img = document.getElementById("img");




submit.addEventListener('click', () => {
    main.classList.add("active")
    let input = document.getElementById('input').value
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${input}`

})