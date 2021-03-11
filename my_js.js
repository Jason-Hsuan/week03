
function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  let i=0;
  function getDate(){
      var req=new XMLHttpRequest();
      req.open("get","https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json");
      req.onload=function(){
          var json_data = req.response;
              place(json_data);
      };
      req.responseType = 'json';
      req.send();
  
      function place(jsonObj){
        while (i<10){
              var id_name_caption="content_"+i;
              var id_content=document.getElementById(id_name_caption);
              var place_name=document.createElement('div')
                  place_name.textContent=jsonObj["result"]["results"][i]["stitle"];
                  id_content.appendChild(place_name);
                  
              var id_name_img="img_"+i;
              var id_img=document.getElementById(id_name_img);
              var place_img=document.createElement('img');
                  place_picture=jsonObj["result"]["results"][i]["file"];
                  place_picture=place_picture.split("http://",2);
                  place_picture_src="http://"+place_picture[1];
                  place_img.src=place_picture_src;
                  id_img.appendChild(place_img);              
              i++;
            };
          };
  };