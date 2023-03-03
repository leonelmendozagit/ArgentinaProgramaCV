function MensajeEnviado() {
    window.alert("Su mensaje fue enviado con éxito, brevemente nos comunicaremos con usted a través del correo que nos ha proporcionado. :)")
    
    let comprobanteDeFormulario = document.getElementById("enviado").value;

    if (comprobanteDeFormulario != "") {
        document.getElementById('enviado').style.backgroundColor = "green";
    } else {
        document.getElementById('enviado').style.backgroundColor = "red";
    }
}
