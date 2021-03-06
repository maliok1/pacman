class Stage {
  constructor(width, height) {
    this.width = (width * 85) + 'px';
    this.height = (height * 85) + 'px';
    this.element = document.createElement('div')
  }

  render() {

    this.element.className = 'stage'
    this.element.style.width = this.width;
    this.element.style.height = this.height;

  }

  mount(app) {
    this.render()
    app.appendChild(this.element)
  }
}