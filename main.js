$(document).on('ready', function() {
  
	$( "#profile-form" ).submit(function( event ) {		// On click of submit button...
	  event.preventDefault();

	  // Store field values as varibables
	  var user = $('#profile-form input[name=user]').val()
	  var books = $('#profile-form input[name=books]').val()
	  var libs = $('#profile-form input[name=libs]').val()
	  var bio = $('#profile-form input[name=bio]').val()

	  // Update profile
	  $('#user').empty().append("Name: "+ user)
	  $('#books').empty().append("Favorite books: "+ books)
	  $('#libs').empty().append("Favorite Javascript libraries: "+ libs)
	  $('#bio').empty().append(bio)

	});


});