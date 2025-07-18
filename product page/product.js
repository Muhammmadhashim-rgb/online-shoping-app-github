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

  // Quantity controls
    const qtyInput = document.getElementById('qty-input');
    document.getElementById('qty-minus').addEventListener('click', () => {
      let val = parseInt(qtyInput.value);
      if(val > 1) qtyInput.value = val - 1;
    });
    document.getElementById('qty-plus').addEventListener('click', () => {
      let val = parseInt(qtyInput.value);
      if(val < 100) qtyInput.value = val + 1;
    });

    // Size selection toggle
    const sizeButtons = document.querySelectorAll('.size-btns .btn');
    sizeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        sizeButtons.forEach(b => {
          b.classList.remove('selected');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('selected');
        btn.setAttribute('aria-pressed', 'true');
      });
    });

    // Countdown timer
    const countdownElement = document.getElementById('countdown-timer');

    // Set end time 6 minutes from page load for demonstration
    let countdownEnd = new Date(new Date().getTime() + 6 * 60 * 1000);

    function updateTimer() {
      let now = new Date().getTime();
      let distance = countdownEnd - now;

      if(distance < 0) {
        countdownElement.textContent = "00 : 00 : 00 : 00";
        clearInterval(timerInterval);
        return;
      }

      let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((distance / (1000 * 60)) % 60);
      let seconds = Math.floor((distance / 1000) % 60);
      let millis = Math.floor((distance % 1000) / 10);

      countdownElement.textContent =
        String(hours).padStart(2,'0') + " : " +
        String(minutes).padStart(2,'0') + " : " +
        String(seconds).padStart(2,'0') + " : " +
        String(millis).padStart(2,'0');
    }

    const timerInterval = setInterval(updateTimer, 30);
    updateTimer();



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





// model
  // Quantity control and subtotal update script
    const decreaseBtn = document.getElementById('decreaseQty');
    const increaseBtn = document.getElementById('increaseQty');
    const quantityInput = document.getElementById('quantityInput');
    const subtotalAmount = document.getElementById('subtotalAmount');
    const wrapCheckbox = document.getElementById('wrapProduct');

    // Base product price and wrap fee
    const productPrice = 14.8;
    const wrapFee = 10.0;

    function updateSubtotal() {
      let qty = parseInt(quantityInput.value, 10);
      if (isNaN(qty) || qty < 1) {
        qty = 1;
        quantityInput.value = qty;
      } else if (qty > 99) {
        qty = 99;
        quantityInput.value = qty;
      }
      let subtotal = qty * productPrice;
      if (wrapCheckbox.checked) {
        subtotal += wrapFee;
      }
      subtotalAmount.textContent = '$' + subtotal.toFixed(2);
    }

    decreaseBtn.addEventListener('click', () => {
      let currentQty = parseInt(quantityInput.value, 10) || 1;
      if (currentQty > 1) {
        quantityInput.value = currentQty - 1;
        updateSubtotal();
      }
    });

    increaseBtn.addEventListener('click', () => {
      let currentQty = parseInt(quantityInput.value, 10) || 1;
      if (currentQty < 99) {
        quantityInput.value = currentQty + 1;
        updateSubtotal();
      }
    });

    quantityInput.addEventListener('change', () => {
      updateSubtotal();
    });

    wrapCheckbox.addEventListener('change', () => {
      updateSubtotal();
    });

    // Initialize subtotal when modal shown
    const shoppingCartModal = document.getElementById('shoppingCartModal');
    shoppingCartModal.addEventListener('shown.bs.modal', () => {
      updateSubtotal();
      quantityInput.focus();
    });

    // Optional: Handle Checkout and View Cart click events
    document.getElementById('checkoutBtn').addEventListener('click', () => {
      alert('Proceeding to checkout...');
    });

    document.getElementById('viewCartLink').addEventListener('click', (e) => {
      e.preventDefault();
      alert('Navigating to the full cart page...');
    });

    const mainQtyInput = document.getElementById('qty-input');
document.getElementById('qty-minus').addEventListener('click', () => {
  let val = parseInt(mainQtyInput.value, 10) || 1;
  if (val > 1) mainQtyInput.value = val - 1;
});

document.getElementById('qty-plus').addEventListener('click', () => {
  let val = parseInt(mainQtyInput.value, 10) || 1;
  if (val < 100) mainQtyInput.value = val + 1;
});
