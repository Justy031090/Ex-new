// Create a webpage that has a form (asks the user for its name, age and email 
//     address) and when the user clicks submit, open a text window that writes all 
//     the information and ask for his confirmation. If he clicks on the confirm 
//     button, tell him “congratulations you successfully sent this form” if he clicks on
//     change information, give him the possibility to change the information and ask
//     again for his confirmation.
    

// {/* <form action="" id="form">
// <div class="confirm">Please Confirm 
//     <span class="input-info"></span>
//     <button type="submit" id="confirm-btn" class="btn">Confirm</button>
// </div>
// <input type="text" name="name" id="name"1 placeholder="Enter your name">
// <input type="date" name="age" id="age">
// <input type="email" name="email" id="email" placeholder="e-mail adress">
// <button type="submit" id="first-submit" class="btn">Submit</button>
// </form> */}

const form = document.querySelector('#form');
const yourName = document.querySelector('#name');
const age = document.querySelector('#age');
const email = document.querySelector('#email');
const submit = document.querySelector('#first-submit');
const confirmSubmit = document.querySelector('#second-submit');
const conf = document.querySelectorAll('#confirm-btn')
const infoEl = document.querySelector('#info');
const change = document.querySelector('#change-btn');
conf.style.visibility = ('hidden');
change.style.visibility = ('hidden');


function isValid(yourName){
    var letters = /[a-zA-Z]/g;
    if(yourName.match(letters)){
        return true;
        }
    else{
        return false;
    }
}


submit.addEventListener('click', function () {
    conf.style.visibility = ('visible');
    change.style.visibility = ('visible');
    infoEl.innerHTML = `Your name is ${yourName.value} your birthdate is ${age.value} your email is ${email.value}`
})
form.addEventListener('submit', function getData(e) {
    let formData = [];
    formData.push(yourName.value, email.value, age.value)
        change.addEventListener('click', ()=>{
        conf.style.visibility = ('hidden');
        change.style.visibility = ('hidden');
    })

    confirmSubmit.addEventListener('submit', ()=>{
    })
})



// form.addEventListener('submit', (e)=>{
//     submit.preventDefault();
// age.addEventListener('input', (e)=> {
//     formData['age'] = e.target.value;
// })
// email.addEventListener('input', (e)=> {
//     formData['email'] = e.target.value;
// })
// yourName.addEventListener('input', (e)=> {
//     formData['name'] = e.target.value;
// })
// console.log(formData)
// });

