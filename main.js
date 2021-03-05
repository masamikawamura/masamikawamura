(()=>{
  let tabnavitem1= document.querySelector(".tabnavitem1")
  let tabnavitem2= document.querySelector(".tabnavitem2")
  let tabnavitem3= document.querySelector(".tabnavitem3")
  let tabnavitem4= document.querySelector(".tabnavitem4")

  let tabcontentsitem1= document.querySelector("#tabcontentsitem1")
  let tabcontentsitem2= document.querySelector("#tabcontentsitem2")
  let tabcontentsitem3= document.querySelector("#tabcontentsitem3")
  let tabcontentsitem4= document.querySelector("#tabcontentsitem4")

  tabnavitem1.addEventListener("click",function(){
    tabcontentsitem1.style.display="block";
    tabnavitem1.style.backgronudColor="blue";
    tabcontentsitem2.style.display="none";
    tabcontentsitem3.style.display="none";
    tabcontentsitem4.style.display="none";
  });

  tabnavitem2.addEventListener("click",function(){
    tabcontentsitem1.style.display="none";
    tabcontentsitem2.style.display="block";
    tabcontentsitem3.style.display="none";
    tabcontentsitem4.style.display="none";
  });
