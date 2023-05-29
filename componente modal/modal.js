class Modal {
    constructor() {
      this.modal = document.getElementById('modal');
      this.openModalBtn = document.getElementById('openModalBtn');
      this.acceptBtn = document.getElementById('acceptBtn');
      this.cancelBtn = document.getElementById('cancelBtn');
  
      this.openModalBtn.addEventListener('click', this.openModal.bind(this));
      this.acceptBtn.addEventListener('click', this.acceptAction.bind(this));
      this.cancelBtn.addEventListener('click', this.cancelAction.bind(this));
    }
  
    openModal() {
      this.modal.style.display = 'block';
    }
  
    closeModal() {
      this.modal.style.display = 'none';
    }
  
    acceptAction() {
      alert('Acción al presionar Aceptar');
      this.closeModal();
    }
  
    cancelAction() {
      alert('Acción al presionar Cancelar');
      this.closeModal();
    }
  }
  
  const modal = new Modal();
  