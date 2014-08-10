var color_one = '#000000';
var color_two = '#ff0000';

function generateIcon(canvas,username) {
	var binary = stringToBinary(username);
	var canvas = document.getElementById(canvas);
	drawBinaryToCanvas(binary,canvas);
}

function stringToBinary(string){
 	var output = "";  
	for (i=0; i < string.length; i++) {
	    output += string[i].charCodeAt(0).toString(2);
	}
	return output;
}

function drawBinaryToCanvas(binary,canvas) {
	var width = canvas.width;
	var height = canvas.height;

	var lineWidth = width/10;
    var context = canvas.getContext('2d');

    while (binary.length < ((width/lineWidth) * (height/lineWidth)))
    {
    	binary += binary;
    }

    var count = 0;
    for (var i = 0; i < 10; i++){
    	for (var j = 0; j < 5; j++){

		    context.beginPath();

		    context.moveTo((j * lineWidth),(i * lineWidth) + (lineWidth/2));
   			context.lineTo(width/2, (i * lineWidth) + (lineWidth/2));

		    context.lineWidth = lineWidth;

    		if (binary[count] == '0') {
    			context.strokeStyle = color_one;
    		} else {
    			context.strokeStyle = color_two;
    		}

		    context.stroke();

    		count++;
    	}
    }

    count = 0;
    for (var i = 0; i < 10; i++){
    	for (var j = 0; j < 5; j++){

		    context.beginPath();

		    context.moveTo(width-(j * lineWidth),(i * lineWidth) + (lineWidth/2));
   			context.lineTo((width-((j * lineWidth) + lineWidth)), (i * lineWidth) + (lineWidth/2));

		    context.lineWidth = lineWidth;

    		if (binary[count] == '0') {
    			context.strokeStyle = color_one;
    		} else {
    			context.strokeStyle = color_two;
    		}

		    context.stroke();

    		count++;
    	}
    }

}


