function generaterNumber() {

    const min = Math.ceil(document.querySelector(".input1").value)
    const max = Math.floor(document.querySelector(".input2").value)

    if (max <= min) {
        alert("Você tem que colocar o VALOR maior que o minimo!")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        alert(result)
    }





}