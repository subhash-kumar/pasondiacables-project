$(document).ready(function(){
    var mapGroupParent, mapGroupXY;
    var mapGroup; 
    var lastProp; 
    function setUpContactWorldMap(){
        var mapGroupObj = {
            zoom:1,
            x:646,
            y:205
        }
        function updateMapGroup(){
            TweenMax.set(mapGroupParent, {transform: "translateX("+mapGroupObj.x+"px) translateY("+mapGroupObj.y+"px) scaleX("+mapGroupObj.zoom+") scaleY("+mapGroupObj.zoom+")"});
        }
        var svgMapHolder = $(".svgMapHolder");
        TweenMax.set(svgMapHolder, {display:"none", opacity:0})
        svgMapHolder.load("images/world-map.svg", function(){
            var mapW = 1112;
            var mapH = 656;
            mapGroupParent = $("#mapGroupParent");
            mapGroupXY = $("#mapGroupXY");
            
            mapGroup = $("#mapGroup");           

            TweenMax.to(svgMapHolder, 0.6, {display:"block", opacity:1, ease:Cubic.easeOut})
            function onResize(){
                var frameW = svgMapHolder.width();
                var frameH = svgMapHolder.height();
                var x = frameW*0.505;
                var y = frameH*0.28;
                TweenMax.to(mapGroupObj, 0.3, {x:x, y:y, ease:Sine.easeOut, onUpdate:updateMapGroup});
            }
            mapMoveToTarget({
                x:mapW/2, 
                y:mapH/2,
                zoom:0.5,
                speed:0
            })
            setTimeout(function(){
                if(lastProp){
                    mapMoveToTarget(lastProp);
                }else{
                    mapMoveToTarget({
                        x:mapW/2, 
                        y:mapH/2,
                        zoom:0.8,
                        speed:0.6
                    })
                }
                
            }, 500);
            onResize();
            var id = setInterval(function(){
                onResize();
            }, 200)
            $(window).resize(onResize);
            /*setTimeout(function(){
                mapMoveToTarget({
                    x:775,
                    y:337,
                    zoom:3,
                    speed:2
                })
            }, 2000)
            setTimeout(function(){
                mapMoveToTarget({
                    x:470,
                    y:160,
                    zoom:3,
                    speed:2
                })
            }, 5000)*/

            
        })
        window.mapMoveToTarget = function(prop){
            if(mapGroup){
                TweenMax.to(mapGroup, prop.speed, {x:-prop.x, y:-prop.y, ease:Sine.easeInOut});
                /*for(i=0; i<=10; i+=0.1){
                    console.log(prop.zoom, Number(i).toFixed(1))
                    if(prop.zoom===Number(i.toFixed(1))){                        
                        mapGroupParentZoom = Number(i.toFixed(1));
                        break;
                    }
                }*/
                //TweenMax.to(mapGroupParent, prop.speed, {scale:prop.zoom,ease:Sine.easeOut});                
                TweenMax.to(mapGroupObj, prop.speed, {zoom:prop.zoom, ease:Sine.easeOut, onUpdate:updateMapGroup});                
            }else{
                lastProp = prop;
            }
        }
        var addArray = $(".contAccordian li a");
        addArray.each(function(index){
            var address = $(this);
            address.bind("click", function(){
                var latlon = address.data().latlon;
                var href = $(address.attr("href"));
                var rightMapAddress = $(".rightMapAddress")
                if(latlon){
                    mapMoveToTarget({
                        x:latlon.x, 
                        y:latlon.y,
                        zoom:latlon.zoom,
                        speed:0.6
                    })
                }
                rightMapAddress.empty();
                rightMapAddress.append(href.find(".addres-details").html());
                //console.log(href.html())

            })
        })
        $(addArray[0]).trigger("click");
    }
    setUpContactWorldMap();
});