function validateForm() {
	var n = $("#name").val();
	var e = $("#email").val();
	var m = $("#message").val();
	var error = "";
	if(
		!n || !e || !m || n.length < 3 || e.length < 3 || m.length < 3
	) error = "missingValue";
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;	
	if(!emailReg.test($("#email").val())) error = "wrongEmail";
	return error;
}

function processForm() {
	
	var d = "&name=" + $("#name").val() + "&email=" + $("#email").val() + "&message=" + $("#message").val();
	
	if(!validateForm()) {
		$.ajax({
  			type: "POST",
			url: 'process.php',
			data: d,
			contentType: "application/x-www-form-urlencoded; charset=utf-8",
			success: function(data) {
				$("#envelope-notification").html("<img src = \"images/stamp_sent.png\" alt = \"Message sent.\" />");
  		}	
		});
	}
	
}

$(document).ready(
	function() {
		
		var isletterOpened = false;
		var isInside = false;
		
		$('div#letter').hover(
			function(){
				isInside = true;
				if(!isletterOpened) {
					$('div#letter').stop().animate( { 'height':'400px' }, 300);
				}
			}
			,			
			function(){
				isInside = false;
				if(!isletterOpened) {				
					$('div#letter').stop().animate( { 'height':'220px' }, 300);
				}
			}
		);
		
		$('div#envelope-top').hover(
			function(){
				isInside = true;
				if(!isletterOpened) {
					$('div#letter').stop().animate( { 'height':'400px' }, 300);
				}
			}
			,			
			function(){
				isInside = false;
				if(!isletterOpened) {				
					$('div#letter').stop().animate( { 'height':'220px' }, 300);
				}
			}
		);
		
		$('div#envelope #letter').click(
			function(){
				if(!isletterOpened)isletterOpened = true;
			}
		);
		
		$(document).click(
			function(event){
				if(!isInside){
					if(isletterOpened) $('div#letter').stop().animate( { 'height':'220px' }, 300);
					isletterOpened = false;
				}				
			}
		);
		
		$("input[type='text']").keypress(
			function(){
				
				if(!validateForm()){
					$("#envelope-notification").html("<img src = \"images/stamp_ok.png\" alt = \"Message sent.\" />");
				}else{
					$("#envelope-notification").html("");
				}
				
			}
		);
		
		$("#message").keypress(
			function(){
				if(!validateForm()){
					$("#envelope-notification").html("<img src = \"images/stamp_ok.png\" alt = \"Message sent.\" />");
				}else{
					$("#envelope-notification").html("");
				}
				
			}
		);
	}
);