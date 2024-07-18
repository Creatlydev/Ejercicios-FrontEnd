let scrollBtn = document.getElementById('btn');
window.onscroll = () => {
  let scrollTopPos = document.documentElement.scrollTop;

  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrollValue = Math.round((scrollTopPos * 100) / calcHeight);

  scrollTopPos > 200
    ? scrollBtn.classList.add('show')
    : scrollBtn.classList.remove('show');

  scrollBtn.style.background = `conic-gradient(
    #eb621e ${scrollValue}%, #ccc ${scrollValue}% 
  )`;
};

scrollBtn.onclick = () => {
  document.documentElement.scrollTo({
    behavior: 'smooth',
    top: 0,
  });
};
