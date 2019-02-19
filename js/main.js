$('#myInput').on('keyup', function() {
    var searchVal = $(this).val();
    searchVal = searchVal.toLowerCase();
    var filterItems = $('[data-lightbox="photos"]');

	if ( searchVal != '' ) {
		filterItems.addClass('hidden');
        $('[data-lightbox="photos"][data-title*="' + searchVal + '"]').removeClass('hidden');
	} else {
		filterItems.removeClass('hidden');
	}
});