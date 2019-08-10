function createElement(obj) {
    if (!obj.hasOwnProperty("name")) {
        alert("Can't create an element.")
        return;
    }

    let element = document.createElement(obj.name);

    if (obj.hasOwnProperty("class")) {
        element.setAttribute("class", obj.class);
    }

    if (obj.hasOwnProperty("src")) {
        element.setAttribute("src", obj.src);
    }

    if (obj.hasOwnProperty("alt")) {
        element.setAttribute("alt", obj.alt);
    }

    if (obj.hasOwnProperty("bgColor")) {
        element.style.backgroundColor = obj.bgColor;
    }

    if (obj.hasOwnProperty("bgImage")) {
        element.style.backgroundImage = obj.bgImage;
    }

    if (obj.hasOwnProperty("textColor")) {
        element.style.color = obj.textColor;
    }

    if (obj.hasOwnProperty("order")) {
        element.setAttribute("order", obj.order);
    }

    if (obj.hasOwnProperty("href")) {
        element.setAttribute("href", obj.href);
    }

    if (obj.hasOwnProperty("value")) {
        element.setAttribute("value", obj.value);
    }

    if (obj.hasOwnProperty('scriptsrc')) {
        element.setAttribute("src", obj.scriptsrc);
    }

    return element;
}


function createHeader(baseConfig, dateFunctions) {
    let header = createElement({ name: "header", class: "relative" });
    let header_img = createElement({ name: "img", src: "assets/img/index_up.png", class: "img header-image" });
    let logo = createElement({ name: "img", src: "assets/img/logo-emanat.png", class: "logo-img absolute" });
    let info_logo = createElement({ name: "img", src: "assets/img/info_logo.jpg", class: "info-logo-img absolute" });

    let flag_div = createElement({ name: "div", class: "absolute flag-pos" });
    let azeFlagImg = createElement({ name: "img", src: baseConfig.azeFlag, class: "azeLang" });
    let rusFlagImg = createElement({ name: "img", src: baseConfig.rusFlag, class: "rusLang" });
    let engFlagImg = createElement({ name: "img", src: baseConfig.engFlag, class: "engLang" });


    //For each time of sections created span elements
    let clock = document.createElement("span");
    let date = document.createElement("span");
    let day = document.createElement("span");
    //Created div element for keeping clock,date,day inside
    let date_div = createElement({ name: "div", class: "date-div absolute" });

    date_div.appendChild(clock);
    date_div.appendChild(date);
    date_div.appendChild(day);

    flag_div.appendChild(azeFlagImg);
    flag_div.appendChild(rusFlagImg);
    flag_div.appendChild(engFlagImg);


    azeFlagImg.addEventListener('click', function () {
        dateFunctions.showClock();
        dateFunctions.showDate();
        dateFunctions.showDay();
        let bodyAze = document.getElementsByClassName("bodyText");
        for (let i = 0; i < bodyAze.length; i++) {
            bodyAze[i].innerHTML = baseConfig.mainProviders[i].text;
        }
    });

    rusFlagImg.addEventListener('click', function () {
        localStorage.setItem("btn", "Удалить");
        localStorage.setItem("btnNext", "Вперед");
        localStorage.setItem("homeBtn", "Главная Страница");
        let date = new Date();
        let d = date.getDate();
        let monthsRus = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        document.getElementsByTagName("span")[1].innerHTML = d + " " + monthsRus[date.getMonth()] + "<br>";
        let daysRus = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
        document.getElementsByTagName("span")[2].innerHTML = daysRus[date.getDay() - 1];
        if (date.getDay() === 0) {
            document.getElementsByTagName("span")[2].innerHTML = "Воскресенье";
        };
        let bodyRus = document.getElementsByClassName("bodyText");
        for (let i = 0; i < bodyRus.length; i++) {
            bodyRus[i].innerHTML = baseConfig.mainProviders[i].rusText;
        };
    });


    engFlagImg.addEventListener('click', function () {
        localStorage.setItem("btn", "Delete");
        localStorage.setItem("btnNext", "Next");
        localStorage.setItem("homeBtn", "Home");
        let date = new Date();
        let d = date.getDate();
        let monthsEng = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        document.getElementsByTagName("span")[1].innerHTML = d + " " + monthsEng[date.getMonth()] + "<br>";
        let daysEng = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        document.getElementsByTagName("span")[2].innerHTML = daysEng[date.getDay() - 1];
        if (date.getDay() === 0) {
            document.getElementsByTagName("span")[2].innerHTML = "Sunday";
        };
        let bodyEng = document.getElementsByClassName("bodyText");
        for (let i = 0; i < bodyEng.length; i++) {
            bodyEng[i].innerHTML = baseConfig.mainProviders[i].engText;
        };
    });

    localStorage.setItem("btn", "Sil");
    localStorage.setItem("btnNext", "İrəli");
    localStorage.setItem("homeBtn", "Ana Səhifə")

    header.appendChild(header_img);
    header.appendChild(logo);
    header.appendChild(info_logo);
    header.appendChild(date_div);
    header.appendChild(flag_div);


    document.body.appendChild(header);

    dateFunctions.showClock();
    dateFunctions.showDate();
    dateFunctions.showDay();
}

function objectLength(obj) {
    let count = 0;
    for (let f in obj) {
        count++;
    }
    return count;
}


function createTopProviders(config) {
    //create main div for top providers
    let divContainer = createElement({ name: "div", class: "top-element-provider" });

    //get elements count in top provider
    let count = objectLength(config);

    //get total width of every item in block
    let totalItemWidth = (100 / count) - 1.5;

    //for dynamically ordering
    baseConfig.topProviders.sort(function (a, b) {
        return a.order - b.order;
    });


    for (let topItem in config) {
        let obj = config[topItem];

        let btn_div = createElement({ name: "div", class: "top-img-container", bgColor: obj.bgColor, order: obj.order });
        let btn_text = createElement({ name: "p", class: "btn-text", textColor: obj.textColor });
        let btn_img = createElement({ name: "img", class: "top-img-logo", src: obj.image });
        let btnDivScript = createElement({ name: "script", scriptsrc: obj.scriptsrc });

        btn_div.style.width = totalItemWidth + "%";

        btn_text.innerHTML = obj.name;

        divContainer.appendChild(btn_div);
        btn_div.appendChild(btn_img);
        btn_div.appendChild(btn_text);


        btn_div.addEventListener('click', () => {
            document.location.href = "provider.html";
            localStorage.setItem("src", btnDivScript.getAttribute("src"));
        });
    }
    document.body.appendChild(divContainer);
};

function createMainProviders(obj) {
    let bodyContainer = createElement({ name: 'div', class: 'bodyContainer' });
    let secondPage = createElement({ name: 'div', class: 'secondPage' });

    for (let i = 0; i < 18; i++) {
        let bodyProvider = createElement({ name: 'div', class: 'bodyProvider', bgColor: obj[i].bgColor });
        let bodyIcon = createElement({ name: 'i', class:obj[i].iconClass});

        let bodyText = createElement({ name: 'p', class: 'bodyText' });
        bodyText.innerHTML = obj[i].text;

        bodyContainer.appendChild(bodyProvider);
        bodyProvider.appendChild(bodyIcon);
        bodyProvider.appendChild(bodyText);
        document.body.appendChild(bodyContainer);


        //append all divs after 9 divs to other side/page
        if (i >= 9) {
            bodyContainer.appendChild(secondPage);
            secondPage.appendChild(bodyProvider);
        }
    }

    let leftAds = createElement({ name: 'div', class:'left-ads', bgImage: baseConfig.ads[0].bgImage });
    let rightAds = createElement({ name: 'div', class:'right-ads', bgImage: baseConfig.ads[1].bgImage });

    let leftBtn = createElement({ name: 'div' });
    let leftBtnImg = createElement({ name: 'img', class: 'leftBtn',src: "assets/img/left-btn.png"});

    let rightBtn = createElement({ name: 'div'});
    let rightBtnImg = createElement({ name: 'img', class: 'rightBtn',src: "assets/img/right-btn.png"});

    rightBtn.addEventListener('click', () => {
        bodyContainer.style.transform = 'translate(-130%,0)';
        bodyContainer.style.transition = '1s ease-in-out';
        secondPage.style.display = 'inline-block';
        rightBtnImg.style.display = 'none';
        leftBtnImg.style.display = 'inline-block';
        leftBtnImg.style.animation = 'fadeIn 2s';
    });
   
    leftBtn.addEventListener('click', () => {
        bodyContainer.style.transform = 'translate(0,0)';
        bodyContainer.style.transition = '1s ease-in-out';
        leftBtnImg.style.display = 'none';
        secondPage.style.display = "none";
        rightBtnImg.style.display = 'inline-block';
        rightBtnImg.style.animation = 'fadeIn 2s';
    });

    leftAds.appendChild(leftBtn);
    leftBtn.appendChild(leftBtnImg);
    rightBtn.appendChild(rightBtnImg);
    rightAds.appendChild(rightBtn);
    document.body.appendChild(rightAds);
    document.body.appendChild(leftAds);
}