// Smooth hover sound / effect ready
const cards = document.querySelectorAll('.tool-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = "0.3s ease";
  });

  card.addEventListener('mouseleave', () => {
    card.style.transition = "0.3s ease";
  });
});

// Button click animation
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 150);
  });
});
