<?php 
$kullaniciAdi = "burak.sezgin@ogr.sakarya.edu.tr";
$sifre  = "szg";
if($sifre == $_POST["sifre"] && $kullaniciAdi == $_POST["kullaniciAdi"]) {
    echo " Hosgeldiniz B181210056  Burak Sezgin";
}
else {
    header ("Location:giris.html");
}
?>