function city()
{
    if (confirm('Здравствуйте! Укажите в каком городе вы родились?')){
        var namecity = prompt('Введите ваш город','');
        }
        alert("Спасибо, что уделили время")

    document.getElementById("democity").innerHTML = namecity;


}

function skills()
{
    if (confirm('Здравствуйте! Уточните, какой у вас есть профессональные навыки?')){
        var nameskill = prompt('Введите один профессиональный навык','');
        }
        alert("Спасибо, что уделили время")

    document.getElementById("demoskill").innerHTML = nameskill;

}

