let searchIcon = document.getElementById("search-icon")
let searchBar = document.getElementById("search-bar");
let closeButton = document.getElementById("close-button");

function hideSearchIcon() {
  searchIcon.classList.add("hidden-icon");
  searchBar.classList.add("visible-search-bar");
  closeButton.classList.add("visible-close-button");
}

function showSearchIcon() {
   searchIcon.classList.remove("hidden-icon");
   searchBar.classList.remove("visible-search-bar"); 
  closeButton.classList.remove("visible-close-button");
}

searchIcon.addEventListener("click", hideSearchIcon);

closeButton.addEventListener("click", showSearchIcon);


//getting input value
document.addEventListener('keydown', function(event){
  if (event.keyCode === 13) {
    let searchResult = document.getElementById('search-bar').value;
  }  
});                                            