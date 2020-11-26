/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import formatDate, {
  el,
  element,
  setDuration,
  isRelated,
} from './utils';
import {
  fetchVideo,
} from './api';

export async function frontpage() {
  const main = el('main', ' ');
  const frontpageBody = document.querySelector('body');

  // const header = element('header', { class: 'frontpage__header' }, null, null, '',
  // element('div', { class: 'grid'}, null, null, ' ',
  // element('div', { class: 'row' }, null, null, ' ',
  // element('div', { class: 'col col-12' }, null, null, ' ',
  // el('h1', `Fræðslumyndbandaleigan`)))));

  const footer = el('footer', ' ',
    element('div', {
      class: 'grid',
    }, null, null, ' ',
    element('div', {
      class: 'row',
    }, null, null, ' ',
    element('div', {
      class: 'col col-12',
    }, null, null, ' ',
    el('p', '©Fræðslumyndbandaleigan')))));

  // frontpageBody.appendChild(header);
  frontpageBody.appendChild(main);
  frontpageBody.appendChild(footer);

  const data = await fetchVideo();
  console.log(data);
  console.log(data.categories);

  data.categories.forEach((categories) => {
    const line = element('hr', {
      class: 'line col col-10 offset-col-1',
    }, null, null, ' ');
    const catVidRel = categories.videos;
    const videoRow = element('div', {
      class: 'row videoRow',
    }, null, null, ' ');
    const category = el('section',
      element('div', {
        class: 'grid',
      }, null, null, ' ',
      element('div', {
        class: 'row',
      }, null, null, ' ',
      element('div', {
        class: 'col col-12 col-sm-12',
      }, null, null, ' ',
      element('h2', {
        class: 'category__title',
      }, null, null, `${categories.title}`))),
      videoRow,
      element('div', {
        class: 'line-container',
      }, null, null, ' ',
      line)));
    main.appendChild(category);

    data.videos.forEach((videos) => {
      // const related = videos.related;
      const { id } = videos;
      const rCheck = isRelated(catVidRel, id);
      if (rCheck) {
        const video = element('div', {
          class: 'col col-4 col-sm-12',
        }, null, null, ' ',
        element('div', {
          class: 'card',
        }, null, null, ' ',
        element('a', {
          href: `/pages/video.html?video=${id}`,
          class: 'img__container',
        }, null, null, ' ',
        element('img', {
          src: videos.poster,
          class: 'card__poster',
        }, null, null, ' '),
        element('p', {
          class: 'img__duration',
        }, null, null, `${setDuration(videos.duration)}`)),
        element('h3', {
          class: 'card__title',
        }, null, null, `${videos.title}`),
        element('p', {
          class: 'card__created',
        }, null, null, `${formatDate(videos.created)}`)));
        videoRow.appendChild(video);
      }
    });
  });
}
