import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(CURRENT_TIME, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME)) || 0);
