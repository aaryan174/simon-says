let userSeq = []; 
let gameSeq = [];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h3 = document.querySelector('h3');
document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game has started");
        started = true;
        levelup();
    }
});
function btnFlash(btn) {
    if (!btn) {
        console.error("btnFlash called with an invalid button:", btn);
        return;
    btn.classList.add("flash");
    }
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}
function levelup() {
    userSeq =[];
    level++;
    h3.innerText = `level ${level}`;
    
    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIdx);
    // console.log(randomColor);
    // console.log(randBtn); 
    gameSeq.push(randomColor);
    console.log(gameSeq);
    
    btnFlash(randBtn);
};
function checkAns(idx) {
   
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length === gameSeq.length) {
          setTimeout(levelup, 1000);
            
        }
    } else {
        h3.innerHTML = `GAME OVER!!! your score was <b>${level}</b> <br> press any key to start the game`;
        document.querySelector('body').style.backgroundColor ="red";
        setTimeout( function() {
            document.querySelector('body').style.backgroundColor ="white";
        }, 200);
        resetGame();
    }
}
function btnPress() {
    let btn = this;
    console.log(this);
    btnFlash(btn);
    userColor = btn.getAttribute('id');
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    
};
let allBtn = document.querySelectorAll('.btn');
for(btn of allBtn) {
    btn.addEventListener("click", btnPress);
};
function resetGame() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}
function highScore() {
    
}

