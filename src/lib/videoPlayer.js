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
