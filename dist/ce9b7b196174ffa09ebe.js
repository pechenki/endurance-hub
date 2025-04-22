$(window).on('load', function () {
    setTimeout(function() {
        $('#preloader').addClass('hidden');
    }, 1000); // 1 second delay
});

$(document).ready(function(){
    $('.js-select').select2({
        minimumResultsForSearch: -1,
    });

    $('.js-choice-slider').not('.slick-initialized').slick({
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
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    centerMode: true,
                    centerPadding: '150px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.js-team-slider').not('.slick-initialized').slick({
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
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    centerMode: true,
                    centerPadding: '150px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.js-partners-slider').not('.slick-initialized').slick({
        infinite: true,
        slidesToShow: 4,
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
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $(document).on('submit', '.js-validate', function (e) {
        e.preventDefault();

        const $form = $(this);

        if (validate($form)) {
            $form.find('button[type="submit"]').attr('disabled', 'disabled');

            const jsonData = $form.serializeArray().reduce((acc, { name, value }) => {
                acc[name] = value;
                return acc;
            }, {});

            $.ajax({
                url: 'https://nethunt.com/service/automation/hooks/6803619fb92b38e3345d3d06',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(jsonData),
                success: function () {
                    Swal.fire({
                        icon: 'success',
                        title: 'Форму відправлено',
                        text: 'Дякуємо!',
                        timer: 2000,
                        showConfirmButton: false,
                    }).then(() => {
                        $form.find('button[type="submit"]').removeAttr('disabled');
                        $form[0].reset(); // reset modal form
                        const modal = bootstrap.Modal.getInstance(document.getElementById('detailsModal'));
                        modal.hide();
                    });
                },
                error: function () {
                    Swal.fire({
                        icon: 'error',
                        title: 'Упс...',
                        text: 'Щось пішло не так. Спробуйте ще раз',
                    });
                    $form.find('button[type="submit"]').removeAttr('disabled');
                }
            });
        }

        return false;
    });


    $('#lviv-link').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#calendar').offset().top
        }, 'fast');
        $('#lviv-tab').trigger('click'); // Open the Lviv tab
    });

    $('#kyiv-link').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#calendar').offset().top
        }, 'fast');
        $('#kyiv-tab').trigger('click'); // Open the Kyiv tab
    });



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