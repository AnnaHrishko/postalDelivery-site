
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
    }, "");
});

$(function() {
    $.validator.addMethod("passwordRegex", function(value, element) {
        return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(value);
    }, "");
});

function ValidatePassword() {
  var rules = [{
      Pattern: "[A-Z]",
      Target: "UpperCase"
    },
    {
      Pattern: "[a-z]",
      Target: "LowerCase"
    },
    {
      Pattern: "[0-9]",
      Target: "Numbers"
    },
    {
      Pattern: "[!@@#$%^&*]",
      Target: "Symbols"
    }
  ];
  var password = $(this).val();

  $("#Length").removeClass(password.length > 8 ? "glyphicon-remove" : "glyphicon-ok");
  $("#Length").addClass(password.length > 8 ? "glyphicon-ok" : "glyphicon-remove");

  for (var i = 0; i < rules.length; i++) {

    $("#" + rules[i].Target).removeClass(new RegExp(rules[i].Pattern).test(password) ? "glyphicon-remove" : "glyphicon-ok"); 
    $("#" + rules[i].Target).addClass(new RegExp(rules[i].Pattern).test(password) ? "glyphicon-ok" : "glyphicon-remove");
      }
    }

    $(document).ready(function() {
      $(".password").on('keyup', ValidatePassword)
    });



$(function() {
    $(".login-form-valid").validate({
        rules: {
            "email": {
                required: true,
                emailRegex: true,
            },
            "password": {
                required: true,
                passwordRegex: true,
            },
        },
        messages: {
            "email": {
                required: "You must enter a email name",
                emailRegex: "Login format not valid"
            },
            "password": {
                required: "",
                passwordRegex: "",
            },
        },
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
                passwordRegex: true,
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

        },
        messages: {
            "email": {
                required: "You must enter a email name",
                emailRegex: "Login format not valid"
            },
            "password": {
                required: "",
                passwordRegex: "",
            },
            "password_confirm": {
              required: "Password is reguired",
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
        },
    });
});

$(function() {
    $(".phone").intlTelInput({
      allowDropdown: true,
      initialCountry: "us",
      separateDialCode: true,
      preferredCountries: ["fr", "us", "gb"],

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
            "street": {
              required: true,
            },
            "apt": {
              required: true,
            },
            "address": {
              required: true,
            },
            "province": {
              required: true,
            },
        },
        messages: {
            "email": {
                required: "You must enter a email name",
                emailRegex: "Email format not valid"
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
            "street": {
              required: "Required field",
            },
            "apt": {
              required: "Required field",
            },
            "address": {
              required: "Required field",
            },
            "province": {
              required: "Required field",
            },
        }
    });
});


$(".gumb").click(function(){
  $(this).toggleClass('active');
  $(".nav-menu").slideToggle(3000)
});



    $(".click-user-profile").click(function(){
        $('.profile-create-wrap .w33').hide()
        $(".profile-create-menu li").removeClass('active')
        $(".user-profile").show()
        $(this).addClass('active')
        return false
      });

      $(".click-send-form").click(function(){
        $('.profile-create-wrap .w33').hide()
        $(".profile-create-menu li").removeClass('active')
        $(".send-form").show()
        $(this).addClass('active')
        return false
      });

      $(".click-deliver-to").click(function(){
        $('.profile-create-wrap .w33').hide()
        $(".profile-create-menu li").removeClass('active')
        $(".deliver-to").show()
        $(this).addClass('active')
        return false
      });  


$('.click-dots').click(function(){
  $(this).find('.dots-submenu').toggleClass('active')
})



$(document).ready(function(){
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };
var w;
w=$('#canvas_width').innerWidth();
console.log(w)

document.addEventListener("mousedown", start);
document.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

resize();

function resize() {
  ctx.canvas.width = "100%";
  ctx.canvas.height = 400;
}
function reposition(event) {
  coord.x = event.clientX - canvas.offsetLeft;
  coord.y = event.clientY - canvas.offsetTop;
}
function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}
function stop() {
  document.removeEventListener("mousemove", draw);
}
function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#000";
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
};
})


$('.modile-delivery-price .accordion-title').click(function(){
  $(this).next().slideToggle(200)
})


function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check1')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check2')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}













