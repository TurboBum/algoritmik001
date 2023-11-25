const moneta = document.getElementById("coin");
const chislo_coin = document.getElementById("chislo");
const chislo_diller = document.getElementById("diller");
const chislo_chisloKart = document.getElementById("chisloKart");
localStorage.setItem('chislo_coin', 0);
document.cookie = 'MONETA=1000; CHISLO=0; path=/; expires=99999999999999;';
function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
 }
 console.log( document.cookie );

 function showNotification(text) {
    // Создаем элемент уведомления
    const notification = document.createElement('div');
    notification.className = 'notification'; // Применяем класс CSS для стилизации
  
    // Добавляем текст в уведомление
    notification.textContent = text;
  
    // Добавляем уведомление на страницу
    document.body.appendChild(notification);
  
    // Через некоторое время удаляем уведомление
    setTimeout(() => {
      notification.remove();
      Ochki_Zero(); // Вызываем функцию Ochki_Zero() после удаления уведомления
      const elements = document.getElementsByClassName("imgs");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    } 
    }, 3400); // Указывается время в миллисекундах до удаления уведомления (в данном случае 3.4 секунды)
  }


// Проверяем, поддерживает ли браузер функцию открытия на весь экран
// function toggleFullscreen() {
//     if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
//       // Получаем DOM-элемент, который нужно открыть на весь экран
//       var element = document.documentElement;
  
//       // Проверяем, какая функция открытия на весь экран поддерживается в текущем браузере
//       if (element.requestFullscreen) {
//         element.requestFullscreen().catch((err) => {
//           console.log(err);
//         });
//       } else if (element.webkitRequestFullscreen) {
//         element.webkitRequestFullscreen().catch((err) => {
//           console.log(err);
//         });
//       } else if (element.mozRequestFullScreen) {
//         element.mozRequestFullScreen().catch((err) => {
//           console.log(err);
//         });
//       } else if (element.msRequestFullscreen) {
//         element.msRequestFullscreen().catch((err) => {
//           console.log(err);
//         });
//       }
//     }
//   }
  
//   // Вызываем функцию открытия на весь экран при клике на страницу
//   document.addEventListener('click', toggleFullscreen);
  
let vzad = document.getElementById("vzad");
let sebe = document.getElementById("emu");
let edvoit = document.getElementById("ydvoit");
vzad.disabled = true;
sebe.disabled = true;
edvoit.disabled = true;

// Создаем глобальный объект-словарь
var karti = {};

// Добавляем пары ключ-значение в словарь(Новый способ)

karti["buba2"] = "2";
karti["buba3"] = "3";
karti["buba4"] = "4";
karti["buba5"] = "5";
karti["buba6"] = "6";
karti["buba7"] = "7";
karti["buba8"] = "8";
karti["buba9"] = "9";
karti["buba10"] ="10";
karti["bubaValet"] ="10";
karti["bubaDama"] ="10";
karti["bubaKorol"] ="10";
karti["bubaTus"] = "1";

karti["cherva2"] = "2";
karti["cherva3"] = "3";
karti["cherva4"] = "4";
karti["cherva5"] = "5";
karti["cherva6"] = "6";
karti["cherva7"] = "7";
karti["cherva8"] = "8";
karti["cherva9"] = "9";
karti["cherva10"] ="10";
karti["chervaValet"] ="10";
karti["chervaDama"] ="10";
karti["chervaKorol"] ="10";
karti["chervaTus"] = "1";

karti["pika2"] = "2";
karti["pika3"] = "3";
karti["pika4"] = "4";
karti["pika5"] = "5";
karti["pika6"] = "6";
karti["pika7"] = "7";
karti["pika8"] = "8";
karti["pika9"] = "9";
karti["pika10"] ="10";
karti["pikaValet"] ="10";
karti["pikaDama"] ="10";
karti["pikaKorol"] ="10";
karti["pikaTus"] = "1";

karti["krestja2"] = "2";
karti["krestja3"] = "3";
karti["krestja4"] = "4";
karti["krestja5"] = "5";
karti["krestja6"] = "6";
karti["krestja7"] = "7";
karti["krestja8"] = "8";
karti["krestja9"] = "9";
karti["krestja10"] ="10";
karti["krestjaValet"] ="10";
karti["krestjaDama"] ="10";
karti["krestjaKorol"] ="10";
karti["krestjaTus"] = "1";


remove_img = []


diller_top = 20

function img_kart_diller(key) {
    let x_y = document.getElementById("fishki").getBoundingClientRect();
    img_x = x_y.top;
    img_y = x_y.left;
    console.log(img_x, img_y);
    
    var oImg = document.createElement("img");
    oImg.setAttribute('src', 'kart/' + key + '.png');
    remove_img.push(key + '.png');
    oImg.setAttribute('class', 'imgs');
    oImg.setAttribute('alt', 'karta');
    oImg.setAttribute('height', '150px');
    oImg.setAttribute('width', '100px');
    oImg.style.position = "absolute";
    oImg.style.top = '110px';
    oImg.style.right = '50px';
    oImg.style.сlass = "image";
    document.body.appendChild(oImg);
    
    setTimeout(function() {
        oImg.style.top = '18%';
        oImg.style.left = diller_top+'%';
        diller_top = diller_top + 8
    }, 1000);
    
}

user_top = 20

function img_kart_user(key) {
    let x_y = document.getElementById("fishki").getBoundingClientRect();
    img_x = x_y.top;
    img_y = x_y.left;
    console.log(img_x, img_y);
    
    var oImg = document.createElement("img");
    oImg.setAttribute('src', 'kart/' + key + '.png');
    remove_img.push(key + '.png');
    oImg.setAttribute('class', 'imgs');
    oImg.setAttribute('alt', 'karta');
    oImg.setAttribute('height', '150px');
    oImg.setAttribute('width', '100px');
    oImg.style.position = "absolute";
    oImg.style.top = '110px';
    oImg.style.right = '50px';
    document.body.appendChild(oImg);
    
    setTimeout(function() {
        oImg.style.top = '69%';
        oImg.style.left = user_top+'%';
        user_top = user_top + 8
    }, 1000);
    
}










let spisok = []


//Используя длину словаря рандомно выбираем элемент, ключу добавляем расширение, а на экране к нужному числу добаляем значение ключа
//Создаём список УЖЕ выбранных ключей
//Идёт проверка если ново-выбранного при помощи рандома ключа в списке нет, то идёт его добавление по коментарию 99, после чего добавляем его в список.
//__________________________________________________
function button(){//Функция по разблокировки заблокированного и наоборот
    let b1 = document.getElementById("b1"); 
    let b5 = document.getElementById("b5"); 
    let b10 = document.getElementById("b10"); 
    let b100 = document.getElementById("b100"); 
    let ybrat = document.getElementById("ybrat"); 
    let polojit = document.getElementById("polojit") 
    b1.disabled = false; 
    b5.disabled = false; 
    b10.disabled = false; 
    b100.disabled = false; 
    ybrat.disabled = false; 
    polojit.disabled = false; 
    let vzad = document.getElementById("vzad") 
    let sebe = document.getElementById("emu") 
    let edvoit = document.getElementById("ydvoit") 
    vzad.disabled = true; 
    sebe.disabled = true; 
    edvoit.disabled = true; 
    spisok.length=0;//Обнулкеие массива
}

function Ochki_Zero() {
    let chislo_kart = chislo_chisloKart;
    let chislo = chislo_diller;
    chislo.innerHTML = 0; // Обновляем число на странице
    chislo_kart.innerHTML = 0; // Обновляем число на странице
  }

async function WIN0(){//Победные очки
    let nameInput = await parseInt(getCookie('MONETA'));
    const chislo_coin1 = parseInt(localStorage.chislo_coin);
    console.log(chislo_coin1,chislo_coin1);
    // console.log(nameInput + (chislo_coin1*2));
    // console.log(nameInput,(chislo_coin1*2));
    document.cookie = 'MONETA='+ parseInt(nameInput + (chislo_coin1*2)) +'; path=/; expires=99999999999999;';
    let Cokie = await getCookie('MONETA')
    moneta.innerText = Cokie;
    chislo_coin.innerText = 0;
    // await Ochki_Zero()
}
function Over(){//Проигрышные очки очки

    localStorage.chislo_coin = 0
    // let stavka = parseInt(getCookie('CHISLO'));
    chislo_coin.innerText =  localStorage.chislo_coin;
    // Ochki_Zero()
}
//__________________________________________________
//__________________________________________________


function user_ochki(ochko){
    let nameInput = getCookie('MONETA')
    let stavka = chislo_coin;
    nameInput = nameInput - ochko;
    chislo_coin1 = parseInt(localStorage.chislo_coin)
    localStorage.chislo_coin = parseInt(chislo_coin1 + ochko);
    if (nameInput < 0) {
        showNotification("Нельзя");
        // alert("Нельзя");
    } else {
        document.cookie = 'MONETA='+ nameInput +'; path=/; expires=99999999999999;';
        moneta.innerText = nameInput;
        stavka.innerText = localStorage.chislo_coin;  // увеличиваем значение переменной stavka на ochko
    }
}
document.getElementById("b1").addEventListener("click", function(event) { //ПРИБАВИТЬ 1 ОЧКО
    event.preventDefault();
    user_ochki(1)
});
document.getElementById("b5").addEventListener("click", function(event) {//ПРИБАВИТЬ 5 ОЧКОВ
    event.preventDefault();
    user_ochki(5)
})
document.getElementById("b10").addEventListener("click", function(event) {//ПРИБАВИТЬ 10 ОЧКОВ
    event.preventDefault();
    user_ochki(10)
})
document.getElementById("b100").addEventListener("click", function(event) {//ПРИБАВИТЬ 100 ОЧКОВ
    event.preventDefault();
    user_ochki(100)
})

document.getElementById("ybrat").addEventListener("click", function(event) {//УБРАТЬ ОЧКИ
    event.preventDefault();
    localStorage.chislo_coin = parseInt(0);
    let nameInput = parseInt(getCookie('MONETA'));
    let stavka = chislo_coin;
    let stavkachislo = parseInt(stavka.innerText);  // преобразуем значение в числовой тип данных
    let integer = parseInt(nameInput + stavkachislo)
    document.cookie = 'MONETA='+ integer +'; path=/; expires=99999999999999;';
    let nameInputCookie = getCookie('MONETA');
    console.log(nameInputCookie)
    moneta.innerText = nameInputCookie;
    stavka.innerText = (localStorage.chislo_coin)
})

document.getElementById("polojit").addEventListener("click", function(event) {//ПОЛОЖИТЬ ОЧКИ 
    event.preventDefault(); 
    user_top = 20
    diller_top = 20
    let coin1 = chislo_coin; 
    let coin = parseInt(coin1.innerHTML); 
    if (coin === 0 ){ 
    showNotification("Нужна ставка");
    // alert("Нужна ставка") 
    } 
    else{
    let b1 = document.getElementById("b1"); 
    let b5 = document.getElementById("b5"); 
    let b10 = document.getElementById("b10"); 
    let b100 = document.getElementById("b100"); 
    let ybrat = document.getElementById("ybrat"); 
    let polojit = document.getElementById("polojit") 
    b1.disabled = true; 
    b5.disabled = true; 
    b10.disabled = true; 
    b100.disabled = true; 
    ybrat.disabled = true; 
    polojit.disabled = true; 
    rr() 
    setTimeout(() => {  
        rr(); 
        setTimeout(() => {  
        diller(); 
        setTimeout(() => {  
            diller(); 
            setTimeout(() => {  
            let vzad = document.getElementById("vzad") 
            let sebe = document.getElementById("emu") 
            let edvoit = document.getElementById("ydvoit") 
            vzad.disabled = false; 
            sebe.disabled = false; 
            edvoit.disabled = false; 
            }, 500);
        }, 1000);
        }, 1000);
    }, 500);
    }     
})
function keys_random(){
    const karti_keys = Object.keys(karti);
    //Рандомом выбираем элемент из словаря
    const randomKey = karti_keys[Math.floor(Math.random() * karti_keys.length)];
    return randomKey
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
function rr() {//Рандомно выбирает для игрока карту(очки)
    let chislo = chislo_chisloKart;
    let currentNumber = parseInt(chislo.innerHTML); // Получаем текущее число

    let randomKey = keys_random();

    while (spisok.includes(randomKey)) { // Проверяем, есть ли ключ в списке
      randomKey = keys_random(); // Если есть, выбираем новый ключ
    }

    const value = parseInt(karti[randomKey]); // Получаем числовое значение по ключу
    console.log(value);

    spisok.push(randomKey); // Добавляем ключ в список
    img_kart_user(randomKey)
    let newNumber = currentNumber + value; // Складываем числа
    chislo.innerHTML = newNumber; // Обновляем число на странице
}
//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
function diller() {
    let chislo = chislo_diller;
    let currentNumber = parseInt(chislo.innerHTML); // Получаем текущее число

    let randomKey = keys_random();

    while (spisok.includes(randomKey)) { // Проверяем, есть ли ключ в списке
      randomKey = keys_random(); // Если есть, выбираем новый ключ
    }

    const value = parseInt(karti[randomKey]); // Получаем числовое значение по ключу
    console.log(value);

    spisok.push(randomKey); // Добавляем ключ в список
    img_kart_diller(randomKey)
    let newNumber = currentNumber + value; // Складываем числа
    chislo.innerHTML = newNumber; // Обновляем число на странице
}
//////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById("vzad").addEventListener("click", function(event) {//ПОПРОСИТЬ ЕЩЁ
    event.preventDefault();
    console.log(spisok);
    let chisloKart1 = chislo_chisloKart;
    let chisloKart = parseInt(chisloKart1.innerHTML);
    if (chisloKart>21){
        let vzad = document.getElementById("vzad")
        vzad.disabled = true;
        showNotification("Нельзя, ты проиграл");
        // alert("Нельзя, ты проиграл")
        button()
        Over()
    }
    else{
    rr();  
    }
})
document.getElementById("ydvoit").addEventListener("click", function(event) {//УДВОИТЬ ОЧКИ
    event.preventDefault();
    let stavka1 = chislo_coin;
    let coin1 = document.getElementById("coin");
    let stavka = parseInt(stavka1.innerHTML);
    let coin = parseInt(coin1.innerHTML); 
    
    if (coin < stavka){
        showNotification("Удвоение ставки невозможно.");
        // alert("Удвоение ставки невозможно.")
    }
    else{
        stavka1.innerHTML = stavka * 2;
        coin1.innerHTML = coin - stavka;
    }
})

document.getElementById("emu").addEventListener("click", function(event) {
    event.preventDefault();
    let vzad = document.getElementById("vzad") 
    vzad.disabled = true; 
    let stavka1 = chislo_chisloKart;
    let diller1 = chislo_diller;
    let stavka = parseInt(stavka1.innerHTML);
    let dilleron = parseInt(diller1.innerHTML); 
    if (stavka > 21){
        showNotification("Вы проиграли123");
        // alert("Вы проиграли123")
        button()
        Over()
        return 0
    }
    function executeDiller() {
        diller();
        stavka1 = chislo_chisloKart; // Обновляем переменные
        diller1 = chislo_diller;
        stavka = parseInt(stavka1.innerHTML);
        dilleron = parseInt(diller1.innerHTML);
        if (dilleron != -99) {
            if (dilleron >= 22) {
                showNotification("Я проиграл 001");
                // alert("Я проиграл 001");
                button()
                WIN0()
            } else if (dilleron > stavka && dilleron <= 22) {
                showNotification("Вы проиграли");
                // alert("Вы проиграли");
                button()
                Over()
            } else {
                setTimeout(executeDiller, 1000);
            }
        }
    }
    executeDiller();
});