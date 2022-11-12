
function f1() {
     //function to make the text bold using DOM method
     document.getElementById("textarea1").style.fontWeight = "bold";
 }
   
 function f2() {
     //function to make the text italic using DOM method
     document.getElementById("textarea1").style.fontStyle = "italic";
 }
   
 function f3() {
     //function to make the text alignment left using DOM method
     document.getElementById("textarea1").style.textAlign = "left";
 }
   
 function f4() {
     //function to make the text alignment center using DOM method
     document.getElementById("textarea1").style.textAlign = "center";
 }
   
 function f5() {
     //function to make the text alignment right using DOM method
     document.getElementById("textarea1").style.textAlign = "right";
 }
   
 function f6() {
     //function to make the text in Uppercase using DOM method
     document.getElementById("textarea1").style.textTransform = "uppercase";
 }
   
 function f7() {
     //function to make the text in Lowercase using DOM method
     document.getElementById("textarea1").style.textTransform = "lowercase";
 }
   
 function f8() {
     //function to make the text capitalize using DOM method
     document.getElementById("textarea1").style.textTransform = "capitalize";
 }
   
 function f9() {
     //function to make the text back to normal by removing all the methods applied 
     //using DOM method
     document.getElementById("textarea1").style.fontWeight = "normal";
     document.getElementById("textarea1").style.textAlign = "left";
     document.getElementById("textarea1").style.fontStyle = "normal";
     document.getElementById("textarea1").style.textTransform = "capitalize";
     document.getElementById("textarea1").value = " ";
 }

function getName(){
     const name = document.getElementById('name').value;  
     const message = document.getElementById('msg').value;  
     localStorage.setItem("Name", name);
     localStorage.setItem("Message", message);
     return;

}


      window.addEventListener('load',  () => {

          //const params =(new URL(document.location)).searchParams;
         // const name =params.get(name);
         // const message =params.get(message);
         
          //event.preventDefault();

           const name =  localStorage.getItem("Name");   
           const message =  localStorage.getItem("Message");   
       
           
     
            document.getElementById('UserName').innerHTML = name; 
            document.getElementById("UserWord").innerHTML = message;   
               
      
  
       } )
      
      
      
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     //const obj = {name: "John", age: 30, city: "New York"};
    // const myJSON = JSON.stringify(obj);
    // document.getElementById("demo").innerHTML = myJSON;

      //  var getName = () => {
         
        //  const blog= { title: "New blog", Desc : "zxzxzx", Img: "url" , time:"d" }

          // blog.title = 
         // var blogname = document.getElementById("name").value;
          // blog.Desc
        //  var blogtitle = document.getElementById("msg").value;         
            
         // const myJSON2 = JSON.stringify(blog);

         // document.getElementById("displayjson").innerHTML = myJSON2;
        
        //  document.getElementById("UserName").innerHTML= blogname;  
       //   document.getElementById("UserWord").innerHTML= blogtitle;   
             
         /* function removeTime(date = new Date()) {
               return new Date(date.toDateString());
             }
     
             
          const d = removeTime(new Date());
          document.getElementById("date").innerHTML = d;*/

     //}
     
    // const date = Date.now();           
     //document.getElementById("date").innerHTML= date;  