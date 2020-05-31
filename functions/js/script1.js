function closeMe()
{
    x = document.getElementById('demo');
    x.className = "closed";
}
function openMe()
{
    x=document.getElementById('demo');
    x.className = "open";
    
}

function displayDate()
{
    x = new Date();
    document.getElementById('date').innerHTML = x.getDate()+ "/"+ x.getMonth() + "/" + x.getFullYear();
}