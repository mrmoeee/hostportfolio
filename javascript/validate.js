function validateForm() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  
  let validName = document.getElementsByClassName('valid-name');
  let validEmail = document.getElementsByClassName('valid-email');
  let validMsg = document.getElementsByClassName('valid-message');
  
  if (name === "") {
    console.log('name cannot be empty');
    validName[0].className = 'valid-name invalid';
    validName[0].innerHTML = 'Name cannot be empty!';
  } else {
    validName[0].className = 'valid-name valid';
    validName[0].innerHTML = 'Looks Good!';
  }

  if (message === "") {
    console.log('message cannot be empty');
    validMsg[0].className = 'valid-message invalid';
    validMsg[0].innerHTML = ' Message cannot be empty!';
  }  else {
    validMsg[0].className = 'valid-message valid';
    validMsg[0].innerHTML = 'Looks Good!';
  }

  if (email === "") {
    validEmail[0].className = 'valid-email invalid';
    validEmail[0].innerHTML = 'Email cannot be empty!';
  } else {
    let expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!expression.test(String(email).toLowerCase())) {
      validEmail[0].className = 'valid-email invalid';
      validEmail[0].innerHTML = 'Email format may be wrong';
    } else {
      validEmail[0].className = 'valid-email valid';
      validEmail[0].innerHTML = 'Looks Good!';
    }
  }
  if (wasValid()) {
    document.getElementById('contact-form').submit();
  } else {
    return false;
  }
}

function wasValid() {
  if (document.getElementsByClassName('invalid').length > 0) {
    return false;
  } else {
    return true;
  }
}