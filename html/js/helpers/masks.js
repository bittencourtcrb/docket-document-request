function cpfMask(){
    let cpfInput = document.getElementById("cpf");
    let cpf = cpfInput.value
        .replace(/\D+/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');

    cpfInput.value = cpf;
}

function cnpjMask(){
    let cnpjInput = document.getElementById("cnpj");
    let cnpj = cnpjInput.value
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');

    cnpjInput.value = cnpj;
}

function cepMask(){
    let cepInput = document.getElementById("cep");
    let cep = cepInput.value
        .replace(/\D+/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')

    cepInput.value = cep;

    let cleanCep = cep.replace(/-/, '');
    if(cleanCep.length == 8)
        getCepInfo(cleanCep);
}

async function getCepInfo(cep){
    await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: "get",
        })
        .then((response) => response.json())
        .then((data) => {
            let street = document.getElementById("street");
            let city = document.getElementById("city");
            let uf = document.getElementById("uf");

            if(!data.erro){
                street.value = data.logradouro;
                city.value = data.localidade;
                uf.value = data.uf;
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}