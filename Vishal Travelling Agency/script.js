// Connect to Email.Js //

const btn = document.getElementById('button');

document.getElementById('booking')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Book Now';

   const serviceID = 'service_ag9vyss';
   const templateID = 'template_9wu4t3m';

   emailjs.sendForm(serviceID, templateID, this)
   .then((response) => {
         Swal.fire({
         text: "Booking successfully!",
         icon: "success",
         showConfirmButton: false,
         timer: 1500
          });

          this.reset();
 
    }, (err) => {
     btn.value = 'Send Email';
     alert(JSON.stringify(err));
     });
});
