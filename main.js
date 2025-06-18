( function getapi (){
 fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
 .then(function(item){
  return item.json();
 })
 .then(function(result){
  var rec=result.recipes;
  var txt=" ";
  for(var i=0;i<rec.length;i++){
 
   var cartoona=
               `
               <div class="col-md-4 text-center">
               <img src="${rec[i].image_url}" class="img-fluid" style="width: 300px; height: 300px;">
               <h4>${rec[i].title}</h4>
               <h5>${rec[i].publisher}</h5>
               </div>
 
               `
               txt=txt+cartoona; 
              }
 document.querySelector('.test').innerHTML=txt; })
 
  })();

  