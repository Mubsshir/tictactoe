const container = document.querySelector('.box-container');    //Get the box table from DOM
const boxes = document.querySelectorAll('.box-container .row .column'); //get the all 9 boxes
const reset = document.querySelector('.reset button');// get reset button
const play = document.querySelector('.playBtn');//get play button
const body = document.querySelector('body');
let player = 0; //create a player variable for change the player by changing values to 0 to 1 and 1 to 0
let count = 0; //counting both players turn till 9
var win = 0;


//display message if we get a winner or match tie
function showMessage(message, icon) {
    const alertBox = document.createElement('div');
    alertBox.className = `message ${icon}`;
    alertBox.innerHTML = `<i class ="fab fa-${icon} win"></i>  ${message}`;
    body.insertBefore(alertBox, container);
    console.log(alertBox);
    setTimeout(() => {
        alertBox.remove();
        boxes.forEach((box) => {
            box.className = 'column';
            win = 1;
            count = 0;
        })
    }, 2000);

}

// draw o and x on bord
function drawOnBoard(el, icon) {
    el.classList.add('fab');
    el.classList.add(`fa-${icon}`);
}

//check for winner  
function checkWinner() {
    //check for rows
    if (boxes[0].classList.contains('fa-opera') && boxes[1].classList.contains('fa-opera') && boxes[2].classList.contains('fa-opera')) {
        showMessage("Win", 'opera');

    }
    else if (boxes[3].classList.contains('fa-opera') && boxes[4].classList.contains('fa-opera') && boxes[5].classList.contains('fa-opera')) {
        showMessage("Win", 'opera');

    }
    else if (boxes[6].classList.contains('fa-opera') && boxes[7].classList.contains('fa-opera') && boxes[8].classList.contains('fa-opera')) {
        showMessage("Win", 'opera');

    }
    else if (boxes[0].classList.contains('fa-xbox') && boxes[1].classList.contains('fa-xbox') && boxes[2].classList.contains('fa-xbox')) {
        showMessage("Win ", 'xbox');

    }
    else if (boxes[3].classList.contains('fa-xbox') && boxes[4].classList.contains('fa-xbox') && boxes[5].classList.contains('fa-xbox')) {
        showMessage("Win ", 'xbox');

    }
    else if (boxes[6].classList.contains('fa-xbox') && boxes[7].classList.contains('fa-xbox') && boxes[8].classList.contains('fa-xbox')) {
        showMessage("Win ", 'xbox');

    }


    //check for columns

    else if (boxes[0].classList.contains('fa-opera') && boxes[3].classList.contains('fa-opera') && boxes[6].classList.contains('fa-opera')) {
        showMessage("Win", 'opera');

    }
    else if (boxes[1].classList.contains('fa-opera') && boxes[4].classList.contains('fa-opera') && boxes[7].classList.contains('fa-opera')) {
        showMessage("Win", 'opera');

    }
    else if (boxes[2].classList.contains('fa-opera') && boxes[5].classList.contains('fa-opera') && boxes[8].classList.contains('fa-opera')) {
        showMessage("Win", 'opera');

    }

    else if (boxes[0].classList.contains('fa-xbox') && boxes[3].classList.contains('fa-xbox') && boxes[6].classList.contains('fa-xbox')) {
        showMessage("Win ", 'xbox');

    }
    else if (boxes[1].classList.contains('fa-xbox') && boxes[4].classList.contains('fa-xbox') && boxes[7].classList.contains('fa-xbox')) {
        showMessage("Win ", 'xbox');

    }
    else if (boxes[2].classList.contains('fa-xbox') && boxes[5].classList.contains('fa-xbox') && boxes[8].classList.contains('fa-xbox')) {
        showMessage("Win ", 'xbox');

    }
    //check for diagonals
    else if (boxes[0].classList.contains('fa-opera') && boxes[4].classList.contains('fa-opera') && boxes[8].classList.contains('fa-opera')) {
        showMessage("Win", 'opera');

    }
    else if (boxes[2].classList.contains('fa-opera') && boxes[4].classList.contains('fa-opera') && boxes[6].classList.contains('fa-opera')) {
        showMessage("Win", 'opera');

    }
    else if (boxes[0].classList.contains('fa-xbox') && boxes[4].classList.contains('fa-xbox') && boxes[8].classList.contains('fa-xbox')) {
        showMessage("Win ", 'xbox');

    }
    else if (boxes[2].classList.contains('fa-xbox') && boxes[4].classList.contains('fa-xbox') && boxes[6].classList.contains('fa-xbox')) {
        showMessage("Win ", 'xbox');

    }

}

container.onclick = (e) => {
    if (player === 0) {
        if (!e.target.classList.contains('fab') && !e.target.classList.contains('fa-opera') && e.target.classList.contains('column')) {
            drawOnBoard(e.target, 'opera');
            player = 1;
            count++;
        }
        checkWinner();
    }
    else if (player === 1) {

        if (!e.target.classList.contains('fab') && !e.target.classList.contains('fa-opera') && e.target.classList.contains('column')) {
            drawOnBoard(e.target, 'xbox');
            player = 0;
            count++;
        }
        checkWinner();

    }
    if (count === 9 && win === 0) {
        showMessage('Tie', 'draw');
        count = 0;
    }
    console.log(count);
}


reset.onclick = (e) => {
    e.preventDefault();
    boxes.forEach((box) => {
        box.className = 'column';
    })
    count = 0;
    win = 0;
}

play.onclick = (e) => {
    play.style.display = 'none';
    container.style.display = 'block';
    reset.style.display = 'block';
    console.log("object");

}
