function login(){
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if(usuario === "admin" && senha === "123456"){
        console.log("Login OK");
        localStorage.setItem("login", true);
        document.write("<a href='seguro.html'>Acesso Restrito</a>");
    }
    else{
        console.log("Parâmetros inválidos");
        window.location('login.html');
    }
}