document.getElementById('myform').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio do formulário


    var name = document.getElementById('name').value.trim();
    var nameError = document.querySelector('.nameErro');

    // Verifica se o nome é válido
    var regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(name)) {
        nameError.textContent = 'Por favor, insira um nome válido.';
        nameError.style.color = 'red';
    } else {
        nameError.textContent = '';
    }

    var email = document.getElementById('email').value;
    var emailError = document.querySelector('.emailErro');

    // Verifica se o email é válido
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regex.test(email)) {
        emailError.textContent = 'Por favor, insira um email válido.';
        emailError.style.color = 'red';
    } else {
        emailError.textContent = '';
    }

    var cep = document.getElementById('cep').value;
    var cepError = document.querySelector('.mensagem');

    // Verifica se o CEP é válido
    var regex = /^\d{5}-\d{3}$/;
    if (!regex.test(cep)) {
        cepError.textContent = 'Por favor, insira um CEP válido. O CEP deve estar no formato 12345-678.';
        cepError.style.color = 'red';
    } else {
        cepError.textContent = '';
    }

    var uf = document.getElementById('uf').value;
    var ufError = document.querySelector('.ufErro');

    // Lista de UFs válidos
    var ufs = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

    // Verifica se o UF é válido
    if (!ufs.includes(uf)) {
        ufError.textContent = 'Por favor, insira um UF válido. O UF deve ser uma das 27 unidades federativas do Brasil.';
        ufError.style.color = 'red';
    } else {
        ufError.textContent = '';
    }

    
})

