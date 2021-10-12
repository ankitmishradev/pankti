let pankti= document.getElementsByClassName('pankti')[0];
let panktiLogo= pankti.getElementsByTagName('img')[0];

panktiLogo.style.width= (panktiLogo.naturalWidth*panktiLogo.offsetHeight)/panktiLogo.naturalHeight+"px";



let mainNav= document.getElementsByClassName('main-navigation')[0];
let navIcons= mainNav.getElementsByTagName('img');

for (let i = 0; i < navIcons.length; i++) {
    navIcons[i].style.width= (navIcons[i].naturalWidth*navIcons[i].offsetHeight)/navIcons[i].naturalHeight+"px";
}

$('.main-navigation').find('a').mouseenter(function () {
    let prevSrc= $(this).children('img').attr('src');
    let newSrc= prevSrc.replace('radius','fill');
    $(this).children('img').attr('src', newSrc);
});

$('.main-navigation').find('a').mouseleave(function () {
    let newSrc= $(this).children('img').attr('src');
    let prevSrc= newSrc.replace('fill','radius');
    $(this).children('img').attr('src', prevSrc);
});

$('.toggle-menu-btn').click(function () {
    $('.left-sidebar').toggleClass('active');
})