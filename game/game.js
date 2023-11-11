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
    oImg.setAttribute('alt', 'karta');
    oImg.setAttribute('height', '150px');
    oImg.setAttribute('width', '100px');
    oImg.style.position = "absolute";
    oImg.style.top = '110px';
    oImg.style.right = '50px';
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
function Ochki_Zero(){
    let chislo_kart = document.getElementById("chisloKart");
    let chislo = document.getElementById("diller");
    chislo.innerHTML = 0; // Обновляем число на странице
    chislo_kart.innerHTML = 0; // Обновляем число на странице

}
function WIN0(){//Победные очки
    let nameInput = document.getElementById("coin");
    let stavka = document.getElementById("chislo");
    let coin = parseInt(stavka.innerText);  // преобразуем значение поставленных очков
    let coin_bank = parseInt(nameInput.innerText);  // преобразуем значение очкогв в банке
    console.log(coin_bank + (coin*2));
    nameInput.innerText = coin_bank + (coin*2);
    stavka.innerText = 0;
    Ochki_Zero()
}
function Over(){//Проигрышные очки очки
    let stavka = document.getElementById("chislo");
    stavka.innerText = 0;
    Ochki_Zero()
}
//__________________________________________________
//__________________________________________________

document.getElementById("b1").addEventListener("click", function(event) { //ПРИБАВИТЬ 1 ОЧКО
    event.preventDefault();
    
    let nameInput = document.getElementById("coin");
    let stavka = document.getElementById("chislo");
    let stavkachislo = parseInt(stavka.innerText);  // преобразуем значение в числовой тип данных
    let coin = parseInt(nameInput.innerText);  // преобразуем значение в числовой тип данных
    coin = coin - 1;
    console.log(karti["apple"]); // выведет "яблоко"
    if (coin < 0) {
        alert("Нельзя");
    } else {
        nameInput.innerText = coin;
        stavka.innerText = stavkachislo + 1;  // увеличиваем значение переменной stavka на 1
    }
});
document.getElementById("b5").addEventListener("click", function(event) {//ПРИБАВИТЬ 5 ОЧКОВ
    event.preventDefault();
    
    let nameInput = document.getElementById("coin");
    let stavka = document.getElementById("chislo");
    let stavkachislo = parseInt(stavka.innerText);  // преобразуем значение в числовой тип данных
    let coin = parseInt(nameInput.innerText);  // преобразуем значение в числовой тип данных
    coin = coin - 5;

    if (coin < 0) {
        alert("Нельзя");
    } else {
        nameInput.innerText = coin;
        stavka.innerText = stavkachislo + 5;  // увеличиваем значение переменной stavka на 5
    }

})
document.getElementById("b10").addEventListener("click", function(event) {//ПРИБАВИТЬ 10 ОЧКОВ
    event.preventDefault();
    
    let nameInput = document.getElementById("coin");
    let stavka = document.getElementById("chislo");
    let stavkachislo = parseInt(stavka.innerText);  // преобразуем значение в числовой тип данных
    let coin = parseInt(nameInput.innerText);  // преобразуем значение в числовой тип данных
    coin = coin - 10;

    if (coin < 0) {
        alert("Нельзя");
    } else {
        nameInput.innerText = coin;
        stavka.innerText = stavkachislo + 10;  // увеличиваем значение переменной stavka на 10
    }

})
document.getElementById("b100").addEventListener("click", function(event) {//ПРИБАВИТЬ 100 ОЧКОВ
    event.preventDefault();
    
    let nameInput = document.getElementById("coin");
    let stavka = document.getElementById("chislo");
    let stavkachislo = parseInt(stavka.innerText);  // преобразуем значение в числовой тип данных
    let coin = parseInt(nameInput.innerText);  // преобразуем значение в числовой тип данных
    coin = coin - 100;

    if (coin < 0) {
        alert("Нельзя");
    } else {
        nameInput.innerText = coin;
        stavka.innerText = stavkachislo + 100;  // увеличиваем значение переменной stavka на 1
    }

})

document.getElementById("ybrat").addEventListener("click", function(event) {//УБРАТЬ ОЧКИ
    event.preventDefault();
    
    let nameInput = document.getElementById("coin");
    let stavka = document.getElementById("chislo");
    let stavkachislo = parseInt(stavka.innerText);  // преобразуем значение в числовой тип данных
    let coin_chislo = parseInt(nameInput.innerText);  // преобразуем значение в числовой тип данных
    nameInput.innerText = coin_chislo + stavkachislo
    stavka.innerText = 0
})


document.getElementById("polojit").addEventListener("click", function(event) {//ПОЛОЖИТЬ ОЧКИ 
    event.preventDefault(); 
    user_top = 20
    diller_top = 20
    for(let i = 0; i < remove_img.length; i++){
        const image = document.querySelector(`img[src="kart/${remove_img[i]}"]`);
        image.parentNode.removeChild(image);
    }





    let coin1 = document.getElementById("chislo"); 
    let coin = parseInt(coin1.innerHTML); 
    if (coin === 0 ){ 
      alert("Нужна ставка") 
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
    let chislo = document.getElementById("chisloKart");
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
    let chislo = document.getElementById("diller");
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
    let chisloKart1 = document.getElementById("chisloKart");
    let chisloKart = parseInt(chisloKart1.innerHTML);
    if (chisloKart>21){
        let vzad = document.getElementById("vzad")
        vzad.disabled = true;
        alert("Нельзя, ты проиграл")
        button()
        Over()
    }
    else{
      rr();  
    }
})


document.getElementById("ydvoit").addEventListener("click", function(event) {//УДВОИТЬ ОЧКИ
    event.preventDefault();
    let stavka1 = document.getElementById("chislo");
    let coin1 = document.getElementById("coin");
    let stavka = parseInt(stavka1.innerHTML);
    let coin = parseInt(coin1.innerHTML); 
    
    if (coin < stavka){
        alert("Удвоение ставки невозможно.")
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
    let stavka1 = document.getElementById("chisloKart");
    let diller1 = document.getElementById("diller");
    let stavka = parseInt(stavka1.innerHTML);
    let dilleron = parseInt(diller1.innerHTML); 
    if (stavka > 21){
        alert("Вы проиграли123")
        button()
        Over()
        return 0
    }
    function executeDiller() {
        diller();
        stavka1 = document.getElementById("chisloKart"); // Обновляем переменные
        diller1 = document.getElementById("diller");
        stavka = parseInt(stavka1.innerHTML);
        dilleron = parseInt(diller1.innerHTML);
        if (dilleron != -99) {
            if (dilleron >= 22) {
                alert("Я проиграл 001");
                button()
                WIN0()
            } else if (dilleron > stavka && dilleron <= 22) {
                alert("Вы проиграли");
                button()
                Over()
            } else {
                setTimeout(executeDiller, 1000);
            }
        }
    }
    executeDiller();
});
