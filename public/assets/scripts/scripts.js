document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
     const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
  
   if (totalSlides > 0) {
      function showSlide(index) {
       const slider = document.querySelector('.slider');
        if (slider) {
         slider.style.transform = `translateX(-${index * 100}%)`;
      }
     }
  
     function nextSlide() {
       currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }
  
      showSlide(currentSlide);
     setInterval(nextSlide, 3000); // Moves to the next slide every 3 seconds
    }
  
   const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');
    const cart = document.querySelector('.cart');
  
    if (navbar && navLinks && authButtons && cart) {
     window.addEventListener('scroll', () => {
         if (window.scrollY > 50) {
         navLinks.classList.add('hidden');
        authButtons.classList.add('hidden');
       navbar.classList.add('shrink');
       cart.classList.add('hidden');
       } else {
          navLinks.classList.remove('hidden');
        authButtons.classList.remove('hidden');
          navbar.classList.remove('shrink');
          cart.classList.remove('hidden');
        }
      });
    }
  
    // Añadir lógica para la línea amarilla
    const yellowLine = document.querySelector('.yellow-line');
  if (yellowLine) {
     setInterval(() => {
      yellowLine.style.transform = 'translateX(0)';
       setTimeout(() => {
       yellowLine.style.transform = 'translateX(-100%)';
  }, 500); // This matches the CSS transition duration
    }, 5000); // 5 seconds interval
   }
   });

   document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var chatEntrada = document.getElementById('chat-entrada');
    var mensaje = chatEntrada.value.trim();
    
    if (mensaje !== "") {
        var chatMensajes = document.getElementById('chat-mensajes');
        
        var nuevoMensaje = document.createElement('div');
        nuevoMensaje.textContent = mensaje;
        nuevoMensaje.className = 'mensaje';
        
        chatMensajes.appendChild(nuevoMensaje);
        
        chatEntrada.value = "";
        chatMensajes.scrollTop = chatMensajes.scrollHeight;
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.buy-btn');
  
  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const productId = button.getAttribute('data-product-id');
          addToCart(productId);
      });
  });
  
  function addToCart(productId) {
      alert('Producto ' + productId + ' añadido al carrito');
  }
});