
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const nome = document.getElementById("nome");
    const messageInput = document.getElementById("message");
    const contactMethodInput = document.getElementById("contact-method");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const message = messageInput.value;
      const contactMethod = contactMethodInput.value;
      const phoneNumber = "31991458907";

      if (contactMethod === "whatsapp") {
        // Redirecionar para o WhatsApp com a mensagem
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      } else if (contactMethod === "email") {
        // Redirecionar para o e-mail
        const email = "thecaasantos@gmail.com";
        const subject = `Contato de ${nome} pelo site`;
        const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = emailUrl;
      }
    });
  });
