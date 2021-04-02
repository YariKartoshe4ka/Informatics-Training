function update_answer_and_statistics(answer,
                                      correct_answer,
                                      explanation,
                                      correct_attempts,
                                      all_attempts)
{
    if (answer == correct_answer) {
        $('#answer-correct').css({'display': 'inline'});
        $('#answer-incorrect').css({'display': 'none'});
        $('#answer-explanation').text('');
        sessionStorage.setItem('correct_attempts', ++correct_attempts);
    }

    else {
        $('#answer-correct').css({'display': 'none'});
        $('#answer-incorrect').css({'display': 'inline'});
        $('#answer-explanation').html(explanation);
    }

    $('#correct-attempts').text(correct_attempts);
    $('#all-attempts').text(all_attempts);
    $('#correct-attempts-percent').text(`(${parseInt(correct_attempts / all_attempts * 100)}%)`);
}