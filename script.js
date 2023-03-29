// const img = document.querySelector('img')
const wrapper = document.querySelector('.wrapper')

const array = [
    {src: './assets/ballon.png', id: '1'},
    {src: './assets/ballon.png', id: '2'},
    {src: './assets/ballon.png', id: '3'},
    {src: './assets/ballon.png', id: '4'},
    {src: './assets/ballon.png', id: '5'},
    {src: './assets/ballon.png', id: '6'},
    {src: './assets/ballon.png', id: '7'},
    {src: './assets/ballon.png', id: '8'},
    {src: './assets/ballon.png', id: '9'},
]

wrapper.innerHTML = array.map(item => {
    return `<div class="col-4">
                <img src="${item.src}" alt="alt"/>
            </div>`
}).join('')



const balloon = document.querySelectorAll('img');

balloon.forEach((item, idx) => {
    const checkBox = document.querySelector('.checkbox')
    item.addEventListener('click', function (){
        item.classList.toggle('backred')
    })

    checkBox.addEventListener('click', () => {
        item.classList.toggle('backred')
    })


})

