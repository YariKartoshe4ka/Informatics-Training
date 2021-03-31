sessionStorage.setItem('all_attemps', 0);
sessionStorage.setItem('correct_attemps', 0);

function generate_task(max_power) {
    var power = 1 + Math.floor(Math.random() * max_power);
    
    $('#task').text(power);

    sessionStorage.setItem('answer', Math.pow(2, power));
};

function check_answer(answer) {
    var correct_answer = sessionStorage.getItem('answer');
    var all_attemps = parseInt(sessionStorage.getItem('all_attemps'));
    var correct_attemps = parseInt(sessionStorage.getItem('correct_attemps'));

    sessionStorage.setItem('all_attemps', ++all_attemps);

    if (answer == correct_answer) {
        $('#result').text('Bерно!');
        sessionStorage.setItem('correct_attemps', ++correct_attemps);
    }

    else
        $('#result').html(`Неверно! 2<sup>${Math.log2(correct_answer)}</sup>=${correct_answer}`);
        
    $('#result').css({'display': 'block'});

    

    $('#statistics').text(`Bерные попытки: ${correct_attemps} из ${all_attemps} (${parseInt(correct_attemps / all_attemps * 100)}%)`);

    generate_task(window.max_power);
};

generate_task(max_power);