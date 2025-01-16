# Tesztjegyzőkönyv-`Elérhető rendelések/Availableorders`

Az alábbi tesztdokumentum a `Étel` projekthez tartozó `Elérhető rendelések/Availableorders` funkcióihoz készült. Felelőse: `Tyetyák Tamás` 

``` 
A tesztelési dokumentáció áttekinthetőségének érdekében egy jegyzőkönyv egy adott témához tartozó funkciókat tartalmazza 
(pl. vektorműveletek) és ne az adott projekttaghoz tartozó összes funkció tesztelését belesűrítve egy fájlba.
``` 

## 1. Teszteljárások (TP)

### 1.1. Még nincs felvett rendelés
- Azonosító: TP-01
- Tesztesetek: TC-01
- Leírás: Ha még nem létezik elérhető rendelés akkor semminek nem kellene megjelennie
    0. lépés: Végezzük el a bejelentkezést futár fiókként.
    1. lépés: Lépjünk az `Elérhető rendelések` oldalra.
    2. lépés: Ellenőrizzik hogy van e fel nem vett rendelés.

### 1.2. Meglévő rendelés felvevése
- Azonosító: TP-02
- Tesztesetek: TC-02
- Leírás: Létező rendelés adatinak helyessége és felétele
    0. lépés: Végezzük el a bejelentkezést futár fiókként.
    1. lépés: Lépjünk az `Elérhető rendelések` oldalra.
    2. lépés: Ellenőrizzük hogy az éttermi és megrendelői adatok helyesek-e.
    3. lépés: Rányomunk a `Rendelés felvétele` gombra


### 1.3 Felvett rendelés teljesítése
- Azonosító: TP-03
- Tesztesetek: TC-03
- Leírás: Felvett rendelés kiszállítása és rendelés teljesítése
    0. lépés: Végezzük el a bejelentkezést futár fiókként.
    1. lépés: Vegyünk fel egy még fel nem vett rendelést
    2. lépés: Az automatikusan átnavigált order fülön nyomjunk rá a `Rendelés teljesítése` gombra


## 2. Teszesetek (TC)

## 2.1 Rendelések kezelésének tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Ha még nem létezik elérhető rendelés akkor semminek nem kellene megjelennie
    Művelet 1: Átlépek a bejelentkezett futárral az `Elérhető rendelések` oldalra.
    Művelet 2: Ellenőrizzük hogy valóban még nincs rendelés.
    Elvárt eredmény: Üres rendelési lista, mivel még nincs rendelés


#### 2.1.2 TC-02
- TP: TP-02
- Leírás: Létező rendelés adatinak helyessége és felétele
    Művelet 1: Átlépek a bejelentkezett futárral az `Elérhető rendelések` oldalra.
    Művelet 2: Ellenőrizzük hogy az éttermi és megrendelői adatok helyesek-e.
    Művelet 3: Rányomunk a `Rendelés felvétele` gombra.
    Elvárt eredmény: Rendelés felvátele, és automatikus átnavigálás az adott rendelés oldalára

#### 2.1.3. TC-03
- TP: TP-03
- Leírás: Felvett rendelés kiszállítása és rendelés teljesítése
    Művelet 0: Átlépek a bejelentkezett futárral az `Elérhető rendelések` oldalra és elfogadom a rendelést ha még ez nem történt meg
    Művelet 1: Ellenőrizzük a helyes adatokat az order oldalon
    Művelet 2: Rányomunk a `Rendelés teljesítése` gombra
    Elvárt eredmény: Rendelés teljesítésének megvalósulása és automatikus átnavigálás az `Elérhető rendelések` oldalra


## 3. Tesztriportok (TR)

## 3.1 Rendelések kezelésének tesztesetei

#### 3.1.1 TR-01
- TP: TP-01
    1. lépés: Bejelentkeztem futárként
    2. lépés: Rákattintottam a `Elérhető rendelések` gombra
    3. lépés: ellenőriztem hogy mivel még nincs rendelés, nincs semmi a listában
    Eredmény: helyes, nincs semmi a listában

#### 3.1.2 TR-02
- TP: TP-02
    1. lépés: Bejelentkeztem futárként
    2. lépés: Rákattintottam a `Elérhető rendelések` gombra
    3. lépés: ellenőriztem a rendelés adatait amelyet fel akarok venni.
    4. lépés: rákattintottam a `Rendelés felvétele` gombra
    Eredmény: helyes, megtörtént a rendelés felvétele, és navigálódtam az adott rendelés order oldalára

#### 3.1.2 TR-03
- TP: TP-03
    0. lépés: Felvettem az adott rendelést
    1. lépés: ellenőriztem hogy a rendelés teljesíthető-e
    2. lépés: rákattintok a `Rendelés teljesítése` gombra
    Eredmény: helyes, megtörtént a teljesítés, visszakerültem a `Elérhető rendelések` oldalra, ahol már nem szerepel a teljesített rendelés
    












    

    
