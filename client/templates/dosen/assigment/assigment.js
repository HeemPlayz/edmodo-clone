Template.assig_konten_dosen.onRendered(function(){
	// $('.ui.dropdown').dropdown({
	// 	position: 'bottom-center'
	// });

	$('.tooltip').popup({
		position: 'bottom left'
	});

	$('.menu .item').tab();

	$('.progress').progress();

	this.$('.datepicker').datetimepicker({
		format: 'DD/MM/YYYY',
		minDate: new Date()
	});

	// $('select.dropdown').dropdown();

});