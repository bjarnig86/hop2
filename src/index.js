import { fetchVideo } from './lib/api';
import { el, element, empty } from './lib/utils';

document.addEventListener('DOMContentLoaded', async () => {
const main = document.querySelector('main');
const data = await fetchVideo();
console.log(data);
console.log(data.categories);

  data.categories.forEach(categories => {
    const category = el('section',
      element('div', { class: 'grid' }, null,null, ' ',
      element('div', { class: 'row' }, null, null, ' ',
      element('div', { class: 'col col-12' }, null, null, ' ',
      element('h2', { class: 'category__title' }, null, null, categories.title)))));

      main.appendChild(category);

  });

});
