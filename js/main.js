// $(document).ready(function () {
//     $(".btn__search-icon").click(function () {
//         $('.mini_search_block').toggleClass("active"); 
//     });
// });





function toggleSearc() {
    var searchIcon = document.querySelector('.navbar-search-toggle'),
        searchInput = document.querySelector('.mini_search_block'),
        toogleIcon = document.querySelector('.navbar-search-toggle');
	searchIcon.onclick = function () {
        searchInput.classList.toggle('active');
        toogleIcon.classList.toggle('active');
    };
};

toggleSearc();

