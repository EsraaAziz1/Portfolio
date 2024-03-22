const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message');


const sendEmail = (e) => {
    e.preventDefault();

    //serviseID - templateID - #form - publicKey
    emailjs.sendForm('service_9hzyw9e', 'template_06rfjsj', 'contact-form', 'qX98DkhmcjzvH3Cbo')
        .then(() => {
            //show sent message
            contactMessage.textContent = 'Message sent successfully✅❌'

            //Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

        }), () => {
            //show error message
            contactMessage.textContent = 'Message not sent (service error)❌'
        }
}


contactForm.addEventListener('submit', sendEmail)