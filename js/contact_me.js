
$(function() {

 $("input,textarea").jqBootstrapValidation(
    {
     preventSubmit: true,
     submitError: function($form, event, errors) {


     },
     submitSuccess: function($form, event) {
      event.preventDefault(); 

       var name = $("input#name").val();  
       var email = $("input#email").val();
       var number = $("input#number").val();  
       var message = $("textarea#message").val();
        var firstName = name; 

        if (firstName.indexOf(' ') >= 0) {
     firstName = name.split(' ').slice(0, -1).join(' ');
         }        
   $.ajax({
                url: "../bin/contact_me.php",
              type: "POST",
              data: {name: name, email: email, number: number, message: message},
              cache: false,
              success: function() {  
              // Success message
                 $('#success').html("<div class='alert alert-success'>");
                 $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                .append( "</button>");
                $('#success > .alert-success')
                .append("<strong>Thank you for leaving a message "+firstName+". We'll get back to you soon.</strong>");
      $('#success > .alert-success')
      .append('</div>');


      $('#contactForm').trigger("reset");
        },
     error: function() {    

     $('#success').html("<div class='alert alert-danger'>");
              $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
               .append( "</button>");
              $('#success > .alert-danger').append("<strong>Sorry "+firstName+" it seems that our mail server is not responding...</strong> Could you please email us directly to <a href='mailto:fdiaz@abbydistributor.com?Subject=Message_Me from abbyps.com'>fdiaz@abbydistributor.com</a> ? Sorry for the inconvenience!");
          $('#success > .alert-danger').append('</div>');

    $('#contactForm').trigger("reset");
      },
           })
         },
         filter: function() {
                   return $(this).is(":visible");
         },
       });

      $("a[data-toggle=\"tab\"]").click(function(e) {
                    e.preventDefault();
                    $(this).tab("show");
        });
  });



$('#name').focus(function() {
     $('#success').html('');
  });



/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
/*
$(function() {

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // something to have when submit produces an error ?
            // Not decided if I need it yet
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var phone = $("input#phone").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "./bin/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry "+firstName+" it seems that our mail server is not responding...</strong> Could you please email us directly to <a href='mailto:fdiaz@abbydistributor.com?Subject=Message_Me from abbyps.com'>fdiaz@abbydistributor.com</a> ? Sorry for the inconvenience!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


//When clicking on Full hide fail/success boxes
$('#name').focus(function() {
    $('#success').html('');
});
*/