
// Control variable
let toggleNavStatus = false

// Functions
function slideDiv(e){
    const sliderDivs = document.querySelectorAll('.slide-in')     
    sliderDivs.forEach(sliderDiv => {
            const slideInAt = (window.scrollY + window.innerHeight) - sliderDiv.offsetHeight/2
            if(slideInAt > sliderDiv.offsetTop)
                    sliderDiv.classList.add('active')
        })
}
window.addEventListener('scroll', slideDiv)

//===============  Nav Bar: Menu Toggle ===================
const toggleNav = function(){
        // Obtem Cabeçalho nav e cada link do menu
    let getHeader = document.querySelector("#cabecalho")
    let getNavBar = document.querySelector("#menu")
    let getNavBarUl = document.querySelector("#menu ul")

    if(toggleNavStatus === false){
        getHeader.style.display = "grid"
        getNavBar.style.display = "inline"
        getNavBarUl.style.display = "grid"

        getHeader.style.gridTemplateColumns = 'auto auto'
        getHeader.style.gridTemplateRows = 'auto auto'
        getNavBar.style.gridRowStart = "2"

        toggleNavStatus = true;
    }else if(toggleNavStatus === true){
        getHeader.style.display = "flex"
        getNavBar.style.display = "none"
        getNavBarUl.style.display = "flex"
        
        toggleNavStatus = false;
    }
}   


let anchor = document.querySelectorAll('a[href^="#"]')

for (let item of anchor) {
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}

// =================== Slider ============================
(function(){
    let listEl = document.querySelector(".home-grid.products-grid.products-grid--max-4")
    console.log(listEl)
    let btnLeftEl = document.querySelector('#left-btn')
    let btnRightEl = document.querySelector('#right-btn')
    let count = 0

    function slideImages(dir){
        let images = listEl.querySelectorAll(".item")
    
        // var margin = images[0].currentStyle || window.getComputedStyle(images[0]);

        // display("Current marginTop: " + style.marginTop);
        // console.log(images[0].offsetWidth)
        // console.log(count * (images[0].offsetWidth ))

        dir === "left" ? count++ : count--
        listEl.style.left = count * images[0].offsetWidth + (count * 8) +'px'
        
        // console.log(listEl.style.left)
        btnLeftEl.style.display = count < 0 ? "block" : "none"
        btnRightEl.style.display = count > 4-images.length ? "block" : "none"
    }

    btnLeftEl.addEventListener("click", function(e) {
        slideImages("left");
    });
    btnRightEl.addEventListener("click", function(e) {
        slideImages("right");
    });
})()

// function moverElementos(elem, start, end, passo, callback){
//     const newStart = start - passo
//     if(newStart >= fim){
//         elem.style.right = newStart +'px'
//         setTimeout(() => moverElementos(elem, newStart, end, passo, callback), 7)
//     }else{
//         callback()
//     }
// }