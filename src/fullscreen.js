
const canvas = document.querySelector('canvas.webgl')

// Toggle fullscreen ON / OFF + comp with Safari
window.addEventListener('dblclick', () => {
    // console.log('double click')
const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

    if(!fullscreenElement)
    {
        if(canvas.requestFullscreen)
        {
             canvas.requestFullscreen()
        }
        else if(canvas.webkitRequestFullscreen)
        {
            canvas.webkitRequestFullscreen()
        }       
    }
    else
    {        
        if(document.exitFullscreen)
        {
             document.exitFullscreen()
        }
        else if(document.webkitExitFullscreen)
        {
            document.webkitExitFullscreen()
        }
       
    }
})
// END FULLSCREEN