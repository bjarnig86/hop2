/* eslint-disable no-shadow */
/* eslint-disable import/prefer-default-export */
import formatDate, {
  el,
  element,
  setDuration,
  isRelated,
  playVid,
  pauseVid,
  muteVid,
  unmuteVid,
  frwVid,
  backVid,
  openFullscreen,
} from './utils';
import {
  fetchVideo,
} from './api';

export async function playVideo(videoID) {
  const data = await fetchVideo();
  const video = data.videos;

  const body = document.querySelector('body');

  video.forEach((videos) => {
    if (videos.id === videoID) {
      const header = element('header', { class: 'frontpage__header' }, null, null, '',
        element('div', { class: 'grid' }, null, null, ' ',
          element('div', { class: 'row' }, null, null, ' ',
            element('div', { class: 'col col-12 col-sm-12' }, null, null, ' ',
              el('h1', `${videos.title}`)))));
      body.appendChild(header);

      const rowControls = element('div', { class: 'row controls-row' }, null, null, ' ');
      const rowInfo = element('div', { class: 'row info' }, null, null, ' ');
      const player = element('section', { class: 'video' }, null, null, ' ',
        element('div', { class: 'grid' }, null, null, ' ',
          element('div', { class: 'row' }, null, null, ' ',
            element('div', { class: 'col col-12 col-sm-12' }, null, null, ' ',
              element('div', { class: 'video__poster__container' }, null, null, ' ',
                element('video', { src: `/${videos.video}`, class: 'video__poster', id: 'video' }, { click: playVid }, null, ' '),
                element('img', { src: '/img/play.svg', class: 'play video__button-visible', id: 'playIcon' }, { click: playVid }, null, ' ')))),
          rowControls, rowInfo));

      body.appendChild(player);

      const controls = element('div', { class: 'col col-12' }, null, null, ' ',
        element('div', { class: 'controls' }, null, null, ' ',
          element('img', { id: 'back', src: '/img/back.svg', alt: 'back' }, { click: backVid }, null, ' '),
          element('img', {
            id: 'play', src: '/img/play.svg', class: 'button-visible', alt: 'play',
          }, { click: playVid }, null, ' '),
          element('img', {
            id: 'pause', src: '/img/pause.svg', class: 'button-hidden', alt: 'pause',
          }, { click: pauseVid }, null, ' '),
          element('img', {
            id: 'mute', src: '/img/mute.svg', class: 'button-visible', alt: 'mute',
          }, { click: muteVid }, null, ' '),
          element('img', {
            id: 'unmute', src: '/img/unmute.svg', class: 'button-hidden', alt: 'unmute',
          }, { click: unmuteVid }, null, ' '),
          element('img', { id: 'fullscreen', src: '/img/fullscreen.svg', alt: 'fullscreen' }, { click: openFullscreen }, null, ' '),
          element('img', { id: 'next', src: '/img/next.svg', alt: 'next' }, { click: frwVid }, null, ' ')));

      rowControls.appendChild(controls);

      const info = element('div', { class: 'col col-12 col-sm-12' }, null, null, ' ',
        element('p', { class: 'video__description' }, null, null, `${videos.description}`));

      rowInfo.appendChild(info);
      const line = element('hr', { class: 'line col col-10 offset-col-1' }, null, null, ' ');
      const relatedRow = element('div', { class: 'row related-row' }, null, null, ' ');
      const relatedVideos = element('section', { class: 'related' }, null, null, ' ',
        element('div', { class: 'grid' }, null, null, ' ',
          element('div', { class: 'row' }, null, null, ' ',
            element('div', { class: 'col col-12 col-sm-12' }, null, null, ' ',
              element('h2', { class: 'related__videos' }, null, null, 'Tengd myndbönd'))),
          relatedRow,
          element('div', { class: 'line-container' }, null, null, ' ',
            line)));
      body.appendChild(relatedVideos);

      const { related } = videos;

      data.videos.forEach((videos) => {
        const { id } = videos;
        const rCheck = isRelated(related, id);
        if (rCheck) {
          const video = element('div', { class: 'col col-4 col-sm-12' }, null, null, ' ',
            element('div', { class: 'card' }, null, null, ' ',
              element('a', { href: `/pages/video.html?video=${id}`, class: 'img__container' }, null, null, ' ',
                element('img', { src: `/${videos.poster}`, class: 'card__poster' }, null, null, ' '),
                element('p', { class: 'img__duration' }, null, null, `${setDuration(videos.duration)}`)),
              element('h3', { class: 'card__title' }, null, null, `${videos.title}`),
              element('p', { class: 'card__created' }, null, null, `${formatDate(videos.created)}`)));
          relatedRow.appendChild(video);
        }
      });

      const footer = el('footer', ' ',
        element('div', { class: 'grid' }, null, null, ' ',
          element('div', { class: 'row' }, null, null, ' ',
            element('div', { class: 'col col-12' }, null, null, ' ',
              element('a', { href: '/index.html' }, null, null, 'Til baka')))));
      body.appendChild(footer);
    }
  });
}
