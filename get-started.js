// FAQ expand/collapse
const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + "px";
    btn.classList.toggle('active');
  });
});
