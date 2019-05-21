function validateForm() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  
  if (name === "") {
    console.log('name cannot be empty');
    return false;
  }
  if (message === "") {
    console.log('message cannot be empty');
    return false;
  } 
  if (email === "") {
    console.log('email cannot be empty');
    return false;
  } else {
    let expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!expression.test(String(email).toLowerCase())) {
      console.log('Email wrong format?');
      return false;
    }
  }

  document.getElementById('contact-form').submit();

  

}