// var el = document.getElementById('submit');
// if(el){
    
// addEventListener('click', function sendForm(e) {
// 	e.preventDefault();
//     const form = document.getElementById('form');
//     if (form.checkValidity()) {
//     	alert('Form is OK')    
//     } else {
//     	alert('Form is not OK');
//     }   
// });


$(function() {
    $('form input[type=submit]').click(sendForm);
})

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/mashaklimenko42@gmail.com", 
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            comment: $('#comment').val()
        },
        dataType: "json"
    })
     .done(function() {
         $('form')[0].reset();
         $('#form-result').html('<p>Thank you!</p>');
     })
     .fail(function(xhr, status, error){
         $('#form-result').html(`<p>Sorry, there is an error: ${xhr.responseText}</p>`);
     });

};




