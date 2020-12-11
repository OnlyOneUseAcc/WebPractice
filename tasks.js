/* Лабораторная работа №5. Задание 4 */
function getTags(){
    let tags = Array.from(document.querySelectorAll('*')).map(node => node.tagName)
    let dict = new Map()
    for (let i = 0; i < tags.length; i++){
        if (!dict.has(tags[i]))
            dict.set(tags[i], 0)
        dict.set(tags[i], dict.get(tags[i]) + 1)
    }
    console.log(dict)
}


window.onclick = getTags

let img = document.getElementById('main-img');

img.onclick = function () {
    if (img.getAttribute('src') === 'img/image.svg') {
        img.setAttribute('src', 'img/image2.svg');
    } else {
        img.setAttribute('src', 'img/image.svg');
    }
}
