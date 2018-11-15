
 var array = [0,2, 5, 3]

function kangaroo(array)
{
   
    var x1 = array[0]
    var v1 = array[1]
    var x2 = array[2]
    var v2 = array[3]
    k1 = x1 + v1
    k2 = x2 + v2

    if(x1>x2 && v1>=v2)
    {
        console.log("No")
    }
    else if(x2>x1 && v2>=v1)
    {
        console.log("No")
    }
    else if(x1==x2 && v2!=v1)
    {
        console.log("No")
    }
    else if(k1%k2 == 0 | k2%k1 == 0)
    {
        console.log("Yes")
    }
    else
    {console.log("No")}
}

kangaroo(array)

