//const alertSign = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>`;
//const svg = document.innerHTML = alertSign;

const firstname = document.getElementById('firstname');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');

submit.addEventListener('click', check);

function check(event){
    event.preventDefault();
    //firstname
    if(firstname.value.trim() == ""){
        error(firstname, "First Name cannot be empty", `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>`);
    }else{
        sucess(firstname);
    };
     //lastname
    if(surname.value.trim() == ""){
        error(surname, "Last Name cannot be empty",`<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>`);
    }else{
        sucess(surname);
    };
    //email
    if(email.value.trim() == ""){
          error(email, "Looks like this is not an email",`<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>`);
          email.value = "email@example/com";
          email.style.color = "hsl(0, 100%, 74%)";
        }else{
        sucess(email);
    };
    //password
    if(password.value.trim() == "" || password.length < 8){
        error(password, "Password cannot be empty", `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>`);
    }else{
        sucess(password);
    }
};

function error(element, msg, ico){
    element.style.border = "solid 2px hsl(0, 100%, 74%)";
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = msg;
    p.style.visibility = "visible";
    const alert = parent.querySelector('i');
    alert.innerHTML = ico;
    alert.style.visibility = "visible";
    };
 

    function sucess(element){
      element.style.border = "solid 2px hsl(246, 25%, 77%)";
      const parent = element.parentElement;
      const p = parent.querySelector('p');
      p.style.visibility = "hidden";
      const alert = parent.querySelector('i');
      alert.style.visibility = "hidden";
    };










