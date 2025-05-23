
  
  function sendMail() {
    const firstName = document.getElementById("name1").value.trim();
    const lastName = document.getElementById("name2").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const company = document.getElementById("company").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    // ✅ Console log values
    console.log({
      firstName,
      lastName,
      email,
      phone,
      company,
      service,
      message
    });

    const params = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      company: company,
      service: service,
      message: message
    };

    emailjs.send("service_idski1h", "template_azzy0w4", params,"kvlkpkd4Js-0P3BWL")
      .then(function(response) {
        alert("✅ Mail sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
      }, function(error) {
        alert("❌ Failed to send mail: " + error.text);
        console.error("FAILED...", error);
      });
  }
