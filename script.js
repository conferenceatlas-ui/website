document.addEventListener('DOMContentLoaded', () => {
  const logo   = document.getElementById('logo');
  const stack  = document.querySelector('.stack');   // the wrapper we hide/show
  const banner = document.getElementById('banner');

  // Wait 1s, show logo
  setTimeout(() => {
    logo.classList.remove('hidden');
    logo.classList.add('show');

    // Keep logo 3s, then spin out
    setTimeout(() => {
      logo.classList.remove('show');
      logo.classList.add('hide');

      // After spin-out (0.8s), hide logo and reveal content
      setTimeout(() => {
        logo.classList.add('hidden');
        logo.classList.remove('hide');

        // Show the content stack (banner + boxes)
        stack.classList.remove('hidden');
        stack.classList.add('fade-in');    // fade in the whole block

        // Optional: add a separate fade on the banner too
        banner.classList.add('fade-in');

      }, 800);
    }, 3000);
  }, 1000);
});
