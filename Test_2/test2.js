function myfunction(input)
{
    // let side=document.getElementById("myid").Value;
    // let area=parseInt(side)*parseInt(side);
    // alert("The area of square is "+area+"with side: "+side);

    side = input;
    var area;
    if(side<0)
    {
        area=0;
    }
    else if(side>2500)

    {
        area=0;
    }
    else{
        area=side*side;
    }
    return area;


}