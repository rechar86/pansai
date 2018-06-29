$(document).ready(function() {

	// process the form
	$('form').submit(function(event) {

		$('.form-group').removeClass('has-error'); // remove the error class
		$('.help-block').remove(); // remove the error text

		// get the form data
		// there are many ways to get this data using jQuery (you can use the class or id also)
		var formData = {
			'prod_a' 			: $('input[name=prod_a]').val(),
			'prod_b' 			: $('input[name=prod_b]').val(),
			'prod_c' 			: $('input[name=prod_c]').val(),
			'prod_d' 			: $('input[name=prod_d]').val(),
			'prod_e' 			: $('input[name=prod_e]').val(),
			'prod_f' 			: $('input[name=prod_f]').val(),
			'order' 			: $('input[name=order]').val(),
			'mobile' 			: $('input[name=mobile]').val(),
			'tel' 				: $('input[name=tel]').val(),
			'email' 			: $('input[name=email]').val(),
			'to_date' 			: $('input[name=to_date]').val(),
			'to_time' 			: $('input[name=to_time]').val(),
			'to_addr' 			: $('input[name=to_addr]').val(),
			'memo' 				: $('input[name=memo]').val()
		};

		// process the form
		$.ajax({
			type 		: 'GET', // define the type of HTTP verb we want to use (POST for our form)
			url 		: 'https://script.google.com/macros/s/AKfycbz9HhXguoQbEVY98kSJnccDsUsRjilPX4pmlcQY0bboptjvDfQK/exec', // the url where we want to POST
			data 		: formData, // our data object
			dataType 	: 'jsonp', // what type of data do we expect back from the server
			encode 		: true
		})
			// using the done promise callback
			.done(function(data) {

				// log data to the console so we can see
				console.log(data); 

				// here we will handle errors and validation messages
				if ( ! data.success) {
					
					// handle errors for prod_a ---------------
					if (data.errors.prod_a) {
						$('#prod_a-group').addClass('has-error'); // add the error class to show red input
						$('#prod_a-group').append('<div class="help-block">' + data.errors.prod_a + '</div>'); // add the actual error message under our input
					}

					// handle errors for prod_b ---------------
					if (data.errors.prod_b) {
						$('#prod_b-group').addClass('has-error'); // add the error class to show red input
						$('#prod_b-group').append('<div class="help-block">' + data.errors.prod_b + '</div>'); // add the actual error message under our input
					}


				} else {

					// ALL GOOD! just show the success message!
					$('form').append('<div class="alert alert-success">感謝您的惠顧, PAN-SAI已收到您的訂單, 同時寄發一份訂單明細到您的信箱! 我們會儘快與你聯絡</div>');

					// usually after form submission, you'll want to redirect
					// window.location = '/thank-you'; // redirect a user to another page

				}
			})

			// using the fail promise callback
			.fail(function(data) {

				// show any errors
				// best to remove for production
				console.log(data);
			});

		// stop the form from submitting the normal way and refreshing the page
		event.preventDefault();
	});

});


$( document ).on( "pageinit", function() {
    $( ".photopopup" ).on({
        popupbeforeposition: function() {
            var maxHeight = $( window ).height() - 60 + "px";
            $( ".photopopup img" ).css( "max-height", maxHeight );
        }
    });
});


$( function() {
   $( "#to_date" ).datepicker({ dateFormat: 'yy/mm/dd' }).val();
});
