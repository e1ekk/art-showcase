const scroll = 150;
window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if(currentScroll <= scroll){
        var opacity = 1 - currentScroll / scroll;
        var height = 150 - 150 * currentScroll / scroll;
        var marginleft = -75 + 75 * currentScroll / scroll;
    }else{
        opacity = 0;
        height = 0;
    }
    var logo = document.getElementById("logo").style;
    logo.opacity = opacity;
    logo.height = height;
    logo.marginLeft = marginleft;
});

var languagevalue;

function setpl(){
    languagevalue = "pl";
    localStorage.setItem("language", languagevalue);
    location.reload();
}
function seten(){
    languagevalue = "en";
    localStorage.setItem("language", languagevalue);
    location.reload();
}

var setlanguage = localStorage.getItem("language");
var languages = JSON.parse(
    `{"en":[{"fullscreen":"Open in fullscreen", "en":"Change language to English", "pl":"Change language to Polish", "featured":"Featured", "allart":"All art", "more":"My other projects", "language":"Language", "desc1":"My very first creation which started the whole thing. The inspiration came from <a href='https://www.reddit.com/r/ForzaHorizon/comments/1attra8/d_b_s/' target='_blank'>this Reddit post</a>. Off to a good start. By the way, this is my favorite car.", "desc2":"The engine bay in this car is just magnificent.", "desc3":"Looks a bit like a postcard. All it's missing is a huge \\\"Greetings from Mexico\\\".", "desc4":"A proper drag racing car.", "desc5":"Tried to achieve a vintage photo look. Got inspired by <a href='https://www.reddit.com/r/ForzaHorizon/comments/1fvyhpw/classic/' target='_blank'>this Reddit post</a>.", "desc6":"It's a shame they stopped the production of these. Imagine a Magnum Hellcat...", "desc7":"The map is <a href='https://www.youtube.com/watch?v=OJbvLW8ICUo' target='_blank'>Hoshido City</a>. There's also a refreshed version which released 4 days later called <a href='https://www.youtube.com/watch?v=9iz3FcQ1zyE' target='_blank'>Hoshido City Redux</a>. Should've waited a week.", "desc8":"Made for Halloween. A bit early but I was impatient.", "desc9":"Took the photos with a random guy driving around the race track. A real MVP.", "desc10":"The Porsche 911 Dakar. Amazing car.", "desc11":"Various winter and Christmas themed places from around the map.", "desc12":"Winter in Forza Horizon 4 👌.", "desc13":"If you're looking for a deeper meaning here... I regret to inform you that there's none. I just thought these backgrounds look cool 😎."}],
    "pl":[{"fullscreen":"Otwórz w widoku pełnoekranowym", "en":"Zmień język na angielski", "pl":"Zmień język na polski", "featured":"Wyróżnione", "allart":"Wszystkie prace", "more":"Moje pozostałe projekty", "language":"Język", "desc1":"Moja pierwsza kreacja, od której to wszystko się zaczęło. Inspiracja wzięła się z <a href='https://www.reddit.com/r/ForzaHorizon/comments/1attra8/d_b_s/' target='_blank'>tego posta na Reddicie</a>. Na dobry początek. Swoją drogą, to jest moje ulubione auto.", "desc2":"Komora silnika tego samochodu jest po prostu wspaniała.", "desc3":"Trochę wygląda jak pocztówka. Brakuje tylko wielkiego napisu \\\"Pozdrowienia z Meksyku\\\".", "desc4":"Porządne auto do drag racingu.", "desc5":"Spróbowałem uzyskać wygląd starego zdjęcia. Zainspirowałem się <a href='https://www.reddit.com/r/ForzaHorizon/comments/1fvyhpw/classic/' target='_blank'>tym postem na Reddicie</a>.", "desc6":"Szkoda, że zakończyli ich produkcję. Wyobraź sobie Magnuma Hellcata...", "desc7":"Mapa nazywa się <a href='https://www.youtube.com/watch?v=OJbvLW8ICUo' target='_blank'>Hoshido City</a>. Jest też odświeżona wersja, która została wydana 4 dni później, a nazywa się <a href='https://www.youtube.com/watch?v=9iz3FcQ1zyE' target='_blank'>Hoshido City Redux</a>. Mogłem poczekać tydzień.", "desc8":"Zrobione z okazji Halloween. Trochę wcześnie ale byłem niecierpliwy.", "desc9":"Zdjęcia zrobiłem z losową osobą, która jeździła wokół toru. Prawdziwy MVP.", "desc10":"Porsche 911 Dakar. Świetne auto.", "desc11":"Różne zimowe i świąteczne miejsca na mapie.", "desc12":"Zima w Forzie Horizon 4 👌.", "desc13":"Jeśli szukasz tu jakiegoś głębszego znaczenia... niestety muszę cię zmartwić, ale takowego tu nie ma. Po prostu stwierdziłem, że te tła wyglądają git 😎."}]}`
);
if(setlanguage == "en"){
    var fullscreen = languages.en[0].fullscreen;
    var elements = document.getElementsByClassName("fullscreenjson");
    for (var i = 0; i < elements.length; i++) elements[i].title = fullscreen;
    document.getElementById("enjson").title = languages.en[0].en;
    document.getElementById("pljson").title = languages.en[0].pl;
    document.getElementById("featuredjson").innerHTML = languages.en[0].featured;
    document.getElementById("allartjson").innerHTML = languages.en[0].allart;
    document.getElementById("morejson").innerHTML = languages.en[0].more;
    document.getElementById("languagejson").innerHTML = languages.en[0].language;
    for (var i = elements.length-1; i > 0 ; i--) document.getElementById(`desc${i}json`).innerHTML = languages.en[0][`desc${i}`];
    document.getElementById("descfeatured").innerHTML = languages.en[0][`desc${elements.length-1}`];
}
if(setlanguage == "pl"){
    var fullscreen = languages.pl[0].fullscreen;
    var elements = document.getElementsByClassName("fullscreenjson");
    for (var i = 0; i < elements.length; i++) elements[i].title = fullscreen;
    document.getElementById("enjson").title = languages.pl[0].en;
    document.getElementById("pljson").title = languages.pl[0].pl;
    document.getElementById("featuredjson").innerHTML = languages.pl[0].featured;
    document.getElementById("allartjson").innerHTML = languages.pl[0].allart;
    document.getElementById("morejson").innerHTML = languages.pl[0].more;
    document.getElementById("languagejson").innerHTML = languages.pl[0].language;
    for (var i = elements.length-1; i > 0 ; i--) document.getElementById(`desc${i}json`).innerHTML = languages.pl[0][`desc${i}`];
    document.getElementById("descfeatured").innerHTML = languages.pl[0][`desc${elements.length-1}`];
}

var moreopen = Boolean(false);
function more(){
    var menu = document.getElementById("menu");
    var moreicon = document.getElementById("moreicon");
    var menuclose = document.getElementById("menuclose");
    if(moreopen == false){
        menu.classList.add("open");
        menuclose.classList.add("open");
        moreicon.classList.add("open");
        moreicon.classList.remove("closed");
        moreopen = true;
    }
    else{
        menu.classList.remove("open");
        menuclose.classList.remove("open");
        moreicon.classList.remove("open");
        moreicon.classList.add("closed");
        moreopen = false;
    }
}