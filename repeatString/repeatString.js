const repeatString = function(str, times) 
{
    var nstr = "";
    if(times>0)
    {
        while(times>0)
        {
            nstr +=str ;
            times--;
        }
        return nstr;
    }
    else
    {
        if(times==0)
        {
            return "";
        }
        else
        {
            return "ERROR";
        }
    }
};

module.exports = repeatString;
