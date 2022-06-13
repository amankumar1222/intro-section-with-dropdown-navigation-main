console.log('aasan hai');


let burger = document.getElementById('close')
let menu = document.getElementById('menu')



menu.addEventListener("click", () => {

  let navbar = document.getElementById('bar')
  navbar.style.display = "flex"
  menu.style.display = "none"
  burger.style.display = "block"

})


burger.addEventListener("click", () => {
  let navbar = document.getElementById('bar')
  navbar.style.display = "none";
  burger.style.display = "none";
  menu.style.display = "block";
})


let up = document.querySelector('.up');
let down = document.querySelectorAll('.down');

// down.addEventListener('click', ()=>{
//   console.log('i am down');

// })

down.forEach(boxd => {
  boxd.addEventListener("click", () => {
    let down1 = document.querySelectorAll('.down')[0];
    let up = document.querySelectorAll('.up')[0];
    let drops = document.querySelector('.drops')


    down1.style.display = 'none'
    if (down1.style.display = 'none') {
      up.style.display = 'inline'
      drops.style.display = 'inline'
      var x = window.matchMedia("(max-width: 750px)")
      var nav = document.querySelectorAll('.navlist li')[0]
      if(x.matches){
        nav.style.marginBottom = '130px'
        drops.style.marginTop = '50px'
      }
    }
    up.addEventListener('click', () => {
      up.style.display = 'none'

      if (up.style.display = 'none') {
        down1.style.display = 'inline'
        drops.style.display = 'none'

      }
      if(x.matches){
        nav.style.marginBottom = '0px'
        drops.style.marginTop = '0px'
      }

    })

  })
})



let downs = document.querySelector('.downs');

  downs.addEventListener("click", () => {
    let ups = document.querySelectorAll('.up')[1];
    let drop = document.querySelector('.drop')
    var nav = document.querySelector('.comp')
    var x = window.matchMedia("(max-width: 750px)")

    downs.style.display = 'none'
    if (downs.style.display = 'none') {
      ups.style.display = 'inline'
      drop.style.display = 'inline'
    }
    if(x.matches){
      nav.style.marginBottom = '100px'
      drop.style.marginTop = '50px'
    }
    ups.addEventListener('click', () => {
      ups.style.display = 'none'

      if (ups.style.display = 'none') {
        downs.style.display = 'inline'
        drop.style.display = 'none'

      }
      if(x.matches){
        nav.style.marginBottom = '0px'
        drop.style.marginTop = '0px'
      }

    })

  })








