$(document).ready(function(){
  var heightOver69 = confirm("Are you over 69 inches in height? Click Ok for height above 69 inches and Click Cancel if you are below 69 inches in height");
    if (heightOver69){
      $("#height-69-above").show();
      }
    else{
      $("#height-69-below").show();
      }
});
