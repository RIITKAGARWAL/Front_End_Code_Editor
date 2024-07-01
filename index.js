function htmlCode() {
    let x = document.getElementsByClassName("htmlCode")[0].value;
    document.getElementsByClassName("display")[0].innerHTML = x;
}

function cssCode() {
    let y = document.getElementsByClassName("cssCode")[0].value;
    document.getElementById("cssCode").innerHTML = y;
}

function jsCode() {
    let z = document.getElementsByClassName("jsCode")[0].value;
    document.getElementById("jsCode").innerHTML = z;
}


document.querySelectorAll("textarea")[0].addEventListener("change", htmlCode);
document.querySelectorAll("textarea")[1].addEventListener("change", cssCode);
document.querySelectorAll("textarea")[2].addEventListener("change", jsCode);
