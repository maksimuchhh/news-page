import templateFunction from "../template/news-card.hbs";
const refs = {
  grid: document.querySelector(".news-grid"),
  formEl: document.querySelector("#search-form"),
  submitBtn: document.querySelector("input[type='submit']"),
  searchInput: document.querySelector("#search-input"),
  selectSort: document.querySelector("select[name='sort']"),
  selectLang: document.querySelector("select[name='lang']"),
};

refs.formEl.addEventListener("submit", searchArticle);

function searchArticle(evt) {
  let searchValue = "";
  const lang = refs.selectLang.value;
  const sort = refs.selectSort.value;
  searchValue = refs.searchInput.value;
  refs.grid.innerHTML = "";
  evt.preventDefault();
  fetch(
    `https://newsapi.org/v2/everything?q=${searchValue}&language=${lang}&sortBy=${sort}&pageSize=50&apiKey=b911240c4e294ab1ad8d5fe72cb8a374`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      refs.grid.insertAdjacentHTML("beforeend", templateFunction(data));
    })
    .catch(console.log);
}
