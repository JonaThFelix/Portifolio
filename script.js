$(document).ready(function () {
  // Rolar para baixo início do script da barra de navegação fixa
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
   // Rola para baixo o fim do script da barra de navegação fixa

    // Rola para cima Início do script do botão
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
    // Rola para cima Fim do script do botão

    // Elementos Fade In & Fade Out no início do script Scroll
    $(".fadein").each(function (i) {
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).addClass("showme");
      }
      if (bottom_of_window < bottom_of_element) {
        $(this).removeClass("showme");
      }
      // Elementos Fade In & Fade Out no final do script Scroll
    });
  });

  // Rola para cima Início do script do botão
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });
  // Rola para cima Fim do script do botão

  // Início do script de animação de digitação
  var typed = new Typed(".typing", {
    strings: ["Estudo ADS 💻", "sou de Recife/PE🌵", "adoro Jogos 🎮 ", "adoro programar 🧑‍💻"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing2", {
    strings: ["Estudo ADS 💻", "sou de Recife/PE🌵", "adoro Jogos 🎮 ", "adoro programar 🧑‍💻"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // alterna menu/início do script da barra de navegação
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  // alterna menu/final do script da barra de navegação

  // início do script carrossel coruja
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
  // fim do script carrossel coruja
});
