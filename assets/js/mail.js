document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
  
    submitButton.addEventListener("click", function () {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;
  
      const mailtoLink = `mailto:subrahmanyahegde460@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
  
      window.location.href = mailtoLink;
    });
  });