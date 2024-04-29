const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGU1NjY2Yjk0Yjc1NDg1ZTJmM2QxZDQxZWE2NGMyMCIsInN1YiI6IjY2Mjg2OTdmMjIxYmE2MDE3YzE3ZTIwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.di8q-a-oZSQzN9BfpzUocwn5_lxuO_GwsBB2Ga-pxAg",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const movies = [
  {
    title: "인셉션",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8kqINWouhAuMLVmy6JtScHT5GnLkUzt0Mg&s",
    summary: "꿈속의 꿈을 통해 타인의 비밀을 훔치는 이야기",
    rating: "8.8",
  }, // 추가 영화 데이터...
];

// 영화 데이터를 HTML에 동적으로 추가하는 함수
function displayMovies(movies) {
  const cardList = document.getElementById("card-list");

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img class="movie-img" src="${movie.image}" alt="영화 이미지" />
        <ul>
          <li><span class="movie-title">영화제목: ${movie.title}</span></li>
          <li>줄거리요약: ${movie.summary}</li>
          <li>평점: ${movie.rating}</li>
        </ul>
      `;

    cardList.appendChild(card);
  });
}

// 페이지가 로드되면 영화 데이터를 띄우는 함수 호출
window.onload = function () {
  displayMovies(movies);
};
