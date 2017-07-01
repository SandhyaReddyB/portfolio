(function fillCanvas() {
    getPercentages();
    function getPercentages() {
        var percentageNodes = document.querySelectorAll('.percent');
        var percentages = [];
        var y =document.querySelector('.myCanvas').height;
        var x;
        var coords;
        for(var i=0;i<percentageNodes.length;i++) {
            percentages[i]=percentageNodes[i].innerHTML;
            x= calPercentage(percentages[i]);
            coords = [0,0,x,y];
            fillCanvasRect(coords,i);
        }
    }
    function calPercentage(level) {
        var width = document.querySelector('.myCanvas').width;
        return (level/100)*width;
    }
    
    showMap();
})();

function fillCanvasRect(args,i) {
    var c = document.querySelectorAll(".myCanvas");
    this.args = args;
    
    var ctx = c[i].getContext("2d");

    var grd = ctx.createLinearGradient(0,0,200,0);
    grd.addColorStop(0,"#F2994A");
    grd.addColorStop(1,"#F2C94C");

    // Fill with gradient
    ctx.fillStyle = grd;

    var op = "fillRect";    
    ctx[op].apply(ctx, args);
}

function showMap() {
    var myPos = new google.maps.LatLng(52.3052014,4.6995456); 
    var myCenter = new google.maps.LatLng(52.2889264,4.8224616);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: myCenter, 
        zoom: 12, 
        streetViewControl: false, 
        zoomControl: true,
        zoomControlOptions :{
            position: google.maps.ControlPosition.LEFT_CENTER
        }        
    }                
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myPos, animation: google.maps.Animation.BOUNCE});
    marker.setMap(map);
    
    var infowindow = new google.maps.InfoWindow({
        content:"Hoofddorp, Netherlands"
    });
    infowindow.open(map,marker);
}