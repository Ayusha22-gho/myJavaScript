

function billingFunction()
{
    var shipName = document.querySelector("#shippingName");
    var shipZip = document.querySelector("#shippingZip");
    var billName = document.querySelector("#billingName");
    var billZip =  document.querySelector("#billingZip");

    if(document.querySelector("#same").checked == true)
    {
        billName.value = shipName.value;
        billZip.value = shipZip.value;
    }
    else{ 
        billZip.value = "";
        billName.value = "";
    }
}

// function billingFunction(){

//     if(document.querySelector("#same").checked)
//     {
//         var name=document.querySelector("#shippingName").value;   //this will copy the value entered by the user in shipping name block
//         var zip=document.querySelector("#shippingZip").value;     //this will copy the value entered by the user in shipping zip block

//         document.querySelector("#billingName").value=name;   //finally these lines will copy the above initialised variables to the billing address and billing zip
//         document.querySelector("#billingZip").value=zip;
//     }

//     else
//     {
//         document.querySelector("#billingName").value="";
//         document.querySelector("#billingZip").value="";
//     }
// }