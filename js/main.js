// JavaScript to change navbar color on scroll
window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});
// JS  Tabs 

$(document).ready(function () {
  $('#btnSQLBasics').click(function () {
    $('.content-section').removeClass('active');
    $('#sqlBasicsContent').addClass('active');
  });
  $('#btnAdvancedSQL').click(function () {
    $('.content-section').removeClass('active');
    $('#advancedSQLContent').addClass('active');
  });
  $('#btnDatabaseDesign').click(function () {
    $('.content-section').removeClass('active');
    $('#databaseDesignContent').addClass('active');
  });
  $('#btnSQLPerformanceTuning').click(function () {
    $('.content-section').removeClass('active');
    $('#sqlPerformanceTuningContent').addClass('active');
  });
  $('#btnDataModeling').click(function () {
    $('.content-section').removeClass('active');
    $('#dataModelingContent').addClass('active');
  });
});

// Javascript Counter Section
document.addEventListener('DOMContentLoaded', function () {
  function countUp(element, target) {
    let count = 0;
    const increment = target / 100;
    const duration = 3000; // 3 seconds
    const stepTime = Math.abs(Math.floor(duration / target));

    const timer = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(count) + '+';
    }, stepTime);
  }

  const counters = document.querySelectorAll('.counter h3[data-count]');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-count');
    countUp(counter, target);
  });
});

// JS Testmonials Section
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-pills-custom .nav-link');

  navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
      });
  });
});
document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.getElementById('carouselExampleCaptions');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000, 
      wrap: true 
    });
});




