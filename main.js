let addressForm = document.shippingAddressForm;
addressForm.addEventListener('submit', (event) => {
  event.preventDefault();

  let firstName = addressForm.firstName.value;
  let lastName = addressForm.lastName.value;
  let address = addressForm.address.value;
  let city = addressForm.city.value;
  let state = addressForm.state.value;
  let zipCode = addressForm.zipCode.value;
  let phoneNumber = addressForm.phoneNumber.value;
  let email = addressForm.email.value;

  let inputs = [firstName, lastName, address, city, state, zipCode, phoneNumber, email];
  let fields = ['First Name', 'Last Name', 'Address', 'City', 'State','Zip Code', 'Phone Number', 'Email'];


    inputs.forEach(function(fieldInput, index) {
      let fieldName = fields[index];
      if (fieldInput === "" ) {
        let newLI = document.createElement('li');
        newLI.appendChild(document.createTextNode(fieldName));
        let listDiv = document.getElementById('error');
        listDiv.appendChild(newLI);
      }
      else {
        console.log(fieldInput);
      }
  });
});
