
function yu() {
let du = document.getElementById("a").value 
let n1 = Number(document.getElementById("b").value)
let n2 = Number(document.getElementById("c").value)
let n3 = Number(document.getElementById("d").value)
if(n1>10){n1=10}
if(n2>10){n2=10}
if(n3>10){n3=10}
m = (n1 + n2 + n3)/3
document.getElementById("e").innerHTML = (`O aluno ${du} tirou a media ${m}`)
if (m > 5){

    document.getElementById("f").innerHTML = ("Aprovado")
    document.getElementById("g").innerHTML = ("")

}
else{

    document.getElementById("g").innerHTML = ("Reprovado")
    document.getElementById("f").innerHTML = ("")

}

}