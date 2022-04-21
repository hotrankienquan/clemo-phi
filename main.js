const backTop = document.querySelector('.scroll-top');
const menu = document.querySelector('.bx-menu')
const closeMenu = document.querySelector('.bx-x')
const overplay = document.querySelector('.overplay')
const navMb = document.querySelector('.nav-mobile')
const linkTagActive = document.querySelector('.active')
const tags = document.querySelectorAll('#work-page .nav__work-page li a')
const coverWorkItem = document.querySelector('.cover__work-item')
const workItem1 = document.querySelector('.cover__work-item .work-item:nth-child(1)')
const workItem2 = document.querySelector('.cover__work-item .work-item:nth-child(2)')
const workItem3 = document.querySelector('.cover__work-item .work-item:nth-child(3)')
const workItem4 = document.querySelector('.cover__work-item .work-item:nth-child(4)')
const workItem5 = document.querySelector('.cover__work-item .work-item:nth-child(5)')
const workItem6 = document.querySelector('.cover__work-item .work-item:nth-child(6)')

const showMore = document.querySelector('.showMore')
const all = document.querySelector('#all')
const creative = document.querySelector('#creative')
const art = document.querySelector('#art')
const printDesign = document.querySelector('#print')

let currentItem = 6

window.onscroll = () => {
    if (document.documentElement.scrollTop > 700){
        backTop.style.display = 'block'
    } else {
        backTop.style.display = 'none'
    }
}
// back to top
backTop.onclick = () => {
    document.documentElement.scrollTop = 0
}
// appear menu
menu.onclick = () => {
    navMb.style.transform = 'translateX(0%)'
    overplay.style.display = 'block'
}
// close munu
closeMenu.onclick = () => {
    navMb.style.transform = 'translateX(100%)'
    overplay.style.display = 'none'
}
overplay.onclick = () => {
    navMb.style.transform = 'translateX(100%)'
    overplay.style.display = 'none'
}
// end close Menu

showMore.onclick = () => {
    const items = [...document.querySelectorAll('#work-page .work-item')]
    for( var i = currentItem; i < currentItem + 3; i++){
        items[i].style.display = 'inline-block'
    }
    currentItem += 3

    if(currentItem >= items.length){
        showMore.style.display = 'none'
    }
}

tags.forEach(tag => 
    tag.onclick = (e) => {
        e.preventDefault()
        document.querySelector('#work-page .nav__work-page ul li a.active').classList.remove('active')
        tag.classList.add('active')
        if (tag === creative){
            workItem1.style.display = 'none'
            workItem2.style.display = 'none'
            workItem3.style.display = 'none'
            workItem4.style.display = 'none'
            workItem5.style.display = 'none'
            workItem6.style.display = 'none'
            showMore.style.display = 'none'
            const workItem =
                `
                <div class="work-item">
                    <img src="./images/creative1.jpg" alt="creative1">
                </div>
                <div class="work-item">
                    <img src="./images/creative2.jpg" alt="creative2">
                </div>
                <div class="work-item">
                    <img src="./images/creative3.jpg" alt="creative3">
                </div>
                <div class="work-item">
                    <img src="./images/creative.jpg" alt="creative">
                </div>
                `
            coverWorkItem.innerHTML = workItem
        }

        if (tag === art){
            workItem1.style.display = 'none'
            workItem2.style.display = 'none'
            workItem3.style.display = 'none'
            workItem4.style.display = 'none'
            workItem5.style.display = 'none'
            workItem6.style.display = 'none'
            showMore.style.display = 'none'
            const workItem =
                `
                <div class="work-item">
                    <img src="./images/art1.jpg" alt="best1">
                </div>
                <div class="work-item">
                    <img src="./images/art2.jpg" alt="best5">
                </div>
                <div class="work-item">
                    <img src="./images/art3.jpg" alt="best1">
                </div>
                <div class="work-item">
                    <img src="./images/art.jpg" alt="best5">
                </div>
                `
            coverWorkItem.innerHTML = workItem
        }

        if (tag === printDesign){
            workItem1.style.display = 'none'
            workItem2.style.display = 'none'
            workItem3.style.display = 'none'
            workItem4.style.display = 'none'
            workItem5.style.display = 'none'
            workItem6.style.display = 'none'
            showMore.style.display = 'none'
            const workItem =
                `
                <div class="work-item">
                    <img src="./images/print1.jpg" alt="best1">
                </div>
                <div class="work-item">
                    <img src="./images/print2.jpg" alt="best5">
                </div>
                <div class="work-item">
                    <img src="./images/print3.jpg" alt="best1">
                </div>
                <div class="work-item">
                    <img src="./images/print.jpg" alt="best5">
                </div>
                `
            coverWorkItem.innerHTML = workItem
        }

        if (tag === all){
            workItem1.style.display = 'none'
            workItem2.style.display = 'none'
            workItem3.style.display = 'none'
            workItem4.style.display = 'none'
            showMore.style.display = 'inline-block'

            const workItem =
                `
                <div class="work-item">
                        <img src="./images/creative1.jpg" alt="best1">
                    </div>
                    <div class="work-item">
                        <img src="./images/art1.jpg" alt="best4">
                    </div>
                    <div class="work-item">
                        <img src="./images/print2.jpg" alt="best3">
                    </div>
                    <div class="work-item">
                        <img src="./images/art2.jpg" alt="best2">
                    </div>
                    <div class="work-item">
                        <img src="./images/creative2.jpg" alt="best5">
                    </div>
                    <div class="work-item">
                        <img src="./images/art3.jpg" alt="best6">
                    </div>
                    <div class="work-item">
                        <img src="./images/creative3.jpg" alt="best1">
                    </div>
                    <div class="work-item">
                        <img src="./images/art.jpg" alt="best4">
                    </div>
                    <div class="work-item">
                        <img src="./images/print.jpg" alt="best3">
                    </div>
                    <div class="work-item">
                        <img src="./images/print1.jpg" alt="best2">
                    </div>
                    <div class="work-item ">
                        <img src="./images/creative.jpg" alt="best5">
                    </div>
                    <div class="work-item">
                        <img src="./images/print3.jpg" alt="best6">
                    </div>
                `
            coverWorkItem.innerHTML = workItem
        }
    }
)


