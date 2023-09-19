let mainInfo = document.querySelectorAll ('.categori__block');


mainInfo.forEach (buttonEvent => {
    buttonEvent.addEventListener ('click', function (event){
        if (event.target.closest('.categori__image')){
            buttonEvent.classList.toggle ('_active')
        }

        if (!event.target.closest ('.categori__image') ){
            buttonEvent.classList.remove ('_active')
        }  

    }) 
})
