angular.module('TelePic').directive("drawing", function() {
    return {
        restrict: "A",
        link: function(scope, element) {
            var context = element[0].getContext('2d');

            // variable that decides if something should be drawn on mousemove
            var drawing = false;

            // the last coordinates before the current move
            var lastX;
            var lastY;

            element.on('mousedown', function(event) {
                if (event.offsetX !== undefined) {
                    lastX = event.offsetX;
                    lastY = event.offsetY;
                } else { // Firefox compatibility
                    lastX = event.layerX - event.currentTarget.offsetLeft;
                    lastY = event.layerY - event.currentTarget.offsetTop;
                }

                // begins new line
                context.beginPath();                
                drawing = true;
                draw(lastX, lastY, lastX, lastY);

            });
            element.on('mousemove', function(event) {
                if (drawing) {
                    // get current mouse position
                    if (event.offsetX !== undefined) {
                        currentX = event.offsetX;
                        currentY = event.offsetY;
                    } else {
                        currentX = event.layerX - event.currentTarget.offsetLeft;
                        currentY = event.layerY - event.currentTarget.offsetTop;
                    }

                    draw(lastX, lastY, currentX, currentY);

                    // set current coordinates to last one
                    lastX = currentX;
                    lastY = currentY;
                }

            });
            element.on('mouseup', function(event) {
                // stop drawing
                drawing = false;
            });

            function draw(lX, lY, cX, cY) {
                // line from
                context.moveTo(lX, lY);
                // to
                context.lineTo(cX, cY);
                // color
                context.strokeStyle = scope.sDrawingColor;
                context.lineJoin = "round";
                context.lineWidth = scope.iLineWidth;
                // draw it
                context.stroke();
            }
        }
    };
});