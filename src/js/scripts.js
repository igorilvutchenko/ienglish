(function(){
	//console.log($('#feedbackForm'));
	$('#requestForm').on('submit', function(e){
		e.preventDefault();	

		var data = {};
		var errors = [];

		$('.request-item').each(function(index, el){
			var id = $(el).attr('id');
			data[id] = $(el).val();
			if (!data[id].length) errors.push({
				field: '#' + id,
				error: $(el).attr('data-error')
			});
		});

		if (errors.length) {
			errors.forEach(function(el){
				$(el.field).attr('placeholder', el.error);
				$(el.field).addClass('error');
			});
		};

		$.ajax({
			url: $('#requestForm').attr('action'),
			type: 'POST',
			data: data,
			beforeSend: function(){
				$('.request-submit').attr('disabled', 'disabled');
			}
		})
		.done(function(response){
			console.log(response);
			if (response.status == 'ok') {
				alert(response.message);
			} else  {
				alert(response.message);
			}
			$('.request-submit').removeAttr('disabled', 'disabled');

		})
		.fail(function(){
			alert('Error. Try again later');
		});
		//console.log(errors);
	});
})();


(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
    	// console.log(1);
      $(this).closest('.hamburger').toggleClass('menu_state_open');
    });
  });
})(jQuery);

