$(document).on('click', '.form__submit', function (e) {
    e.preventDefault();
    $('.form').addClass('hide');
    $('.question.step-1:not(.success)').removeClass('hide');

    $('.steps__item.step-1').addClass('step__current');
})


$(document).on('click', '.question.step-1 .question__btn-next', function (e) {
    e.preventDefault();
    $('.question.step-1:not(.success)').addClass('hide');
    $('.question.step-1.success').removeClass('hide');
    $('.steps__item.step-1').removeClass('step__current');
    $('.steps__item.step-1').addClass('step__last');
})


$(document).on('click', '.step-1.success .question__btn-prev', function (e) {
    e.preventDefault();
    $('.question.step-1.success').addClass('hide');
    $('.question.step-2:not(.success)').removeClass('hide');
    $('.steps__item.step-2').addClass('step__current');
})

$(document).on('click', '.question.step-2 .question__btn-next', function (e) {
    e.preventDefault();
    $('.question.step-2:not(.success)').addClass('hide');
    $('.question.step-2.success').removeClass('hide');
    $('.steps__item.step-2').removeClass('step__current');
    $('.steps__item.step-2').addClass('step__last');
})

$(document).on('click', '.step-2.success .question__btn-prev', function (e) {
    e.preventDefault();
    $('.question.step-2.success').addClass('hide');
    $('.step-3').removeClass('hide');
    $('.steps__item.step-3').addClass('step__current');
})