

/**
 * 發LINE訊息給我
 */
function doPANSAI_LINE2ME(){
	// submit onclick disable btn
    $("#btnSubmit").prop("disabled", true);
            
    var formData = {
        'order_type' : 'PANSAI_LINE2ME',
        'name': $('input[name=name]').val(),
        'email':$('input[name=email]').val(),
        'mobile':$('input[name=mobile]').val(),
        'msg':$('textarea[name=msg]').val()
    };

    // process the form
    $.ajax({
        type 		: 'GET', // define the type of HTTP verb we want to use (POST for our form)
        url 		: 'https://script.google.com/macros/s/AKfycbz9HhXguoQbEVY98kSJnccDsUsRjilPX4pmlcQY0bboptjvDfQK/exec', // the url where we want to POST
        data 		: formData, // our data object
        dataType 	: 'text', // what type of data do we expect back from the server
        success: function(text){
            // no response
            $("#btnSubmit").prop("disabled", false);//enable button
        },
        error: function(e){
            alert('失敗:' + e);
            $("#btnSubmit").prop("disabled", false);//enable button
        }
    })
        // using the done promise callback
        .done(function(data) {
            alert("送出完成");
            $("#btnSubmit").prop("disabled", false);//enable button
        })

        // using the fail promise callback
        .fail(function(data) {
            // show any errors
            // best to remove for production
            alert("失敗("+data + ")");
            $("#btnSubmit").prop("disabled", false);//enable button
        });

    // stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
}

/**
 * PANSAI about me
 */
function getContentMe() {
 		var formData = {
			'order_type' : 'PANSAI_ME'
		};

		// process the form
		$.ajax({
			type 		: 'GET', // define the type of HTTP verb we want to use (POST for our form)
			url 		: 'https://script.google.com/macros/s/AKfycbz9HhXguoQbEVY98kSJnccDsUsRjilPX4pmlcQY0bboptjvDfQK/exec', // the url where we want to POST
			data 		: formData, // our data object
			dataType 	: 'json', // what type of data do we expect back from the server
			success: function(json){
				bindMe(json);
			},
			error: function(e){
				alert('失敗:' + e);
			}
		})
			// using the done promise callback
			.done(function(data) {
				//alert("送出完成");
			})

			// using the fail promise callback
			.fail(function(data) {

				// show any errors
				// best to remove for production
				alert("失敗("+data + ")");
			});

		// stop the form from submitting the normal way and refreshing the page
		event.preventDefault();
};


function bindMe(data) {
	document.getElementById("content_me").innerHTML = `
        <img src="./slides/logo.jpg" width="10%"/>	
		<p>
			${data.map(function(view) {
				return `
                    ${view[0]}
					`
			}).join('')}
		</p>
	`
}
