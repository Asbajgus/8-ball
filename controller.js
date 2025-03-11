function eightBallAnswer() {
    const showButton = document.getElementById("showButton");
    if (showButton.disabled) {
        return;
    }

    if (inputText.trim() === "") {
        document.getElementById("answer").innerHTML = '';
        return;
    }

    if (number === -1) { // Check if an answer has already been selected
        number = Math.floor(Math.random() * answerList.length);
    }
    updateView();
    showButton.disabled = true;
}
function resetView(){
    location.reload();
}