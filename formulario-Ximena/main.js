var expr = /^[a-zA-Z0-9-\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
    $("#bEnviar").click(function(){
        var telefono = $("#phone").val();
        var email = $("#email").val();
        var name = $("#name").val()
        var edad = $("#edad").val();

        if(telefono ==""){
            $("#mensaje1").fadeIn();
            return false;
        }

        else{ 
            $("#mensaje1").fadeOut();
            if(telefono == "" || !expr.test(telefono)){
                $("#mensaje2").fadeIn();
                return false;
            } else{
                $("#mensaje2").fadeOut();
                if(email =="" || !expr.test(email)){
                    $("#mensaje3").fadeIn();
                    return false;
                } else{
                    $("#mensaje3").fadeOut();
                    if(name =="" || !expr.test(name)){
                        $("#mensaje5").fadeIn();
                        return false;  
                    } else {
                        $("mensaje5").fadeOut();
                        if(edad =="" || !expr.test(edad)){
                            
                        }
                    }
                }
            }
        }

    
    });

});

