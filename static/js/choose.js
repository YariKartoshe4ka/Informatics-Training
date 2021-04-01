$('#select').on('change', function() {
    if ($('#select').val() == 'powers') {
        $('#powers').css({'display': 'block'});
        $('#systems').css({'display': 'none'});
    } else {
        $('#powers').css({'display': 'none'});
        $('#systems').css({'display': 'block'});
    }
});


$('#range').on('input change', function() {
    $('#choose-max-power').text($('#range').val());
});