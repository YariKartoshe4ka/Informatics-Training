var lang = localStorage.getItem('lang');

if (lang == null) {
    localStorage.setItem('lang', 'ru-ru');
    lang = 'ru-ru';
}

function change_lang() {
    var children = $('#translator').children();

    for (var i = 0; i < children.length; i++) {
        if (children[i].lang == window.lang) {
            children[i].classList.remove('lang-current');
            children[(i + 1) % children.length].classList.add('lang-current');

            var new_lang = children[(i + 1) % children.length].lang;
            window.lang = new_lang;
            localStorage.setItem('lang', new_lang);

            translate(new_lang);
            break;
        }
    }
}

function translate(lang) {
    $.getJSON(`/static/lang/${lang}.json`, function(data) {
        $.each(data, function(id, attrs) {
            $.each(attrs, function(attr, value) {
                if ($(`#${id}`).length > 0)
                    if (attr == 'text')
                        $(`#${id}`).text(value);
                    else if (attr == 'exec')
                        eval(value);
                    else
                        $(`#${id}`).attr(attr, value);
            });
        });
    });
}

function update_lang_button() {
    $.each($('#translator').children(), function (index, button) {
        if (button.lang == 'ru-ru')
            button.classList.remove('lang-current');

        if (button.lang == window.lang) {
            button.classList.add('lang-current');

            translate(button.lang);
        }
    });
    
    $('#translator').css({'display': 'block'});
}

$(document).ready(update_lang_button);