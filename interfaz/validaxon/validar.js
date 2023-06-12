function validar() {
    var ret_nombre = validar_nombre();
    var ret_correo = validar_correo();
    var ret_contraseña = validar_contraseña();
    return ret_nombre && ret_correo && ret_contraseña;
}
function validar_nombre() {
    var nombre = document.getElementById("nombre").value;
    var div = document.getElementById("error_nombre");
    if (nombre == "") {
        div.innerText = "El nombre no puede estar en blanco";
        div.className = "text-danger";
        return false;
    } else {
        if (nombre.length > 20) {
            div.innerText = "El nombre no puede tener más de 20 caracteres";
            div.className = "text-danger";
            return false;
        } else {
            div.innerText = "";
            return true;
        }
    }    
}
function validar_correo() {
    var correo = document.getElementById("correo").value;
    var div = document.getElementById("error_correo");
    var arroba = correo.indexOf("@");
    var punto = correo.lastIndexOf(".");

    if (arroba < 1) {
        div.innerText = "El correo electronico no tiene @ (arroba) o nombre de usuario";
        div.className = "text-danger";
        return false;
    } else {
        if(arroba < 2) {
            div.innerText = "El nombre de usuario del  correo no es válido ";
            div.className = "text-danger";
            return false;
        } else {
            if(arroba + 3 > punto || punto + 1 >= email.length -1 ) {
                div.innerText = "El nombre de dominio no es valido";
                div.className = "text-danger";
                return false;                
        
            } else {
                div.innerText = "";
                return true
            }
        }
    }
}
function validar_contraseña() {
    var contraseña = document.getElementById("contraseña").value;
    var div = document.getElementById("error_contraseña");
    var digito = contraseña.indexOf("\d")
    var letra = contraseña.indexOf("")
}