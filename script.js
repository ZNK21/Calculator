$(function () {
    $("input").click(function(){ 
        $(".display").attr("value", $(this).val())

    });
});