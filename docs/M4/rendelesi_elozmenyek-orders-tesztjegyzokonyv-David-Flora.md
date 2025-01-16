# Tesztjegyzőkönyv-`Rendelési előzmények`

Az alábbi tesztdokumentum a `Étel` projekthez tartozó `Rendelési előzmények` funkcióihoz készült. Felelőse: `Dávid Flóra` 

``` 
A tesztelési dokumentáció áttekinthetőségének érdekében egy jegyzőkönyv egy adott témához tartozó funkciókat tartalmazza 
(pl. vektorműveletek) és ne az adott projekttaghoz tartozó összes funkció tesztelését belesűrítve egy fájlba.
``` 

## 1. Teszteljárások (TP)

### 1.1. Bejelentkezés nélkül a rendelési előzmények megtekintése
- Azonosító: TP-01
- Tesztesetek: TC-01 
- Leírás: Bejelentkezés nélkül a rendelési előzmények megtekintése funkció teszteléséhez
    0. lépés: Nyissuk meg az alkalmazást
    1. lépés: A főoldalon keressük meg a rendeléseim nevezetű gombot és kapcsoljunk rá
    2. lépés: A rendeléseim oldalon láthatjuk a már kiszállított rendeléseket 
    3. lépés: Elvárt eredmény: A rendszer a látogatónak - aki bejelentkezés nélkül tekinti meg az oldalt- a főoldalon nem fog megjeleníteni `Rendeléseim` funkció gombot, csak akkor, ha már bejelentkezett

### 1.2. Rendelési előzmények megtekintése rendelő típusú fiókkal
- Azonosító: TP-02
- Tesztesetek: TC-01
- Leírás: Rendelési előzmények megtekintése rendelő típusú fiókkal funkció teszteléséhez
    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be, mint rendelő személy
    1. lépés: A főoldal tetején keressük meg a rendeléseim nevezetű gombot és kapcsoljunk rá
    2. lépés: Az `orders` oldalon láthatjuk a rendelési előzményeinket és a hozzá tartozó információkat
    3. lépés: Elvárt eredmény: Elértük az `orders` oldalt és `Rendelési előzményeim:` szöveget és a rendelésekhez tartozó információkat látjuk
    

### 1.3  Rendelési előzmények megtekintése futár típusú fiókkal
- Azonosító: TP-03
- Tesztesetek: TC-01
- Leírás: Rendelési előzmények megtekintése futár típusú fiókkal funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be, mint futár személy
    1. lépés: A főoldal tetején keressük meg a rendeléseim nevezetű gombot és kapcsoljunk rá.
    2. lépés: Elvárt eredmény: A futár típusú fióknak az `index` oldalon nincs olyan, gomb, hogy `Rendeléseim`
   
    
### 1.4  Rendelési előzmények megtekintése étterem típusú fiókkal
- Azonosító: TP-04
- Tesztesetek: TC-01
- Leírás: Rendelési előzmények megtekintése étterem típusú fiókkal
    0. lépés: Nyissuk meg az alkalmazást, és jelentkezzünk be, mint étterem személy
    1. lépés: A főoldal tetején keressük meg a rendeléseim nevezetű gombot és kapcsoljunk rá.
    2. lépés: Elvárt eredmény: A étterem típusú fióknak az `index` oldalon nincs olyan, gomb, hogy `Rendeléseim`

## 2. Teszesetek (TC)

### 2.1. Bejelentkezés nélkül a rendelési előzmények megtekintése funkció tesztesete
#### 2.1.1. TC-01
- TP: TP-01
- Leírás:  Bejelentkezés nélkül a rendelési előzmények megtekintése tesztelése
- Művelet: Főoldalon megnyomjuk a `Rendeléseim` gombot
- Elvárt kimenet: Rendszer érzékeli, hogy nem vagyunk bejelentkezve, ezért a főoldalon nincs olyan nevezetű gomb megjelenítve, hogy `Rendeléseim`

### 2.2. Rendelési előzmények megtekintése rendelő típusú fiókkal funkció tesztesete 
#### 2.2.1. TC-01
- TP: TP-02
- Leírás: Rendelési előzmények megtekintése rendelő típusú fiókkal tesztelése
- Művelet: nyomjuk meg a főoldal tetején a `Rendeléseim` gombot 
- Elvárt kimenet: Az oldal átirányított az `orders` oldalra és kilistázza a korábbi rendeléseket és a hozzá tartozó infomációkat, `Rendelési előzményeim:`

### 2.3 Rendelési előzmények megtekintése futár típusú fiókkal funkció tesztesete
#### 2.3.1 TC-01
- TP: TP-03
- Leírás: Rendelési előzmények megtekintése futár típusú fiókkal tesztelése
- Művelet: nyomjuk meg a főoldal tetején a `Rendeléseim` gombot
- Elvárt kimenet: `index` oldalon nincs olyan, hogy `Rendeléseim`


### 2.4. Rendelési előzmények megtekintése étterem típusú fiókkal funkció tesztesete 
#### 2.4.1 TC-01
- TP: TP-04
- Leírás: Rendelési előzmények megtekintése étterem típusú fiókkal tesztelése
- Művelet: nyomjuk meg a főoldal tetején a `Rendeléseim` gombot
- Elvárt kimenet: `index` oldalon nincs olyan, hogy `Rendeléseim`


## 3. Tesztriportok (TR)

### 3.1. Bejelentkezés nélkül a rendelési előzmények megtekintése tesztriportja

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: Főoldalon megpróbálom megkeresni a `Rendeléseim` gombot
    2. lépés: Nem találtam meg
    3. lépés: Helyes eredményt kaptam: A rendszer nem jelenített meg olyan gombot a főoldalon, hogy `Rendeléseim`, mert érzékelte, hogy csak látogató vagyok
   
    
### 3.2 Rendelési előzmények megtekintése rendelő típusú fiókkal tesztriportja
#### 3.2.1 TR-02 (TC-01)
- TP: TP-02
    1. lépés: Bejelentkeztem, mint rendelő személy
    2. lépés: Főoldalon megnyomtam a `Rendeléseim` gombot
    3. lépés: A rendszer átirányított az `orders` oldalra, ahol láthatóvá váltak a korábbi rendeléseim és a hozzá tartozó információk
    4. lépés: helyes eredményt kaptam `Rendelési előzményeim:`


### 3.3 Rendelési előzmények megtekintése futár típusú fiókkal tesztriportja
### 3.3.1 TR-03 (TC-01)    
- TP: TP-03
    1. lépés: Bejelentkeztem, mint futár személy
    2. lépés: A főoldalon megkerestem a `Rendeléseim` gombot
    3. lépés: Helyes eredményt kaptam, nem találtam olyan gombot, hogy `Rendeléseim`
   

### 3.4 Rendelési előzmények megtekintése futár típusú fiókkal tesztriportja
### 3.4.1 TR-04 (TC-01)    
- TP: TP-04
    1. lépés: Bejelentkeztem, mint étterem személy
    2. lépés: A főoldalon megkerestem a `Rendeléseim` gombot
    3. lépés: Helyes eredményt kaptam, nem találtam olyan gombot, hogy `Rendeléseim` 


















    

    
