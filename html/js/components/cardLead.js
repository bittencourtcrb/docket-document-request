function cardUpdate(fullName, legalName, createdAt, type) {
    let dateCreation = new Date(createdAt);
    document.getElementById("card-lead-info").style.display="flex";
    document.getElementById("info-name").textContent = type == 1 ? fullName : legalName;
    document.getElementById("info-date").textContent = `${dateCreation.getDate()} de ${monthName[dateCreation.getMonth()]} de ${dateCreation.getFullYear()}`;
    document.getElementById("circle").style.background = '#00b98e';
    document.getElementById("progress-text").textContent = 'Finalizado';
}
