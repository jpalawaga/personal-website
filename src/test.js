class Test extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<p>Corwiwn</p>';
    console.log('test');
  }
}

customElements.define('corwin-test', Test);