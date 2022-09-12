
$(function() {
  $(".accordion-wrap .accordion-section").eq(0).find('.section-sub-menu').addClass('active')
  $(".section-name").click(function(e){
    e.preventDefault();
    $(".section-name").removeClass('active')
    $(this).addClass("active")
    $(".section-sub-menu").removeClass('active')
    $(this).next(".section-sub-menu").addClass('active')
     })
});


$(function() {
  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    modal: true
  });
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});


$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "Username must contain only letters, numbers, or dashes.");

    $.validator.addMethod("passwordRegex", function(value, element) {
        return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(value);
    }, "Username must contain only letters, numbers, or dashes.");

    $(".login-form-valid").validate({
        rules: {
            "email": {
                required: true,
                emailRegex: true,
            },
            "password": {
                required: true,
                passwordRegex: true

            }
        },
        messages: {
            "email": {
                required: "You must enter an email",
                emailRegex: "Email format not valid"
            },
            "password": {
                required: "Password is reguired",
                passwordRegex: "Username must contain only letters, numbers, or dashes.",
            }
        }
    });
});


$(function() {
    $(".form-create-account").validate({
        rules: {
            "email": {
                required: true,
                emailRegex: true,
            },
            "password": {
                required: true,
                passwordRegex: true
            },
            "password_confirm": {
              required: true,
              equalTo : '[name="password"]'
            },
            "phone": {
              required: true,
            },
            "last_name": {
              required: true,
              minlength: 3,
            },
            "year": {
              required: true,
            },
            "month": {
              required: true,
            },
            "day": {
              required: true,
            },
            "first_name": {
              required: true,
              minlength: 3,
            },
            "language_preference": {
              required: true,
            }

        },
        messages: {
            "email": {
                required: "You must enter a login name",
                emailRegex: "Login format not valid"
            },
            "password": {
                required: "Your password a not valid",
            },
            "password_confirm": {
              required: "Wrong password",
              equalTo : "Enter the correct password"
            },
            "phone": {
              required: "Required field",
            },
            "last_name": {
              required: "Required field",
              minlength: "Enter your full last name",
            },
            "year": {
              required: "Required field",
            },
            "month": {
              required: "Required field",
            },
            "day": {
              required: "Required field",
            },
            "first_name": {
              required: "Required field",
              minlength: "Enter your full name",
            },
            "language_preference": {
              required: "Required field",
            }
        }
    });
});

$(function() {
    $(".phone").intlTelInput({
      allowDropdown: true,
        // options here
    });
});

$(function() {
    $(".form-user-address").validate({
        rules: {
            "email": {
                required: true,
                emailRegex: true,
            },
            "phone": {
              required: true,
            },
            "last_name": {
              required: true,
              minlength: 3,
            },
            "first_name": {
              required: true,
              minlength: 3,
            },
            "language_preference": {
              required: true,
            },
            "street": {
              required: true,
            },
            "apt": {
              required: true,
            },
            "address": {
              required: true,
            },
            "city": {
              required: true,
            },
            "zip_code": {
              required: true,
            },
            "province": {
              required: true,
            },
        },
        messages: {
            "email": {
                required: "You must enter a login name",
                emailRegex: "Login format not valid"
            },
            "phone": {
              required: "Required field",
            },
            "last_name": {
              required: "Required field",
              minlength: "Enter your full last name",
            },
            "first_name": {
              required: "Required field",
              minlength: "Enter your full name",
            },
            "language_preference": {
              required: "Required field",
            },
            "street": {
              required: "Required field",
            },
            "apt": {
              required: "Required field",
            },
            "address": {
              required: "Required field",
            },
            "city": {
              required: "Required field",
            },
            "zip_code": {
              required: "Required field",
            },
            "province": {
              required: "Required field",
            },
        }
    });
});












