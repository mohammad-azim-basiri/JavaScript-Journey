let $ = document;

const searchForm = $.querySelector('#search-form');
const searchBox = $.querySelector("#search-box");
const serachResult = $.querySelector("#serach-result");
const showMore = $.querySelector("#show-more-btn");
const accesskey = "gy-tTvhmw__xsfVB7k4JEJ9zgw0jAk2UrtQF8TJ90xU"
let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.map((result)=>{
        const image = $.createElement("img");
        image.src = result.urls.small;
        const imageLink = $.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        serachResult.appendChild(imageLink);
    })
    showMore.style.display ="block"
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    serachResult.innerHTML = ""
    page = 1;
    searchImages();
});
showMore.addEventListener("click", () =>{
    page++;
    searchImages();
})