// <!===++++++++++++++++++++++- shop page -++++++++++++++++++++++++++++->



// <!-- nav section -->


  const navItems = document.querySelectorAll(' .active');

  navItems.forEach(link => {
    link.addEventListener('click', (e) => {
      navItems.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });









// <!-- header section-->

 document.addEventListener('DOMContentLoaded', function () {
    new Splide('#product-slider', {
      type: 'loop',
      perPage: 1,
      pagination: true,
      arrows: true,
    }).mount();
  });




// <!-- logos section -->



// <!- deal of the month section -->
// col-md-5 ----{clock}----

const days = document.querySelector('.Days');
const hours = document.querySelector('.Hr');
const minutes = document.querySelector('.min');
const seconds = document.querySelector('.sec');


function updateTime() {
  const now = new Date();

  const weekend = ["01", "02", "03", "04", "05", "06", "07",];

  days.textContent = weekend[now.getDay()]

  hours.textContent = String(now.getHours()).padStart(2, '0');
  minutes.textContent = String(now.getMinutes()).padStart(2, '0');
  seconds.textContent = String(now.getSeconds()).padStart(2, '0');


}


setInterval(updateTime, 1000);
updateTime();











// ++++++++++++++++++++++++++++++++










$(document).ready(function () {
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="/images/rigth.png" alt="Previous"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="/images/lift.png" alt="Next"></button>',

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});






// <!-- new arrivals section -->




// <!-- slider section -->





// <!-- gallery section -->






// <!-- testimonials section  -->


// $(document).ready(function(){
//   $('.center').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     arrows: false,
//     dots: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
// });





// <!-- subscribe section -->

function validationEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

const Form = document.querySelector(".subscribeForm");
const input = document.querySelector(".subscribeInput");
const Btn = document.querySelector(".subscribeBtn");
const show = document.getElementById("errorMsg");

Form.addEventListener("submit", function(event) {
  const emailvalue = input.value;

  if (!validationEmail(emailvalue)) {
    event.preventDefault();
    show.textContent = "Please enter a valid email address.";
  } else {
    event.preventDefault(); // Prevent form submission if you just want the effect
    show.textContent = "";
    alert("Thank You For Subscribed");

    // Call the confetti function here
    fireConfetti();
  }
});

function fireConfetti() {
  var count = 200;
  var defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

    


    

// <!-- footer section --></div>