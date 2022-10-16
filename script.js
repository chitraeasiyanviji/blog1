
         const btn = document.querySelector('button');

        var getName = () => {

             var name1 = document.getElementById("demo").value;
             var name2 = document.getElementById("msg").value;
             
             
                        
          const blog= { title: "New blog", Desc : "zxzxzx", Img: "url" }
          blog.title = name1;
          console.log(blog.title);
          blog.Desc = name2;
          console.log(blog.Desc);         
     
          document.getElementById("UserName").innerHTML= blog.title;  
          document.getElementById("UserWord").innerHTML= blog.Desc;  
             
       

     }