






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



$(document).ready(function () {
    function screen_check(){
        if ($(window).width() >= 768) { 
           $('.mini_search_block').css('');
        };
    };

    screen_check();
    $(window).on('resize', function(){
        screen_check();
    });
});
