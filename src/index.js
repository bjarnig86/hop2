import { fetchVideo } from './lib/api';

document.addEventListener('DOMContentLoaded', async () => {
const data = await fetchVideo();
console.log(data);
});
