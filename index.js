

d = 0;
function mode() {
    let head = document.querySelector(".navhead");
    let conn = document.querySelector(".conn");
    let mode = document.querySelector("#modde");
    let bar = document.querySelector("#bars");
    let box = document.querySelector(".scontainer .sbox");
    let foot = document.querySelector(".head");
    console.log("mode");
    
    if(d === 0){
        

        box.style.color="rgb(201, 119, 201)";
        box.style.boxShadow = "0px 0px 10px black";
        
        head.style.color = "black";
        foot.style.color = "rgb(201, 119, 201)";


        conn.style.borderColor = "black";
        conn.style.color = "black";
        mode.style.color = "purple";
        bar.style.color = "red";



    
        document.body.style.backgroundColor = "white";
        d =  1;

    }else{
        
        
        
        box.style.border = "1px solid whitesmoke";
        box.style.boxShadow  = "none";

        conn.style.borderColor = "whitesmoke"
        conn.style.color = "whitesmoke"

        head.style.color = "whitesmoke";
        foot.style.color = "whitesmoke";

        mode.style.color = "white";
        bar.style.color = "white";



        document.body.style.backgroundColor = "rgb(32, 6, 68)";
        
        d = 0;
    }

}
let f = 0;
function sidebar(){
    
    let sidebar = document.querySelector(".sbar");
    if(f == 1){
        sidebar.style.width = "0px";
        sidebar.style.opacity= "0"

        sidebar.style.transition = "0.5s";
        f = 0;
    }else{
        sidebar.style.width = "250px";
        sidebar.style.opacity= "1"

        sidebar.style.transition = "0.5s";
        f = 1;
        
    }


}
f = 0;
window.addEventListener('scroll',()=>{
    var nav = document.querySelector(".navbar");

    if(window.scrollY>0 && f== 0){
        nav.style.backgroundColor = "#d09beb";
        nav.style.transition = "0.5s";

    }else{
        nav.style.backgroundColor = "transparent";
        nav.style.transition = "0.5s";

    }
    
})
{/*window.addEventListener("click", ()=>{
    let head = document.querySelector(".navhead");
    let conn = document.querySelector(".conn");
    

    if(d === 0){
        head.style.color = "black";
        conn.style.borderColor = "black";
        conn.style.color = "black";
        moon.style.display = "none";
        sun.style.display = "none";

        



        document.body.style.backgroundColor = "white";
        d =  1;

    }else{
        conn.style.borderColor = "whitesmoke"
        conn.style.color = "whitesmoke"

        head.style.color = "whitesmoke";
        document.body.style.backgroundColor = "purple";
        sun.style.display = "block";
        moon.style.display = "none";


        

        d = 0;
    }

})*/}
