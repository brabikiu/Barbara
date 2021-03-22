function validar(){
var nome, email, assunto, mensagem;

nome = document.getElementById("nome").value;
email = document.getElementById("email").value;
assunto = document.getElementById("assunto").value;
mensagem = document.getElementById("mensagem").value;

expresion = /\w+@\.+[a-z]/;

mensagemErro = []


if (nome ==="" || email ==="" || assunto == "" || mensagem == ""){
     mensagemErro.push("Campo obrigatório não preenchido");
     return false;
     
}

else if (email.indexOf('@') == -1 ){
     mensagemError.push("Preencha o campo E-mail");
     return false;
}
else if (!expresion.test(correo)){
    mensagemErro.push("E-mail inválido");
    return false;
}

    formulario.submit();
    alert("Formulário enviado!");

} 
