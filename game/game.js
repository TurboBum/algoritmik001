// Проверяем, поддерживает ли браузер функцию открытия на весь экран
function toggleFullscreen() {
    if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
      // Получаем DOM-элемент, который нужно открыть на весь экран
      var element = document.documentElement;
  
      // Проверяем, какая функция открытия на весь экран поддерживается в текущем браузере
      if (element.requestFullscreen) {
        element.requestFullscreen().catch((err) => {
          console.log(err);
        });
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen().catch((err) => {
          console.log(err);
        });
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen().catch((err) => {
          console.log(err);
        });
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen().catch((err) => {
          console.log(err);
        });
      }
    }
  }
  
  // Вызываем функцию открытия на весь экран при клике на страницу
  document.addEventListener('click', toggleFullscreen);
  
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

karti["krestia2"] = "2";
karti["krestia3"] = "3";
karti["krestia4"] = "4";
karti["krestia5"] = "5";
karti["krestia6"] = "6";
karti["krestia7"] = "7";
karti["krestia8"] = "8";
karti["krestia9"] = "9";
karti["krestia10"] ="10";
karti["krestiaValet"] ="10";
karti["krestiaDama"] ="10";
karti["krestiaKorol"] ="10";
karti["krestiaTus"] = "1";

karti["pica2"] = "2";
karti["pica3"] = "3";
karti["pica4"] = "4";
karti["pica5"] = "5";
karti["pica6"] = "6";
karti["pica7"] = "7";
karti["pica8"] = "8";
karti["pica9"] = "9";
karti["pica10"] ="10";
karti["picaValet"] ="10";
karti["picaDama"] ="10";
karti["picaKorol"] ="10";
karti["picaTus"] = "1";

karti["krestia2"] = "2";
karti["krestia3"] = "3";
karti["krestia4"] = "4";
karti["krestia5"] = "5";
karti["krestia6"] = "6";
karti["krestia7"] = "7";
karti["krestia8"] = "8";
karti["krestia9"] = "9";
karti["krestia10"] ="10";
karti["krestiaValet"] ="10";
karti["krestiaDama"] ="10";
karti["krestiaKorol"] ="10";
karti["krestiaTus"] = "1";

//Используя длину словаря пандомно выбираем элемент, ключу добавляем расширение, а на экране к нужному числу добаляем значение ключа
//Создаём список УЖЕ выбранных ключей
//Идёт проверка если ново-выбранного при помощи рандома ключа в списке нет, то идёт его добавление по коментарию 99, после чего добавляем его в список.

document.getElementById("b1").addEventListener("click", function(event) {
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
document.getElementById("b5").addEventListener("click", function(event) {
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
document.getElementById("b10").addEventListener("click", function(event) {
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
document.getElementById("b100").addEventListener("click", function(event) {
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

document.getElementById("ybrat").addEventListener("click", function(event) {
    event.preventDefault();
    
    let nameInput = document.getElementById("coin");
    let stavka = document.getElementById("chislo");
    let stavkachislo = parseInt(stavka.innerText);  // преобразуем значение в числовой тип данных
    let coin_chislo = parseInt(nameInput.innerText);  // преобразуем значение в числовой тип данных
    nameInput.innerText = coin_chislo + stavkachislo
    stavka.innerText = 0
})


document.getElementById("polojit").addEventListener("click", function(event) {
    event.preventDefault();
    let coin1 = document.getElementById("chislo");
    let coin = parseInt(coin1.innerHTML);
    if (coin === 0 ){
        alert("Нужна ставка")
    }
    else{let b1 = document.getElementById("b1");
    let b5 = document.getElementById("b5");
    let b10 = document.getElementById("b10");
    let b100 = document.getElementById("b100");
    let ybrat = document.getElementById("ybrat");
    let polojit = document.getElementById("polojit")
    let vzad = document.getElementById("vzad")
    let sebe = document.getElementById("emu")
    let edvoit = document.getElementById("ydvoit")
    b1.disabled = true;
    b5.disabled = true;
    b10.disabled = true;
    b100.disabled = true;
    ybrat.disabled = true;
    polojit.disabled = true;
    vzad.disabled = false;
    sebe.disabled = false;
    edvoit.disabled = false;
    rr()
    setTimeout(() => {  rr(); }, 1000);
    setTimeout(() => {  diller(); }, 1000);
    setTimeout(() => {  diller(); }, 500);
    
}
    
})

function rr() {
    let chislo = document.getElementById("chisloKart");
    let currentNumber = parseInt(chislo.innerHTML); // Получаем текущее число
  
    // Создаем массив с возможными значениями карт в игре Блек-джек
    let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1];
  
    // Генерируем индекс для выбора случайного значения из массива
    let randomIndex = Math.floor(Math.random() * values.length);
  
    // Получаем случайное значение карты
    let randomValue = values[randomIndex];
  
    // Увеличиваем текущее число на значение карты
    let newNumber = currentNumber + randomValue;
  
    chislo.innerHTML = newNumber; // Обновляем число на странице
  }
  function diller() {
    let chislo = document.getElementById("diller");
    let currentNumber = parseInt(chislo.innerHTML); // Получаем текущее число
  
    // Создаем массив с возможными значениями карт в игре Блек-джек
    let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1];
  
    // Генерируем индекс для выбора случайного значения из массива
    let randomIndex = Math.floor(Math.random() * values.length);
  
    // Получаем случайное значение карты
    let randomValue = values[randomIndex];
  
    // Увеличиваем текущее число на значение карты
    let newNumber = currentNumber + randomValue;
  
    chislo.innerHTML = newNumber; // Обновляем число на странице
  }


  document.getElementById("vzad").addEventListener("click", function(event) {
    event.preventDefault();
    let chisloKart1 = document.getElementById("chisloKart");
    let chisloKart = parseInt(chisloKart1.innerHTML);
    rr();
    if (chisloKart>21){
        alert("Нельзя, ты проиграл")
        let vzad = document.getElementById("vzad")
        vzad.disabled = true;
    }
})


document.getElementById("ydvoit").addEventListener("click", function(event) {
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
    let stavka1 = document.getElementById("chisloKart");
    let diller1 = document.getElementById("diller");
    let stavka = parseInt(stavka1.innerHTML);
    let diller = parseInt(diller1.innerHTML); 
    
    function callDiller() {
        if (diller < stavka) {
            diller()
            callDiller();
        } else {
            alert("Я проиграл");
        }
    }
    
    callDiller();
})