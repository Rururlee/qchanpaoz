	google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
               
                var mapOptions = {
                     mapTypeControl: false, 
                    zoom: 17,

                    center: {lat:35.785057, lng:139.771038},
                    zoom: 17, 

                    
                    styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"},{"gamma":"1.00"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"color":"#ba5858"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"color":"#e57878"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"simplified"},{"lightness":"65"},{"saturation":"-100"},{"hue":"#ff0000"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"simplified"},{"saturation":"-100"},{"lightness":"80"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#eeeeee"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#ba5858"},{"saturation":"-100"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#ba5858"},{"visibility":"simplified"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"hue":"#ff0036"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ba5858"}]}]
                };

               
                var mapElement = document.getElementById('map');

             
                var map = new google.maps.Map(mapElement, mapOptions);

                
                var marker = new google.maps.Marker({
                    position: {lat:35.785057, lng:139.771038},
                    map: map
                });

                var infowindow = new google.maps.InfoWindow();
                      infowindow.setContent('<b><font color="#e94335">Qちゃん包子饅頭店</font></b><br>〒123-0873東京都足立区谷在家1-9-15');
                      google.maps.event.addListener(marker, 'click', function() {
                          infowindow.open(map, marker);
                      });




            } //init