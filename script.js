const mainImg = document.querySelector('.main-img')
const thumbsImg = document.querySelectorAll('.thumbImg')

const thumbs = {
    ps5: {
        src: 'img/playstation-5-thumb.png',
    },
    joypad: {
        name: 'joypad',
        src: 'img/joypad-thumb.png',
    },
    headset: {
        src: 'img/headset-thumb.png',
    },
    remote: {
        src: 'img/remote-thumb.png',
    },
    camera: {
        src: 'img/camera-thumb.jpg',
    },
}

thumbsImg.forEach(function (thumbImg) {
    thumbImg.addEventListener('click', function (e) {
        thumbsImg.forEach(function (item) {
            item.classList.remove('active')
        })

        if (!e.target.classList.contains('active')) {
            let device = e.target.id
            e.target.classList.add('active')

            mainImg.src = thumbs[device].src
        }
    })
})
