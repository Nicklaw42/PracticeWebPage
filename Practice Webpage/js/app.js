var customerPromise = $.get("https://function-1-opz5djvmca-uc.a.run.app/", function(customerInfo){
    objCustomer = customerInfo;
    console.log(objCustomer);
})  

$(document).ready(function(){
  $('#exampleTable').DataTable();
});

$("#btnHide").click(function(){
    $("<h1 class='btn-warning align-self-center'>Hi!</h1>").clone().appendTo("#mainFrame");
});

$('.btnSuggestions').click(function(){
    Swal.fire({
        title: 'Have a suggestion?',
        text: "Enter your message here and I'll get it in my email.",
        input: 'textarea',
        icon: 'question',
        confirmButtonText: 'Submit',
        showDenyButton: true,
        denyButtonText: 'Cancel'
      })
});

$('.btnTrigger').click(function(){
    Swal.fire({
        title: 'Sweet Alert Works!',
        text: "This confirms that sweet alerts is working.",
        icon: 'success',
        confirmButtonText: 'Yay!',
      })
})

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

let chartJS = document.querySelector('.chartJS');
let datatable = document.querySelector('.divDataTable');
let sweetAlert = document.querySelector('.divSweetAlert');
let animeJS = document.querySelector('.divAnimeJS');
let apiCards = document.querySelector('.apiCards');
let hostingCards = document.querySelector('.hostingCards');
$('#btnScrollToJS').click(function(){
    console.log("this works!")
    chartJS.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
$('#btnScrollToDatatable').click(function(){
    console.log("this works!")
    datatable.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
$('#btnScrollToSA').click(function(){
    console.log("this works!")
    sweetAlert.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
$('#btnScrollToAnime').click(function(){
    console.log("this works!")
    animeJS.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
$('#btnScrolltoAPIs').click(function(){
    console.log("this works!");
    apiCards.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
$('#btnScrollToHosting').click(function(){
    console.log('this works!');
    hostingCards.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
});
// anime({
//     targets: '.target',
//     translateX: 1060,
//     loop: true,
//     direction: 'alternate',
//     easing: 'easeInOutSine'
//   });
