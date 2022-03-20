async function deleteRequest() {
    let id = document.getElementById('modal-delete').getAttribute('delete-id');

    await fetch(`http://localhost:3612/documents/${id}`, { method: "DELETE" })
        .then((response) => response.json())
        .then((data) => {
            numRequestDocument--;
            // local: ../components/modal.js
            closeModal();
            let node = document.getElementById(id);
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            if(numRequestDocument > 0){
                // local: ../components/cardRequest.js
                alterNumCards();
            }else {
                document.getElementById("empty-file").style.display = "flex";
                document.getElementById("num-docs").textContent = "";
            }

            let mensagem = document.getElementById("msg");
            let pMensagem = document.getElementById("p-message");
            pMensagem.innerText = 'Documento exclúido com sucesso';
            mensagem.style.display = 'flex';
            setTimeout(function() {mensagem.style.display = 'none';}, 3500);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

async function sendRequest() {
    const docName = document.getElementById("doc-name").value;
    const personType = document.getElementById("type-person").value;
    const cpf = document.getElementById("cpf").value;
    const fullName = document.getElementById("full-name").value;
    const cnpj = document.getElementById("cnpj").value;
    const legalName = document.getElementById("corporate").value;
    const cep = document.getElementById("cep").value;
    const street = document.getElementById("street").value;
    const number = document.getElementById("number").value;
    const city = document.getElementById("city").value;
    const uf = document.getElementById("uf").value;
    const createdAt = new Date;

    const data = {
        docName, personType, cpf, fullName, cnpj, legalName, cep, street, number, city, uf, createdAt
    };

    let isValid = validate(data);

    if(isValid) {
        await fetch("http://localhost:3612/documents", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((data) => {
            numRequestDocument++;
            // local: ../components/form.js
            cleanForm();
            // local: ../components/cardRequest.js
            alterNumCards()
            // local: ../components/cardRequest.js
            createCardRequest(data);
            // local: ../components/cardLead.js
            cardUpdate(data.fullName, data.legalName, data.createdAt, data.personType);

            let mensagem = document.getElementById("msg");
            let pMensagem = document.getElementById("p-message");
            pMensagem.innerText = 'Documento criado com sucesso';
            mensagem.style.display = 'flex';
            setTimeout(function() {
                mensagem.style.display = 'none';
            }, 3500);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }
}

async function getRequests() {
    await fetch("http://localhost:3612/documents", {
        method: "get",
        })
        .then((response) => response.json())
        .then((data) => {
            // local: ../components/cardRequest.js
            createCardList(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}
