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