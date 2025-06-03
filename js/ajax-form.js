$(function() {

	// Get the form.
	var form = $('#contact-form');

	// Get the messages div.
	var formMessages = $('.ajax-response');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error').addClass('success').text(response);

			// Clear the form.
			$('#contact-form input, #contact-form textarea').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success').addClass('error');
			$(formMessages).text(data.responseText || 'Oops! An error occured and your message could not be sent.');
		});
	});

	// === subscription form ===
	var subscribeForm = $('#subscribe-form');
	var subscribeMsg = $('.subscribe-response'); // check this class in your HTML

	$(subscribeForm).submit(function(e) {
		e.preventDefault();
		var formData = $(subscribeForm).serialize();

		$.ajax({
			type: 'POST',
			url: $(subscribeForm).attr('action'),
			data: formData
		})
		.done(function(response) {
			$(subscribeMsg).removeClass('error').addClass('success').text(response);
			$('#subscribe-form input').val('');
		})
		.fail(function(data) {
			$(subscribeMsg).removeClass('success').addClass('error');
			$(subscribeMsg).text(data.responseText || 'There was an error. Please try again later.');
		});
	});
});
// This code handles the AJAX submission of a contact form and a subscription form.
// It prevents the default form submission, serializes the form data, and sends it via AJAX.