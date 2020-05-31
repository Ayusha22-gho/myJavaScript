
function upDate(previewPic){
    let previews = document.querySelectorAll('.preview') 
    for(let preview of previews) { 
      preview.addEventListener('mouseover', function(e) { 
        let message = document.querySelector('#image')
        message.style.background = `url(${this.src})`
        message.style.backgroundSize = 'contain'
        
      })
    } document.getElementById('image').innerHTML=previewPic.alt;
      
        }
    
        function unDo(){
         
    document.getElementById('image').style.background='none'
        document.getElementById('image').style.backgroundColor='#8e68ff'; document.getElementById('image').innerHTML='Hover over an image to diplay here'
            
        }