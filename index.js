function sideMenuOpen() {
    document.getElementById('sideMenu').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('open');
    document.querySelector('body').classList.add('overflow-hidden')
}
function sideMenuClose() {
    document.getElementById('sideMenu').classList.toggle('open')
    setTimeout(() => {
        document.getElementById('overlay').classList.toggle('open');
    }, 50)
    document.querySelector('body').classList.remove('overflow-hidden')
}