$('#myInput').on('keyup', function() {
	var searchVal = $(this).val();
	var filterItems = $('[data-lightbox="photos"]');

	if ( searchVal != '' ) {
		filterItems.addClass('hidden');
		$('[data-lightbox="photos"][data-title*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
	} else {
		filterItems.removeClass('hidden');
	}
});