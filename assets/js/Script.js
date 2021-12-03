$(document).ready(function(){

        $.ajax({
            type:"GET",
            url: "https://digimon-api.vercel.app/api/digimon", 
            dataType: "json",
            async: true,
            success: function(data){
                var res;
                console.log(data.length)
                for (let i = 0; i<data.length; i++){
                    
                    //console.log(data[i].name)
                    $("#"+ i).after("<tr id=" + (i+1)+"><td>" +  "<a href='"+data[i].img+"' target='_blank'>" + data[i].name +"</a>" + "</td><td>"+data[i].level+"</td><tr>")
                   
                }

          
            }
        });

/*
        (function() {
          var container = $('#pagination-demo1');
         
      
          container.pagination({
            dataSource: 'https://digimon-api.vercel.app/api/digimon',
            locator: 'items',
            totalNumber: 209,
            pageSize: 10,
            
            callback: function (response, pagination) {
              window.console && console.log(response, pagination);
      
             var dataHtml;
      
              $.each(response, function (index, item) {
                 dataHtml = '<tr id="'+ index +'">';
                  dataHtml += '<td>' + item.name + '</td>';
                  dataHtml += '<td>' + item.level + '</td>';
                  dataHtml += '</tr>';

                 
              });

              
              container.prev().html(dataHtml);
      
           
            }
          });
      

          
        })('demo1'); */
});
  

