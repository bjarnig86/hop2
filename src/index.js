import { fetchVideo } from './lib/api';
import { el, element, empty, isRelated, formatDate , setDuration} from './lib/utils';
import { frontpage } from './lib/frontpage';

document.addEventListener('DOMContentLoaded', async () => {
  const data = await fetchVideo();
  console.log(data);
  const videos = data.videos;
  console.log(videos[0].title);

  const body = document.querySelector('body');

  const header = element('header', { class: 'frontpage__header' }, null, null, '',
  element('div', { class: 'grid'}, null, null, ' ',
  element('div', { class: 'row' }, null, null, ' ',
  element('div', { class: 'col col-12' }, null, null, ' ',
  el('h1', `${ videos[0].title }`)))));
  body.appendChild(header);

  const player = element('section', { class: 'video'}, null, null, ' ',
  element('div', { class: 'grid' }, null, null, ' ',
  element('div', { class: 'row' }, null, null, ' ',
  element('div', { class: 'col col-12' }, null, null, ' ',
  element('div', { class: 'video__poster__container' }, null, null, ' ',
  element('video', { src: videos[0].video, class: 'video__poster' }, null, null, ' '),
  element('img', { src: './img/play.svg', class: 'play' }, null, null, ' '))))));

  body.appendChild(player);

  const controls = element('div', { class: 'row' }, null, null, ' ',
  element('div', { class: 'col col-12' }, null, null, ' ',
  element('div', { class: 'video__actions' }, null, null, ' ',
  element('img', { id: 'back', src: '../img/back.svg', alt: 'back' }, null, null, ' '),
  element('img', { id: 'play', src: '../img/play.svg', class: 'button-visible', alt: 'play' }, null, null, ' '),
  element('img', { id: 'pause', src: '../img/pause.svg', class: 'button-hidden', alt: 'pause' }, null, null, ' '),
  element('img', { id: 'mute', src: '../img/mute.svg', class: 'button-visible', alt: 'mute' }, null, null, ' '),
  element('img', { id: 'unmute', src: '../img/unmute.svg', class: 'button-hidden', alt: 'unmute' }, null, null, ' '),
  element('img', { id: 'fullscreen', src: '../img/fullscreen.svg', alt: 'fullscreen' }, null, null, ' '),
  element('img', { id: 'next', src: '../img/next.svg', alt: 'next' }, null, null, ' '))));

  player.appendChild(controls);

  const play = document.getElementById('#play');
  const pause = document.getElementById('#pause');

  play.addEventListener('click');
  console.log(play.addEventListener('click'));
});
