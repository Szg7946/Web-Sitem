var sayacM=0;
var sayacF=0;
var sayacO=0;
var sayacS=0;

function muzikler()
{
    
    var muzik=document.getElementsByClassName("muzikler");
    var a=muzik.length;

    if(sayacM%2==0)
    {
        muzik[0].style.display="block";
    }
    else
    {
        muzik[0].style.display="none";
    }
    sayacM++;
}
function filmler()
{
    
    var film=document.getElementsByClassName("filmler");
    var a=film.length;

    if(sayacF%2==0)
    {
        film[0].style.display="block";
    }
    else
    {
        film[0].style.display="none";
    }
    sayacF++;
}
function oyunlar()
{
    
    var oyun=document.getElementsByClassName("oyunlar");
    var a=oyun.length;

    if(sayacO%2==0)
    {
        oyun[0].style.display="block";
    }
    else
    {
        oyun[0].style.display="none";
    }
    sayacO++;
}
function siirler()
{
    
    var siir=document.getElementsByClassName("siirler");
    var a=siir.length;

    if(sayacS%2==0)
    {
        siir[0].style.display="block";
    }
    else
    {
        siir[0].style.display="none";
    }
    sayacS++;
}

function aynalar()
{
    var aynalar=document.getElementsByClassName("aynalar");
    var aynalarkisa=document.getElementsByClassName("aynalar-kisa");
    if(aynalar[0].style.display=="none")
    {
    aynalar[0].style.display="block";
    aynalarkisa[0].style.display="none";
    }
    else
    {
    aynalar[0].style.display="none";
    aynalarkisa[0].style.display="block";
    }
}
function ovar()
{
    var ovar=document.getElementsByClassName("ovar");
    var ovarkisa=document.getElementsByClassName("ovar-kisa");
    if(ovar[0].style.display=="none")
    {
    ovar[0].style.display="block";
    ovarkisa[0].style.display="none";
    }
    else
    {
    ovar[0].style.display="none";
    ovarkisa[0].style.display="block";
    }
}
function kurbanim()
{
    var kurbanim=document.getElementsByClassName("kurbanim");
    var kurbanimkisa=document.getElementsByClassName("kurbanim-kisa");
    if(kurbanim[0].style.display=="none")
    {
    kurbanim[0].style.display="block";
    kurbanimkisa[0].style.display="none";
    }
    else
    {
    kurbanim[0].style.display="none";
    kurbanimkisa[0].style.display="block";
    }
}
function sakarya()
{
    var sakarya=document.getElementsByClassName("sakarya");
    var sakaryakisa=document.getElementsByClassName("sakarya-kisa");
    if(sakarya[0].style.display=="none")
    {
    sakarya[0].style.display="block";
    sakaryakisa[0].style.display="none";
    }
    else
    {
    sakarya[0].style.display="none";
    sakaryakisa[0].style.display="block";
    }
}
function tekhece()
{
    var tekhece=document.getElementsByClassName("tekhece");
    var tekhecekisa=document.getElementsByClassName("tekhece-kisa");
    if(tekhece[0].style.display=="none")
    {
    tekhece[0].style.display="block";
    tekhecekisa[0].style.display="none";
    }
    else
    {
    tekhece[0].style.display="none";
    tekhecekisa[0].style.display="block";
    }
}
function gormusuz()
{
    var gormusuz=document.getElementsByClassName("gormusuz");
    var gormusuzkisa=document.getElementsByClassName("gormusuz-kisa");
    if(gormusuz[0].style.display=="none")
    {
    gormusuz[0].style.display="block";
    gormusuzkisa[0].style.display="none";
    }
    else
    {
    gormusuz[0].style.display="none";
    gormusuzkisa[0].style.display="block";
    }
}
function sessizgemi()
{
    var sessizgemi=document.getElementsByClassName("sessizgemi");
    var sessizgemikisa=document.getElementsByClassName("sessizgemi-kisa");
    if(sessizgemi[0].style.display=="none")
    {
    sessizgemi[0].style.display="block";
    sessizgemikisa[0].style.display="none";
    }
    else
    {
    sessizgemi[0].style.display="none";
    sessizgemikisa[0].style.display="block";
    }
}

function oerlerki()
{
    var oerlerki=document.getElementsByClassName("oerlerki");
    var oerlerkikisa=document.getElementsByClassName("oerlerki-kisa");
    if(oerlerki[0].style.display=="none")
    {
    oerlerki[0].style.display="block";
    oerlerkikisa[0].style.display="none";
    }
    else
    {
    oerlerki[0].style.display="none";
    oerlerkikisa[0].style.display="block";
    }
}
function ilim()
{
    var ilim=document.getElementsByClassName("ilim");
    var ilimkisa=document.getElementsByClassName("ilim-kisa");
    if(ilim[0].style.display=="none")
    {
    ilim[0].style.display="block";
    ilimkisa[0].style.display="none";
    }
    else
    {
    ilim[0].style.display="none";
    ilimkisa[0].style.display="block";
    }
}
function yalnizlik()
{
    var yalnizlik=document.getElementsByClassName("yalnizlik");
    var yalnizlikkisa=document.getElementsByClassName("yalnizlik-kisa");
    if(yalnizlik[0].style.display=="none")
    {
    yalnizlik[0].style.display="block";
    yalnizlikkisa[0].style.display="none";
    }
    else
    {
    yalnizlik[0].style.display="none";
    yalnizlikkisa[0].style.display="block";
    }
}
function demebari()
{
    var demebari=document.getElementsByClassName("demebari");
    var demebarikisa=document.getElementsByClassName("demebari-kisa");
    if(demebari[0].style.display=="none")
    {
    demebari[0].style.display="block";
    demebarikisa[0].style.display="none";
    }
    else
    {
    demebari[0].style.display="none";
    demebarikisa[0].style.display="block";
    }
}
function dusunuyorum()
{
    var dusunuyorum=document.getElementsByClassName("dusunuyorum");
    var dusunuyorumkisa=document.getElementsByClassName("dusunuyorum-kisa");
    if(dusunuyorum[0].style.display=="none")
    {
    dusunuyorum[0].style.display="block";
    dusunuyorumkisa[0].style.display="none";
    }
    else
    {
    dusunuyorum[0].style.display="none";
    dusunuyorumkisa[0].style.display="block";
    }
}

function kirmiziH()
{
    document.getElementById("header").style.background="red";
    document.getElementById("headerh").style.background="red !important";
    
}