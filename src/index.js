import { fetchVideo } from './lib/api';
import { el, element, empty, isRelated, formatDate , setDuration, playVid, allRelated } from './lib/utils';
import { frontpage } from './lib/frontpage';
import { playVideo } from './lib/videoPlayer';

document.addEventListener('DOMContentLoaded', async () => {
  const isFrontpage = document.querySelector('body').classList.contains('frontpage');

  if (isFrontpage) {
    await frontpage();
    console.log('forsíða')
  } else {
    console.log('video síða')
    const querystring = new URLSearchParams(window.location.search);
    const id = querystring.get('video');
    console.log('birta video id = ', id)

    const json = await fetchVideo();
    console.log(json);
    const video = json.videos.find(i => i.id === parseInt(id, 10));
    const videoID = video.id;
    await playVideo(videoID);
  }

});
