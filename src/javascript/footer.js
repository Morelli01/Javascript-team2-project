import Splide from '@splidejs/splide';
import { Grid } from '@splidejs/splide-extension-grid';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
const teamSplide = new Splide('.splide', {
  type: 'slide',
  rewind: true,
  height: '350px',
  width: '900px',
  keyboard: 'global',
  arrows: true,
  grid: {
    dimensions: [
      [1, 4],
    ],
    gap: { row: '5px', col: '5px' },
  },
  breakpoints: {
    767: {
      direction: 'ttb',
      perPage: 2,
      perMove: 1,
      height: '650px',
      grid: false,
      pagination: false,
    },
    1280: {
      height: '300px',
      width: '700px',
    },
  },
});
teamSplide.mount({ Grid });

const teamModalLink = document.querySelector('.team-modal-link');
const modalTeam = document.querySelector('.data-modal-team');
const modalCloseBtn = document.querySelector('.modal-team-close-btn');

teamModalLink.addEventListener('click', teamModalShow);
modalCloseBtn.addEventListener('click', onCloseBtnClick);
modalTeam.addEventListener('click', onBackdropClick);

function teamModalShow(e) {
  e.preventDefault();
  modalTeam.classList.toggle('open');
  document.addEventListener('keydown', onEscModalTeam);
}
function onEscModalTeam(e) {
  if (e.code === 'Escape') {
    onCloseBtnClick();
    document.removeEventListener('keydown', onEscModalTeam);
  }
}
function onCloseBtnClick() {
  modalTeam.classList.toggle('open');
  document.body.classList.toggle('body--modal-open');
}

function onBackdropClick(e) {
  if (e.target.classList.contains('popup')) {
    onCloseBtnClick();
  }
}
