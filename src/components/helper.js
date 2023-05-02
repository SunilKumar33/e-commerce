export function validateName(value) {
  let error;
  if (!value) {
    error = "Name is Required";
  }
  return error;
}

export function validateEmail(value) {
  let error;
  if (!value) {
    error = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

export function validateReview(value) {
  let error;
  if (!value) {
    error = "Review is Required";
  }
  return error;
}

export function validateNumber(value) {
  let error;
  if (!value) {
    error = "Mobile Number is Required";
  }
  return error;
}

export function validatePassword(value) {
  let error;
  if (!value) {
    error = "Password is Required";
  }
  return error;
}

export function validatePinCode(value) {
  let error;
  if (!value) {
    error = "Enter valid Pincode";
  }
  return error;
}

export function validateLocality(value) {
  let error;
  if (!value) {
    error = "Enter valid Locality / Area / Street";
  }
  return error;
}

export function validateBuildingName(value) {
  let error;
  if (!value) {
    error = "Enter valid Flat no/Building Name";
  }
  return error;
}

export function validateDistrict(value) {
  let error;
  if (!value) {
    error = "Please enter a City/District";
  }
  return error;
}

export function validateState(value) {
  let error;
  if (!value) {
    error = "Please enter a state";
  }
  return error;
}

export function validateUPI(value) {
  let error;
  if (!value) {
    error = "Enter UPI Id";
  }
  return error;
}

export function validateCardNumber(value) {
  let error;
  if (!value) {
    error = "Card Number is Required";
  }
  return error;
}

export function validateMonth(value) {
  let error;
  if (!value) {
    error = "Enter a valid month";
  }
  return error;
}

export function validateYear(value) {
  let error;
  if (!value) {
    error = "Enater a valid year";
  }
  return error;
}

export function validateCVV(value) {
  let error;
  if (!value) {
    error = "CVV is Required";
  }
  return error;
}
