

function kontrolAd()
{
	var ad=document.getElementById("ad");
	if(ad.value=="" || ad.value.length<3)
	{
		ad.value="";
		ad.placeholder="Adınız en az 3 harfli olmalı.";
		ad.style.borderColor="red";
		return false;
	}
	else
	{
		ad.placeholder="Adınız...";
		ad.style.border="none";
		return true;
	}
}

function kontrolSoyad()
{
	var soyad=document.getElementById("soyad");
	if(soyad.value=="" || soyad.value.length<3)
	{
		soyad.value="";
		soyad.placeholder="Soyadınız en az 3 harfli olmalı.";
		soyad.style.borderColor="red";
		return false;
	}
	else
	{
		soyad.placeholder="Soyadınız...";
		soyad.style.border="none";
		return true;
	}
}

function kontrolEposta()
{
	var eposta=document.getElementById("eposta");
	if(eposta.value=="" || ad.value.length<3 || !eposta.value.includes("@"))
	{
		eposta.value="";
		eposta.placeholder="E-Posta ornek@mail.com şeklinde olmalı...";
		eposta.style.borderColor="red";
		return false;
	}
	else
	{
		eposta.placeholder="ornek@mail.com";
		eposta.style.border="none";
		return true;
	}
}

function kontrolTel()
{
	var tel=document.getElementById("tel");
	if(tel.value=="" || tel.value.length<10 || tel.value.includes("ö") || tel.value.includes("b") || tel.value.includes("ı") || tel.value.includes("p") || tel.value.includes("c") || tel.value.includes("i") || tel.value.includes("r") || tel.value.includes("ç") || tel.value.includes("j") || tel.value.includes("s") || tel.value.includes("d") || tel.value.includes("k") || tel.value.includes("ş") || tel.value.includes("e") || tel.value.includes("l") || tel.value.includes("t") || tel.value.includes("f") || tel.value.includes("m") || tel.value.includes("u") || tel.value.includes("g") || tel.value.includes("n") || tel.value.includes("ü") || tel.value.includes("ğ") || tel.value.includes("o") || tel.value.includes("v") || tel.value.includes("h") || tel.value.includes("y") || tel.value.includes("z") || tel.value.includes("q") || tel.value.includes("w") || tel.value.includes("x"))
	{
		tel.value="";
		tel.placeholder="Telefon numarası girin.";
		tel.style.borderColor="red";
		return false;
	}
	else
	{
		tel.placeholder="";
		tel.style.border="none";
		return true;
	}
}

function kontrolCinsiyet()
{
	var cinsiyet=document.getElementsByName("cinsiyet");
	var erkek=document.getElementById("erkek");
	var kadin=document.getElementById("kadin");
	if(erkek.checked || kadin.checked)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function kontrolMesaj()
{
	var mesaj=document.getElementById("mesaj");
	if(mesaj.value=="" || mesaj.value.length<3)
	{
		mesaj.value="";
		mesaj.placeholder="Lütfen mesajınızı yazın.";
		mesaj.style.borderColor="red";
		return false;
	}
	else
	{
		mesaj.placeholder="Mesajınız...";
		mesaj.style.border="none";
		return true;
	}
}

function kontrolOnay()
{
	var onay=document.getElementById("onay");
	if(onay.checked)
	{
		return true;
	}
	else
	{
		return false;
	}
}

function gonder()
{
	if(kontrolAd() && kontrolSoyad() && kontrolEposta() && kontrolTel() && kontrolCinsiyet() && kontrolMesaj() && kontrolOnay())
	{
		alert("Mesajınız gönderildi.")
		return true;
	}
	else
	{
		alert("Mesaj Gönderilmedi. Lütfen gerekli alanları doldurunuz.")
		return false;
	}
}