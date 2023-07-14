document.addEventListener('DOMContentLoaded', function() {
  const darkModeBtn = document.getElementById("darkModeBtn");
  darkModeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const body = document.body;
    const currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  });
  
  const form = document.getElementById('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const hometownInput = document.getElementById('hometown');
  const signatures = document.querySelector('.signatures');
  const modal = document.getElementById('modal');
  const closeModalButton = document.getElementById('closeModal');
  const img = document.querySelector('.successImg');
  let width = 100;  // in pixels
  let height = 100;
  let intervalId = 0;
  const reset = () => {
  width = 100;
  height = 100;
  img.style.width = width + "px";
  img.style.height = height + "px";
};


  closeModalButton.addEventListener('click', function(event) {
    event.preventDefault();
    modal.className = 'modal-hide';
  });

  
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const hometown = hometownInput.value;
    let hasError = false;
    if (!name) {
      nameInput.classList.add('error');
      hasError = true;
    } else {
      nameInput.classList.remove('error');
    }
    if (!email || !email.includes('@') || !email.includes('.com')) {
      emailInput.classList.add('error');
      hasError = true;
    } else {
      emailInput.classList.remove('error');
    }

    if (!hometown) {
      hometownInput.classList.add('error');
      hasError = true;
    } else {
      hometownInput.classList.remove('error');
    }

    if (!hasError) {
      const newSignature = document.createElement('p');
      newSignature.textContent = `${name}, ${hometown}`;
      signatures.appendChild(newSignature);
      nameInput.value = '';
      emailInput.value = '';
      hometownInput.value = '';
      setTimeout(function() {
        modal.className = 'modal-show';
      }, 3000);

      intervalId = setInterval(function() {
        if (width < 500 && height < 500) {
          width += 10;
          height += 10;
          img.style.width = width + "px";
          img.style.height = height + "px";
        } else {
          clearInterval(intervalId);
          reset();
        }
      }, 500);

    }
  });

});