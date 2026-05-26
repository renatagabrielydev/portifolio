const menuToggle = document.getElementById("menu-toggle");
const linksMenu = document.getElementById("links-menu");

menuToggle.addEventListener("click", () => {
  linksMenu.classList.toggle("active");
});




  emailjs.init("JGJIw2y3hb_7UZZj3");

  const form = document.getElementById("form-contato");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3hds86n",
        "template_xhcosp9",
        form
      )
      .then(() => {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      })
      .catch((error) => {
        alert("Erro ao enviar mensagem.");
        console.log(error);
      });
  });
