class ElementManager {
  constructor() {
    this.elements = document.getElementsByClassName('element');
  }

  toggleElement(index) {
    for (let i = 0; i < this.elements.length; i++) {
      if (i === index - 1) {
        this.elements[i].classList.add('show');
      } else {
        this.elements[i].classList.remove('show');
      }
    }
  }
}

const elementManager = new ElementManager();
window.toggleElement = elementManager.toggleElement.bind(elementManager);
