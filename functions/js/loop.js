//average
var num = [];

function loadElements()
{
    document.getElementById("element").innerHTML = num;
    
}


function addElements()
{
    var sum = 0;
    var count = 0;
    var size = prompt("Enter the number of values you want to find average of?");
    var size1 = parseInt(size);
    for(index = 0; index<size1; index++)
    {
        let ask = prompt("Enter a number to add in the array");
        num[num.length] = parseInt(ask);  //converting to int from string
      
    }
   
    document.getElementById("element").innerHTML = "The elements of array are :" +num;
    if(num.length >0)
        {
        for (index =0 ; index<num.length;index++)
        {
            if(num[index] != undefined){
                sum += num[index];
                count = count +1;
            }
        }
        document.getElementById("average").innerHTML = sum/count;
        }
    else{
            document.getElementById("average").innerHTML = "Empty array";
        }
}



// var sum = 0;
// var count = 0;
// if(num.length >0)
// {
// for (index =0 ; index<num.length;index++)
// {
//     if(num[index] != undefined){
//         sum += num[index];
//         count = count +1;
//     }
// }
// document.write(sum/count);
// }
// else{
//     document.write("Empty array")
// }