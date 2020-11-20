import { fetchVideo } from './lib/api';
import { el, element, empty } from './lib/utils';

document.addEventListener('DOMContentLoaded', async () => {
const data = await fetchVideo();
console.log(data);


});
