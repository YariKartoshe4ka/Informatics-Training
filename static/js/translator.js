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
        window.lang_pack = data;

        $.each(data, function(id, attrs) {
            $.each(attrs, function(attr, value) {
                if ($(`#${id}`).length > 0)
                    if (attr == 'text')
                        $(`#${id}`).get(0).childNodes[0].nodeValue = value;
                    else
                        $(`#${id}`).attr(attr, value);
            });
        });
    });
}

function update_lang_button() {
    var children = $('#translator').children();

    for (var i = 0; i < children.length; i++) {
        if (children[i].lang == 'ru-ru')
            children[i].classList.remove('lang-current');

        if (children[i].lang == window.lang) {
            children[i].classList.add('lang-current');

            translate(children[i].lang);
        }
    }

    $('#translator').css({'display': 'block'});
}

$(document).ready(update_lang_button);