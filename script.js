let storedNotes = JSON.parse(localStorage.getItem("tweets"));

let tweets = storedNotes ? storedNotes : [];
let newarea=document.getElementById('new-area');
let v = document.getElementById("area_tweet1");
// add tweet 
document.getElementById("btn-tweet").addEventListener("click",function(){

  let valua_area = document.getElementById("area_tweet1").value;
  let name = document.getElementById("name_user").innerHTML;
  let img_name = document.getElementById("img-name").src;
  let addimg = document.getElementsByClassName('imgfile')[0].src;  
  
 
  console.log(valua_area);
  console.log(name);
  if(valua_area ==""  )
   {
       alert("what's happening");

   }
   else{
       
  tweets.unshift({name:name,valua_area:valua_area,img_name:img_name,addimg:addimg});
  document.getElementById("area_tweet1").value="";
   
    
   showtweet();
    
  }

   
});
// start btn follow 
let follow = document.getElementsByClassName("f2");
for(let j =0 ; j< follow.length;j++)
{
    follow[j].addEventListener("click",function(){
        if(follow[j].innerHTML !="Following"){
            follow[j].innerHTML="Following";
            follow[j].setAttribute('style','background-color:rgb(212, 161, 218);color:white');
            let count_foll =document.getElementById("f-user").innerHTML;
            console.log(count_foll++);
            document.getElementById('f-user').innerHTML=count_foll;
        }

        else
        {    follow[j].innerHTML="Follow";
            let count_foll =document.getElementById("f-user").innerHTML;
            console.log(count_foll--);
            document.getElementById('f-user').innerHTML=count_foll;
            follow[j].setAttribute('style','background-color:rgb(255, 255, 255);color:black')

        }
    });
}
//end
// click of button )(nav)
let nav_head = document.getElementsByClassName('nav-head');

for (let k =0 ; k < nav_head.length;k++ )
{
    nav_head[k].addEventListener("click",function()
    {   console.log('hello');
        let v = nav_head[k].textContent;
        console.log(v);
        document.getElementById('word-nav').innerHTML=v;

    });
}

// action upload image '
let img_file= document.getElementById('file-input');
let img_f =document.createElement('img');
let div_img = document.createElement('div');
div_img.className="divimg";
document.getElementsByClassName("imgg")[0].appendChild(div_img);
img_f.className="imgfile";
 div_img.appendChild(img_f);
let f2 = document.querySelector(".imgfile");

img_file.addEventListener('change',function(){
     // create element 
     let fil = this.files[0];
     
    
    if(fil)
    {
       let reader = new FileReader()
       reader.addEventListener('load',function(){
           
           f2.setAttribute("src",this.result);
           f2.setAttribute('style','width:100px;height:100px;border-radius:0%')
          
       });
       reader.readAsDataURL(fil);
      
       
    }
    


     
});


function showtweet()
{ newarea.innerHTML="";
  tweets.map(function(tweett,i)
  {   
      let stylee = document.createElement('style');

      let oere_bmm= document.createElement("DIV");
        oere_bmm.className="oero1"+i;
      let div2=document.createElement("DIV");
      div2.textContent=tweett.img_name;

      let div3 =document.createElement("DIV");
      div3.className="span-name";
      let name2=document.createElement("span");
      name2.textContent=tweett.name;
      name2.setAttribute('style','font-weight:bold');
 
      div3.appendChild(name2);
      // add image 
      //let add_img = document.getElementsByClassName('imgfile')[0].textContent;
     
      console.log(name2.textContent);
      let p_tweet= document.createElement("P");
      p_tweet.className="p-tweet";
      p_tweet.textContent=tweett.valua_area;
   
      p_tweet.setAttribute('style','padding:10px');
      
      div3.appendChild(p_tweet);

      if(tweett.addimg != ""){
        let addi=document.createElement('img');
        
        addi.src=tweett.addimg;
        addi.setAttribute('style','width:260px;height:170px;padding 20px; border-radius:8px;');
        oere_bmm.setAttribute('style','height:200px;');
        div3.appendChild(addi);
    }
      let h =document.createElement('img');
      h.id="img2";
       h.src=tweett.img_name;
      oere_bmm.appendChild(h);
      
      oere_bmm.appendChild(div3);
      
      newarea.appendChild(oere_bmm);
      let div4=document.createElement('div');
       div4.className="i_class";

       // icon heart  
      let icon_v = document.createElement('i')
      icon_v.className="far fa-heart";
      icon_v.id="icon"+i;
      // span is  like counter
      let count_li=document.createElement('span');
      count_li.id="count-like"+i;
      count_li.textContent=0;
      // button icon heart 
      let btn_icon=document.createElement('button');
      btn_icon.className="btn-icon"+i;
      btn_icon.appendChild(icon_v);
      
      div4.appendChild(btn_icon);
      div4.appendChild(count_li);
  
       let div5 = document.createElement('div');
       div5.className="i2_class";
       div5.appendChild(div4);

      div3.appendChild(div5);
      
      let icon_sh = document.createElement('i')
      icon_sh.className="far fa-share-square";
      let btn_icon1=document.createElement('button');
      btn_icon1.className="btn-icon1"+i;
      btn_icon1.appendChild(icon_sh)
      div5.appendChild(btn_icon1);
        
      
       




      // action btn like 
      let like= document.getElementsByClassName("btn-icon"+i);
      console.log(like);
    for ( let j = 0; j < like.length; j++) {
        like[j].addEventListener("click", function(){
            console.log("hello");
            var count_like=document.getElementById("count-like"+i).innerHTML;
             
             if(like[j].style.color != 'red'){
            //console.log(count_like); 
           // var count_like2=count_like+1;
            console.log(count_like++);
            var count2 =count_like.textContent; 
            document.getElementById("count-like"+i).innerHTML=count_like;
            like[j].setAttribute('style','color:red;');
            
             }
             else
             {
                console.log(count_like--);
                var count2 =count_like.textContent; 
                document.getElementById("count-like"+i).innerHTML=count_like;
                like[j].setAttribute('style','color:black;');
                
             }
            

        });
    }   
    let counttweet = document.getElementById("count-tweet").innerHTML;
    console.log(counttweet++);
    document.getElementById("count-tweet").innerHTML=counttweet;

      let style1 = document.createElement('style');
      let c='.'+oere_bmm.className;
      console.log(c);
      let g= document.querySelector(c);
      console.log(g); 
      g.setAttribute('style',' display:flex;flex-direction:row;border-bottom: 0.5px solid rgb(199, 196, 196);'); 
      if(tweett.addimg == "")
      {
        g.setAttribute('style',' height:130px;display:flex;flex-direction:row;border-bottom: 0.5px solid  rgb(199, 196, 196);'); 

      } 
// add CSS styles
style1.innerHTML = `
    .p-tweet {
        color: black;
        
        
    }

    .c
    {
        height:100px;
        display:flex;
        flex-direction:row;
        border-bottom: 0.1px solid rgb(199, 196, 196);
    }
    #img2
    {
        width: 50px;
        height:50px ;
        border-radius:50%;
        margin-left:15px;
        margin-top: 15px;
 
    }
    .span-name
    {
        display:flex;
        flex-direction:column;
        margin: 15px  0px 5px 10px;

    }
    .far
    {
        font-size:20px;
        
    }
    .i2_class
    {
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        margin-top:20px;
    }
    .btn-icon ,.btn-icon1
    {
        background-color: white;
        border: none;
        color: black;
        
        cursor: pointer;
    }
`;

// append the style to the DOM in <head> section
oere_bmm.appendChild(style1);


                




  });
  
  
  localStorage.setItem("tweets", JSON.stringify(tweets));
  
}

