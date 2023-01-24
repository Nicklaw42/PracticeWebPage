

$.getJSON('https://my-node-api-opz5djvmca-uc.a.run.app/employees', darkCharacters = function(result){
    let strHTML = '<table id="exampleTable" class="display table m-0" style="width:100%; color: black;">'
        $.each(result, function(i, dark){
        strHTML += '<tr><td>' + dark.NAME + '</td><td>' + dark.ORIGIN + '</td><td>' + dark.OCCUPATION + '</td></tr>' 
    })
    strHTML += '<thead>'
    strHTML += '<tr>'
    strHTML += '<th>Name</th>'
    strHTML += '<th>Origin</th>'
    strHTML += '<th>Occupation</th>'
    strHTML += '</tr>'
    strHTML += '</thead>'
    $('.table').append(strHTML);
    $(document).ready(function(){
        $('#exampleTable').DataTable();
      });
})




$('.btnTrigger').click(function(){
    Swal.fire({
        title: 'Sweet Alert Works!',
        text: "This confirms that sweet alerts is working.",
        icon: 'success',
        confirmButtonText: 'Yay!',
      })
})




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
