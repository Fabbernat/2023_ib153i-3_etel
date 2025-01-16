# Tesztjegyzőkönyv-`Elérhető rendelések/Availableorders`

Az alábbi tesztdokumentum a `Étel` projekthez tartozó `Elérhető rendelések/Availableorders` funkcióihoz készült. Felelőse: `Tyetyák Tamás` 

``` 
A tesztelési dokumentáció áttekinthetőségének érdekében egy jegyzőkönyv egy adott témához tartozó funkciókat tartalmazza 
(pl. vektorműveletek) és ne az adott projekttaghoz tartozó összes funkció tesztelését belesűrítve egy fájlba.
``` 

## 1. Teszteljárások (TP)

### 1.1. Email átállítása helyes értékekkel
- Azonosító: TP-01
- Tesztesetek: TC-01
- Leírás: Email átállítása helyes értékekkel
    0. lépés: Végezzük el a bejelentkezést rendelő fiókként.
    1. lépés: Lépjünk az `Fiókom` oldalra.
    2. lépés: Írjuk be a `Új email` input mezőbe a helyes email címet
    3. lépés: kattintsunk az `Email frissítése` gombra

### 1.2. Email átállítása érték nelkül
- Azonosító: TP-02
- Tesztesetek: TC-02
- Leírás: Email átállítása érték nelkül, ez nem szabadna hogy működjön
    0. lépés: Végezzük el a bejelentkezést rendelő fiókként.
    1. lépés: Lépjünk az `Fiókom` oldalra.
    2. lépés: Kihagyjuk az input mezőbe írást, ez helytelen
    3. lépés: kattintsunk az `Email frissítése` gombra


### 1.3 Jelszó átállítása helyes értékekkel
- Azonosító: TP-03
- Tesztesetek: TC-03
- Leírás: Felvett rendelés kiszállítása és rendelés teljesítése
    0. lépés: Végezzük el a bejelentkezést rendelő fiókként.
    1. lépés: Lépjünk az `Fiókom` oldalra.
    2. lépés: Írjuk be a `Új jelszó` input mezőbe a helyes jelszót címet
    3. lépés: Írjuk be a `Új jelszó újra` input mezőbe az előzőleg megadott jelszót újra, helyesen
    3. lépés: kattintsunk az `Jelszó frissítése` gombra

### 1.4 Jelszó átállítása érték nelkül
- Azonosító: TP-04
- Tesztesetek: TC-04
- Leírás: Felvett rendelés kiszállítása és rendelés teljesítése
    0. lépés: Végezzük el a bejelentkezést rendelő fiókként.
    1. lépés: Lépjünk az `Fiókom` oldalra.
    2. lépés: Kihagyjuk az input mezőbe írást, ez helytelen
    3. lépés: kattintsunk az `Jelszó frissítése` gombra

### 1.5 Jelszó átállítása helytelen értékekkel
- Azonosító: TP-05
- Tesztesetek: TC-05
- Leírás: Felvett rendelés kiszállítása és rendelés teljesítése
    0. lépés: Végezzük el a bejelentkezést rendelő fiókként.
    1. lépés: Lépjünk az `Fiókom` oldalra.
    2. lépés: Írjuk be a `Új jelszó` input mezőbe a helyes jelszót címet
    3. lépés: Írjuk be a `Új jelszó újra` input mezőbe viszont nem a megegyező jelszót írjuk be
    3. lépés: kattintsunk az `Jelszó frissítése` gombra


## 2. Teszesetek (TC)

## 2.1 Rendelések kezelésének tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Email átállítása helyes értékekkel
    Művelet 1: Átlépek a bejelentkezett rendelő fiókkal az `Fiókom` oldalra.
    Művelet 2: Megkeresem az `Új email` input mezőt
    Művelet 3: Megadok ebbe az input mezőbe egy helyes email címet
    Művelet 4: megnyomom az `Email frissítése` gombot
    Elvárt eredmény: Az email cím frissítésre kerül


#### 2.1.2 TC-02
- TP: TP-02
- Leírás: Email átállítása üres vagy érvénytelen inputtal
    Művelet 1: Átlépek a bejelentkezett rendelő fiókkal az `Fiókom` oldalra.
    Művelet 2: Megkeresem az `Új email` input mezőt
    Művelet 3: Nem adok meg semmit az email input mezőbe
    Művelet 4: megnyomom az `Email frissítése` gombot
    Elvárt eredmény: Az email cím nem kerül frissítésre és a felhasználó tájékoztatva lesz a problémáról

#### 2.1.3. TC-03
- TP: TP-03
- Leírás: Jelszó átállítása helyes értékekkel
    Művelet 1: Átlépek a bejelentkezett rendelő fiókkal az `Fiókom` oldalra.
    Művelet 2: Megkeresem az `Új jelszó` input mezőt
    Művelet 3: Megadok ebbe az input mezőbe egy helyes jelszót
    Művelet 4: Megkeresem az `Új jelszó újra` input mezőt
    Művelet 5: Megadom ebbe az input mezőbe az előbb beírt jelszót újra, helyesen
    Művelet 6: megnyomom az `Jelszó frissítése` gombot
    Elvárt eredmény: A jelszó frissítésre kerül

#### 2.1.4. TC-04
- TP: TP-04
- Leírás: Jelszó átállítása helyes értékekkel
    Művelet 1: Átlépek a bejelentkezett rendelő fiókkal az `Fiókom` oldalra.
    Művelet 2: Megkeresem az `Új jelszó` input mezőt
    Művelet 3: Nem adok meg semmit
    Művelet 4: Megkeresem az `Új jelszó újra` input mezőt
    Művelet 5: Nem adok meg semmit
    Művelet 6: megnyomom az `Jelszó frissítése` gombot
    Elvárt eredmény: A jelszó nem kerül frissítésre és a felhasználó tájékoztatva lesz hogy érvénytelen a jelszó


#### 2.1.5. TC-05
- TP: TP-05
- Leírás: Jelszó átállítása helyes értékekkel
    Művelet 1: Átlépek a bejelentkezett rendelő fiókkal az `Fiókom` oldalra.
    Művelet 2: Megkeresem az `Új jelszó` input mezőt
    Művelet 3: Megadok ebbe az input mezőbe egy helyes jelszót
    Művelet 4: Megkeresem az `Új jelszó újra` input mezőt
    Művelet 5: Megadok ebbe az input mezőbe egy eltérő jelszót, így a 2 jelszó nem egyezik meg
    Művelet 6: megnyomom az `Jelszó frissítése` gombot
    Elvárt eredmény: A jelszó nem kerül frissítésre és a felhasználó tájékoztatva lesz hogy nem egyezik meg a 2 jelszó

## 3. Tesztriportok (TR)

## 3.1 Rendelések kezelésének tesztesetei

#### 3.1.1 TR-01
- TP: TP-01
    1. lépés: Átlépek a bejelentkezett rendelő fiókkal az `Fiókom` oldalra.
    2. lépés: Megkeresem az `Új email` input mezőt
    3. lépés: Beírom az inputba : `sajtosjanos@gmail.com`
    4. lépés: rákattintok az `Email frissítése`gombra
    Eredmény: helyes, az új email címem : `sajtosjanos@gmail.com`

#### 3.1.2 TR-02
- TP: TP-02
    1. lépés: Átlépek a bejelentkezett rendelő fiókkal az `Fiókom` oldalra.
    2. lépés: Megkeresem az `Új email` input mezőt
    3. lépés: Nem írok be semmit az inputba
    4. lépés: rákattintok az `Email frissítése`gombra
    Eredmény: helyes, nem történt meg az email módosítás és megkaptam a `Az email nem érvényes!` üzenetet

#### 3.1.3 TR-03
- TP: TP-03
    1. lépés: Átlépek a bejelentkezett rendelő fiókkal az `Fiókom` oldalra.
    2. lépés: Megkeresem az `Új jelszó` input mezőt
    3. lépés: Beírom az inputba: `Körte123`
    4. lépés: Megkeresem az `Új jelszó újra` input mezőt
    5. lépés: Beírom az inputba: `Körte123`
    6. lépés: rákattintok az `Email frissítése`gombra
    Eredmény: helyes, megtörtént a jelszó módosítás, az új jelszó: `Körte123`

#### 3.1.4 TR-04
- TP: TP-04
    1. lépés: Átlépek a bejelentkezett rendelő fiókkal az `Fiókom` oldalra.
    2. lépés: Megkeresem az `Új jelszó` input mezőt
    3. lépés: Nem írok semmit az inputba
    4. lépés: Megkeresem az `Új jelszó újra` input mezőt
    5. lépés: Nem írok semmit az inputba
    6. lépés: rákattintok az `Email frissítése`gombra
    Eredmény: helyes, a jelszó nem került frissítésre és a `Az jelszó nem érvényes!` üzenetet kaptam

#### 3.1.5 TR-05
- TP: TP-05
    1. lépés: Átlépek a bejelentkezett rendelő fiókkal az `Fiókom` oldalra.
    2. lépés: Megkeresem az `Új jelszó` input mezőt
    3. lépés: Beírom az inputba: `Körte123`
    4. lépés: Megkeresem az `Új jelszó újra` input mezőt
    5. lépés: Beírom az inputba: `Alma123`
    6. lépés: rákattintok az `Email frissítése`gombra
    Eredmény: helyes, a jelszó nem került frissítésre és a `A két jelszó nem egyezik meg!` üzenetet kaptam
    












    

    
