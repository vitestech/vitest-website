var $form = $('form#contact-form'),
    url = 'https://script.google.com/macros/s/AKfycby0ve8u-g_dLzFGfPoaEMWKClqJiaBTizNEnCuMJQuvA8iOgTzvp0zS1VEI2gNVAZQqfg/exec'

var $submit = $('#submit');
$submit.on('click', function (e) {
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serialize()
    });
    $form[0].reset();

    $submit.text('Submitted!');
    $submit.removeClass('btn-primary')
    $submit.addClass("btn-success")
})