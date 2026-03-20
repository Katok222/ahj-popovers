export default class Popover {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.element = null;
  }

  createPopover() {
    const popover = document.createElement('div');
    popover.classList.add('popover');

    popover.innerHTML = `
      <h3 class="popover-title">${this.title}</h3>
      <div class="popover-body">${this.text}</div>
      <div class="popover-arrow"></div>
    `;

    this.element = popover;
    return popover;
  }

  show(targetEl) {
    if (!this.element) {
      this.createPopover();
    }

    document.body.appendChild(this.element);

    const targetRect = targetEl.getBoundingClientRect();
    const popoverRect = this.element.getBoundingClientRect();

    const left =
      targetRect.left +
      (targetRect.width - popoverRect.width) / 2 +
      window.scrollX;

    const top =
      targetRect.top -
      popoverRect.height -
      10 +
      window.scrollY;

    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
  }

  hide() {
    if (this.element && this.element.parentElement) {
      this.element.remove();
    }
  }

  toggle(targetEl) {
    if (this.element && this.element.parentElement) {
      this.hide();
    } else {
      this.show(targetEl);
    }
  }
}