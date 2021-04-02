sessionStorage.setItem('all_attempts', 0);
sessionStorage.setItem('correct_attempts', 0);

function generate_task(system_from, system_to) {
    var system_min = Math.min(system_from, system_to);

    if (system_from < 10)
        var length = 5 + Math.floor(Math.random() * 6);
    else
        var length = 2 + Math.floor(Math.random() * 3);

    var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var task = alphabet[1 + Math.floor(Math.random() * (system_from - 1))];

    while (task.length < length) {
        task += alphabet[Math.floor(Math.random() * system_from)]
    }

    $('#task').text(task);

    sessionStorage.setItem('answer', parseInt(task, system_from).toString(system_to));
};


function check_answer(system_from, system_to) {
    var answer = $('#systems-input-answer').val();
    var correct_answer = sessionStorage.getItem('answer');
    var all_attempts = parseInt(sessionStorage.getItem('all_attempts'));
    var correct_attempts = parseInt(sessionStorage.getItem('correct_attempts'));

    sessionStorage.setItem('all_attempts', ++all_attempts);

    update_answer_and_statistics(answer.toLowerCase(),
                                 correct_answer,
                                 `${$('#task').text()}<sub>${system_from}</sub>=${correct_answer.toUpperCase()}<sub>${system_to}</sub>`,
                                 correct_attempts,
                                 all_attempts);

    $('#systems-input-answer').val('');

    generate_task(system_from, system_to);
}

generate_task(system_from, system_to);