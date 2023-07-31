(function(){
    const searchInput = document.getElementById("search-input");

    const showSearchResult = () => {
        let searchWorld = searchInput.value;
        window.location.href = `https://www.google.com/search?q=${searchWorld}`
        searchWorld = "";
    }
    
    const enterKey = (event) => {
        if (event.code === "Enter") {
            showSearchResult();
        }
    }
    searchInput.addEventListener("keypress", (event) => {
    enterKey(event);
    })
})();