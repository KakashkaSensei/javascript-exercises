const removeFromArray = function() 
{
    var i = 0;
    var b = 1;
    var arr = arguments[0];
    while(b<=arguments.length)    
    {
        i = 0;
        while(i<arr.length)
        {
        if(arr[i]==arguments[b] && typeof arr[i] == typeof arguments[b])
        {
            arr.splice(i,1);
            i--;
        }
        i++;
        }
        b++;
    }
    return arr;
};

module.exports = removeFromArray;
