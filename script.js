const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');

let activeNavIndex = 0;

navItems[activeNavIndex].classList.add('active');

function navigate(index) {
  if (index === activeNavIndex) {
    return;
  }

  navItems[activeNavIndex].classList.remove('active');
  navItems[index].classList.add('active');

  const direction = index > activeNavIndex ? 'right' : 'left';
  pages[activeNavIndex].classList.add(`out-${direction}`);
  pages[index].classList.add(direction, 'active');

  setTimeout(() => {
    pages[activeNavIndex].classList.remove('active', `out-${direction}`);
    pages[index].classList.remove(direction);
    activeNavIndex = index;
  }, 200);
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    pages.forEach((page, index) => {
      if (index !== activeNavIndex) {
        page.classList.remove('left', 'right', 'active', 'out-left', 'out-right');
      }
    });
  }
});
