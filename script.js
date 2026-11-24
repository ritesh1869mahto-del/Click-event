     
        //  Create Elemente
 // let btn=document.querySelector("button")


// btn.addEventListener("click",function(){
//     let h1=document.createElement("h1")
//     h1.innerHTML="Hii i am Ritesh"
//     console.log(h1);
    

// })

            // Append Element

            //   let btn=document.createElement("button")
            //   btn.innerHTML="Download"
            //   btn.style.backgroundColor="lightblue"
            //   let main=document.querySelector("main")
            //   main.appendChild(btn)



                //   project

    // let btn= document.querySelector("button")
    // let main= document.querySelector("main")

    // btn.addEventListener("click",function(){
    //     let div= document.createElement("div")

    //     div.style.width="50px"
    //     div.style.height="50px"
    //     div.style.backgroundColor="blue"

    //     let x= Math.random()*100
    //     let y= Math.random()*100
    //     let c1=Math.floor(Math.random()*256)
    //     let c2=Math.floor(Math.random()*256)
    //     let c3=Math.floor(Math.random()*256)

    //     div.style.position="absolute"
    //     div.style.top=y+"%"
    //     div.style.left=x+"%"
    //     div.style.backgroundColor= `rgb(${c1},${2},${c3})`

    //     main.appendChild(div)
    // })


                  
    //                Task

              
     let btn= document.querySelector("button")
     let main= document.querySelector("main")
     let arr=["Hey! i am Ritesh","Sheryians is best","Sarthak bhaiya is best","Harsh bhaiya is great"]

     btn.addEventListener("click",function(){
        let h1 = document.createElement("h1")

        let x = Math.random()*80
         let y = Math.random()*80
         let rot = Math.random()*360

        let a = Math.floor(Math.random()*arr.length)
        h1.innerHTML=arr[a]
        
        h1.style.position = "absolute"
        h1.style.left = x+"%"
        h1.style.top = y+"%"
        h1.style.rotate = rot+"deg"
        main.appendChild(h1)
     })