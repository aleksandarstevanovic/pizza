function check() {
  let firstName=document.getElementById('firstName');
  let lastName=document.getElementById('lastName');
  let address=document.getElementById('address');
  let email=document.getElementById('email');
  let phone=document.getElementById('phone');
   let counter=0;
  if(firstName.value!='' && !/\d/.test(firstName.value)){
    firstName.classList.remove('is-invalid');
    firstName.classList.add('is-valid');
    counter++
  }
  else  firstName.classList.add('is-invalid');


   if(lastName.value!='' && !/\d/.test(lastName.value)){
    lastName.classList.remove('is-invalid');
    lastName.classList.add('is-valid');
    counter++
  }

  else  lastName.classList.add('is-invalid');

  if(address.value!=''){
  address.classList.remove('is-invalid')
  address.classList.add('is-valid');
  counter++
}
  else  address.classList.add('is-invalid');

  if(/[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/.test(email.value) && email.value!==''){
  email.classList.remove('is-invalid')
  email.classList.add('is-valid');
  counter++
}
  else  email.classList.add('is-invalid');

  if(phone.value!='' && /^\d+$/.test(phone.value)){
    phone.classList.remove('is-invalid');
    phone.classList.add('is-valid');
    counter++
  }

  else  phone.classList.add('is-invalid');
console.log(counter)
  if(counter===5){
    $('#sent').append('<p style="border: 2px solid green;">Thank you for your message. It has been sent.<p>');

  }
}
