export const generateMovieCards = async () => {
  const movies = await fetchMovieData();

  const cardList = document.querySelector("#card-list");
  cardList.innerHTML = movies
    .map(
      (movie) =>
        `<li class="movie-card" id=${movie.id}>
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" a href/>
      <h3 class="movie-title">${movie.title}</h3>
      <p>★  ${movie.vote_average}</p>
      </li>`
    )
    .join("");

  cardList.addEventListener("click", handleClickCard);

  //이벤트 위임 :하위요소에서 발생한 이벤트를 상위요소에서 처리하도록 해줌
  function handleClickCard(event) {
    //카드 외 영역 클릭 시 무시
    if (event.target === cardList) return;

    if (event.target.matches(".movie-card")) {
      alert(`영화 ID : ${event.target.id}`);
    } else {
      // 카드의 자식 태그 (img, h3, p) 클릭 시 부모의 Id로 접근
      alert(`영화 ID : ${event.target.parentNode.id}`);
    }
  }
};

async function fetchMovieData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGU1NjY2Yjk0Yjc1NDg1ZTJmM2QxZDQxZWE2NGMyMCIsInN1YiI6IjY2Mjg2OTdmMjIxYmE2MDE3YzE3ZTIwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.di8q-a-oZSQzN9BfpzUocwn5_lxuO_GwsBB2Ga-pxAg"
    }
  };
  const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1", options);
  const data = await response.json();
  return data.results;
}

// fetchMovieData("https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1", options)
//   .then((response) => response.json())
//   .then((results) => {
//     const movies = data.results.slice(0, 20);
//     const cardsContainer = document.querySelector(" .cards");

//     movies.forEach((movie) => {
//       if (!movie.poster_path) return;

//       const card = document.createElement("div");
//       card.classList.add("card");
//       card.id = movie.id;

//       const image = document.createElement("img");
//       image.src = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
//       image.alt = "영화 이미지";

//       const title = document.createElement("h2");
//       title.textContent = movie.title;

//       const rating = document.createElement("p");
//       rating.textContent = "별점: " + movie.vote_average;

//       card.appendChild(image);
//       card.appendChild(title);
//       card.appendChild(rating);

//       card.addEventListener("click", () => {
//         alert("ID:" + card.id);
//       });

//       cardsContainer.appendChild(card);
//     });
//   })
//   .catch((err) => console.error(err));

// // api card list 불러오기
// // 카드 클릭 시 클릭한 영화id alert로 띄우기
// // alert(`영화id: ${영화id}`);

// // 영화 검색 함수구현
// // 1. 영화카드리스트 선택하기
// // 2. 입력값에 따라서 포함여부 확인
// // 3. 검색

// function searchMovies() {
//   const apiKey =
//     "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGU1NjY2Yjk0Yjc1NDg1ZTJmM2QxZDQxZWE2NGMyMCIsInN1YiI6IjY2Mjg2OTdmMjIxYmE2MDE3YzE3ZTIwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.di8q-a-oZSQzN9BfpzUocwn5_lxuO_GwsBB2Ga-pxAg";
//   const query = document.getElementById("searchbox").value.trim();
//   const encodedQuery = encodeURIComponent(query.toLowerCase()); // 대소문자 구분 없이 검색
//   const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodedQuery}`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data.results); // 검색 결과를 콘솔에 출력
//     })
//     .catch((error) => console.error("Error:", error));
// }
