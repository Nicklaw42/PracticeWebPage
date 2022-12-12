

$(document).ready(function(){
  $('#exampleTable').DataTable();
});

$("#btnHide").click(function(){
    $("<h1 class='btn-warning align-self-center'>Hi!</h1>").clone().appendTo("#mainFrame");
});

$("#btnSpanish").click(function(){
    $("#crdHello").text("El Sitio Linux de Nick!");
    $("#btnHide").text("Hace un buton nuevo!");
    $('.dogcard').text("Perros");
    $("#btnEnglish").css({"visibility": "visible"});
    $("#btnSpanish").css({"visibility": "Hidden"});

    //look into ordinality with CSS, maybe stick to CSS docks rather than html
});
$("#btnEnglish").click(function(){
    $("#crdHello").text("Nick's Linux Site!");
    $("#btnHide").text("Make a New Button!");
    $('.dogcard').text("Dogs");
    $("#btnSpanish").css({"visibility": "visible"});
    $("#btnEnglish").css({"visibility": "Hidden"});
});


var spanish = false;

$("#btnSpanish").click(function(){
    $("#crdHello").on("");
});

let chartJS = document.querySelector('.chartJS')
console.log("this works!")
$('#btnScrollToJS').click(function(){
    console.log("this works!")
    chartJS.scrollIntoView(true);
});

let datatable = document.querySelector('.fire')
console.log("this works!")
$('#btnScrollToDatatable').click(function(){
    console.log("this works!")
    datatable.scrollIntoView(true);
});