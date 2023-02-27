
const urlApi='https://randomuser.me/api/';

const srcPrimaria="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.5716394504343!2d-80.33346458551868!3d25.949286407145095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a4f9c3cf2d37%3A0xc919e34a5a43bed4!2sSpanish%20Lake%20Elementary%20School!5e0!3m2!1ses-419!2sar!4v1677198800571!5m2!1ses-419!2sar";
const srcSecundaria="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.216341999063!2d-80.063222!3d26.838232!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88df2adad1e4490b%3A0x89a47bbde1235848!2sThe%20Benjamin%20School!5e0!3m2!1ses-419!2sar!4v1677198563949!5m2!1ses-419!2sar";
const srcUniversidad="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.407431939738!2d-122.1719076852176!3d37.427478739838385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb2a678bea9d%3A0x29cdf01a44fc687f!2sUniversidad%20Stanford!5e0!3m2!1ses-419!2sar!4v1677198683685!5m2!1ses-419!2sar";


// uso de la api randomuser para los datos personales
fetch(urlApi)
      .then(response => response.json())
      .then(data => guardarPersona(data))
      .catch(error=>console.log(error))
const guardarPersona = (data)=> cargarDatosPersonales(data.results[0]);
    
const cargarDatosPersonales = (personaAleatoria)=>{
    
    document.getElementById("nombre-apellido-navbar").innerHTML=personaAleatoria.name.first + " "+personaAleatoria.name.last;
    document.getElementById("nombre-apellido").innerHTML=personaAleatoria.name.first + " "+personaAleatoria.name.last;
    document.getElementById("foto-perfil").setAttribute("src",personaAleatoria.picture.large);
    document.getElementById("email").innerHTML=personaAleatoria.email;
    document.getElementById("direccion").innerHTML= personaAleatoria.location.city+", "+personaAleatoria.location.country;
    
}
function mostrarInformacion(){
    document.getElementById("container-body").style.display='block';
    document.getElementById("navbar").style.display ='block';
    document.getElementById("container-principal").style.display ='none';   
}

const agregarUbicacion=(ubicacion)=>{
    let htmliframe='<iframe id="mapaUbicacion"src="'+ ubicacion+ '"width="450" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    document.getElementById('contenedor-modal').innerHTML=htmliframe;
}
