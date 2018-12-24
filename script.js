$(document).ready(() => {
    const images = ['https://sun9-1.userapi.com/c7003/v7003240/57f4d/jr2TFUbLI14.jpg', 'https://sun9-7.userapi.com/c7003/v7003240/57f68/ovjfrSqJE8c.jpg', 'https://sun9-4.userapi.com/c7003/v7003240/57f20/UdzL5Eq656U.jpg'];
    const main = $('.slider-box');
    let left = $('.left');
    let right = $('.right');
    let bottom = $('.bottom');

    let i = 0;

    for (let i = 0; i < images.length; i += 1) {
        main.append(`<img src="${images[i]}" class ="hidden slider" data-id="${i}"/>`);
    };

    for (let j = 0; j < images.length; j += 1) {
        bottom.append(`<button class="button" data-index="${j}"><img src="circle.png"></button>`);
    }


    setInterval(function changeSlides() {
        if (i === images.length - 1) {
            i = 0
        } else {
            i += 1
        }
        changeImg(i);
    }, 10000);


    let button = $('.button');

    left.on('click', moveLeft);
    right.on('click', moveRight);
    button.on('click', choseImg);

    function choseImg() {
        let index = $(this).attr('data-index');
        changeImg(index);
    };

    function moveLeft() {
        if (i === 0) {
            i = images.length - 1
        } else {
            i -= 1
        }
        changeImg(i);
    }

    function moveRight() {
        if (i === images.length - 1) {
            i = 0
        } else {
            i += 1
        }
        changeImg(i);
    }

    function changeImg(index) {
        $(`.slider`).addClass('hidden');
        $(`.slider[data-id=${index}]`)
            .removeClass('hidden')
            .css({ opacity: 0 })
            .animate({ opacity: 1 }, 600);
    }

    changeImg(0);
});



