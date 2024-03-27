var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var imgDescription = document.getElementById("imgDescription");
var fontSize = 20;
var colorScheme = "black";

function showFullImg(pic, description) {
    setTimeout(function() {
        fullImgBox.style.display = "flex";
        fullImg.src = pic;
        imgDescription.innerHTML = description;
    }, 2200);
}

function closefullImg() {
    fullImgBox.style.display = "none";
}

function decreaseFontSize() {
    fontSize--;
    imgDescription.style.fontSize = fontSize + "px";
}

function increaseFontSize() {
    fontSize++;
    imgDescription.style.fontSize = fontSize + "px";
}

function changeColorScheme(newScheme) {
    colorScheme = newScheme;
    if (colorScheme === "default") {
    fullImgBox.style.backgroundColor = "rgba(0,0,0,0.9)" ;
    fullImgBox.style.color = "white";
    } else if (colorScheme === "red") {
    fullImgBox.style.backgroundColor = "rgba(207,69,97,1)";
    fullImgBox.style.color = "white";
    } else if (colorScheme === "green") {
    fullImgBox.style.backgroundColor = "rgb(154, 205, 50, 4)";
    fullImgBox.style.color = "white";
    } else if (colorScheme === "random") {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    fullImgBox.style.backgroundColor = randomColor;
    fullImgBox.style.color = "white";
    }
}
