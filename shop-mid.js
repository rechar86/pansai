
$(document).ready(function() {

	// process the form
	$('form').submit(function(event) {
		
		// submit onclick disable btn
		$("#btnSubmit").prop("disabled", true);
		
		// get the form data
		// there are many ways to get this data using jQuery (you can use the class or id also)
		var formData = {
			'order_type' 		    : 'Mid',
			'prod_01' 				: $('input[name=prod_01]').val(),
			'prod_02_6x' 			: $('input[name=prod_02_6x]').val(),
			'prod_02_8x' 			: $('input[name=prod_02_8x]').val(),
			'prod_02_12x' 			: $('input[name=prod_02_12x]').val(),
			'prod_03_big' 			: $('input[name=prod_03_big]').val(),
			'prod_03_small' 		: $('input[name=prod_03_small]').val(),
			'prod_04' 				: $('input[name=prod_04]').val(),
			'prod_05' 				: $('input[name=prod_05]').val(),
			'prod_06' 				: $('input[name=prod_06]').val(),
			'prod_07_8x' 			: $('input[name=prod_07_8x]').val(),
			'prod_07_10x' 			: $('input[name=prod_07_10x]').val(),
			'prod_07_12x' 			: $('input[name=prod_07_12x]').val(),
			'prod_07_15x' 			: $('input[name=prod_07_15x]').val(),
			'prod_07_20x' 			: $('input[name=prod_07_20x]').val(),
			'prod_08_8x' 			: $('input[name=prod_08_8x]').val(),
			'prod_08_10x' 			: $('input[name=prod_08_10x]').val(),
			'prod_08_12x' 			: $('input[name=prod_08_12x]').val(),
			'prod_08_15x' 			: $('input[name=prod_08_15x]').val(),
			'prod_08_20x' 			: $('input[name=prod_08_20x]').val(),
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
			dataType 	: 'json', // what type of data do we expect back from the server
			success: function(json){
				bindShop(json, $('input[name=order]').val());
				$("#content").prop("hidden", true);
			},
			error: function(e){
				alert('交易失敗:' + e);
			}
		})
			// using the done promise callback
			.done(function(data) {
				alert("送出完成");
			})

			// using the fail promise callback
			.fail(function(data) {

				// show any errors
				// best to remove for production
				alert("送出失敗("+data + ")");
			});

		// stop the form from submitting the normal way and refreshing the page
		event.preventDefault();
	});

});


$( function() {
   $( "#to_date" ).datepicker({ dateFormat: 'yy/mm/dd' }).val();
});



function showTempate(pansaiData) {
	return `
		<div>
			${pansaiData.map(function(order) {
				return `
				    <table margin="0" data-role="table" data-mode="columntoggle" class="ui-responsive">
						<tr>
							<th style="text-align:left">訂單編號</th>
							<td>${order[0]}</td>
						</tr>
						<tr>
							<th style="text-align:left">訂單日期</th>
							<td>${order[1]}</td>
						</tr>
						<tr>
							<th style="text-align:left">訂單狀態</th>
							<td>${order[2]}</td>
						</tr>
						<tr>
							<th colspan="2" style=" border-left: 6px solid red;background-color: lightgrey;">產品明細</th>
						</tr>
						<tr>
							<th style="text-align:left">葡月之頌 禮盒</th>
							<td>${order[3]}</td>
						</tr>
						<tr>
							<th style="text-align:left">霧月之頌 禮盒 6入</th>
							<td>${order[4]}</td>
						</tr>
						<tr>
							<th style="text-align:left">霧月之頌 禮盒 8入</th>
							<td>${order[5]}</td>
						</tr>
						<tr>
							<th style="text-align:left">霧月之頌 禮盒 12入</th>
							<td>${order[6]}</td>
						</tr>						
						<tr>
							<th style="text-align:left">霜月之頌 禮盒 (大)</th>
							<td>${order[7]}</td>
						</tr>
						<tr>
							<th style="text-align:left">霜月之頌 禮盒 (小)</th>
							<td>${order[8]}</td>
						</tr>						
						<tr>
							<th style="text-align:left">雪月之頌 禮盒</th>
							<td>${order[9]}</td>
						</tr>						
						<tr>
							<th style="text-align:left">芽月之頌 禮盒</th>
							<td>${order[10]}</td>
						</tr>						
						<tr>
							<th style="text-align:left">花月之頌 禮盒</th>
							<td>${order[11]}</td>
						</tr>
						<tr>
							<th style="text-align:left">牧月之頌 禮盒 8入</th>
							<td>${order[12]}</td>
						</tr>
						<tr>
							<th style="text-align:left">牧月之頌 禮盒 10入</th>
							<td>${order[13]}</td>
						</tr>
						<tr>
							<th style="text-align:left">牧月之頌 禮盒 12入</th>
							<td>${order[14]}</td>
						</tr>
						<tr>
							<th style="text-align:left">牧月之頌 禮盒 15入</th>
							<td>${order[15]}</td>
						</tr>
						<tr>
							<th style="text-align:left">牧月之頌 禮盒 20入</th>
							<td>${order[16]}</td>
						</tr>
						<tr>
							<th style="text-align:left">菓月之頌 禮盒 8入</th>
							<td>${order[17]}</td>
						</tr>
						<tr>
							<th style="text-align:left">菓月之頌 禮盒 10入</th>
							<td>${order[18]}</td>
						</tr>
						<tr>
							<th style="text-align:left">菓月之頌 禮盒 12入</th>
							<td>${order[19]}</td>
						</tr>
						<tr>
							<th style="text-align:left">菓月之頌 禮盒 15入</th>
							<td>${order[20]}</td>
						</tr>
						<tr>
							<th style="text-align:left">菓月之頌 禮盒 20入</th>
							<td>${order[21]}</td>
						</tr>						
						<tr>
							<th colspan="2" style=" border-left: 6px solid red;background-color: lightgrey;">小計/金額</th>
						</tr>					
						<tr>
							<th style="text-align:left">合計數量</th>
							<td>${order[22]}</td>
						</tr>
						<tr>
							<th style="text-align:left">小計</th>
							<td>${order[23]}</td>
						</tr>
						<tr>
							<th style="text-align:left">運費</th>
							<td>${order[24]}</td>
						</tr>
						<tr>
							<th style="text-align:left">總金額</th>
							<td>${order[25]}</td>
						</tr>
						<tr>
							<th colspan="2" style=" border-left: 6px solid red;background-color: lightgrey;">訂購人資訊</th>
						</tr>
						<tr>
							<th style="text-align:left">訂購人/公司行號</th>
							<td>${order[26]}</td>
						</tr>
						<tr>
							<th style="text-align:left">手機</th>
							<td>${order[27]}</td>
						</tr>
						<tr>
							<th style="text-align:left">市內電話</th>
							<td>${order[28]}</td>
						</tr>
						<tr>
							<th style="text-align:left">電子郵件地址</th>
							<td>${order[29]}</td>
						</tr>
						<tr>
							<th style="text-align:left">送達日期</th>
							<td>${order[30]}</td>
						</tr>
						<tr>
							<th style="text-align:left">送達時間</th>
							<td>${order[31]}</td>
						</tr>
						<tr>
							<th style="text-align:left">地址</th>
							<td>${order[32]}</td>
						</tr>
						<tr>
							<th style="text-align:left">給師傅的悄悄話</th>
							<td>${order[33]}</td>
						</tr>
					</table>				
					`
			}).join('')}
			
		</div>
	`
}

function bindShop(pansaiData, order) {
	//alert(pansaiData);
	document.getElementById("show").innerHTML = `
		<h1> ${order} 您好, 您的訂單明細</h1>
		${showTempate(pansaiData)}
	`
}
