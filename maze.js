
jQuery(document).ready(function() {
	var count = 0;
	var start = false;
	jQuery( "#boundary1" ).hover(
	  function() {
	    // alert('hey');
	    $('boundary1').addClassName('youlose');
	    count = count + 1 
	  }
	);
	jQuery( "#boundary2" ).hover(
	  function() {
	    // alert('hey');
	    $('boundary2').addClassName('youlose');
	    count = count + 1
	  }
	);
	jQuery( "#boundary3" ).hover(
	  function() {
	    // alert('hey');
	    $('boundary3').addClassName('youlose');
	    count = count + 1
	  }
	);
	jQuery( "#boundary4" ).hover(
	  function() {
	    // alert('hey');
	    $('boundary4').addClassName('youlose');
	    count = count + 1
	  }
	);
	jQuery( "#boundary5" ).hover(
	  function() {
	    // alert('hey');
	    $('boundary5').addClassName('youlose');
	    count = count + 1
	  }
	);

	jQuery('#start').click(function(){
		if (count > 0){
			$('boundary1').removeClassName('youlose');
			$('boundary2').removeClassName('youlose');
			$('boundary3').removeClassName('youlose');
			$('boundary4').removeClassName('youlose');
			$('boundary5').removeClassName('youlose');
			jQuery( "#status1" ).html( "<span class='red'>Game was restart</span>" );
			start = true;
			count = 0;
		}else{
			if(start == false){
				start = true;
			}else{
				// alert('No need to restart!!!');
				jQuery( "#status1" ).html( "<span class='red'>No need to restart!!!</span>" );
			}
		}
	});

	jQuery('#end').click(function(){
		if (count > 0 && !start){
			jQuery( "#status1" ).html( "<span class='red'>You Lose Please Resatrt!!!</span>" );
		}else if (count == 0 && start){
			jQuery( "#status1" ).html( "<span class='red'>You <b>Win</b></span>" );
		}else{
			jQuery( "#status1" ).html( "<span class='red'>Click 'S' to start the game</span>" );
		}
	});

	jQuery('#end').hover(function(){
		if (count > 0){
			// alert('Please resatrt Maze!!!');
			jQuery( "#status1" ).html( "<span class='red'>You Lose Please Resatrt!!!</span>" );
		}else{
			// alert("You win!");
			jQuery( "#status1" ).html( "<span class='red'>You <b>Win</b></span>" );

		}
	});
/*
	jQuery('#maze').mouseover(function(){
		if(start){
			console.log('we in if statement');
			$('body').addClassName('youlose');
		}
		else{
			$('body').removeClassName('youlose');
			console.log('else statement');
		}
	});*/

	jQuery( "#maze" )
	  .mouseover(function() {
	  	console.log('inside');
	    $('mainbody').addClassName('youlose');
	  })
	  .mouseout(function() {
	  	console.log('outside');
	   $('mainbody').addClassName('youlose');
	  });
 




});
