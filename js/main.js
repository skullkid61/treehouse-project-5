$('#myInput').on('keyup', function() {
    var searchVal = $(this).val().toLowerCase();
    var filterItems = $('[data-lightbox="photos"]');

    for (var i = 0; i < filterItems.length; i++) {
        var caption = $(filterItems[i]).attr("data-title").toLowerCase();
        var thumbnail = $('.thumbnail')
        if (caption.indexOf(searchVal) > -1) {
            thumbnail[i].style.display = "";
        } else {
            thumbnail[i].style.display = "none";
        }
    }
});