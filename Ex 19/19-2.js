
const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
];

const namesOl = document.createElement('ol');
const div = document.querySelector('div');
div.appendChild(namesOl);
users.forEach((name) => {
    let namesLi = document.createElement('li');
    let {firstName, lastName, id} = name;
    namesLi.innerText = `${name.lastName} ${name.firstName}`
    console.log(namesLi)
    namesOl.appendChild(namesLi);
    namesLi.style.listStyle = 'none'
    namesLi.id = name.id
});




