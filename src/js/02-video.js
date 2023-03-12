// Описан в документации
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

isCurrentTime();

player.on(
  'timeupdate',
  throttle(function (data) {
    console.log(data.seconds);
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  }, 1000)
);

function isCurrentTime() {
  const currentTimeBeforeReload = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );
  if (currentTimeBeforeReload) {
    player.setCurrentTime(currentTimeBeforeReload.seconds);
  }
}
