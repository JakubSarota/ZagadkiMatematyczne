function liczenie(){
    var dzisiaj=new Date();
    var dzien=dzisiaj.getDate();
    var miesiac=dzisiaj.getMonth();
    var rok=dzisiaj.getFullYear();

    var godzina=dzisiaj.getHours();
    var minuta=dzisiaj.getMinutes();
    var sekunda=dzisiaj.getSeconds();

    if(sekunda<10)sekunda=""+sekunda;

    document.getElementById("timer").innerHTML=dzien+"/"+miesiac+"/"+rok+"<br>"+godzina+":"+minuta+":"+sekunda;
    setTimeout("liczenie()",1000);
}