$(document).ready(function() {
    var url = "https://pkgstore.datahub.io/core/country-codes/country-codes_json/data/616b1fb83cbfd4eb6d9e7d52924bb00a/country-codes_json.json";

    $("#obtener").click( function (){
        $.ajax({
            dataType: 'json',
            url: url 
        }).then(function(data) {
            for(var i=0; i<data.length; i++){
                $('#datos').append("<p> <b>Country's customary English short name (CLDR):</b> " + data[i]['CLDR display name'] + "</p>")
                $('#datos').append("<p> <b>Capital city from Geonames:</b> " + data[i].Capital + "</p>")
                $('#datos').append("<p> <b>Codes from the U.S. standard FIPS PUB 10-4:</b> " + data[i].FIPS + "</p>")
                $('#datos').append("<p> <b>Codes assigned by the Fédération Internationale de Football Association:</b> " + data[i].FIFA + "</p>")
                $('#datos').append("<p> <b>Continent from Geonames:</b> " + data[i].Continent + "</p>")
                $('#datos').append("<p> <b>Languages from Geonames:</b> " + data[i].Languages + "</p>")
                $('#datos').append("<p> <b>Geoname ID	:</b> " + data[i]['Geoname ID'] + "</p>")
                $('#datos').append("<p> <b>Distinguishing signs of vehicles in international traffic:</b> " + data[i].DS + "</p> <br>")
            }
        });
    })

    $("#limpiar").click(function() {
        $('#datos').empty();
    });
});