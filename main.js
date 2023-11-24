const controller_Contraste = document.querySelector('.controller-Contraste')
const bodye = document.querySelector('body')
const logotipo = document.querySelector('#logotipo')
const txt = document.querySelectorAll('.txt')
const quadrado1 = document.querySelector('.quadrado-1')
const seta_controller = document.querySelectorAll('.seta-controller')
const footer = document.querySelector('footer')
const cards = document.querySelectorAll('.cards-FAQ')
const txts = document.querySelectorAll('.txts')
const navBar = document.querySelector('.nav-bar')
const menuMobile = document.querySelector('.menu-mobile')


function ManipularEventos()
{

   seta_controller.forEach(percorrer => {

      percorrer.addEventListener('click', () => {
       
          txts.forEach(percorrertexto => {
            percorrertexto.remove()
            
          })
   
          footer.style.marginTop = '58%'
          
          
          cards.forEach(percorrerCards => {
            percorrerCards.style.marginTop = '12%'
          })
   
         
     
   
    
          
          
         
   
      })
   })
   
   
   
   controller_Contraste.addEventListener('click', () => {
     
      bodye.classList.toggle('dark')
   
      if(bodye.classList.contains('dark'))
      {
     
         logotipo.src = "/Assets/modo dark.png"
         txt.forEach(percorrer => {
            percorrer.style.color = '#FFF'
         })
   
         txts.forEach(percorrer => {
            percorrer.style.color ='#413e46'
         })
   
         cards.forEach(percorrerCard => {
            percorrerCard.style.backgroundColor = 'rgb(223, 223, 223)'
   
         })
        
      
   
     
        
   
      }
   
      else{
       
         logotipo.src= "/Assets/logotipo.png"
         txt.forEach(percorrer => {
            percorrer.style.color = '#413e46'
         })
   
         cards.forEach(percorrerCard => {
            percorrerCard.style.backgroundColor = '#413e46'
         })
   
         txts.forEach(percorrer => {
            percorrer.style.color ='#FFF'
         })
       
         
   
   
       
       
   
      }
      
   
   
    
       
   
   })
   

}

function MenuMobile()
{

 menuMobile.addEventListener('click', () => {
   navBar.classList.toggle('open')
 })


}

ManipularEventos()
MenuMobile()




