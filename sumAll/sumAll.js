
var sumAll = function()
{    
    if(arguments[0]>0 && arguments[1]>0 && typeof arguments[0]=="number" && typeof arguments[1]=="number")   
    {
        if (arguments[0]<arguments[1])
        {
            var num = arguments[0];
            var num2 = arguments[1];
            var i = num;
            var x = num;
            var sum = 0;
            while(i <= num2)
            {
                sum += x;
                i++;
                x++; 
            }
        }
        else
        {
            var num = arguments[1];
            var num2 = arguments[0];
            var i = num;
            var x = num;
            var sum = 0;
            while(i <= num2)
            {
                sum += x;
                i++;
                x++; 
            } 
        }
    }
    else
    {
        return "ERROR";
    }
    return sum;
}
;

module.exports = sumAll;
