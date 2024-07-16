import { renderExperiences } from './src/renderExperiences.js';
import { listenScroll } from './src/scrollTopButton.js';

window.addEventListener('DOMContentLoaded', (event) => {
  renderExperiences();
  listenScroll()
});
