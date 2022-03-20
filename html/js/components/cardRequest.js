function createCardList(data) {
    if(data.length > 0){
        numRequestDocument = data.length;
        alterNumCards();
        data.map((request) => {
            createCardRequest(request);
        })
    }else {
        document.getElementById("empty-file").style.display = "flex";
    }
}

function alterNumCards() {
    let h3NumDocs = document.getElementById("num-docs");
    h3NumDocs.textContent = numRequestDocument + (numRequestDocument > 1 ? ` documentos solicitados` : ` documento solicitado`);
}

function createCardRequest(request){
    document.getElementById("empty-file").style.display = "none";
    let card = document.getElementById("card-request");

    let dateCreation = new Date(request.createdAt);

    let doc = document.createElement("div");
    doc.setAttribute("class", "document");
    doc.setAttribute("id", request.id);

    // Head
        let docHead = document.createElement("div");
            docHead.setAttribute("class", "document-head");
        let h3Head = document.createElement("h3");
            h3Head.textContent = request.docName;
        let btnDelete = document.createElement("button");
            btnDelete.setAttribute("type", "button");
            btnDelete.setAttribute("onClick", `openModal(${request.id})`);
        let imgDelete = document.createElement("img");
            imgDelete.setAttribute("src", "assets/lixo.svg");
            imgDelete.setAttribute("alt", "Apagar documento");
        let hr = document.createElement("hr");
    //Body
        let docBody = document.createElement("div");
            docBody.setAttribute("class", "document-body");
        //Body-Info
            let docBodyInfo = document.createElement("div");
                docBodyInfo.setAttribute("class", "document-body-info");
            let docBodystrong = document.createElement("strong");
                docBodystrong.textContent = request.personType == 1 ? 'Pessoa física' : 'Pessoa jurídica';
            let docBodyP1 = document.createElement("p");
                docBodyP1.textContent = request.personType == 1 ? `Nome: ${request.fullName}` : `Razão social: ${request.legalName}`;
            let docBodyP2 = document.createElement("p");
                docBodyP2.textContent = request.personType == 1 ? `CPF: ${request.cpf}` : `CNPJ: ${request.cnpj}`;
        //Body registry
            let docBodyRegistry = document.createElement("div");
                docBodyRegistry.setAttribute("class", "document-body-registry");
            let docBodyRegistrystrong = document.createElement("strong");
                docBodyRegistrystrong.textContent = "Dados do cartório";
            let docBodyAddress = document.createElement("div");
                docBodyAddress.setAttribute("class", "document-address");
            let docAddressP1 = document.createElement("p");
                docAddressP1.textContent = `Rua: ${request.street}`;
            let docAddressP2 = document.createElement("p");
                docAddressP2.textContent = `Nº: ${request.number}`;
            let docBodyCity = document.createElement("div");
                docBodyCity.setAttribute("class", "document-city");
            let docCityP1 = document.createElement("p");
                docCityP1.textContent = `Cidade: ${request.city}`;
            let docCityP2 = document.createElement("p");
                docCityP2.textContent = `UF: ${request.uf}`;

    //Footer
        let hrFooter = document.createElement("hr");
            hrFooter.setAttribute("class", "hr-document-footer");
        let docFooter = document.createElement("div");
            docFooter.setAttribute("class", "document-footer");
        let footerStrong = document.createElement("strong");
            footerStrong.textContent = "Data de criação:";
        let footerP1 = document.createElement("p");
            footerP1.textContent = `${dateCreation.getDate()} de ${monthName[dateCreation.getMonth()]} de ${dateCreation.getFullYear()}`;


    docHead.appendChild(h3Head);
    doc.appendChild(docHead);
    doc.appendChild(hr);

    docBodyInfo.appendChild(docBodystrong);
    docBodyInfo.appendChild(docBodyP1);
    docBodyInfo.appendChild(docBodyP2);
    docBody.appendChild(docBodyInfo);

    docBodyRegistry.appendChild(docBodyRegistrystrong);
    docBodyAddress.appendChild(docAddressP1);
    docBodyAddress.appendChild(docAddressP2);
    docBodyRegistry.appendChild(docBodyAddress);
    docBodyCity.appendChild(docCityP1);
    docBodyCity.appendChild(docCityP2);
    docBodyRegistry.appendChild(docBodyCity);
    docBody.appendChild(docBodyRegistry);

    docFooter.appendChild(footerStrong);
    docFooter.appendChild(footerP1);

    doc.appendChild(docBody);
    doc.appendChild(hrFooter);
    doc.appendChild(docFooter);
    card.appendChild(doc);
    btnDelete.appendChild(imgDelete);
    docHead.appendChild(btnDelete);
}
