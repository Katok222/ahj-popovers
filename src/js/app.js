import '../css/style.css';
import Popover from './Popover';

const button = document.getElementById('popover-btn');

const popover = new Popover(
  'Popover title',
  "And here's some amazing content. It's very engaging. Right?"
);

button.addEventListener('click', () => {
  popover.toggle(button);
});