#### Matthew Moe's Portfolio

---

This is my live site: [Click me!](matthewmoe.com)

I created my Portfolio using Bootstrap, HTML, PHP, and a little bit of JQuery ($.ajax).
---
There was one small issue / bug that set me back, but I overcame that and learned a little something.

My first problem was with Googles ReCaptcha, I was only getting the ResponseKey when the form was submitted through 'g-recaptcha-response', and was not getting the key when the page stayed the same through Ajax. That was fixed using an If statement in my php file checking whether or not 'g-recaptcha-response' existed, and instead using the key given by Ajax through formData.

```JavaScript
  let formData = {
    'name': $('input[name=name]').val(),
    'email': $('input[name=email]').val(),
    'message': $('textarea[name=message]').val(),
    captcha: grecaptcha.getResponse()
  };
```

My last problem was fixing my key value pairs in my formData variable. I originally had 

```JavaScript
  'subject': $('input[name=message]').val();
```
This did not work because in my php file I was referencing it as 
```php
  $message = $_POST['message'];
```
and also because my Message was a textarea. To fix it, I just needed to change it to
```JavaScript
  'message': $('textarea[name=message]').val(),
```
