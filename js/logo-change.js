window.addEventListener('scroll', function () {
  const header = document.getElementById('header-sticky');
  const logoDesktop = document.getElementById('main-logo');
  const logoMobile = document.getElementById('logo-mobile-main');

  if (!header) return;

  if (window.scrollY > 0) {
    if (logoDesktop) logoDesktop.src = 'img/logo/logo-nocolor.svg';
    if (logoMobile) logoMobile.src = 'img/logo/logo-mobile-nocolor.svg';
  } else {
    if (logoDesktop) logoDesktop.src = 'img/logo/logo.svg';
    if (logoMobile) logoMobile.src = 'img/logo/logo-mobile-dark.svg';
  }
});