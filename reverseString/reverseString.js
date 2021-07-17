const reverseString = function(str)
{
    var arr = str.split('');
    var nstr = "";
    var x = str.length-1;
    while(x>=0)
    {
        nstr+=arr[x]
        x--;
    }
    return nstr;
};

module.exports = reverseString;
