$(document).ready(function() {
    $("button").click(function() {
      var nombre = $('#nombre').val();
      var apellido = $('#apellido').val();
      var fecha = $('#datepicker').val();

      if (nombre.length !== 0 && apellido.length !== 0 && fecha.length !== 0) {
        console.log(nombre);
        console.log(apellido);
        console.log(fecha);

        $('#mensaje').text("Datos Ingresados");
        $('#mensajeN').text(nombre);
        $('#mensajeA').text(apellido);
        $('#mensajeF').text(fecha);

      } else {
        alert("Debe llenar todos los campos.")
      }
    });

    $( function() {
        $( "#datepicker" ).datepicker();
    } );
});

