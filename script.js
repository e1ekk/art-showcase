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
var languages = JSON.parse(`{"en":[{"fullscreen":"Open in fullscreen", "en":"Change language to English", "pl":"Change language to Polish", "featured":"Featured", "allart":"All art", "desc1":"My very first creation which started the whole thing. The inspiration came from <a href='https://www.reddit.com/r/ForzaHorizon/comments/1attra8/d_b_s/' target='_blank'>this</a> Reddit post. Off to a good start.", "desc5":"Made as a request from a friend. I swear, it wasn't my idea.", "desc6":"Got inspired by <a href='https://www.reddit.com/r/ForzaHorizon/comments/1fvyhpw/classic/' target='_blank'>this</a> Reddit post.", "desc8":"The map is <a href='https://www.youtube.com/watch?v=OJbvLW8ICUo' target='_blank'>Hoshido City</a>. There's also a refreshed version which released 4 days later called <a href='https://www.youtube.com/watch?v=9iz3FcQ1zyE' target='_blank'>Hoshido City Redux</a>.", "desc9":"Made for Halloween.", "desc10":"Took the photos with a random guy driving around the race track."}], "pl":[{"fullscreen":"Otwórz w widoku pełnoekranowym", "en":"Zmień język na angielski", "pl":"Zmień język na polski", "featured":"Wyróżnione", "allart":"Wszystkie prace", "desc1":"Moja pierwsza kreacja, od której to wszystko się zaczęło. Inspiracja wzięła się z <a href='https://www.reddit.com/r/ForzaHorizon/comments/1attra8/d_b_s/' target='_blank'>tego</a> posta na Reddicie. Na dobry początek.", "desc5":"Zrobione na prośbę znajomej. Przysięgam, to nie był mój pomysł.", "desc6":"Zainspirowałem się <a href='https://www.reddit.com/r/ForzaHorizon/comments/1fvyhpw/classic/' target='_blank'>tym</a> postem na Reddicie.", "desc8":"Mapa nazywa się <a href='https://www.youtube.com/watch?v=OJbvLW8ICUo' target='_blank'>Hoshido City</a>. Istnieje też odświeżona wersja, która została wydana 4 dni później, a nazywa się <a href='https://www.youtube.com/watch?v=9iz3FcQ1zyE' target='_blank'>Hoshido City Redux</a>.", "desc9":"Zrobione z okazji Halloween.", "desc10":"Zdjęcia zrobiłem z losową osobą, która jeździła wokół toru."}]}`);
if(setlanguage == "en"){
    var fullscreen = languages.en[0].fullscreen;
    for(var i=13; i>0; i--) document.getElementsByName("fullscreenjson")[i].title=fullscreen;
    var en = languages.en[0].en;
    document.getElementById("enjson").title=en;
    var pl = languages.en[0].pl;
    document.getElementById("pljson").title=pl;
    var featured = languages.en[0].featured;
    document.getElementById("featuredjson").innerHTML=featured;
    var allart = languages.en[0].allart;
    document.getElementById("allartjson").innerHTML=allart;
    var desc1 = languages.en[0].desc1;
    document.getElementById("desc1json").innerHTML=desc1;
    var desc5 = languages.en[0].desc5;
    document.getElementById("desc5json").innerHTML=desc5;
    var desc6 = languages.en[0].desc6;
    document.getElementById("desc6json").innerHTML=desc6;
    var desc8 = languages.en[0].desc8;
    document.getElementById("desc8json").innerHTML=desc8;
    var desc9 = languages.en[0].desc9;
    document.getElementById("desc9json").innerHTML=desc9;
    var desc10 = languages.en[0].desc10;
    document.getElementById("desc10json").innerHTML=desc10;
}
if(setlanguage == "pl"){
    var fullscreen = languages.pl[0].fullscreen;
    for(var i=13; i>=0; i--) document.getElementsByName("fullscreenjson")[i].title=fullscreen;
    var en = languages.pl[0].en;
    document.getElementById("enjson").title=en;
    var pl = languages.pl[0].pl;
    document.getElementById("pljson").title=pl;
    var featured = languages.pl[0].featured;
    document.getElementById("featuredjson").innerHTML=featured;
    var allart = languages.pl[0].allart;
    document.getElementById("allartjson").innerHTML=allart;
    var desc1 = languages.pl[0].desc1;
    document.getElementById("desc1json").innerHTML=desc1;
    var desc5 = languages.pl[0].desc5;
    document.getElementById("desc5json").innerHTML=desc5;
    var desc6 = languages.pl[0].desc6;
    document.getElementById("desc6json").innerHTML=desc6;
    var desc8 = languages.pl[0].desc8;
    document.getElementById("desc8json").innerHTML=desc8;
    var desc9 = languages.pl[0].desc9;
    document.getElementById("desc9json").innerHTML=desc9;
    var desc10 = languages.pl[0].desc10;
    document.getElementById("desc10json").innerHTML=desc10;
}