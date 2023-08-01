var accordQues=document.querySelectorAll(".accord-ques");
// console.log(accordQues);
accordQues.forEach(function(ques){
    // console.log(ques);
   
    ques.addEventListener("click",function(){
        // console.log( ques.addEventListener);
    

        if( ques.nextElementSibling.classList.contains("none")){
            
            ques.nextElementSibling.classList.remove("none");
            ques.querySelector("i").style.transform="rotate(180deg)";
            
        

        }
       else{
        ques.nextElementSibling.classList.add("none");
        ques.querySelector("i").style.transform="rotate(0deg)";
        

        
       }
       
    })
})

// var icon=document.querySelectorAll(".icon");
// icon.forEach(function(e){
//     e.addEventListener("click",function(){
//         if( e.classList.contains("rotate")) {
//             e.classList.remove("rotate");
//         }
//         else{
//             e.classList.add("rotate");

            
//         }
//     })
// })