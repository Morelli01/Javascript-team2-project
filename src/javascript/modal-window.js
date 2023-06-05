document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.getElementById('openModalButton');
    const modal = document.getElementById('modal');
    const movieTitle = document.querySelector('.modal-title-movie');
    const movieDetails = document.querySelector('.movie-details table tbody');
    const movieOverview = document.querySelector('.about-text');
    const moviePoster = document.querySelector('.modal-poster');
  
    const openModal = (movieId) => {
      const url = 'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=7bd54d4ecca90d61812ee42cdc93d740';
  
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
          console.error('Ошибка при получении информации о фильме:', error);
        });
    };
  
    const closeModal = () => {
      modal.style.display = 'none';
    };
  
    openModalButton.addEventListener('click', openModal);
  
    const closeButton = modal.querySelector('.modal-close-btn');
    closeButton.addEventListener('click', closeModal);
  
    window.addEventListener('click', event => {
      if (event.target === modal) {
        closeModal();
      }
    });
  
    // Обработчик события клика на изображения списка
    const movieImages = document.querySelectorAll('.movie-image');
    movieImages.forEach(image => {
      image.addEventListener('click', openModal);
    });
  });
  