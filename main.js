const container = document.querySelector('.box-container');
const boxes = document.querySelectorAll('.box-container .row .column');
const body = document.querySelector('body');
const reset = document.querySelector('.reset button')
let player = 0;
let count = 0;

function showMessage(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'message';
    alertBox.append(document.createTextNode(`${message}`))
    body.insertBefore(alertBox, container);


    setTimeout(() => {
        alertBox.remove();
        boxes.forEach((box) => {
            box.className = 'column';
        })
    }, 2000);

}

function drawOnBoard(el, icon) {
    el.classList.add('fab');
    el.classList.add(`fa-${icon}`);
}


function checkWinner() {
    //check for rows
    if (boxes[0].classList.contains('fa-opera') && boxes[1].classList.contains('fa-opera') && boxes[2].classList.contains('fa-opera')) {
        showMessage("Red Win");
    }
    else if (boxes[3].classList.contains('fa-opera') && boxes[4].classList.contains('fa-opera') && boxes[5].classList.contains('fa-opera')) {
        showMessage("Red Win");
    }
    else if (boxes[6].classList.contains('fa-opera') && boxes[7].classList.contains('fa-opera') && boxes[8].classList.contains('fa-opera')) {
        showMessage("Red Win");
    }
    if (boxes[0].classList.contains('fa-xbox') && boxes[1].classList.contains('fa-xbox') && boxes[2].classList.contains('fa-xbox')) {
        showMessage("Green Win");
    }
    else if (boxes[3].classList.contains('fa-xbox') && boxes[4].classList.contains('fa-xbox') && boxes[5].classList.contains('fa-xbox')) {
        showMessage("Green Win");
    }
    else if (boxes[6].classList.contains('fa-xbox') && boxes[7].classList.contains('fa-xbox') && boxes[8].classList.contains('fa-xbox')) {
        showMessage("Green Win");
    }


    //check for columns

    else if (boxes[0].classList.contains('fa-opera') && boxes[3].classList.contains('fa-opera') && boxes[6].classList.contains('fa-opera')) {
        showMessage("Red Win");
    }
    else if (boxes[1].classList.contains('fa-opera') && boxes[4].classList.contains('fa-opera') && boxes[7].classList.contains('fa-opera')) {
        showMessage("Red Win");
    }
    else if (boxes[2].classList.contains('fa-opera') && boxes[5].classList.contains('fa-opera') && boxes[8].classList.contains('fa-opera')) {
        showMessage("Red Win");
    }

    else if (boxes[0].classList.contains('fa-xbox') && boxes[3].classList.contains('fa-xbox') && boxes[6].classList.contains('fa-xbox')) {
        showMessage("Green Win");
    }
    else if (boxes[1].classList.contains('fa-xbox') && boxes[4].classList.contains('fa-xbox') && boxes[7].classList.contains('fa-xbox')) {
        showMessage("Green Win");
    }
    else if (boxes[2].classList.contains('fa-xbox') && boxes[5].classList.contains('fa-xbox') && boxes[8].classList.contains('fa-xbox')) {
        showMessage("Green Win");
    }
    //check for diagonals
    else if (boxes[0].classList.contains('fa-opera') && boxes[4].classList.contains('fa-opera') && boxes[8].classList.contains('fa-opera')) {
        showMessage("Red Win");
    }
    else if (boxes[2].classList.contains('fa-opera') && boxes[4].classList.contains('fa-opera') && boxes[6].classList.contains('fa-opera')) {
        showMessage("Red Win");
    }
    else if (boxes[0].classList.contains('fa-xbox') && boxes[4].classList.contains('fa-xbox') && boxes[8].classList.contains('fa-xbox')) {
        showMessage("Green Win");
    }
    else if (boxes[2].classList.contains('fa-xbox') && boxes[4].classList.contains('fa-xbox') && boxes[6].classList.contains('fa-xbox')) {
        showMessage("Green Win");
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
    console.log(count);
    if (count === 9) {
        showMessage('Draw')
    }

}


reset.onclick = (e) => {
    e.preventDefault();
    console.log(e.target);
    boxes.forEach((box) => {
        box.className = 'column';
    })

}

console.log(boxes[0].className);