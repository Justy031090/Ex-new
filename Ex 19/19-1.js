

let newTitle = document.querySelector('.start-here')
newTitle.innerHTML = 'main title'

let ul = document.querySelector('ul')
let firstLi = ul.firstElementChild
let titleLi = firstLi.nextElementSibling.nextElementSibling
subTitles = titleLi.firstElementChild
let sub4 = document.createElement('li')
sub4.innerHTML = 'sub title 4'
subTitles.appendChild(sub4)

let removeMe = firstLi.nextElementSibling.nextElementSibling.nextElementSibling
ul.removeChild(removeMe)

let title = document.querySelector('title')
title.innerText = 'My Text is Better'


let paragraph = document.querySelector('p')
paragraph.innerText = ("So what's the craziest thing you've done lately ?")
