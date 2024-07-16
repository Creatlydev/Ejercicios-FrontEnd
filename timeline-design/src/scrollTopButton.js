export function listenScroll() {
    const scrollBtn = document.getElementById('scroll-btn')

    window.onscroll = function () {
        const scrollTop = document.documentElement.scrollTop > 100 || document.body.scrollTop > 100
        if (scrollTop) {
            scrollBtn.classList.add('show')
        } else {
            scrollBtn.classList.remove('show')
        }
    }

    scrollBtn.onclick = function () {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
}
