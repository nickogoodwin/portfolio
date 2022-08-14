/**Nicko Goodwin
 * 2/24/2022
 *
 * 2/24/2022
 *  -added regex for Phone and Email in contact form
 *  -created statsDisplay
 *      -added Mouse-Coordinates to stats
 */

const toggleStatsDisplay = () => {
	if ($('#stats-display').hasClass('up')) {
		$('#stats-display').removeClass('up');
		$('#stats-display').addClass('down');
	} else {
		$('#stats-display').removeClass('down');
		$('#stats-display').addClass('up');
	}

	if ($('#stats-arrow').hasClass('up')) {
		$('#stats-arrow').removeClass('up');
		$('#stats-arrow').addClass('down');
	} else {
		$('#stats-arrow').removeClass('down');
		$('#stats-arrow').addClass('up');
	}
};

const displayStats = (e) => {
	$('#x-coor').text(e.clientX);
	$('#y-coor').text(e.clientY);

	//TODO: add IP address and Location stats (but not in a creepy way)
	//Weather API???
};

const validateForm = () => {
	const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

	let email = $('#email-address').val();
	let phone = $('#phone-number').val();

	let isValid = false;
	let errorMessage = '';

	if (email == '' || !emailPattern.test(email)) {
		errorMessage += 'Please enter a valid email address';
	} else {
		isValid = true;
	}

	if (phone == '' || !phonePattern.test(phone)) {
		errorMessage += '\nPlease enter a valid phone number';
	} else {
		isValid = true;
	}

	if (!isValid) {
		alert(errorMessage);
	} else {
		alert('Thanks for contacting me!');
	}
};

$(document).ready(() => {
	// $(document).mousemove(displayStats);
	AOS.init();

	$('#submit-button').click(validateForm);

	$('#stats-display').click(toggleStatsDisplay);
});
