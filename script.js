function registrarse() {
    var nombre = document.form_registro.nombre.value;
    var email = document.form_registro.email.value; 
    var password = document.getElementById("password_id").value
    var phone = document.form_registro.phone.value; 

    if(nombre=="") {
        document.getElementById("nombre_error").innerHTML = "The name field is mandatory."
    } else {
        document.getElementById("nombre_error").innerHTML = ""
    }

    if(password == "") {
        document.getElementById("password_error").innerHTML = "The password field is mandatory."
    } else {
        document.getElementById("password_error").innerHTML = ""
    }

    if(phone == "") {
        document.getElementById("phone_error").innerHTML = "The phone field is mandatory."
    } else {
        document.getElementById("phone_error").innerHTML = ""
    }
}

function serviceProvider() {
    console.log("Service Provider")
    var serviceProvider = document.getElementById("service_provider").value
    console.log(serviceProvider)
    var provider;
    switch(serviceProvider) {
        case "1": provider = ""; break;
        case "2": provider = "AT&T"; break; 
        case "3": provider = "T-Mobile"; break; 
        case "4": provider = "verizon"; break; 
    }
    console.log(provider); 
}

function contactPreference() {
    console.log("Contact Preference")
    var contactPreference = document.getElementById("contact_preference_id").value
    console.log(contactPreference) 
    var preference; 
    switch(contactPreference) {
        case "1": preference = ""; break;
        case "2": preference = "Email"; break;
        case "3": preference = "Text"; break; 
    }
    console.log(preference)
}