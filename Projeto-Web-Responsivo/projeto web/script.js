document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada!");
});

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    if (name === "" || email === "") {
      alert("Por favor, preencha todos os campos.");
    } else if (!validateEmail(email)) {
      alert("Por favor, insira um e-mail válido.");
    } else {
      alert("Formulário enviado com sucesso!");
    }
  });
  
  function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
  document.getElementById("toggleTheme").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
  });
  
  