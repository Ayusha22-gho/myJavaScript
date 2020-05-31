var novels = ["Romantic","Horror","Comedy"];

function loadArray()
{
    document.getElementById("elements").innerHTML = novels;
    document.querySelector('#another').innerHTML = novels;
}

function myFunction()
{
    var nov = prompt("Ehat is your preferred novel genere?");
    novels[novels.length] = nov;
    document.getElementById("elements").innerHTML = novels;
}

function another()
{
    let ano = prompt("add more favourite  novels");
    
    novels.push(ano);
    document.querySelector('#another').innerHTML=novels;
}