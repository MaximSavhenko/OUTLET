// $(document).ready(function () {
//     $(".btn__search-icon").click(function () {
//         $('.mini_search_block').toggleClass("active"); 
//     });
// });





function toggleSearc() {
    var searchIcon = document.querySelector('.btn__search-icon'),
        searchInput = document.querySelector('.mini_search_block');
	searchIcon.onclick = function () {
        searchInput.classList.toggle('active');
    };
};

toggleSearc();