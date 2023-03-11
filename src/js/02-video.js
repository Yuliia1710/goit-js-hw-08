// Описан в документации
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (data) {
    console.log(data.seconds);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  }, 1000)
);

const currentTimeBeforeReload = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);
console.log(currentTimeBeforeReload.second);
player.setCurrentTime(currentTimeBeforeReload.seconds);
