addEventListener("DOMContentLoaded", () => {
    let outer_box = document.querySelector(".outer_box")
    let box = outer_box.querySelectorAll(".box img")
    let popep = document.querySelector(".pop_up")
    let popep_image = popep.querySelector("img")
    let left_shift_btn = document.querySelector(".btn_left")
    let right_shift_btn = document.querySelector(".btn_right")
    let captipon=outer_box.querySelectorAll(".box .captipon")
    let popep_caption=document.querySelector(".popep_caption")
    let close_button=document.querySelector(".close_button")
    let container=document.querySelector(".container-fluid")
    console.log(container.clientWidth)

    let img_srx;
    let image_index;

    box.forEach((a, i) => {
        a.addEventListener("click", () => {
            img_srx = a.src
            image_index = i
            popep.style.display = "block"
            popep_image.src = img_srx
            popep_caption.textContent=captipon[image_index].textContent


            console.log(img_srx)

        })
    })

    left_shift_btn.addEventListener("click", () => {
        
        if(image_index==0){
            image_index=box.length
        }
       
        image_index--
        popep_image.src = box[image_index].src
        popep_caption.textContent=captipon[image_index].textContent
        
    

    })
    right_shift_btn.addEventListener("click", () => {
       
        let length=box.length-1
        if(image_index==length){
            image_index=0
        }
        else{
            ++image_index
        }
       
        popep_image.src = box[image_index].src
        popep_caption.textContent=captipon[image_index].textContent
        

        


        
        
        

    })
    close_button.addEventListener("click",()=>{
        popep.style.display="none"
    })

 
    

})