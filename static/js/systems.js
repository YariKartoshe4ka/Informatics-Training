sessionStorage.setItem('all_attemps', 0);
sessionStorage.setItem('correct_attemps', 0);

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
    var answer = $('#answer').val();
    var correct_answer = sessionStorage.getItem('answer');
    var all_attemps = parseInt(sessionStorage.getItem('all_attemps'));
    var correct_attemps = parseInt(sessionStorage.getItem('correct_attemps'));

    sessionStorage.setItem('all_attemps', ++all_attemps);

    if (answer.toLowerCase() == correct_answer) {
        $('#result').text('Bерно!');
        sessionStorage.setItem('correct_attemps', ++correct_attemps);
    }
    
    else
        $('#result').html(`Неверно! ${$('#task').text()}<sub>${system_from}</sub>=${correct_answer}<sub>${system_to}</sub>`);

    $('#result').css({'display': 'block'});

    

    $('#statistics').text(`Bерные попытки: ${correct_attemps} из ${all_attemps} (${parseInt(correct_attemps / all_attemps * 100)}%)`);

    generate_task(system_from, system_to);
}

generate_task(system_from, system_to);