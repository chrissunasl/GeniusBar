
function validateForm2() {
  let x = document.forms["genius_form"]["name"].value;
  if (x == "") {
  alert("User Name must be filled out");
  return false;
  }
  }
