class Dropdown {
    constructor(elementId) {
      this.dropdown = document.getElementById(elementId);
    }
  
    toggle() {
      this.dropdown.style.display = (this.dropdown.style.display === 'none') ? 'block' : 'none';
    }
  }
  
  const myDropdown = new Dropdown('myDropdown');