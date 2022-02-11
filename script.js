$(function () {
    var num1 = "";


    $("input").not(".display").click(function() {
        num1 = num1 + $(this).val();
        $(".display").val(num1)

    });
    $("#igual").click(function(){
        var resultado = eval(num1);
        $(".display").val(resultado);

    });
    $("#borrar").click(function(){ 
        $(".display").val("");
        num1 = ""
    });
});