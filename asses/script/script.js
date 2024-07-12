let _li = document.querySelectorAll('._li')
let _part2 = document.getElementById('_part2')
let _part3 = document.getElementById('_part3')
let _menu = document.getElementById('_menu')
let _main = document.getElementById('_main')
let _menuBar = document.getElementById('_menuBar')
let _grayBox = document.getElementById('_grayBox')
let _scrollBtnBack = document.getElementById('_scrollBtnBack')
let _txt1 = document.getElementById('_txt1')
let _txt2 = document.getElementById('_txt2')
let _sec = document.getElementById('_sec')
let _img =  document.querySelectorAll('._img')
let _mouseMove=  document.getElementById('_mouseMove')
let _box = document.getElementById('_box')


//boder on menu -fixed
_li.forEach(val => {
    val.addEventListener('mouseenter', () => {
        val.children[0].children[1].classList.add('translate-x-0')
        val.children[0].children[1].classList.remove('translate-x-[50%]')
        val.children[0].children[2].classList.remove('translate-x-[50%]')
        val.children[0].children[2].classList.add('translate-x-[100%]')
        val.children[0].children[1].classList.remove('opacity-0')
        val.children[0].children[2].classList.remove('opacity-0')
    })
})

_li.forEach(val => {
    val.addEventListener('mouseleave', () => {
        val.children[0].children[1].classList.remove('translate-x-0')
        val.children[0].children[1].classList.add('translate-x-[50%]')
        val.children[0].children[2].classList.remove('translate-x-[100%]')
        val.children[0].children[2].classList.add('translate-x-[50%]')
        val.children[0].children[1].classList.add('opacity-0')
        val.children[0].children[2].classList.add('opacity-0')

    })
})


//parallax

let _offsetTop2 = _part2.offsetTop
let _offsetTop3 = _part3.offsetTop

window.addEventListener('scroll', () => {  
    let _scroll = window.scrollY   
    //scroll and change menu
    if (_scroll  >= _offsetTop2) {        
        _menu.style.height = 90 + 'px'
        _menu.style.backgroundColor = '#2d2d2d'         
        _img.forEach(val=>{
             val.classList.add('opacity-1')
             val.classList.remove('opacity-0')
        })          
    } else {
        //scroll and change menu
        _menu.style.height = 120 + 'px'
        _menu.style.backgroundColor = 'transparent'           
      }


//horizantall scroll on part2
     if((_scroll  >= _offsetTop2) && ((_scroll) <= _offsetTop3 )){
         _sec.classList.add('fixed','top-[300px]') 
         _sec.classList.remove('relative')    
         let _h = _offsetTop3 - _offsetTop2
         let _s = _scroll - _offsetTop2
         let _percent = ((_s * 100 ) / _h)      
         _sec.style.transform = `translateX(-${_percent}%)` 
          _sec.previousElementSibling.classList.remove('hidden')
     }else{
         _sec.classList.remove('fixed','top-[300px]') 
         _sec.classList.add('relative')  
          _sec.previousElementSibling.classList.add('hidden')           
     }

    //back to first 100vh
    if (_scroll > (_offsetTop2 / 10)) {
        _scrollBtnBack.classList.remove('translate-y-[2000%]')
    } else {
        _scrollBtnBack.classList.add('translate-y-[2000%]')
    }
    //text scroll on first 100vh
    _txt1.style.top = -(_scroll *1.5) + '%'
    _txt2.style.bottom = -(_scroll * 1.5) + '%'

    //js animation on part4
    if(_scroll+200 > _offsetTop3){
        _part3.children[0].classList.add('translate-x-[0%]')
        _part3.children[0].classList.remove('translate-x-[-1000%]')
        _part3.children[1].classList.add('translate-x-[0%]')
        _part3.children[1].classList.remove('translate-x-[1000%]')
       
    }

})



//menu bar on mob
_menuBar.style.height = _main.offsetHeight + 'px'

function _myMenu() {
    _menuBar.style.right = '0'
    _main.style.transform = 'translateX(-30%)'
    _grayBox.classList.remove('hidden')
    _grayBox.classList.add('flex')
}

function _myMenuReset() {
    _menuBar.style.right = '100%'
    _main.style.transform = 'translateX(0)'
    _grayBox.classList.add('hidden')
    _grayBox.classList.remove('flex')
}

//scroll 100vh in first 100vh

// part1
function _scrollBtn() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    })
}

//part2
_scrollBtnBack.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

//drag and drop on part2

let _xNew = 0
let _xOld = 0

_part2.addEventListener('mousedown',(event)=>{
    _xOld = event.layerX
    _sec.style.transform = 'scaleY(0.95)'   
    _sec.classList.remove('duration-[5s]')
   
})
_part2.addEventListener('mouseup',(event)=>{
    _xNew = event.layerX
    _sec.style.transform = 'scaleY(1)'
    console.log(3333);
    if(
        _xNew > _xOld
    ){
        _sec.style.transform = 'translateX(-80%)'        
        _sec.classList.add('duration-[1s]')
        setTimeout(() => {
         _sec.classList.remove('duration-[1s]')

        }, 50000);
       
    }else{
         _sec.style.transform = 'translateX(0%)'
         _sec.classList.add('duration-[1s]')
         setTimeout(() => {
          _sec.classList.remove('duration-[1s]')
 
         }, 50000);
    }
})


//mouse

_box.addEventListener('mouseenter',(e)=>{ 
    _mouseMove.classList.remove('opacity-0')  

})


_box.addEventListener('mouseleave',(e)=>{
    _mouseMove.classList.add('opacity-0')    
})


_box.addEventListener('mousemove',(e)=>{       
    let _x = e.clientX
    let _y = e.clientY
     _mouseMove.style.left = _x + 'px'
     _mouseMove.style.top = _y + 'px'
     _mouseMove.classList.add('opacity-1')  
   })    

   
    
