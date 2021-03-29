function generate_task(max_power) {
    var power = 1 + Math.floor(Math.random() * max_power);
    
    $('#task').html(`2<sup>${power}</sup>`);
    $('#answer').val(Math.pow(2, power));
};

function check_answer(answer) {
    var true_answer = $('#answer').val();

    if (answer == true_answer) {
        $('#result').text('Bерно!');
        $('#result').css({'display': 'block'});
    }
    else {
        $('#result').html(`Неверно! 2<sup>${Math.log2(true_answer)}</sup>=${true_answer}`);
        $('#result').css({'display': 'block'});
    }

    generate_task(window.max_power);
}

generate_task(max_power);