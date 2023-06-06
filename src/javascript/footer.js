import Splide from '@splidejs/splide';
import { Grid } from '@splidejs/splide-extension-grid';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

const teamSplide = new Splide('.splide', {
  type: 'slide',
  // perPage: 4,
  rewind: false,
  height: '290px',
  width: '900px',
  gap: '5px',
  keyboard: 'global',
  arrows: true,
  pagination: false,
  grid: {
    dimensions: [
      [1, 4],
      [1, 4],
      [1, 4],
      [1, 1],
    ],
    gap: { row: '1em', col: '1em' },
  },
  mediaQuery: 'max',
  breakpoints: {
    767: {
      direction: 'ttb',
      perPage: 2,
      perMove: 1,
      height: 650,
      grid: false,
    },
    1279: {
      height: '210px',
      width: '700px',
    },
  },
});
teamSplide.mount({ Grid });

const teamModalLink = document.querySelector('.team-modal-link');
const modal = document.querySelector('.data-modal-team');
const modalCloseBtn = document.querySelector('.modal-team__close-btn');

teamModalLink.addEventListener('click', teamModalShow);
modalCloseBtn.addEventListener('click', onCloseBtnClick);
modal.addEventListener('click', onBackdropClick);

function teamModalShow(evt) {
  evt.preventDefault();
  modal.classList.toggle('open');
  document.addEventListener('keydown', onEscModalTeam);
}
function onEscModalTeam(evt) {
  if (evt.code === 'Escape') {
    onCloseBtnClick();
    document.removeEventListener('keydown', onEscModalTeam);
  }
}
function onCloseBtnClick() {
  modal.classList.toggle('open');
  document.body.classList.toggle('body--modal-open');
}

function onBackdropClick(evt) {
  if (evt.target.classList.contains('popup-body')) {
    onCloseBtnClick();
  }
}
