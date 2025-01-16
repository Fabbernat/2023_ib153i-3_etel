# Tesztjegyzőkönyv-`Bejelentkezés`

Az alábbi tesztdokumentum a `Étel` projekthez tartozó `Bejelentkezés` funkcióihoz készült. Felelőse: `Dávid Flóra` 

``` 
A tesztelési dokumentáció áttekinthetőségének érdekében egy jegyzőkönyv egy adott témához tartozó funkciókat tartalmazza 
(pl. vektorműveletek) és ne az adott projekttaghoz tartozó összes funkció tesztelését belesűrítve egy fájlba.
``` 

## 1. Teszteljárások (TP)

### 1.1.Bejelentkezés rendelő személyként
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: Bejelentkezés rendelő személyként funkció teszteléséhez
    0. lépés: Nyissuk meg az alkalmazást, és nyomjuk meg a `Bejelentkezés` gombot
    1. lépés: A `Felhasználónév` szövegbeviteli mezőbe írjuk bel `felhasználó` nevet
    2. lépés: A `Jelszó` szövegbeviteli mezőbe írjuk be `jelszo` jelszavunkat
    3. lépés: Nyomjuk meg a `Bejelentkezés` gombot 
    4. lépés: Ellenőrizzük, hogy bejelentkezés elfogadása után, visszadob e a főoldalra  az oldal. Elvárt eredmény: `index`

### 1.2. Bejelentkezés étterem tuladonosként
- Azonosító: TP-02
- Tesztesetek: TC-01
- Leírás: Bejelentkezés étterem személyként funkció teszteléséhez
    0. lépés: Nyissuk meg az alkalmazást, és nyomjuk meg a `Bejelentkezés` gombot
    1. lépés: A `Felhasználónév` szövegbeviteli mezőbe írjunk be a `felhasználó` nevet
    2. lépés: A `Jelszó` szövegbeviteli mezőbe írjuk be `jelszo` jelszavunkat 
    3. lépés: Nyomjuk meg az `Bejelentkezés` gombot
    4. lépés: Ellenőrizzük, hogy bejelentkezés elfogadása után, visszadob e a főoldalra  a bejelentkezés oldal. Elvárt eredmény: `index`


### 1.3 Bejelentkezés futárként
- Azonosító: TP-02
- Tesztesetek: TC-02
- Leírás: Bejelentkezés futár személyként funkció teszteléséhez
    0. lépés: Nyissuk meg az alkalmazást, és nyomjuk meg a `Bejelentkezés` gombot
    1. lépés: A `Felhasználónév` szövegbeviteli mezőbe írjunk be a `felhasználó` nevet
    2. lépés: A `Jelszó` szövegbeviteli mezőbe írjuk be `jelszo` jelszavunkat 
    3. lépés: Nyomjuk meg az `Bejelentkezés` gombot
    4. lépés: Ellenőrizzük, hogy bejelentkezés elfogadása után, visszadob e a főoldalra a bejelentkezés oldal. Elvárt eredmény: `index`
    

## 2. Teszesetek (TC)

### 2.1. Bejelentkezés rendelői szeméyként funkció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Bejelentkezés rendelő személyként tesztelése
- Bemenet: `Felhasználó` = Csaba ; `Jelszó` = csaba12 
- Művelet: nyomjuk meg a `Bejelentkezés` gombot 
- Elvárt kimenet: a felhasználó be lett léptetve és az index oldalra lett dobva, az oldalon a felhasználó neve meg lett jelenítve: `Üdvözlünk újra Csaba`

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: Bejelentkezés rendelői személyként, hibás felhasználónévvel
- Bemenet: `Felhasználó` = csaba - Csaba helyett ; `Jelszó` = csaba12
- Művelet: nyomjuk meg a `Bejelentkezés` gombot 
- Elvárt kimenet: Az oldal nem enged tovább és kiírja, hogy `Nincs ilyen felhasználó!`

### 2.1.3 TC-03
- TP: TP-01
- Leírás: Bejelentkezés rendelői személyként, hibás jelszóval
- Bemenet: `Felhasználó` = Csaba ; `Jelszó` = csaba- csaba12 helyett
- Művelet: nyomjuk meg a `Bejelentkezés` gombot 
- Elvárt kimenet: Az oldal nem enged tovább és kiírja, hogy `Hibás jelszó!`

### 2.1.4 TC-04
- TP: TP-01
- Leírás: Bejelentkezés rendelői személyként, hibás felhasználóval és jelszóval
- Bemenet: `Felhasználó` = csaba - Csaba helyett; `Jelszó` = csaba- csaba12 helyett
- Művelet: nyomjuk meg a `Bejelentkezés` gombot 
- Elvárt kimenet: Az oldal nem enged tovább és kiírja, hogy `Nincs ilyen felhasználó!`


### 2.2. Bejelentkezés étterem tulajdonosként funkció tesztesetei

### 2.2.1 TC-01
- TP: TP-02
- Leírás: Bejelentkezés étterem személyként tesztelése
- Bemenet: `Felhasználó` = Ildiko ; `Jelszó` = ildiko8
- Művelet: nyomjuk meg a `Bejelentkezés` gombot 
- Elvárt kimenet: a felhasználó be lett léptetve és az index oldalra lett dobva, az oldalon a felhasználó neve meg lett jelenítve: `Üdvözlünk újra Ildiko`

### 2.2.2 TC-02
- TP: TP-02
- Leírás: Bejelentkezés étterem személyként, hibás felhasználónévvel
- Bemenet: `Felhasználó` = ildiko - Ildiko helyett ; `Jelszó` = ildiko8
- Művelet: nyomjuk meg a `Bejelentkezés` gombot 
- Elvárt kimenet: Az oldal nem enged tovább és kiírja, hogy `Nincs ilyen felhasználó!`

### 2.2.3 TC-03
- TP: TP-02
- Leírás: Bejelentkezés étterem személyként, hibás jelszóval
- Bemenet: `Felhasználó` = Ildiko ; `Jelszó` = ildiko- idiko8 helyett
- Művelet: nyomjuk meg a `Bejelentkezés` gombot 
- Elvárt kimenet: Az oldal nem enged tovább és kiírja, hogy `Hibás jelszó!`

### 2.2.4 TC-04
- TP: TP-02
- Leírás: Bejelentkezés étterem személyként, hibás felhasználóval és jelszóval
- Bemenet: `Felhasználó` = ildiko - Ildiko helyett; `Jelszó` = ildiko- ildiko8 helyett
- Művelet: nyomjuk meg a `Bejelentkezés` gombot 
- Elvárt kimenet: Az oldal nem enged tovább és kiírja, hogy `Nincs ilyen felhasználó!`

## 2.3 Bejelentkezés futárként funkció tesztesetei

### 2.3.1 TC-01
-TP: TP-03
Leírás: Bejelentkezés futár személyként tesztelése
- Bemenet: `Felhasználó` = János; `Jelszó` = jani86
- Művelet: nyomjuk meg a `Bejelentkezés` gombot 
- Elvárt kimenet: a felhasználó be lett léptetve és az index oldalra lett dobva, az oldalon a felhasználó neve meg lett jelenítve: `Üdvözlünk újra János`

### 2.3.2 TC-02
-TP: TP-03
- Leírás: Bejelentkezés futár személyként, hibás felhasználónévvel
- Bemenet: `Felhasználó` = jános - János helyett ; `Jelszó` = jani86
- Művelet: nyomjuk meg a `Bejelentkezés` gombot 
- Elvárt kimenet: Az oldal nem enged tovább és kiírja, hogy `Nincs ilyen felhasználó!`

### 2.3.3 TC-03
- TP: TP-03
- Leírás: Bejelentkezés futár személyként, hibás jelszóval
- Bemenet: `Felhasználó` = János ; `Jelszó` = jani- jani86 helyett
- Művelet: nyomjuk meg a `Bejelentkezés` gombot 
- Elvárt kimenet: Az oldal nem enged tovább és kiírja, hogy `Hibás jelszó!`

### 2.3.4 TC_03
- TP: TP-03
- Leírás: Bejelentkezés futár személyként, hibás felhasználóval és jelszóval
- Bemenet: `Felhasználó` = jános - János helyett; `Jelszó` = jani- jani86 helyett
- Művelet: nyomjuk meg a `Bejelentkezés` gombot 
- Elvárt kimenet: Az oldal nem enged tovább és kiírja, hogy `Nincs ilyen felhasználó!`

## 3. Tesztriportok (TR)

### 3.1.Bejelentkezés rendelő személyként funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: Csabá-t beírtam
    2. lépés: csaba12-t beírtam 
    3. lépés: a gomb egyszeri megnyomás után inaktív lett
    4. lépés: át lett irányítva a főoldalra a felhasználó, tehát a bejelentkezés sikeres lett, és a főoldalon ki lett írva, hogy: Üdvözlünk újra Csaba!
    

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: csabá-t beírtam
    2. lépés: csaba12-t beírtam 
    3. lépés: a gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (`Nincs ilyen felhasználó`) és nem engedte be a felhasználót

### 3.1.3 TR-03 (TC-03)    
- TP: TP-01
    1. lépés: Csabá-t beírtam
    2. lépés: csaba-t beírtam 
    3. lépés: a gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (`Hibás jelszó!`) és nem engedte be a felhasználót

### 3.1.3 TR-04 (TC-04)    
- TP: TP-01
    1. lépés: csabá-t beírtam
    2. lépés: csaba-t beírtam 
    3. lépés: a gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (`Nincs ilyen felhasználó!`) és nem engedte be a felhasználót    


### 3.2. Bejelentkezés étterem tulajdonosként funkció tesztriportjai

#### 3.2.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: Ildiko-t beírtam
    2. lépés: ildiko8-t beírtam 
    3. lépés: a gomb egyszeri megnyomás után inaktív lett
    4. lépés: át lett irányítva a főoldalra a felhasználó, tehát a bejelentkezés sikeres lett, és a főoldalon ki lett írva, hogy: Üdvözlünk újra Ildiko!

### 3.2.2 TR-02 (TC-02)
- TP: TP-02
    1. lépés: ildiko-t beírtam
    2. lépés: ildiko8-t beírtam 
    3. lépés: a gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (`Nincs ilyen felhasználó`) és nem engedte be a felhasználót

### 3.2.3 TR-03 (TC-03)
- TP: TP-02
    1. lépés: Ildiko-t beírtam
    2. lépés: ildiko-t beírtam 
    3. lépés: a gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (`Hibás jelszó!`) és nem engedte be a felhasználót

### 3.2.4 TR-04 (TC-04)
- TP: TP-02
    1. lépés: ildiko-t beírtam
    2. lépés: ildiko-t beírtam 
    3. lépés: a gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (`Nincs ilyen felhasználó!`) és nem engedte be a felhasználót

### Bejelentkezés futárként funkció tesztriportjai    

 ### 3.3.1 TR-01 (TC-01)
 - TP: TP-03
    1. lépés: János-t beírtam
    2. lépés: jani86-t beírtam 
    3. lépés: a gomb egyszeri megnyomás után inaktív lett
    4. lépés: át lett irányítva a főoldalra a felhasználó, tehát a bejelentkezés sikeres lett, és a főoldalon ki lett írva, hogy: Üdvözlünk újra János!

### 3.3.2 TR-02 (TC-02)
- TP: TP-03
    1. lépés: jános-t beírtam
    2. lépés: jani86-t beírtam 
    3. lépés: a gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (`Nincs ilyen felhasználó`) és nem engedte be a felhasználót

### 3.3.3 TR-03 (TC-03)
- TP: TP-03
    1. lépés: János-t beírtam
    2. lépés: jani-t beírtam 
    3. lépés: a gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (`Hibás jelszó!`) és nem engedte be a felhasználót

### 3.3.4 TR-04 (TC-04)
- TP: TP-03
    1. lépés: jános-t beírtam
    2. lépés: jani-t beírtam 
    3. lépés: a gomb egyszeri megnyomás után inaktív lett
    4. lépés: helyes eredményt kaptam (`Nincs ilyen felhasználó!`) és nem engedte be a felhasználót

### Hibák, amik ki lettek javítva
-https://git-okt.sed.inf.szte.hu/2023_ib153i-3_etel/2023_ib153i-3_etel/-/issues/110    













    

    
