//task #1
const baseString = "Привет! Как дела?";
const baseVowels = "аеёиоуыэюя";

function getVowels(baseString)
{
    var arrayString = baseString.split("");
    var arrayVowels = baseVowels.split("");
    var arrayResult = [];

    arrayString.forEach(elementString =>
    {    
        if (arrayVowels.indexOf(elementString) != -1)
        {
            arrayResult.push(elementString);
        } 
    });

    return arrayResult.join("");
}

console.log(getVowels(baseString));

//task #2
const workers =
[
    {"name":"Сергей","salary":500},
    {"name":"Алина","salary":1300},
    {"name":"Константин","salary":1500}
];

function getWorthyWorkers(workers)
{
    var arrayResult = [];

    for (var i = 0; i < workers.length; i++)
    {
        if (workers[i].salary > 1000)
        {
            arrayResult.push(workers[i].name);
        }
        else
        {
            console.log(`${workers[i].name} зарабатывает ${workers[i].salary} руб.`);
        }
    }

    return arrayResult;
}

console.log(getWorthyWorkers(workers));

//task #3
const path1 = "/users/download/index.html";
const path2 = "/users/download/index.xml";

function isHtml(path)
{
    var result = false;

    path = path.toLowerCase().substr(path.length - 5, path.length - 1);
    if (path == ".html")
    {
        result = true;
    }
    
    return result;
}

console.log(isHtml(path1));
console.log(isHtml(path2));

//task #4
const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num =>
{
    var result = false;
    if (num % 2 == 0)
    {
        result = true;
    }
    
    return result;
};

function filterArray(data, isEvenTmp)
{
    var arrayResult = [];

    data.forEach(elementData =>
    {
        if (isEvenTmp(elementData))
        {
            arrayResult.push(elementData);
        }
    });

    return arrayResult;
}

console.log(filterArray(mixedArray, isEven));
