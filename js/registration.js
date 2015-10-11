  $(function() {
  var current_fs, next_fs, previous_fs; //fieldsets
  var left, opacity, scale; //fieldset properties which we will animate
  var animating; //flag to prevent quick multi-click glitches
  jQuery.validator.setDefaults({
  	debug: true,
  	success: "valid",
	highlight: function(element) {
	$(element).closest('.form-group').addClass('has-error');
			},
			unhighlight: function(element) {
				$(element).closest('.form-group').removeClass('has-error');
			},
			errorElement: 'span',
			errorClass: 'help-block',
			errorPlacement: function(error, element) {
				if(element.parent('.input-group').length) {
					error.insertAfter(element.parent());
				} else {
					error.insertAfter(element);
				}
			}
  });
	
	  $('#regForm').validate({
		  rules:{
			  Names:{
			  	required:true,
				rangelength:[5,20]
			  },
			  Email:{
		  		required:true,
				email:true
			  },
			  Password:{
			  	required:true,
			  },
			  Confirm:{
		  		required:true,
				equalTo:'#Password'
		  	}
		  },
		  messages:{
			  Names:{
			  	required:"Please Enter Your Name",
				rangelength:"Your name is either too long or too short"
			  },
			  Email:{
		  		required:"Please Enter Your Email",
				email:"Email should be of format example@example.com"
			  },
			  Password:{
				required:"Please Enter Your Password"
			  },
			  Confirm:{
				required:"Please Enter Your Password Again",
				 equalTo:"The Passwords Don't Match"
			  }
		  },
		  
	  });
	  
$(".reset").click(function(){
	
  var r = confirm("This will clear all the information you just typed, are you sure?");
  if (r==true){
     $(this).parents("form").find('input').each(function(){
        if($(this).prop('type')=='text' || $(this).prop('type')=='email' || $(this).prop('type')=='password')
            $(this).val('');

    });
  }

});
	  
	$(".submit").click(function(){
		
		if($(this).parents("form").valid()){
			var r = confirm("By clicking go, you agree to our terms and condition");
			if(r){
				window.location = "https://google.ca";
			}
		}
	});

  });