function Calculator() 
{
	this. Average = function() {
     var sum = 0;
     var average = 0;

     if(arguments.length == 0)
     {
         return 0;
     }
     
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    average = sum / arguments.length;
    return average;
 	}
};
