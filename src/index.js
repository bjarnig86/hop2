import { fetchVideo } from './lib/api';
import { el, element, empty, isRelated, formatDate } from './lib/utils';

document.addEventListener('DOMContentLoaded', async () => {
const line = document.createElement('hr');
const main = document.querySelector('main');
const data = await fetchVideo();
console.log(data);
console.log(data.categories);

  data.categories.forEach(categories => {
    const catVidRel = categories.videos;
    console.log(catVidRel);
    const videoRow = element('div', { class: `row videoRow` }, null, null, ' ');
    const category = el('section',
      element('div', { class: 'grid' }, null,null, ' ',
        element('div', { class: 'row' }, null, null, ' ',
          element('div', { class: 'col col-12' }, null, null, ' ',
            element('h2', { class: 'category__title' }, null, null, `${categories.title}`))),
        videoRow));
      main.appendChild(category);

      data.videos.forEach(videos => {
        // const related = videos.related;
        const id = videos.id;
        console.log(id);
        const rCheck = isRelated(catVidRel, id);
        if (rCheck) {
        const video = element('div', { class: 'col col-4 col-sm-12' }, null, null, ' ',
          element('div', { class: 'card' }, null, null, ' ' ,
            element('img', {src: videos.poster, class: 'card__video' }, null, null, ' '),
            element('h3', { class: 'card__title' }, null, null, `${videos.title}`),
            element('p', { class: 'card__created' }, null, null, `${formatDate(videos.created)}`)));
            videoRow.appendChild(video);
          }
          main.appendChild(line);
      });
      main.appendChild(line);
  });
});
