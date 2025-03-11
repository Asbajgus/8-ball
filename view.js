function updateView() {
    document.getElementById("app").innerHTML = /*html*/`
        <div class="eight-ball">
            <div id="answer" class="answer">${number >= 0 ? answerList[number]?.answer : ''}</div>
        </div>
        <button id="showButton" onclick="eightBallAnswer()">Show</button>
        <button onclick="resetView()">Reset</button>
        <input onchange="inputText=this.value">
    `;
}

// Initial call to render the view
updateView();