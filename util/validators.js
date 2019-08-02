module.exports.validateSignUpInput = (
	firstName,
	lastName,
	email,
	phone,
	gender,
	stateOfRes,
	location,
	password,
	confirmPassword
) => {
	const errors = {};
	if (firstName.trim() === '') {
		errors.firstName = 'First name must not be empty';
	}
	if (lastName.trim() === '') {
		errors.lastName = 'Last name must not be empty';
	}
	if (email.trim() === '') {
		errors.email = 'Email address must not be empty';
	} else {
		const regExp = /^\w+[.-]?\w+@[a-z]+\.[a-z]{2,11}(\.[a-z]{2,11})?$/;
		if (!email.match(regExp)) {
			errors.email = 'Email address must be valid';
		}
	}
	if (phone.trim() === '') {
		errors.phone = 'Phone number must not be empty';
	}
	if (gender.trim() === '') {
		errors.gender = 'Gender must not be empty';
	}
	if (stateOfRes.trim() === '') {
		errors.stateOfRes = 'State of residence must not be empty';
	}
	if (location.trim() === '') {
		errors.location = 'Location must not be empty';
	}
	if (password === '') {
		errors.password = 'Password must not be empty';
	} else if (confirmPassword !== password) {
		errors.confirmPassword = 'Passwords must match';
	}
	return {
		errors,
		valid: Object.keys(errors).length < 1,
	};
};

module.exports.validateLoginInput = (email, password) => {
	const errors = {};
	if (email.trim() === '') {
		errors.email = 'Email address must not be empty';
	}
	if (password === '') {
		errors.password = 'Password must not be empty';
	}
	return {
		errors,
		valid: Object.keys(errors).length < 1,
	};
};

module.exports.validateRequestInput = (
	childFullName,
	childAge,
	childGender,
	childClass,
	homeAddress,
  subjects,
  tutorGender
) => {
	const errors = {};
	if (childFullName.trim() === '') {
		errors.childFullName = "Child's name must not be empty";
  }
  if (childAge === '') {
    errors.childAge = "Child's age must not be empty";
  }
  if (childGender === '') {
    errors.childGender = "Child's gender must not be empty";
  }
  if (childClass.trim() === '') {
    errors.childClass = "Child's class must not be empty";
  }
  if (homeAddress.trim() === '') {
    errors.homeAddress = "Child's home address must not be empty";
  }
  if (subjects === '') {
    errors.subjects = "Subjects must not be empty";
  }
  if (tutorGender === '') {
    errors.tutorGender = "Tutor's gender must not be empty";
  }

	return {
		errors,
		valid: Object.keys(errors).length < 1,
	};
};
