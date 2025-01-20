
        function openLoginModal() {
            document.getElementById('login-modal').classList.add('active');
        }

        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username && password) {
                document.getElementById('user-info').textContent = `Welcome ${username}!`;
                document.getElementById('movie-section-title').textContent = `${username} 20 Movies We Recommend for`;
                document.getElementById('login-modal').classList.remove('active');
            } else {
                alert('Please enter your username and password.');
            }
        }

        function toggleFavorite(button, movieName) {
            const favoritesList = document.getElementById('favorites');
            if (button.textContent === 'Add Favorites') {
                const listItem = document.createElement('li');
                listItem.textContent = movieName;
                favoritesList.appendChild(listItem);
                button.textContent = 'Remove Favorites';
            } else {
                const items = favoritesList.querySelectorAll('li');
                items.forEach(item => {
                    if (item.textContent === movieName) {
                        favoritesList.removeChild(item);
                    }
                });
                button.textContent = 'Add Favorites';
            }
        }

function toggleSeriesFavorite(button, seriesName) {
    const seriesFavoritesList = document.getElementById('series-favorites');
    if (button.textContent === 'Add Favorites') {
        const listItem = document.createElement('li');
        listItem.textContent = seriesName;
        seriesFavoritesList.appendChild(listItem);
        button.textContent = 'Remove Favorites';
    } else {
        const items = seriesFavoritesList.querySelectorAll('li');
        items.forEach(item => {
            if (item.textContent === seriesName) {
                seriesFavoritesList.removeChild(item);
            }
        });
        button.textContent = 'Add Favorites';
    }
}

        function addComment(button, movieName) {
            const commentSection = button.parentElement;
            const textarea = commentSection.querySelector('textarea');
            const commentsList = commentSection.querySelector('.comments-list');

            if (textarea.value.trim() !== '') {
                const comment = document.createElement('li');
                comment.textContent = textarea.value;
                commentsList.appendChild(comment);
                textarea.value = '';
            } else {
                alert('Please write a comment!');
            }
        }

        function searchMovies() {
            const searchInput = document.getElementById('search-bar').value.toLowerCase();
            const movies = document.querySelectorAll('.movie-card');

            movies.forEach(movie => {
                const title = movie.querySelector('h3').textContent.toLowerCase();
                if (title.includes(searchInput)) {
                    movie.style.display = 'block';
                } else {
                    movie.style.display = 'none';
                }
            });
        }

        function filterByCategory() {
            const category = document.getElementById('category-filter').value;
            const movies = document.querySelectorAll('.movie-card');

            movies.forEach(movie => {
                const movieCategory = movie.getAttribute('data-category');
                if (category === '' || movieCategory === category) {
                    movie.style.display = 'block';
                } else {
                    movie.style.display = 'none';
                }
            });
        }
        function searchSeries() {
    const searchInput = document.getElementById('series-search-bar').value.toLowerCase();
    const series = document.querySelectorAll('#series-grid .movie-card');

    series.forEach(serie => {
        const title = serie.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchInput)) {
            serie.style.display = 'block';
        } else {
            serie.style.display = 'none';
        }
    });
}

        function filterSeriesByCategory() {
    const category = document.getElementById("series-category-filter").value;
    const series = document.querySelectorAll("#series-grid .movie-card");

    series.forEach(serie => {
        const seriesCategory = serie.getAttribute("data-category");
        if (category === "" || seriesCategory === category) {
            serie.style.display = "block";
        } else {
            serie.style.display = "none";
        }
    });
    

}

  