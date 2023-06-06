document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal');
  const movieTitle = document.querySelector('.modal-title-movie');
  const movieDetails = document.querySelector('.movie-details table tbody');
  const movieOverview = document.querySelector('.about-text');
  const moviePoster = document.querySelector('.modal-poster');

  const openModal = (movieId) => {
    const apiKey = '97fe01addf81f73693338979426ece1e';
    const baseUrl = 'https://api.themoviedb.org/3';
    const url = `${baseUrl}/movie/${movieId}?api_key=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const title = data.title;
        const voteCount = data.vote_count;
        const popularity = data.popularity;
        const genre = data.genres[0].name;
        const overview = data.overview;
        const posterPath = data.poster_path;
        const posterUrl = 'https://image.tmdb.org/t/p/w500' + posterPath;

        movieTitle.textContent = title;
        movieDetails.innerHTML = `
          <tr>
            <td>Vote / Votes</td>
            <td>${voteCount}</td>
          </tr>
          <tr>
            <td>Popularity</td>
            <td>${popularity}</td>
          </tr>
          <tr>
            <td>Genre</td>
            <td>${genre}</td>
          </tr>
        `;
        movieOverview.textContent = overview;
        moviePoster.setAttribute('src', posterUrl);

        modal.style.display = 'block';
      })
      .catch(error => {
        console.error('Error getting movie information:', error);
      });
  };

  const closeModal = () => {
    modal.style.display = 'none';
  };

  const openModalButton = document.getElementById('openModalButton');
  openModalButton.addEventListener('click', openModal);

  const closeButton = modal.querySelector('.modal-close-btn');
  closeButton.addEventListener('click', closeModal);

  window.addEventListener('click', event => {
    if (event.target === modal) {
      closeModal();
    }
  });

  const movieImages = document.querySelectorAll('.movie-image');
  movieImages.forEach(image => {
    image.addEventListener('click', () => {
      const movieId = image.dataset.movieId;
      openModal(movieId);
    });
  });
});
