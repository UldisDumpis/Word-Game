function generetDatus() {
    let value1 = document.querySelector("#value1").value;
    let value2 = document.querySelector("#value2").value;
    let value3 = document.querySelector("#value3").value;
    let value4 = document.querySelector("#value4").value;


    let story = `
    Reiz dzīvoja ${value1} un viņam, patika ${value2}. Viņa mīļākā nodarbe bija ${value3} un viņš vienmēr bija priecīgs kad spēlējās ar ${value4}
    `



    if(value1 == "" || value2 == "" || value3 == "" || value4 == ""){
        alert("Pārskatiet vēlreiz, vai kāds lauks nav tukš")
     } else {
         document.querySelector("#text").style.display = "block";
         document.querySelector("#text").innerText = story;
     }
}

function Reset() {
    document.querySelector("#text").style.display = "none";

    document.querySelector("#value1").value = "";
    document.querySelector("#value2").value = "";
    document.querySelector("#value3").value = "";
    document.querySelector("#value4").value = "";

}