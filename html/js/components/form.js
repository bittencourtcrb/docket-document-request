function cleanForm() {
    document.getElementById("doc-name").value = '';
    document.getElementById("cpf").value = '';
    document.getElementById("full-name").value = '';
    document.getElementById("cnpj").value = '';
    document.getElementById("corporate").value = '';
    document.getElementById("cep").value = '';
    document.getElementById("street").value = '';
    document.getElementById("number").value= '';
    document.getElementById("city").value = '';
    document.getElementById("uf").value = '';
}

function personSelect() {
    const type = document.getElementById("type-person").value;
    let natural = document.getElementById("field-cpf");
    let legal = document.getElementById("field-cnpj");

    if(type == 1){
        natural.style.display = "block";
        legal.style.display = "none";
    }else {
        legal.style.display = "block";
        natural.style.display = "none";
    }
}

function validate(data) {
    let validateControl = 0;
    let docName = document.querySelector('.msg-nome');
    if(data.docName.length < 1){
        docName.style.display = 'block';
        validateControl++;
    } else docName.style.display = 'none';

    if(data.personType == 1){
        //Validação cpf
        let cpf = document.querySelector('.msg-cpf');
        if(data.cpf.length < 14){
            cpf.style.display = 'block';
            validateControl++;
        } else cpf.style.display = 'none';

        //Validação Nome da pessoa
        let fullName = document.querySelector('.msg-fullName');
        if(data.fullName.length < 1){
            fullName.style.display = 'block';
            validateControl++;
        } else fullName.style.display = 'none';
    } else {
        //Validação cnpj
        let cnpj = document.querySelector('.msg-cnpj');
        if(data.cnpj.length < 18){
            cnpj.style.display = 'block';
            validateControl++;
        } else cnpj.style.display = 'none';

        //Validação Razão Social
        let legalName = document.querySelector('.msg-corporate');
        if(data.legalName.length < 1){
            legalName.style.display = 'block';
            validateControl++;
        } else legalName.style.display = 'none';
    }

    //Validação cep
    let cep = document.querySelector('.msg-cep');
    if(data.cep.length < 9){
        cep.style.display = 'block';
        validateControl++;
    } else cep.style.display = 'none';

    //Validação rua
    let street = document.querySelector('.msg-street');
    if(data.street.length < 1){
        street.style.display = 'block';
        validateControl++;
    } else street.style.display = 'none';

    //Validação número
    let number = document.querySelector('.msg-number');
    if(data.number.length < 1){
        number.style.display = 'block';
        validateControl++;
    } else number.style.display = 'none';

    //Validação cidade
    let city = document.querySelector('.msg-city');
    if(data.city.length < 1){
        city.style.display = 'block';
        validateControl++;
    } else city.style.display = 'none';

    //Validação cidade
    let uf = document.querySelector('.msg-uf');
    if(data.uf.length < 1){
        uf.style.display = 'block';
        validateControl++;
    } else uf.style.display = 'none';

    return validateControl > 0 ? false : true;
}
