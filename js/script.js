const iconTrigger = document.getElementById("icontrigger")
const icon = document.getElementById("icon")
const menuContainer = document.getElementById("menucontainer")

const elementmainContainer = document.querySelector("main-container")




iconTrigger.addEventListener("click", () =>{
    if(icon.classList.contains('fa-bars')){
        

        icon.classList.remove('fa-bars')
        icon.classList.add('fa-close')

        menuContainer.classList.add('show')
        menuContainer.classList.remove('hide')

        window.addEventListener("scroll", () =>{

            if(scrollY >= 50){

                menuContainer.classList.add('hide')
                menuContainer.classList.remove('show')

                menuContainer.style.opacity = "1"
                icon.classList.add('fa-bars')
                icon.classList.remove('fa-close')


            }


           
 
        })

        
    }

    else{

        icon.classList.add('fa-bars')
        icon.classList.remove('fa-close')

        menuContainer.classList.remove('show')
        menuContainer.classList.add('hide')

       
       
    }
})