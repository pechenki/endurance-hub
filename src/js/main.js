$(document).ready(function(){
    $('.js-choice-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev choice-slider-arrow choice-slider-arrow--prev">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-chevron-left" viewBox="0 0 16 16">\n' +
            '  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>\n' +
            '</svg>' +
            '</button>',
        nextArrow: '<button type="button" class="slick-next choice-slider-arrow choice-slider-arrow--next">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-chevron-right" viewBox="0 0 16 16">\n' +
            '  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>\n' +
            '</svg>' +
            '</button>',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.js-team-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev choice-slider-arrow choice-slider-arrow--prev">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-chevron-left" viewBox="0 0 16 16">\n' +
            '  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>\n' +
            '</svg>' +
            '</button>',
        nextArrow: '<button type="button" class="slick-next choice-slider-arrow choice-slider-arrow--next">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-chevron-right" viewBox="0 0 16 16">\n' +
            '  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>\n' +
            '</svg>' +
            '</button>',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.js-validate').on('submit', function (e) {
        e.preventDefault();
        if (validate($(this))) {
            $(this).find('button[type="submit"]').attr('disabled', 'disabled');
            $(this)[0].submit();
        }
    })
});

/*-------------------------------validate------------------------------*/
function validate(form) {
    var error_class = "has-error";
    var norma_class = "has-success";
    var item        = form.find("[required]");
    var e           = 0;
    var reg         = undefined;

    function mark(object, expression, errorMessage) {
        if (expression) {
            object.parent('div')
                .addClass(error_class)
                .removeClass(norma_class)
                .find('.error-message').text(errorMessage);
            e++;
        } else {
            object.parent('div')
                .addClass(norma_class)
                .removeClass(error_class);
        }
    }

    form.find("[required]").each(function () {
        var $input = $(this);
        var inputValue = $.trim($input.val());
        var errorMessage = "";

        switch ($input.attr("data-validate")) {
            case undefined:
                mark($input, inputValue.length === 0, $input.attr("data-required-error") || "This field is required.");
                break;
            case "email":
                reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                errorMessage = $input.attr("data-error") || "Please enter a valid email address.";
                mark($input, !reg.test(inputValue), errorMessage);
                break;
            case "phone":
                reg = /^[0-9\s\-\+\(\)]{10,20}$/;
                errorMessage = $input.attr("data-error") || "Please enter a valid phone number.";
                mark($input, !reg.test(inputValue), errorMessage);
                break;
            case "age":
                reg = /^[0-9]{2}$/;
                errorMessage = $input.attr("data-error") || "Please enter a valid age.";
                mark($input, !reg.test(inputValue), errorMessage);
                break;
            default:
                reg = new RegExp($input.attr("data-validate"), "g");
                errorMessage = $input.attr("data-error") || "Invalid data entered.";
                mark($input, !reg.test(inputValue), errorMessage);
                break;
        }
    })

    if (e === 0) {
        return true;
    } else {
        form.find("." + error_class + " input:first").focus();
        return false;
    }
}

/*-------------------------------validate------------------------------*/