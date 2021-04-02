sessionStorage.setItem('all_attempts', 0);
sessionStorage.setItem('correct_attempts', 0);

function generate_task(max_power, previous_power) {
    var power = 1 + Math.floor(Math.random() * max_power);

    while (power == previous_power)
        power = 1 + Math.floor(Math.random() * max_power);
    
    $('#task').text(power);

    sessionStorage.setItem('answer', Math.pow(2, power));
};

function check_answer(answer) {
    var correct_answer = sessionStorage.getItem('answer');
    var all_attempts = parseInt(sessionStorage.getItem('all_attempts'));
    var correct_attempts = parseInt(sessionStorage.getItem('correct_attempts'));

    sessionStorage.setItem('all_attempts', ++all_attempts);

    update_answer_and_statistics(answer,
                                 correct_answer,
                                 `2<sup>${Math.log2(correct_answer)}</sup>=${correct_answer}`,
                                 correct_attempts,
                                 all_attempts);

    generate_task(window.max_power, Math.log2(correct_answer));
};

generate_task(max_power, 0);