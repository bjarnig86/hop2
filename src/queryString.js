// import frontpageVideos from './frontpage';
// import singleVideo from './single';
document.addEventListener('DOMContentLoaded', () => {
  const isFrontpage = document.querySelector('body').classList.contains('frontpage');
  const json = fetch(...);
  if (isFrontpage) {
    frontpageVideos(json);
  } else {
    const querystring = new URLSearchParams(window.location.search);
    querystring
    const id = querystring.get('video');
    singleVideo(id, json);
  }
});
/**
 * Gefum okkar að HTML sé fyrir forsíðu:
 * <html>
 *  <body class="frontpage">...</body>
 * </html>
 *
 * Gefum okkur að HTML sé fyrir stakt video:
 * <html>
 *  <body class="video">...</body>
 * </html>
 *
 * Gefum okkur að vísað sé í "video.html" með querystring breytu
 * sem er id á video, t.d.
 * "video.html?video=4"
 */
