let dateFunctions = {

    //the function which adds zero to minute indicator
    addZero: (m) => {
        if (m < 10) {
            m = "0" + m;
        };
        return m;
    },

    showClock: function () {
        let date = new Date();
        let hours = date.getHours();
        let m = date.getMinutes();
        setInterval(this.showClock, 500);
        let calculateDate = dateFunctions.addZero(m);
        document.getElementsByTagName("span")[0].innerHTML = `${hours}: ${calculateDate}<br>`;
    },

    showDate: function () {
        let date = new Date();
        let d = date.getDate();
        let monthsAze = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul",
            "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
        document.getElementsByTagName("span")[1].innerHTML = d + " " + monthsAze[date.getMonth()] + "<br>";
    },

    showDay: function () {
        let date = new Date();
        let daysAze = ["Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı",
            "Cümə", "Şənbə", "Bazar"];
        document.getElementsByTagName("span")[2].innerHTML = daysAze[date.getDay() - 1];
        if (date.getDay() === 0) {
            document.getElementsByTagName("span")[2].innerHTML = "Bazar";
        }
    }
}