const container = document.querySelector('.box-container');
const boxes = document.querySelectorAll('.box-container .row .column');
const body = document.querySelector('body');
const reset = document.querySelector('.reset button')

function showMessage(message) {
    const alertBox = document.createElement('div');
    alertBox.className = 'message';
    alertBox.append(document.createTextNode(`You ${message}`))
    body.insertBefore(alertBox, container);


    setTimeout(() => {
        alertBox.remove();
        boxes.forEach((box) => {
            box.className = 'column';
        })
    }, 2000);

}

function drawOnBoard(el) {
    el.classList.add('fab');
    el.classList.add('fa-opera');
}


function checkWinner() {
    //check for rows
    if (boxes[0].classList.contains('fa-opera') && boxes[1].classList.contains('fa-opera') && boxes[2].classList.contains('fa-opera')) {
        showMessage("Win");
    }
    else if (boxes[3].classList.contains('fa-opera') && boxes[4].classList.contains('fa-opera') && boxes[5].classList.contains('fa-opera')) {
        showMessage("Win");
    }
    else if (boxes[6].classList.contains('fa-opera') && boxes[7].classList.contains('fa-opera') && boxes[8].classList.contains('fa-opera')) {
        showMessage("Win");
    }
    //check for columns
    else if (boxes[0].classList.contains('fa-opera') && boxes[3].classList.contains('fa-opera') && boxes[6].classList.contains('fa-opera')) {
        showMessage("Win");
    }
    else if (boxes[1].classList.contains('fa-opera') && boxes[4].classList.contains('fa-opera') && boxes[7].classList.contains('fa-opera')) {
        showMessage("Win");
    }
    else if (boxes[2].classList.contains('fa-opera') && boxes[5].classList.contains('fa-opera') && boxes[8].classList.contains('fa-opera')) {
        showMessage("Win");
    }
    //check for diagonals
    else if (boxes[0].classList.contains('fa-opera') && boxes[4].classList.contains('fa-opera') && boxes[8].classList.contains('fa-opera')) {
        showMessage("Win");
    }
    else if (boxes[2].classList.contains('fa-opera') && boxes[4].classList.contains('fa-opera') && boxes[6].classList.contains('fa-opera')) {
        showMessage("Win");
    }

}

container.onclick = (e) => {

    if (!e.target.classList.contains('fab') && !e.target.classList.contains('fa-opera') && e.target.classList.contains('column')) {
        console.log(e.target);
        drawOnBoard(e.target);

    }
    checkWinner();

}


reset.onclick = (e) => {
    e.preventDefault();
    console.log(e.target);
    boxes.forEach((box) => {
        box.className = 'column';
    })

}

console.log(boxes[0].className);