// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    q.addEventListener('click', () => {
      const isOpen = a.style.display === 'block';
      document.querySelectorAll('.faq-a').forEach(ans => ans.style.display = 'none');
      if (!isOpen) a.style.display = 'block';
    });
  });
  