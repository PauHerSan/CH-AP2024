const formEl = document.querySelector("form");

formEl.addEventListener("submit",(event) =>{
    event.preventDefault();
    console.log(event);
    const email = event.target.elements["email"].value;
    const password = event.target.elements["password"].value;
    const check = event.target.elements["check"].value;
    //para el formdata es importante tener el atributo name puesto//
    const data = [... new FormData(formEl)];
    const dataObject = Object.fromEntries(data);
    showUserInfo(dataObject);
    console.log(dataObject);

});

const showUserInfo = function(dataObject){
    const alert = `
        <div class="alert alert-primary" role="alert">
            <p>Este es el email del usuario: ${dataObject.email}</p>
            <p>Este es el password del usuario: ${dataObject.password}</p>
        </div>
    `;
    formEl.insertAdjacentElement("beforeend", alert);
}

function showErroAlert(){
    const alert = `
        <div class="alert alert-danger mt-2" role="alert">
            <p>Algo salió mal</p>
        </div>
    `;
    formEl.insertAdjacentElement("afterbegin", alert);
}