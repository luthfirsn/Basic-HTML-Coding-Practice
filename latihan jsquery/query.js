$(document).ready(function () {
     $("#btnAlert").click(function (e) {
         e.preventDefault();
         $("#divAlert").removeClass("d-none");
         $("#ajg").html(nama);
     });
    
    $("#buttonClose").click(function () {
        console.log("tes");
        $("#divAlert").addClass("d-none");
    });

    $("#urg").submit(function (e) {
        e.preventDefault();
        $("#divAlert").removeClass("d-none");
        var nama = $("#urg input").val();
        $("#ajg").html(nama);
    });

    $("#gambar1").click(function (e) {
        e.preventDefault();
        $("#picu").attr("src","images/chair-1.png");
        $("#namu").html("Cangkir Mauttie");
        $("#haru").html("IDR 89.300.000");
        
    });

    $("#gambar2").click(function (e) {
        e.preventDefault();
        $("#picu").attr("src","images/chair-2.png");
        $("#namu").html("Saman Kakka");
        $("#haru").html("IDR 14.500.000");
        
    });

    $("#gambar3").click(function (e) {
        e.preventDefault();
        $("#picu").attr("src","images/chair-3.png");
        $("#namu").html("Lino Dino");
        $("#haru").html("IDR 22.000.000");
        
    });
    
    $("#gambar4").click(function (e) {
        e.preventDefault();
        $("#picu").attr("src","images/chair-4.png");
        $("#namu").html("Syail Ammeno");
        $("#haru").html("IDR 12.000.000");
        
    });
});