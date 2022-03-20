function openModal(id) {
    let modal = document.getElementById('modal-delete');
    modal.setAttribute("delete-id", id);
    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    let modal = document.getElementById('modal-delete');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
