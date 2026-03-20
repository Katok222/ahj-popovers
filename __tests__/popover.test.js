import Popover from '../src/js/Popover';

describe('Popover widget', () => {
  let button;
  let popover;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="container">
        <button id="popover-btn">Click me</button>
      </div>
    `;

    button = document.getElementById('popover-btn');
    popover = new Popover('Popover title', 'Popover text');

    button.getBoundingClientRect = jest.fn(() => ({
      left: 100,
      top: 200,
      width: 120,
      height: 40,
      right: 220,
      bottom: 240,
    }));
  });

  test('should show popover on button click', () => {
    popover.show(button);

    const popoverEl = document.querySelector('.popover');

    expect(popoverEl).not.toBeNull();
    expect(popoverEl.querySelector('.popover-title').textContent).toBe('Popover title');
    expect(popoverEl.querySelector('.popover-body').textContent).toBe('Popover text');
  });

  test('should hide popover on second toggle', () => {
    popover.toggle(button);
    expect(document.querySelector('.popover')).not.toBeNull();

    popover.toggle(button);
    expect(document.querySelector('.popover')).toBeNull();
  });
});