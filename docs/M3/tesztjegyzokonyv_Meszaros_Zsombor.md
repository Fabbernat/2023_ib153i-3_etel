# Tesztjegyzőkönyv-`Regisztráció, Éttermek megnézése, Étel hozzáadása, Kosár, Fiókom`

Az alábbi tesztdokumentum az `Étel` projekthez tartozó `Regisztráció, Éttermek megnézése, Étel hozzáadása, Kosár, Fiókom, Saját Éttermem` funkcióihoz készült. Felelőse: `Mészáros Zsombor` 


## 1. Teszteljárások (TP)

### 1.1. Általános (rendelő, futár) regisztráció tesztelése
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03, TC-04, TC-05, TC-06, TC-07, TC-08, TC-09, TC-10
- Leírás: regisztráció funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és lépjünk át a `Regisztráció` oldalra
    1. lépés: Nyissuk le a `Felhasználói jogkör választása`-t és válasszuk ki a `ROLE` jogot
    2. lépés: A `Keresztnév` szövegbeviteli mezőbe írjuk be a `STRING1` szöveget
    3. lépés: A `Vezetéknév` szövegbeviteli mezőbe írjuk be a `STRING2` szöveget
    4. lépés: Az `E-mail cím` szövegbeviteli mezőbe írjuk be a `STRING3` szöveget
    5. lépés: A `Felhasználónév` szövegbeviteli mezőbe írjuk be a `STRING4` szöveget
    6. lépés: A `Jelszó` szövegbeviteli mezőbe írjuk be a `STRING5` szöveget
    7. lépés: A `Jelszó újra` szövegbeviteli mezőbe írjuk be a `STRING6` szöveget
    8. lépés: A `Irányítószám` szövegbeviteli mezőbe írjuk be a `NUMBER1` szöveget
    9. lépés: A `Város` szövegbeviteli mezőbe írjuk be a `STRING7` szöveget
    10. lépés: A `Szállítási cím` szövegbeviteli mezőbe írjuk be a `STRING8` szöveget
    11. lépés: Az `Emelet/Ajtószám` szövegbeviteli mezőbe írjuk be a `STRING9` szöveget
    12. lépés: Nyomjuk meg a `Regisztráció` gombot 
    13. lépés: Elvárt eredmény: Átirányítás a `Bejelentkezés` oldalra és e-mail-ben értesítés

### 1.2. Jelszó megjelenítése funkció tesztelése
- Azonosító: TP-02
- Tesztesetek: TC-01
- Leírás: jelszó megjelenítése funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és lépjünk át a `Regisztráció` oldalra
    1. lépés: Az `Jelszó` szövegbeviteli mezőbe írjuk be a `STRING` szöveget
    2. lépés: Nyomjuk meg az `Jelszó megjelenítése` gombot 
    3. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: megjelenik a jelszavunk szöveg formájában

### 1.3 Étterem regisztráció tesztelése
- Azonosító: TP-03
- Tesztesetek: TC-01, TC-02, TC-03, TC-04, TC-05, TC-06, TC-07
- Leírás: regisztráció funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és lépjünk át a `Regisztráció` oldalra
    1. lépés: Nyissuk le a `Felhasználói jogkör választása`-t és válasszuk ki a `ROLE` jogot
    2. lépés: A `Keresztnév` szövegbeviteli mezőbe írjuk be a `STRING1` szöveget
    3. lépés: A `Vezetéknév` szövegbeviteli mezőbe írjuk be a `STRING2` szöveget
    4. lépés: Az `E-mail cím` szövegbeviteli mezőbe írjuk be a `STRING3` szöveget
    5. lépés: A `Felhasználónév` szövegbeviteli mezőbe írjuk be a `STRING4` szöveget
    6. lépés: A `Jelszó` szövegbeviteli mezőbe írjuk be a `STRING5` szöveget
    7. lépés: A `Jelszó újra` szövegbeviteli mezőbe írjuk be a `STRING6` szöveget
    8. lépés: Az `Étterem neve` szövegbeviteli mezőbe írjuk be a `STRING7` szöveget
    9. lépés: Az `Irányítószám` szövegbeviteli mezőbe írjuk be a `NUMBER1` szöveget
    10. lépés: A `Város` szövegbeviteli mezőbe írjuk be a `STRING8` szöveget
    11. lépés: Az `Étterem címe` szövegbeviteli mezőbe írjuk be a `STRING9` szöveget
    12. lépés: A `Emelet/Ajtószám` szövegbeviteli mezőbe írjuk be a `STRING10` szöveget
    13. lépés: A `Hétfő` szövegbeviteli mezőbe írjuk be a `STRING11` szöveget
    14. lépés: A `Kedd` szövegbeviteli mezőbe írjuk be a `STRING12` szöveget
    15. lépés: A `Szerda` szövegbeviteli mezőbe írjuk be a `STRING13` szöveget
    16. lépés: A `Csütörtök` szövegbeviteli mezőbe írjuk be a `STRING14` szöveget
    17. lépés: A `Péntek` szövegbeviteli mezőbe írjuk be a `STRING15` szöveget
    18. lépés: A `Szombat` szövegbeviteli mezőbe írjuk be a `STRING16` szöveget
    19. lépés: A `Vasárnap` szövegbeviteli mezőbe írjuk be a `STRING17` szöveget
    20. lépés: Nyomjuk meg a `Regisztráció` gombot 
    21. lépés: Elvárt eredmény: Átirányítás a `Bejelentkezés` oldalra és e-mail-ben értesítés

### 1.4 Étterem megnézés tesztelése
- Azonosító: TP-04
- Tesztesetek: TC-01
- Leírás: regisztráció funkció tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és görgessünk le a `Jelenlegi éttermeink` részre
    1. lépés: Nyomjuk meg az `Étterem megtekintése` gombot
    2. lépés: Elvárt eredmény: Átirányítás az adott étterem oldalára

### 1.5 Étterem kedvencekhez tétele tesztelése
- Azonosító: TP-05
- Tesztesetek: TC-01, TC-02
- Leírás: étterem kedvencekhez tétele tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és görgessünk le a `Jelenlegi éttermeink` részre
    1. lépés: Nyomjuk meg az `Étterem megtekintése` gombot
    2. lépés: Nyomjuk meg a `Kedvencek közé tétel` gombot
    3. lépés: Elvárt eredmény: Ha be vagyunk jelentkezve, értesítés arról, hogy a kedvencek közé került az éttermet

### 1.6 Étterem kedvencekből törlése tesztelése
- Azonosító: TP-06
- Tesztesetek: TC-01
- Leírás: étterem kedvencekhez tétele tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és görgessünk le a `Jelenlegi éttermeink` részre
    1. lépés: Nyomjuk meg az `Étterem megtekintése` gombot
    2. lépés: Nyomjuk meg a `Törlés a kedvencek közül` gombot
    3. lépés: Elvárt eredmény: Értesítés arról, hogy a kedvencek közül eltávolítottuk az éttermet

### 1.7 Étterem ételének megnézése
- Azonosító: TP-07
- Tesztesetek: TC-01
- Leírás: kosár tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és görgessünk le a `Jelenlegi éttermeink` részre
    1. lépés: Nyomjuk meg az `Étterem megtekintése` gombot
    2. lépés: Nyomjunk rá egy adott ételre
    3. lépés: Elvárt eredmény: Átírányítás az adott étel oldalára

### 1.8 Étel kosárba tétele
- Azonosító: TP-07
- Tesztesetek: TC-01, TC-02, TC-03, TC-04
- Leírás: kosár tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és görgessünk le a `Jelenlegi éttermeink` részre
    1. lépés: Nyomjuk meg az `Étterem megtekintése` gombot
    2. lépés: Nyomjunk rá egy adott ételre
    3. lépés: Nyomjuk meg a `Kosárba tétel` gombot
    4. lépés: Elvárt eredmény: Ha be vagyunk jelentkezve akkor a kosár tartalma frissüljön és átirányítson a `Kosár` oldalra

### 1.9 Kosár tartalmának tesztelése
- Azonosító: TP-09
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: kosár tesztelése
    0. lépés: Nyissuk meg az alkalmazást, és görgessünk le a `Jelenlegi éttermeink` részre
    1. lépés: Nyomjuk meg az `Étterem megtekintése` gombot
    2. lépés: Nyomjunk rá egy adott ételre
    3. lépés: Nyomjuk meg a `Kosárba tétel` gombot
    4. lépés: Miután átirányított a `Kosár` oldalára, az adott ételnél nyomjuk meg a '+' vagy '-' gombot

### 1.10 Saját fiók módosításának tesztelése
- Azonosító: TP-10
- Tesztesetek: TC-01, TC-02
- Leírás: fiók módosítása
    0. lépés: Nyissuk meg az alkalmazást és lépjünk be a fiókunkba
    1. lépés: Nyomjuk meg a `Fiókom` gombot
    2. lépés: Kattintsunk rá a `Módosítás` melletti checkboxra
    3. lépés: A `Szállítási cím` szövegbeviteli mezőbe írjuk be a `STRING1` szöveget
    4. lépés: A `Szállítási cím` szövegbeviteli mezőbe írjuk be a `STRING2` szöveget
    5. lépés: A `Város` szövegbeviteli mezőbe írjuk be a `STRING3` szöveget
    6. lépés: Az `Irányítószám` szövegbeviteli mezőbe írjuk be a `STRING4` szöveget 
    7. lépés: Nyomjuk meg a `Mentés` gombot
    8. lépés: Elvárt eredmény: Frissül a mezők tartalma a megadott értékekre

### 1.11 Kedvelt éttermek megjelenése a profilon tesztelése
- Azonosító: TP-11
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: kedvelt éttermek megjelénese a profilon
    0. lépés: Nyissuk meg az alkalmazást és lépjünk be a fiókunkba
    1. lépés: Görgessünk le a `Jelenlegi éttermeink` részre
    2. lépés: Nyomjuk meg az `Étterem megtekintése` gombot
    3. lépés: Nyomjuk meg a `Kedvencek közé tétel`-t vagy a `Törlés a kedvencek közül`-t
    4. lépés: Elvárt eredmény: A `Fiókom` oldalon megjelenik vagy eltűnik a `Kedvelt éttermek` alatt

### 1.12 Saját éttermemhez új étel tesztelése
- Azonosító: TP-12
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: saját éttermemhez új étel
    0. lépés: Nyissuk meg az alkalmazást és lépjünk be az éttermi fiókunkba
    1. lépés: Nyomjuk meg a `Saját Éttermem` gombot
    2. lépés: Nyomjuk meg az `Új étel hozzáadása` gombot
    3. lépés: Az `Étel neve` szövegbeviteli mezőbe írjuk be a `STRING1` szöveget
    4. lépés: Az `Étel leírása` szövegbeviteli mezőbe írjuk be a `STRING2` szöveget
    5. lépés: Az `Étel ára` szövegbeviteli mezőbe írjuk be a `INTEGER1` szöveget
    6. lépés: Az `Étel azonosítói` szövegbeviteli mezőbe írjuk be a `STRING3` szöveget
    7. lépés: Nyomjuk meg az `Étel hozzáadása` gombot
    8. lépés: Elvárt eredmény: Az étterem kínálatában megjelenik az étel a megfelelő értékekkel

### 1.13 Saját éttermemhez elérhető étel módosításának tesztelése
- Azonosító: TP-13
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: saját éttermemhez elérhető étel módosítása
    0. lépés: Nyissuk meg az alkalmazást és lépjünk be az éttermi fiókunkba
    1. lépés: Nyomjuk meg a `Saját Éttermem` gombot
    2. lépés: Az adott ételnél nyomjuk meg a `Módosítás` melletti checkboxot
    3. lépés: Az `Étel neve` szövegbeviteli mezőbe írjuk be a `STRING1` szöveget
    4. lépés: Az `Étel leírása` szövegbeviteli mezőbe írjuk be a `STRING2` szöveget
    5. lépés: Az `Étel ára` szövegbeviteli mezőbe írjuk be a `INTEGER1` szöveget
    6. lépés: Az `Étel azonosítói` szövegbeviteli mezőbe írjuk be a `STRING3` szöveget
    7. lépés: Nyomjuk meg a `Módosítás` gombot
    8. lépés: Elvárt eredmény: Az étterem kínálatában frissül az étel a megfelelő értékekkel

### 1.14 Saját éttermemhez elérhető étel törlésének tesztelése
- Azonosító: TP-14
- Tesztesetek: TC-01
- Leírás: saját éttermem ételének törlése
    0. lépés: Nyissuk meg az alkalmazást és lépjünk be az éttermi fiókunkba
    1. lépés: Nyomjuk meg a `Saját Éttermem` gombot
    2. lépés: Nyomjuk meg az adott étel mellett a `Törlés` gombot
    3. lépés: Elvárt eredmény: Az étterem kínálatából törlődik az étel

### 1.15 Saját éttermem nyitvatartás módosítás tesztelése
- Azonosító: TP-15
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: saját éttermem ételének törlése
    0. lépés: Nyissuk meg az alkalmazást és lépjünk be az éttermi fiókunkba
    1. lépés: Nyomjuk meg a `Saját Éttermem` gombot
    2. lépés: Nyomjuk meg a `Nyitvatartás` gombot
    3. lépés: Nyomjuk meg a `Nyitvatartási időpontok módosítása:` melletti checkboxot
    4. lépés: A `Hétfő` szövegbeviteli mezőbe írjuk be a `STRING1` szöveget
    5. lépés: A `Kedd` szövegbeviteli mezőbe írjuk be a `STRING2` szöveget
    6. lépés: A `Szerda` szövegbeviteli mezőbe írjuk be a `STRING3` szöveget
    7. lépés: A `Csütörtök` szövegbeviteli mezőbe írjuk be a `STRING4` szöveget
    8. lépés: A `Péntek` szövegbeviteli mezőbe írjuk be a `STRING5` szöveget
    9. lépés: A `Szombat` szövegbeviteli mezőbe írjuk be a `STRING6` szöveget
    10. lépés: A `Vasárnap` szövegbeviteli mezőbe írjuk be a `STRING7` szöveget
    11. lépés: Nyomjuk meg a `Véglegesítés` gombot
    12. lépés: Elvárt eredmény: Az étterem kínálatából törlődik az étel    

### 1.16 Saját éttermem rendelései tesztelése
- Azonosító: TP-16
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: saját éttermem rendelései
    0. lépés: Nyissuk meg az alkalmazást és lépjünk be a rendelői fiókunkba
    1. lépés: Görgessünk le a `Jelenlegi éttermeink` részre és válasszunk ki egy éttermet
    2. lépés: Válasszunk ki egy étel és rakjuk a kosarunkba
    3. lépés: Nyomjuk meg a `Rendelés` gombot 
    4. lépés: Ezek után lépjünk ki és lépjünk be az éttermi fiókunkba ahonnan rendeltünk
    5. lépés: Nyomjuk meg a `Saját éttermem` gombot
    6. lépés: Nyomjuk meg a `Rendeléseim` gombot
    7. lépés: Elvárt eredmény: Az étterem rendelései között megjelenik az adott rendelés

### 1.17 Saját éttermem készítés alatt lévő rendelés elkészültté tétele tesztelése
- Azonosító: TP-17
- Tesztesetek: TC-01
- Leírás: saját éttermem készítés alatt lévő rendelés elkészültté tétele
    0. lépés: Nyissuk meg az alkalmazást és lépjünk be a rendelői fiókunkba
    1. lépés: Görgessünk le a `Jelenlegi éttermeink` részre és válasszunk ki egy éttermet
    2. lépés: Válasszunk ki egy étel és rakjuk a kosarunkba
    3. lépés: Nyomjuk meg a `Rendelés` gombot 
    4. lépés: Ezek után lépjünk ki és lépjünk be az éttermi fiókunkba ahonnan rendeltünk
    5. lépés: Nyomjuk meg a `Saját éttermem` gombot
    6. lépés: Nyomjuk meg a `Rendeléseim` gombot
    7. lépés: A rendelés alatt nyomjuk meg az `Elkészült` gombot
    8. lépés: Elvárt eredmény: a rendelés a `Készítés alatt lévő rendelések` oszlopból átmegy a `Szállítandó rendelések` oszlopba és megjelenik a futároknál az `Elérhető rendelések` oldalon



## 2. Teszesetek (TC)

### 2.1. Általános regisztráció tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `ROLE` = Rendelő ; `STRING1` = Mészáros ; `STRING2` = Zsombor ; 
        `STRING3` = mzsombor10@gmail.com ; `STRING4` = mzsombor10 ; 
        `STRING5` = jelszo01 ; `STRING6` = jelszo01 ; `NUMBER1` = xyz ; 
        `STRING7` =  Szeged ; `STRING8` = Kossuth Lajos sugárút 45;
        `STRING9` = 2/5 ; 
- Művelet: nyomjuk meg a `Regisztráció` gombot 
- Elvárt kimenet: Figyelmeztessen, hogy a helytelen irányítószám

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `ROLE` = Rendelő ; `STRING1` = Mészáros ; `STRING2` = Zsombor ; 
        `STRING3` = mzsombor10@gmail.com ; `STRING4` = mzsombor10 ; 
        `STRING5` = jelszo01 ; `STRING6` = jelszo `NUMBER1` = 6700 ; 
        `STRING7` =  Szeged ; `STRING8` = Kossuth Lajos sugárút 45;
        `STRING9` = 2/5 ; 
- Művelet: nyomjuk meg a `Regisztráció` gombot 
- Elvárt kimenet: Figyelmeztessen, hogy a két jelszó nem egyezik

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `ROLE` = Rendelő ; `STRING1` = Mészáros ; `STRING2` = Zsombor ; 
        `STRING3` = xyz ; `STRING4` = mzsombor10 ; 
        `STRING5` = jelszo01 ; `STRING6` = jelszo01 ; `NUMBER1` = 6700 ; 
        `STRING7` =  Szeged ; `STRING8` = Kossuth Lajos sugárút 45;
        `STRING9` = 2/5 ; 
- Művelet: nyomjuk meg a `Regisztráció` gombot 
- Elvárt kimenet: Figyelmeztessen, hogy nem e-mailt adtam meg

#### 2.1.4. TC-04
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `ROLE` = Rendelő ;  `STRING1` = Mészáros ; `STRING2` =  ; 
        `STRING3` = mzsombor10@gmail.com ; `STRING4` = mzsombor10 ; 
        `STRING5` = jelszo01 ; `STRING6` = jelszo01 ; `NUMBER1` = 6700 ; 
        `STRING7` =  Szeged ; `STRING8` = Kossuth Lajos sugárút 45;
        `STRING9` = 2/5 ; 
- Művelet: nyomjuk meg a `Regisztráció` gombot 
- Elvárt kimenet: Figyelmeztessen, hogy nincs kitöltve a mező (a vezetéknév helyére semmit nem írtam)

#### 2.1.5. TC-05
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `ROLE` = Rendelő ; `STRING1` = Mészáros ; `STRING2` = Zsombor ; 
        `STRING3` = mzsombor10@gmail.com ; `STRING4` = mzsombor10 ; 
        `STRING5` = jelszo01 ; `STRING6` = jelszo01 ; `NUMBER1` =  ; 
        `STRING7` = Szeged ; `STRING8` = Kossuth Lajos sugárút 45 ;
        `STRING9` = 2/5 ; 
- Művelet: nyomjuk meg a `Regisztráció` gombot 
- Elvárt kimenet: Figyelmeztessen, hogy nincs kitöltve a mező (semmit se írtam a szállítási adatokhoz)

#### 2.1.6. TC-06
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `ROLE` = Rendelő ; `STRING1` = Mészáros ; `STRING2` =  Zsombor; 
        `STRING3` = mzsombor10@gmail.com ; `STRING4` = mzsombor10 ; 
        `STRING5` = jelszo01 ; `STRING6` = jelszo01 ; `NUMBER1` = 6700 ; 
        `STRING7` =  Szeged ; `STRING8` = Kossuth Lajos sugárút 45;
        `STRING9` = 2/5 ; 
- Művelet: nyomjuk meg a `Regisztráció` gombot 
- Elvárt kimenet: Átirányítás a `Bejelentkezés` oldalra és e-mail-ben értesítés

#### 2.1.7. TC-07
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `ROLE` = Rendelő ; `STRING1` = Mészáros ; `STRING2` =  Zsombor; 
        `STRING3` = mzsombor10@gmail.com ; `STRING4` = mzsombor11 ; 
        `STRING5` = jelszo01 ; `STRING6` = jelszo01 ; `NUMBER1` = 6700 ; 
        `STRING7` =  Szeged ; `STRING8` = Kossuth Lajos sugárút 45;
        `STRING9` = 2/5 ; 
- Művelet: nyomjuk meg a `Regisztráció` gombot 
- Elvárt kimenet: Figyelmeztessen, hogy van már fiók ezzel az e-mail címmel

#### 2.1.8. TC-08
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `ROLE` = Rendelő ; `STRING1` = Mészáros ; `STRING2` =  Zsombor; 
        `STRING3` = mzsombor11@gmail.com ; `STRING4` = mzsombor10 ; 
        `STRING5` = jelszo01 ; `STRING6` = jelszo01 ; `NUMBER1` = 6700 ; 
        `STRING7` =  Szeged ; `STRING8` = Kossuth Lajos sugárút 45;
        `STRING9` = 2/5 ; 
- Művelet: nyomjuk meg a `Regisztráció` gombot 
- Elvárt kimenet: Figyelmeztessen, hogy van már fiók ezzel a felhasználónévvel

#### 2.1.9. TC-09
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `ROLE` = Rendelő ; `STRING1` = Mészáros ; `STRING2` =  Zsombor; 
        `STRING3` = mzsombor11@gmail.com ; `STRING4` = mzsombor11 ; 
        `STRING5` = jelszo01 ; `STRING6` = jelszo01 ; `NUMBER1` = 6700 ; 
        `STRING7` =   ; `STRING8` = ;
        `STRING9` =  ; 
- Művelet: nyomjuk meg a `Regisztráció` gombot 
- Elvárt kimenet: Átirányítás a `Bejelentkezés` oldalra (a Profilom fülben lehet módosítani a szállítási adatokat)

#### 2.1.10. TC-10
- TP: TP-01
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `ROLE` = Futár ; `STRING1` = Mészáros ; `STRING2` =  Zsombor; 
        `STRING3` = mzsombor10@gmail.com ; `STRING4` = mzsombor10 ; 
        `STRING5` = jelszo01 ; `STRING6` = jelszo01 ; `NUMBER1` = 6700 ; 
        `STRING7` =  Szeged ; `STRING8` = Kossuth Lajos sugárút 45;
        `STRING9` = 2/5 ; 
- Művelet: nyomjuk meg a `Regisztráció` gombot 
- Elvárt kimenet: Átirányítás a `Bejelentkezés` oldalra és e-mail-ben értesítés

### 2.2. Jelszó megtekintése funkció tesztesetei

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: Jelszó megtekintése funkció tesztelése
- Bemenet: `STRING1` = jelszo01 
- Művelet: nyomjuk meg az `Jelszó megjelenítése` gombot 
- Elvárt kimenet: az `Jelszó` mező tartalma: `STRING1` = jelszo01

### 2.3 Étterem regisztráció tesztesetei

#### 2.3.1. TC-01
- TP: TP-03
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `ROLE` = Étterem ; `STRING1` = Mészáros ; `STRING2` = Zsombor ; 
        `STRING3` = etterem01@gmail.com ; `STRING4` = etterem01 ; 
        `STRING5` = jelszo01 ; `STRING6` = jelszo01 ; `STRING7` = Zsombor Pizzázója ;
        `NUMBER1` = xyz ; `STRING8` =  Szeged ; `STRING9` = Kossuth Lajos sugárút 49 ;
        `STRING10` = - ; `STRING11` = 8 00- 20 00 ; `STRING12` = `STRING11` ;
        `STRING13` = `STRING11` ; `STRING14` = `STRING11` ; `STRING15` = `STRING11` ;
        `STRING16` = `STRING11` ; `STRING17` = `STRING11` ; 
- Művelet: nyomjuk meg a `Regisztráció` gombot 
- Elvárt kimenet: Figyelmeztessen, hogy a helytelen irányítószám

#### 2.3.2. TC-02
- TP: TP-03
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `ROLE` = Étterem ; `STRING1` = Mészáros ; `STRING2` = Zsombor ; 
        `STRING3` = etterem01@gmail.com ; `STRING4` = etterem01 ; 
        `STRING5` = jelszo01 ; `STRING6` = jelszo01 ; `STRING7` =  ;
        `NUMBER1` = 6700 ; `STRING8` =  Szeged ; `STRING9` = Kossuth Lajos sugárút 49 ;
        `STRING10` = - ; `STRING11` = 8 00- 20 00 ; `STRING12` = `STRING11` ;
        `STRING13` = `STRING11` ; `STRING14` = `STRING11` ; `STRING15` = `STRING11` ;
        `STRING16` = `STRING11` ; `STRING17` = `STRING11` ; 
- Művelet: nyomjuk meg a `Regisztráció` gombot 
- Elvárt kimenet: Figyelmeztessen, hogy a nincs neve az étteremnek

#### 2.3.3. TC-03
- TP: TP-03
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `ROLE` = Étterem ; `STRING1` = Mészáros ; `STRING2` = Zsombor ; 
        `STRING3` = etterem01@gmail.com ; `STRING4` = etterem01 ; 
        `STRING5` = jelszo01 ; `STRING6` = jelszo01 ; `STRING7` = Zsombor Pizzázója ;
        `NUMBER1` = 6700 ; `STRING8` =  Szeged ; `STRING9` = Kossuth Lajos sugárút 49 ;
        `STRING10` = - ; `STRING11` = 8 00- 20 00 ; `STRING12` = `STRING11` ;
        `STRING13` = `STRING11` ; `STRING14` = `STRING11` ; `STRING15` =  ;
        `STRING16` = `STRING11` ; `STRING17` = `STRING11` ; 
- Művelet: nyomjuk meg a `Regisztráció` gombot 
- Elvárt kimenet: Figyelmeztessen, nincs megadva mindenhol nyitvatartás

#### 2.3.4. TC-04
- TP: TP-03
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `ROLE` = Étterem ; `STRING1` = Mészáros ; `STRING2` = Zsombor ; 
        `STRING3` = etterem01@gmail.com ; `STRING4` = etterem01 ; 
        `STRING5` = jelszo01 ; `STRING6` = jelszo01 ; `STRING7` = Zsombor Pizzázója ;
        `NUMBER1` = 6700 ; `STRING8` =  Szeged ; `STRING9` = Kossuth Lajos sugárút 49 ;
        `STRING10` = - ; `STRING11` = 8 00- 20 00 ; `STRING12` = `STRING11` ;
        `STRING13` = `STRING11` ; `STRING14` = `STRING11` ; `STRING15` = `STRING11` ;
        `STRING16` = `STRING11` ; `STRING17` = `STRING11` ; 
- Művelet: nyomjuk meg a `Regisztráció` gombot 
- Elvárt kimenet: Átirányítás a `Bejelentkezés` oldalra és e-mail-ben értesítés

#### 2.3.5. TC-05
- TP: TP-03
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `ROLE` = Étterem ; `STRING1` = Mészáros ; `STRING2` = Zsombor ; 
        `STRING3` = etterem02@gmail.com ; `STRING4` = etterem02 ; 
        `STRING5` = jelszo01 ; `STRING6` = jelszo01 ; `STRING7` = Zsombor Hamburgerezője ;
        `NUMBER1` = 6700 ; `STRING8` =  Szeged ; `STRING9` = Kossuth Lajos sugárút 49 ;
        `STRING10` = - ; `STRING11` = 8 00- 20 00 ; `STRING12` = `STRING11` ;
        `STRING13` = `STRING11` ; `STRING14` = `STRING11` ; `STRING15` = `STRING11` ;
        `STRING16` = `STRING11` ; `STRING17` = `STRING11` ; 
- Művelet: nyomjuk meg a `Regisztráció` gombot 
- Elvárt kimenet: Figyelmeztessen, hogy ezen a címen már van étterem

#### 2.3.6. TC-06
- TP: TP-03
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `ROLE` = Étterem ; `STRING1` = Mészáros ; `STRING2` = Zsombor ; 
        `STRING3` = etterem02@gmail.com ; `STRING4` = etterem02 ; 
        `STRING5` = jelszo01 ; `STRING6` = jelszo01 ; `STRING7` = Zsombor Pizzázója ;
        `NUMBER1` = 6700 ; `STRING8` =  Szeged ; `STRING9` = Rókusi körút 7 ;
        `STRING10` = - ; `STRING11` = 8 00- 20 00 ; `STRING12` = `STRING11` ;
        `STRING13` = `STRING11` ; `STRING14` = `STRING11` ; `STRING15` = `STRING11` ;
        `STRING16` = `STRING11` ; `STRING17` = `STRING11` ; 
- Művelet: nyomjuk meg a `Regisztráció` gombot 
- Elvárt kimenet: Figyelmeztessen, hogy ezen a neven már van étterem

#### 2.3.7. TC-07
- TP: TP-03
- Leírás: regisztráció funkció tesztelése 
- Bemenet: `ROLE` = Étterem ; `STRING1` = Mészáros ; `STRING2` = Zsombor ; 
        `STRING3` = etterem02@gmail.com ; `STRING4` = etterem02 ; 
        `STRING5` = jelszo01 ; `STRING6` = jelszo01 ; `STRING7` = Zsombor Hamburgerezője ;
        `NUMBER1` = 7600 ; `STRING8` =  Pécs ; `STRING9` = Kossuth Lajos sugárút 49 ;
        `STRING10` = - ; `STRING11` = 8 00- 20 00 ; `STRING12` = `STRING11` ;
        `STRING13` = `STRING11` ; `STRING14` = `STRING11` ; `STRING15` = `STRING11` ;
        `STRING16` = `STRING11` ; `STRING17` = `STRING11` ; 
- Művelet: nyomjuk meg a `Regisztráció` gombot 
- Elvárt kimenet: Átirányítás a `Bejelentkezés` oldalra (sikeresnek kell lennie, mivel más a városnév) és e-mail-ben értesítés

### 2.4 Étterem megtekintés tesztesetei

#### 2.4.1 TC-01
- TP: TP-04
- Leírás: étterem megtekintése funckió tesztelése
- Művelet: Nyomjuk meg az `Étterem megtekintése` gombot
- Elvárt kimenet: Átirányítás az adott étterem oldalára


### 2.5 Étterem kedvencekhez tétele tesztesetei

#### 2.5.1 TC-01
- TP: TP-05
- Leírás: étterem kedvencek közé tétel funckió tesztelése bejelentkezés nélkül
- Művelet: Nyomjuk meg a `Kedvencek közé tétel` gombot
- Elvárt kimenet: Értesítés arról, hogy a kedvenc ételek közé került az étterem

#### 2.5.2 TC-02
- TP: TP-05
- Leírás: étterem kedvencek közé tétel funckió tesztelése bejelentkezéssel
- Művelet: Nyomjuk meg a `Kedvencek közé tétel` gombot
- Elvárt kimenet: Értesítés arról, hogy a kedvenc ételek közé került az étterem

### 2.6 Étterem kedvencekből törlése tesztesetei

#### 2.6.1 TC-01
- TP: TP-06
- Leírás: étterem kedvencek közül eltávolítása funckió tesztelése
- Művelet: Nyomjuk meg a `Törlés a kedvencek közül` gombot
- Elvárt kimenet: Értesítés arról, hogy a kedvenc ételek közé került az étterem

### 2.7 Étel megtekintés tesztesetei

#### 2.7.1 TC-01
- TP: TP-07
- Leírás: étel megtekintése funckió tesztelése
- Művelet: Nyomjunk rá az adott ételre
- Elvárt kimenet: Átirányítás az adott étel oldalára

### 2.8 Étel kosárba tétele tesztesetei

#### 2.8.1 TC-01
-TP: TP-07
-Leírás: étel kosárba tétele funckió tesztelése bejelentkezés nélkül
-Művelet: Nyomjunk rá a `Kosárba tétel` gombra
-Elvárt kimenet: Semmi nem történik

#### 2.8.2 TC-02
-TP: TP-08
-Leírás: étel kosárba tétele funckió tesztelése bejelentkezéssel
-Művelet: Nyomjunk rá a `Kosárba tétel` gombra
-Elvárt kimenet: Étel kosárba tétele és kosárban való megjelenése

#### 2.8.3 TC-03

-TP: TP-08
-Leírás: újabb termék hozzáadása a kosárhoz
-Művelet: Nyomjunk rá a `Kosárba tétel` gombra
-Elvárt kimenet: Kosárban megjenelik a második termék is, nő a végösszeg is

#### 2.8.4 TC-04

-TP: TP-09
-Leírás: nem rendelői fiókkal étel kosárba tétele
-Művelet: Lépjünk be egy éttermi fiókba
-Elvárt kimenet: Figyelmeztessen, hogy nem jó fiókban vagyunk

### 2.9 Kosár tartalmának tesztesetei

#### 2.9.1 TC-01
- TP: TP-09
- Leírás: étel hozzáadás tesztelése
- Művelet: Nyomjuk meg a '+' gombot
- Elvárt kimenet: Kosárban az étel összege megemelkedik az étel árájával, vele együtt a végösszeg is és egyel több lesz az adott étel száma is

#### 2.9.2 TC-02
- TP: TP-09
- Leírás: étel csökkentés tesztelése 1-nél több esetén
- Művelet: Nyomjuk meg a '-' gombot
- Elvárt kimenet: Kosárban az étel összege csökken az étel árával, vele együtt az végösszeg is és egyel kevesebb lesz az adott étel száma is

#### 2.9.3 TC-03
- TP: TP-09
- Leírás: étel csökkentés tesztelése 1 termék esetén
- Művelet: Nyomjuk meg a '-' gombot
- Elvárt kimenet: Kosárból eltűnik az adott termék, a végösszeg 0 lesz

### 2.10 Saját fiók módosításának tesztesetei

#### 2.10.1 TC-01
- TP: TP-10
- Leírás: Saját fiók módosításának tesztelése
- Bemenet: `STRING1` = Kiss Ernő utca 6 ; `STRING2` = - ; `STRING3` = Kecskemét ; `STRING4` = 6000 
- Művelet: Kattintsunk a `Módosítás` melletti chechkboxra és nyomjuk meg a `Mentés` gombot
- Elvárt kimenet: Megváltoznak az adatok a `STRING1`, `STRING2`, `STRING3`, `STRING4` értékekre

#### 2.10.2 TC-02
- TP: TP-10
- Leírás: Saját fiók módosításának tesztelése adatok törlésével
- Bemenet: `STRING1` =  ; `STRING2` =  ; `STRING3` =  ; `STRING4` = 
- Művelet: Kattintsunk a `Módosítás` melletti chechkboxra és nyomjuk meg a `Mentés` gombot
- Elvárt kimenet: Ne változzanak meg az adatok az üres értékekre

### 2.11 Kedvelt éttermek megjelenése a profilon tesztesetei

#### 2.11.1 TC-01
- TP: TP-11
- Leírás: étterem kedvence közé tétel tesztelése
- Művelet: Nyomjuk meg a `Kedvencük közé tétel` gombot
- Elvárt kimenet: A `Fiókom` oldalon a `Kedvelt éttermek` alatt megjelenik az étterem

#### 2.11.2 TC-02
- TP: TP-11
- Leírás: étterem kedvence közül törlése tesztelése
- Művelet: Nyomjuk meg a `Törlés a kedvencek közül` gombot
- Elvárt kimenet: A `Fiókom` oldalon a `Kedvelt éttermek` alól eltűnik az étterem

#### 2.11.3 TC-03
- TP: TP-11
- Leírás: több étterem kedvence közé tétel tesztelése
- Művelet: Nyomjuk meg a `Kedvencük közé tétel` gombot mind a kettő étterem oldalán
- Elvárt kimenet: A `Fiókom` oldalon a `Kedvelt éttermek` alatt megjelennek az étteremek

### 2.12 Saját éttermemhez új étel tesztesetei

#### 2.12.1 TC-01
- TP: TP-12
- Leírás: új étel hozzáadásának tesztelése
- Bemenet: `STRING1` = Húsos Hamburger ; `STRING2` = Dupla húsos hambuger sajttal, salátával, paradicsommal ; `INTEGER1` = 1200 ; `STRING3` = #hambi,#burger,#amerikai,#husos
- Művelet: Nyomjuk meg az `Étel hozzáadása` gombot
- Elvárt kimenet: Az étterem kínálatában megjelenik a `Húsos Hamburger` a megfelelő értékekkel

#### 2.12.2 TC-02
- TP: TP-12
- Leírás: új étel hozzáadásának tesztelése üres értékekkel
- Bemenet: `STRING1` =  ; `STRING2` =  ; `INTEGER1` =  ; `STRING3` = 
- Művelet: Nyomjuk meg az `Étel hozzáadása` gombot
- Elvárt kimenet: Ne jelenjen meg az étterem kínálatában új sor


#### 2.12.3 TC-03
- TP: TP-12
- Leírás: új étel hozzáadásának tesztelése szám helyett szöveggel
- Bemenet: `STRING1` = Dupla Sajtos Hamburger ; `STRING2` = Dupla sajtos hambuger salátával, paradicsommal ; `INTEGER1` = érték ; `STRING3` = #hambi,#burger,#amerikai,#sajtos
- Művelet: Nyomjuk meg az `Étel hozzáadása` gombot
- Elvárt kimenet: Ne jelenjen meg az étterem kínálatában új sor

### 2.13 Saját éttermemhez elérhető étel módosításának tesztesetei

#### 2.13.1 TC-01
- TP: TP-13
- Leírás: étel szerkesztésének tesztelése
- Bemenet: `STRING1` = Húsos Hambi ; `STRING2` = Dupla húsos hambuger sajttal, salátával, paradicsommal, hagymával ; `INTEGER1` = 1500 ; `STRING3` = #hambi,#burger,#husos
- Művelet: Nyomjuk meg az `Módosítás` gombot
- Elvárt kimenet: Az étterem kínálatában megváltoznak a `Húsos Hamburger` értékei a megadott értékekre

#### 2.13.2 TC-02
- TP: TP-13
- Leírás: étel szerkesztésének tesztelése üres értékekkkel
- Bemenet: `STRING1` =  ; `STRING2` =  ; `INTEGER1` =  ; `STRING3` = 
- Művelet: Nyomjuk meg az `Módosítás` gombot
- Elvárt kimenet: Az étterem kínálatában nem változnak meg a `Húsos Hamburger`-nek az értékei

#### 2.13.3 TC-03
- TP: TP-13
- Leírás: étel szerkesztésének tesztelése szám helyett szöveggel
- Bemenet: `INTEGER1` = érték ; 
- Művelet: Nyomjuk meg az `Módosítás` gombot
- Elvárt kimenet: Az étterem kínálatában nem változnak meg a `Húsos Hamburger`-nek az értékei

### 2.14 Saját éttermemhez elérhető étel törlésének tesztesetei

#### 2.14.1 TC-01
- TP: TP-14
- Leírás: étel törlésének tesztelése
- Művelet: Nyomjuk meg a `Törlés` gombot
- Elvárt kimenet: Az étterem kínálatából törlődik az étel

### 2.15 Saját éttermem nyitvatartás módosítás tesztesetei

#### 2.15.1 TC-01
- TP: TP-15
- Leírás: nyitvatartás szerkesztésének tesztelése
- Bemenet: `STRING1` = 9 00 - 21 00 ; `STRING2` = `STRING1` ; `STRING3` = `STRING1` ; `STRING4` = `STRING1` ; `STRING5` = `STRING1` ; `STRING6` = `STRING1` ; `STRING7` = `STRING1` ;
- Művelet: Nyomjuk meg az `Módosítás` gombot
- Elvárt kimenet: Az étterem nyitvatartása megváltozik a megadott értékekre

#### 2.15.2 TC-02
- TP: TP-15
- Leírás: étel szerkesztésének tesztelése üres értékekkkel
- Bemenet: `STRING1` =  ; `STRING2` =  ; `STRING3` =  ; `STRING4` =  ; `STRING5` =  ; `STRING6` =  ; `STRING7` =  ;
- Művelet: Nyomjuk meg az `Módosítás` gombot
- Elvárt kimenet: Az étterem nyitvatartása `Zárva`-ra változik meg

#### 2.15.3 TC-03
- TP: TP-15
- Leírás: étel szerkesztésének tesztelése szám helyett szöveggel
- Bemenet: `STRING1` = érték ; 
- Művelet: Nyomjuk meg az `Módosítás` gombot
- Elvárt kimenet: Az étterem nyitvatartása nem változik meg

### 2.16 Saját éttermem rendelései tesztesetei

#### 2.16.1 TC-01
- TP: TP-16
- Leírás: étterem rendelései tesztelése
- Művelet: Rendeljünk rendelői fiókról majd az éttermi fiókban nyomjuk meg a `Rendeléseim` gombot
- Elvárt kimenet: Adott rendelés megjelenése a rendszerben

#### 2.16.2 TC-02
- TP: TP-16
- Leírás: étterem rendelések tesztelése
- Művelet: Rendeljünk rendelői fiókról többször majd az éttermi fiókban nyomjuk meg a `Rendeléseim` gombot
- Elvárt kimenet: Figyelmeztessen, hogy van már rendelésem

#### 2.16.3 TC-03
- TP: TP-16
- Leírás: több felhasználó rendel egyszerre tesztelése
- Művelet: Rendeljünk rendelői fiókról többször majd az éttermi fiókban nyomjuk meg a `Rendeléseim` gombot
- Elvárt kimenet: Adott rendelések megjelenése a rendszerben

### 2.17 Saját éttermem készítés alatt lévő rendelés elkészültté tétele tesztesetei

#### 2.17.1 TC-01
- TP: TP-17
- Leírás: étterem készítés alatt lévő rendelés elkészültté tétele tesztelése
- Művelet: Rendeljünk rendelői fiókról majd az éttermi fiókban nyomjuk meg a `Rendeléseim` gombot, a rendelésre alatt pedig nyomjuk meg az `Elkészült` gombot
- Elvárt kimenet: Adott rendelés szállítandó rendelés lesz és a futárok fel tudják venni

## 3. Tesztriportok (TR)

### 3.1. Általános regisztráció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    0. lépés: Rendelő-t kiválasztottam
    1. lépés: Mészáros-t beírtam
    2. lépés: Zsombor-t beírtam
    3. lépés: mzsombor10@gmail.com-ot beírtam
    4. lépés: mzsombor10-et beírtam
    5. lépés: jelszo01-et beírtam
    6. lépés: jelszo-t beírtam
    7. lépés: xyz-t beírtam
    8. lépés: Szeged-et beírtam
    8. lépés: Kossuth Lajos sugárút 45-öt beírtam
    9. lépés: 2/5-öt beírtam
    10. lépés: a gomb egyszeri megnyomás után visszadobott a `Regisztráció` oldalra
    11. lépés: helyes eredményt kaptam (figyelmeztetett, hogy helytelen irányítószám)
    

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    0. lépés: Rendelő-t kiválasztottam
    1. lépés: Mészáros-t beírtam
    2. lépés: Zsombor-t beírtam
    3. lépés: mzsombor10@gmail.com-ot beírtam
    4. lépés: mzsombor10-et beírtam
    5. lépés: jelszo01-et beírtam
    6. lépés: jelszo01-et beírtam
    7. lépés: 6700-at beírtam
    8. lépés: Szeged-et beírtam
    8. lépés: Kossuth Lajos sugárút 45-öt beírtam
    9. lépés: 2/5-öt beírtam
    10. lépés: a gomb egyszeri megnyomás után visszadobott a `Regisztráció` oldalra
    11. lépés: helyes eredményt kaptam (figyelmeztetett, a két jelszó nem egyezik)

#### 3.1.3. TR-03 (TC-03)
- TP: TP-01
    0. lépés: Rendelő-t kiválasztottam
    1. lépés: Mészáros-t beírtam
    2. lépés: Zsombor-t beírtam
    3. lépés: xyz-t beírtam
    4. lépés: mzsombor10-et beírtam
    5. lépés: jelszo01-et beírtam
    6. lépés: jelszo01-et beírtam
    7. lépés: 6700-at beírtam
    8. lépés: Szeged-et beírtam
    8. lépés: Kossuth Lajos sugárút 45-öt beírtam
    9. lépés: 2/5-öt beírtam
    10. lépés: a gomb egyszeri megnyomás után a `Regisztráció` oldalon maradtam
    11. lépés: helyes eredményt kaptam (figyelmeztetett, hogy nem e-mail formátumot adtam meg)

#### 3.1.4. TR-04 (TC-04)
- TP: TP-01
    0. lépés: Rendelő-t kiválasztottam
    1. lépés: Mészáros-t beírtam
    2. lépés: semmit se írtam a `Vezetéknév` helyére
    3. lépés: xyz-t beírtam
    4. lépés: mzsombor10-et beírtam
    5. lépés: jelszo01-et beírtam
    6. lépés: jelszo01-et beírtam
    7. lépés: 6700-at beírtam
    8. lépés: Szeged-et beírtam
    8. lépés: Kossuth Lajos sugárút 45-öt beírtam
    9. lépés: 2/5-öt beírtam
    10. lépés: a gomb egyszeri megnyomás után a `Regisztráció` oldalon maradtam
    11. lépés: helyes eredményt kaptam (figyelmeztetett, hogy nincs kitöltve a mező)

#### 3.1.5. TR-05 (TC-05)
- TP: TP-01
    0. lépés: Rendelő-t kiválasztottam
    1. lépés: Mészáros-t beírtam
    2. lépés: Zsombor-t beírtam
    3. lépés: xyz-t beírtam
    4. lépés: mzsombor10-et beírtam
    5. lépés: jelszo01-et beírtam
    6. lépés: jelszo01-et beírtam
    7. lépés: az `Irányítószám` helyére semmit se írtam
    8. lépés: Szeged-et beírtam
    8. lépés: Kossuth Lajos sugárút 45-öt beírtam
    9. lépés: 2/5-öt beírtam
    10. lépés: a gomb egyszeri megnyomás után az oldal leállt
    11. lépés: rossz eredményt kaptam (ez ki lett javítva a #141 -ben)

#### 3.1.6. TR-06 (TC-06)
- TP: TP-01
    0. lépés: Rendelő-t kiválasztottam
    1. lépés: Mészáros-t beírtam
    2. lépés: Zsombor-t beírtam
    3. lépés: mzsombor10@gmail.com-ot beírtam
    4. lépés: mzsombor10-et beírtam
    5. lépés: jelszo01-et beírtam
    6. lépés: jelszo01-et beírtam
    7. lépés: 6700-at beírtam
    8. lépés: Szeged-et beírtam
    8. lépés: Kossuth Lajos sugárút 45-öt beírtam
    9. lépés: 2/5-öt beírtam
    10. lépés: a gomb egyszeri megnyomás után átirányított a `Bejelentkezés` oldalra és e-mail-ben értesítést kaptam
    11. lépés: helyes eredményt kaptam

#### 3.1.7. TR-07 (TC-07)
- TP: TP-01
    0. lépés: Rendelő-t kiválasztottam
    1. lépés: Mészáros-t beírtam
    2. lépés: Zsombor-t beírtam
    3. lépés: mzsombor10@gmail.com-ot beírtam
    4. lépés: mzsombor11-et beírtam
    5. lépés: jelszo01-et beírtam
    6. lépés: jelszo01-et beírtam
    7. lépés: 6700-at beírtam
    8. lépés: Szeged-et beírtam
    8. lépés: Kossuth Lajos sugárút 45-öt beírtam
    9. lépés: 2/5-öt beírtam
    10. lépés: a gomb egyszeri megnyomás után a `Regisztráció` oldalon maradtam
    11. lépés: helyes eredményt kaptam (figyelmeztetett, hogy már van fiók ilyen címmel)

#### 3.1.8. TR-08 (TC-08)
- TP: TP-01
    0. lépés: Rendelő-t kiválasztottam
    1. lépés: Mészáros-t beírtam
    2. lépés: Zsombor-t beírtam
    3. lépés: mzsombor11@gmail.com-ot beírtam
    4. lépés: mzsombor10-et beírtam
    5. lépés: jelszo01-et beírtam
    6. lépés: jelszo01-et beírtam
    7. lépés: 6700-at beírtam
    8. lépés: Szeged-et beírtam
    8. lépés: Kossuth Lajos sugárút 45-öt beírtam
    9. lépés: 2/5-öt beírtam
    10. lépés: a gomb egyszeri megnyomás után a `Regisztráció` oldalon maradtam
    11. lépés: helyes eredményt kaptam (figyelmeztetett, hogy már van fiók ilyen felhasználónévvel)

#### 3.1.9. TR-09 (TC-09)
- TP: TP-01
    0. lépés: Rendelő-t kiválasztottam
    1. lépés: Mészáros-t beírtam
    2. lépés: Zsombor-t beírtam
    3. lépés: mzsombor10@gmail.com-ot beírtam
    4. lépés: mzsombor10-et beírtam
    5. lépés: jelszo01-et beírtam
    6. lépés: jelszo01-et beírtam
    7. lépés: 6700-at beírtam
    8. lépés: `Város` helyére semmit nem írtam
    8. lépés: `Szállítási cím` helyére semmit nem írtam
    9. lépés: `Emelet/Ajtószám` helyére semmit nem írtam
    10. lépés: a gomb egyszeri megnyomás után átirányított a `Bejelentkezés` oldalra és e-mail-ben értesítést kaptam
    11. lépés: helyes eredményt kaptam

#### 3.1.10. TR-10 (TC-10)
- TP: TP-01
    0. lépés: Futár-t kiválasztottam
    1. lépés: Mészáros-t beírtam
    2. lépés: Zsombor-t beírtam
    3. lépés: mzsombor10@gmail.com-ot beírtam
    4. lépés: mzsombor10-et beírtam
    5. lépés: jelszo01-et beírtam
    6. lépés: jelszo01-et beírtam
    7. lépés: 6700-at beírtam
    8. lépés: Szeged-et beírtam
    8. lépés: Kossuth Lajos sugárút 45-öt beírtam
    9. lépés: 2/5-öt beírtam
    10. lépés: a gomb egyszeri megnyomás után átirányított a `Bejelentkezés` oldalra és e-mail-ben értesítést kaptam
    11. lépés: helyes eredményt kaptam

### 3.2. Jelszó megjelenítése funkció tesztriportjai

#### 3.2.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: jelszo01-t beírtam
    2. lépés: a gomb egyszeri megnyomása után megjelent a szöveg
    3. lépés: helyes eredményt kaptam (jelszo01)

### 3.3 Étterem regisztráció tesztriportjai

#### 3.3.1 TR-01 (TC-01)
- TP: TP-03
    0. lépés: Étterem-t kiválasztottam
    1. lépés: Mészáros-t beírtam
    2. lépés: Zsombor-t beírtam
    3. lépés: etterem01@gmail.com-ot beírtam
    4. lépés: etterem01-et beírtam
    5. lépés: jelszo01-et beírtam
    6. lépés: jelszo01-et beírtam
    7. lépés: Zsombor Pizzázója-t beírtam
    8. lépés: '-'-t beírtam
    9. lépés: Szeged-et beírtam
    10. lépés: Kossuth Lajos sugárút 49-et beírtam
    11. lépés: '-'-t beírtam
    12. lépés: 8 00 - 20 00-t beírtam
    13. lépés: 8 00 - 20 00-t beírtam
    14. lépés: 8 00 - 20 00-t beírtam
    15. lépés: 8 00 - 20 00-t beírtam
    16. lépés: 8 00 - 20 00-t beírtam
    17. lépés: 8 00 - 20 00-t beírtam
    18. lépés: 8 00 - 20 00-t beírtam
    19. lépés: a gomb egyszeri megnyomás után a `Regisztráció` oldalon maradtam
    20. lépés: helyes eredményt kaptam (figyelmeztetett, hogy helytelen irányítószám)

#### 3.3.2 TR-02 (TC-02)
- TP: TP-03
    0. lépés: Étterem-t kiválasztottam
    1. lépés: Mészáros-t beírtam
    2. lépés: Zsombor-t beírtam
    3. lépés: etterem01@gmail.com-ot beírtam
    4. lépés: etterem01-et beírtam
    5. lépés: jelszo01-et beírtam
    6. lépés: jelszo01-et beírtam
    7. lépés: az `Étterem neve` helyére semmit se írtam
    8. lépés: 6700-at beírtam
    9. lépés: Szeged-et beírtam
    10. lépés: Kossuth Lajos sugárút 49-et beírtam
    11. lépés: '-'-t beírtam
    12. lépés: 8 00 - 20 00-t beírtam
    13. lépés: 8 00 - 20 00-t beírtam
    14. lépés: 8 00 - 20 00-t beírtam
    15. lépés: 8 00 - 20 00-t beírtam
    16. lépés: 8 00 - 20 00-t beírtam
    17. lépés: 8 00 - 20 00-t beírtam
    18. lépés: 8 00 - 20 00-t beírtam
    19. lépés: a gomb egyszeri megnyomás után továbbírányított a `Belépés` oldalra és e-mail-ben értesítést kaptam
    20. lépés: rossz eredményt kaptam (megjelent az étterem a rendszerben név nélkül, javítva a #147-ben)

#### 3.3.3 TR-03 (TC-03)
- TP: TP-03
    0. lépés: Étterem-t kiválasztottam
    1. lépés: Mészáros-t beírtam
    2. lépés: Zsombor-t beírtam
    3. lépés: etterem01@gmail.com-ot beírtam
    4. lépés: etterem01-et beírtam
    5. lépés: jelszo01-et beírtam
    6. lépés: jelszo01-et beírtam
    7. lépés: Zsombor Pizzázója-t beírtam
    8. lépés: 6700-at beírtam
    9. lépés: Szeged-et beírtam
    10. lépés: Kossuth Lajos sugárút 49-et beírtam
    11. lépés: '-'-t beírtam
    12. lépés: 8 00 - 20 00-t beírtam
    13. lépés: 8 00 - 20 00-t beírtam
    14. lépés: 8 00 - 20 00-t beírtam
    15. lépés: a `Csütörtök` helyére semmit nem írtam
    16. lépés: 8 00 - 20 00-t beírtam
    17. lépés: 8 00 - 20 00-t beírtam
    18. lépés: 8 00 - 20 00-t beírtam
    19. lépés: a gomb egyszeri megnyomás után továbbírányított a `Belépés` oldalra és e-mail-ben értesítést kaptam
    20. lépés: rossz eredményt kaptam (megjelent az a nap üresen)

#### 3.3.4 TR-04 (TC-04)
- TP: TP-03
    0. lépés: Étterem-t kiválasztottam
    1. lépés: Mészáros-t beírtam
    2. lépés: Zsombor-t beírtam
    3. lépés: etterem01@gmail.com-ot beírtam
    4. lépés: etterem01-et beírtam
    5. lépés: jelszo01-et beírtam
    6. lépés: jelszo01-et beírtam
    7. lépés: Zsombor Pizzázója-t beírtam
    8. lépés: 6700-at beírtam
    9. lépés: Szeged-et beírtam
    10. lépés: Kossuth Lajos sugárút 49-et beírtam
    11. lépés: '-'-t beírtam
    12. lépés: 8 00 - 20 00-t beírtam
    13. lépés: 8 00 - 20 00-t beírtam
    14. lépés: 8 00 - 20 00-t beírtam
    15. lépés: 8 00 - 20 00-t beírtam
    16. lépés: 8 00 - 20 00-t beírtam
    17. lépés: 8 00 - 20 00-t beírtam
    18. lépés: 8 00 - 20 00-t beírtam
    19. lépés: a gomb egyszeri megnyomás után továbbírányított a `Belépés` oldalra
    20. lépés: helyes eredményt kaptam

#### 3.3.5 TR-05 (TC-05)
- TP: TP-03
    0. lépés: Étterem-t kiválasztottam
    1. lépés: Mészáros-t beírtam
    2. lépés: Zsombor-t beírtam
    3. lépés: etterem01@gmail.com-ot beírtam
    4. lépés: etterem01-et beírtam
    5. lépés: jelszo01-et beírtam
    6. lépés: jelszo01-et beírtam
    7. lépés: Zsombor Hamburgerezője-t beírtam
    8. lépés: 6700-at beírtam
    9. lépés: Szeged-et beírtam
    10. lépés: Kossuth Lajos sugárút 49-et beírtam
    11. lépés: '-'-t beírtam
    12. lépés: 8 00 - 20 00-t beírtam
    13. lépés: 8 00 - 20 00-t beírtam
    14. lépés: 8 00 - 20 00-t beírtam
    15. lépés: 8 00 - 20 00-t beírtam
    16. lépés: 8 00 - 20 00-t beírtam
    17. lépés: 8 00 - 20 00-t beírtam
    18. lépés: 8 00 - 20 00-t beírtam
    19. lépés: a gomb egyszeri megnyomás után a `Regisztráció` oldalon maradtam
    20. lépés: helyes eredményt kaptam (figyelmeztetett, hogy ezen a címen már van étterem)

#### 3.3.6 TR-06 (TC-06)
- TP: TP-03
    0. lépés: Étterem-t kiválasztottam
    1. lépés: Mészáros-t beírtam
    2. lépés: Zsombor-t beírtam
    3. lépés: etterem02@gmail.com-ot beírtam
    4. lépés: etterem02-őt beírtam
    5. lépés: jelszo01-et beírtam
    6. lépés: jelszo01-et beírtam
    7. lépés: Zsombor Pizzázója-t beírtam
    8. lépés: 6700-at beírtam
    9. lépés: Szeged-et beírtam
    10. lépés: Kossuth Lajos sugárút 49-et beírtam
    11. lépés: '-'-t beírtam
    12. lépés: 8 00 - 20 00-t beírtam
    13. lépés: 8 00 - 20 00-t beírtam
    14. lépés: 8 00 - 20 00-t beírtam
    15. lépés: 8 00 - 20 00-t beírtam
    16. lépés: 8 00 - 20 00-t beírtam
    17. lépés: 8 00 - 20 00-t beírtam
    18. lépés: 8 00 - 20 00-t beírtam
    19. lépés: a gomb egyszeri megnyomás után a `Regisztráció` oldalon maradtam
    20. lépés: helyes eredményt kaptam (figyelmeztetett, hogy ezen a neven már van étterem)

#### 3.3.7 TR-07 (TC-07)
- TP: TP-03
    0. lépés: Étterem-t kiválasztottam
    1. lépés: Mészáros-t beírtam
    2. lépés: Zsombor-t beírtam
    3. lépés: etterem02@gmail.com-ot beírtam
    4. lépés: etterem02-et beírtam
    5. lépés: jelszo01-et beírtam
    6. lépés: jelszo01-et beírtam
    7. lépés: Zsombor Hamburgerezője-t beírtam
    8. lépés: 7600-at beírtam
    9. lépés: Pécs-et beírtam
    10. lépés: Kossuth Lajos sugárút 49-et beírtam
    11. lépés: '-'-t beírtam
    12. lépés: 8 00 - 20 00-t beírtam
    13. lépés: 8 00 - 20 00-t beírtam
    14. lépés: 8 00 - 20 00-t beírtam
    15. lépés: 8 00 - 20 00-t beírtam
    16. lépés: 8 00 - 20 00-t beírtam
    17. lépés: 8 00 - 20 00-t beírtam
    18. lépés: 8 00 - 20 00-t beírtam
    19. lépés: a gomb egyszeri megnyomás után továbbírányított a `Belépés` oldalra és e-mail-ben értesítést kaptam
    20. lépés: helyes eredményt kaptam

### 3.4 Étterem megtekintése tesztriportjai

#### 3.4.1 TR-01 (TC-01)
- TP: TP-04
    1. lépés: Zsombor Hamburgerezője étteremnek az `Étterem megtekintése` továbbirányított a Zsombor Hamburgerezője oldalára, ahol lehet látni az adott étterem nyitvatartását és ételeit, és ezek mellett kedvencek közé is tudom tenni 
    2. lépés: helyes eredményt kaptam

### 3.5 Étterem kedvencek közé tétele tesztriportjai

#### 3.5.1 TR-01 (TC-01)
- TP: TP-05
    1. lépés: ne lépjünk be a fiókunkba
    2. lépés: `Kedvencek közé tétel` gomb megnyomása után megjelenik a `Sikeresen a kedvencek közé tetted` felirat
    3. lépés: rossz eredményt kaptam (#152 -ben megoldva)

#### 3.5.2 TR-02 (TC-02)
- TP: TP-05
    1. lépés: lépjünk be a fiókunkba
    2. lépés: `Kedvencek közé tétel` gomb megnyomása után megjelenik a `Sikeresen a kedvencek közé tetted` felirat
    3. lépés: helyes eredményt kaptam

### 3.6 Étterem kedvencekből törlése tesztriportjai

#### 3.6.1 TR-01 (TC-01)
- TP: TP-06
    1. lépés: Lépjünk be a fiókunkba
    2. lépés: `Törlés a kedvencek közül` gomb megnyomása után megjelenik a `Sikeresen eltávolítottad a kedvencek közül` felirat
    3. lépés: helyes eredményt kaptam

### 3.7 Étterem megtekintése tesztriportjai

#### 3.7.1 TR-01 (TC-01)
- TP: TP-07
    1. lépés: A `Zsombor Hamburgerezője`-t kiválasztottam rákattintottam a `Sajtos burger`-re, ami átirányított a `Sajtos burger` oldalára
    2. lépés: helyes eredményt kaptam

### 3.8 Étel kosárba tétele tesztriportjai

#### 3.8.1 TR-01 (TC-01)
- TP: TP-08
    1. lépés: ne lépjünk be a fiókunkba
    2. lépés: A `Kosárba tétel` gomb helyett a következő felirat jelenik meg: `Ehhez a szolgáltatáshoz be kell jelentkezned!`
    3. lépés: rossz eredményt kaptam (#151 -ben megoldva)

#### 3.8.2 TR-02 (TC-02)
- TP: TP-08
    1. lépés: lépjünk be a fiókunkba
    2. lépés: A `Kosárba tétel` gomb megnyomása után a termék sikeresen a kosaramba került és átirányított a `Kosár` oldalára
    3. lépés: helyes eredményt kaptam

#### 3.8.3 TR-03 (TC-03)
- TP: TP-08
    1. lépés: A `Kosárba tétel` gomb megnyomása után az első termék sikeresen a kosárba került és átirányított a `Kosár` oldalára
    2. lépés: Lépjünk vissza a `Főoldal`-ra, válasszunk egy másik terméket
    3. lépés: A `Kosárba tétel` gomb megnyomása után a második termék is sikeresen a kosárba került és átirányított a `Kosár` oldalára, ahol megnőtt a végösszeg is
    4. lépés: helyes eredményt kaptam

#### 3.8.4 TR-04 (TC-04)
- TP: TP-08
    1. lépés: Lépjünk be az éttermi fiókunkba
    2. lépés: A `Kosárba tétel` gomb megnyomása után az alkalmazás leállt 
    3. lépés: rossz eredményt kaptam (ez meg lett oldva a #162-ben, később tovább javítva a #174-ben)

### 3.9 Kosár tartalmának tesztriportjai

#### 3.9.1 TR-01 (TC-01)
- TP: TP-09
    1. lépés: A `Sajtos burger` sorában a '+' jelre kattintottam 
    2. lépés: Nőtt a termék darabszáma és az összegek is (étel összege, végösszeg)
    3. lépés: helyes eredményt kaptam 

#### 3.9.2 TR-02 (TC-02)
- TP: TP-09
    1. lépés: A `Sajtos burger` sorában a '-' jelre kattintottam 
    2. lépés: Csökkent a termék darabszáma és az összegek is (étel összege, végösszeg)
    3. lépés: helyes eredményt kaptam

#### 3.9.3 TR-03 (TC-03)
- TP: TP-09
    1. lépés: A `Sajtos burger` sorában a '-' jelre kattintottam 
    2. lépés: Eltűnt az étel sora, vele együtt a végösszeg 0 lett
    3. lépés: helyes eredményt kaptam

### 3.10 Saját fiók módosításának tesztriportjai

#### 3.10.1 TR-01 (TC-01)
- TP: TP-10
    1. lépés: Módosítás melletti chechkboxra kattintottam
    2. lépés: A Kiss Ernő utca 6-ot beírtam
    3. lépés: A '-'-t beírtam
    4. lépés: A Kecskemét-et beírtam
    5. lépés: A 6000-et beírtam
    6. lépés: A `Mentés` gomb megnyomása után frissültek az adatok
    7. lépés: helyes eredményt kaptam 

#### 3.10.2 TR-02 (TC-02)
- TP: TP-10
    1. lépés: Módosítás melletti chechkboxra kattintottam
    2. lépés: Kitöröltem az összes adatot
    3. lépés: A `Mentés` gomb megnyomása után nem változtak az adatok
    4. lépés: helyes eredményt kaptam 

### 3.11 Kedvelt éttermek megjelenése a profilon tesztriportjai

#### 3.11.1 TR-01 (TC-01)
- TP: TP-11
    1. lépés: Kiválasztottam a `Főoldal`-on a `Zsombor Hamburgerezője`-t 
    2. lépés: Rákattintottam a `Kedvencek közé tétel`-re
    3. lépés: Rákattintottam a `Fiókom` gombra
    4. lépés: Megjelent a `Kedvelt éttermek` alatt az étterem neve 
    5. lépés: helyes eredményt kaptam

#### 3.11.1 TR-02 (TC-02)
- TP: TP-11
    1. lépés: Kiválasztottam a `Főoldal`-on a `Zsombor Hamburgerezője`-t 
    2. lépés: Rákattintottam a `Törlés a kedvencek közül`-re
    3. lépés: Rákattintottam a `Fiókom` gombra
    4. lépés: Eltűnt a `Kedvelt éttermek` alatt az étterem neve 
    5. lépés: helyes eredményt kaptam

#### 3.11.3 TR-03 (TC-03)
- TP: TP-11
    1. lépés: Kiválasztottam a `Főoldal`-on a `Zsombor Hamburgerezője`-t 
    2. lépés: Rákattintottam a `Kedvencek közé tétel`-re
    3. lépés: Kiválasztottam a `Főoldal`-on a `Zsombor Pizzázoja`-t 
    4. lépés: Rákattintottam a `Kedvencek közé tétel`-re
    5. lépés: Rákattintottam a `Fiókom` gombra
    6. lépés: Megjelentek a `Kedvelt éttermek` alatt az éttermek 
    7. lépés: helyes eredményt kaptam

### 3.12 Saját éttermemhez új étel tesztriportjai

#### 3.12.1 TR-01 (TC-01)
- TP: TP-12
    1. lépés: A Húsos Hamburger-t beírtam
    2. lépés: A Dupla húsos hambuger sajttal, salátával, paradicsommal-t beírtam
    3. lépés: Az 1200-t beírtam
    4. lépés: A #hambi,#burger,#amerikai,#husos-t beírtam
    5. lépés: A gomb megnyomása után átvitt az `Elérhető ételek` fülre, ahol megjelent az étel a megadott értékekkel
    6. lépés: helyes eredményt kaptam

#### 3.12.2 TR-02 (TC-02)
- TP: TP-12
    1. lépés: A gomb megnyomása után átvitt az `Elérhető ételek` fülre, ahol nem jelent meg új étel
    2. lépés: helyes eredményt kaptam

#### 3.12.3 TR-03 (TC-03)
- TP: TP-12
    1. lépés: A Dupla Sajtos Hamburger-t beírtam
    2. lépés: A Dupla sajtos hambuger salátával, paradicsommal-t beírtam
    3. lépés: Az érték-et beírtam
    4. lépés: A #hambi,#burger,#amerikai,#sajtos-t beírtam
    5. lépés: A gomb megnyomása után átvitt az `Elérhető ételek` fülre, ahol nem jelent meg új étel
    6. lépés: helyes eredményt kaptam

### 3.13 Saját éttermemhez elérhető étel módosításának tesztriportjai

#### 3.13.1 TR-01 (TC-01)
- TP: TP-13
    1. lépés: A Húsos Hambi-t beírtam
    2. lépés: A Dupla húsos hambuger sajttal, salátával, paradicsommal, hagymával-t beírtam
    3. lépés: Az 1500-at beírtam
    4. lépés: A #hambi,#burger,#husos-t beírtam
    5. lépés: A gomb megnyomása után frissült az étel a megadott értékekkel
    6. lépés: helyes eredményt kaptam

#### 3.13.2 TR-02 (TC-02)
- TP: TP-13
    1. lépés: Az étel megadott értékeit kitöröltem
    2. lépés: A gomb megnyomása után nem változtak meg az étel értékei
    3. lépés: helyes eredményt kaptam

#### 3.13.3 TR-03 (TC-03)
- TP: TP-13
    1. lépés: Az érték-et beírtam
    2. lépés: A gomb megnyomása után nem frissült az étel ára
    3. lépés: helyes eredményt kaptam

### 3.14 Saját éttermemhez elérhető étel törlésének tesztriportjai

#### 3.14.1 TR-01 (TC-01)
- TP: TP-14
    1. lépés: A Húsos Hambi sorában megnyomtam a `Törlés` gombot
    2. lépés: A gomb egyszeri törlése után eltűnt az étterem kínálatából a étel
    3. lépés: helyes eredményt kaptam

### 3.15 Saját éttermem nyitvatartás módosítás tesztriportjai

#### 3.15.1 TR-01 (TC-01)
- TP: TP-15
    1. lépés: 9 00 - 21 00-t beírtam
    2. lépés: 9 00 - 21 00-t beírtam
    3. lépés: 9 00 - 21 00-t beírtam
    4. lépés: 9 00 - 21 00-t beírtam
    5. lépés: 9 00 - 21 00-t beírtam
    6. lépés: 9 00 - 21 00-t beírtam
    7. lépés: 9 00 - 21 00-t beírtam
    8. lépés: A `Véglegesítés gomb` egyszeri megnyomása után megváltozott az étterem nyitvatartása
    9. lépés: helyes eredményt kaptam

#### 3.15.2 TR-02 (TC-02)
- TP: TP-15
    1. lépés: A nyitvatartás értékeit töröltem
    2. lépés: A `Véglegesítés gomb` egyszeri megnyomása után megváltozott az étterem nyitvatartása
    3. lépés: rossz eredményt kaptam (az étterem nyitvatartása üres értékekre változott)

#### 3.15.1 TR-01 (TC-01)
- TP: TP-15
    1. lépés: 9 00 - 21 00-t beírtam
    2. lépés: 9 00 - 21 00-t beírtam
    3. lépés: 9 00 - 21 00-t beírtam
    4. lépés: az érték-et beírtam
    5. lépés: 9 00 - 21 00-t beírtam
    6. lépés: 9 00 - 21 00-t beírtam
    7. lépés: 9 00 - 21 00-t beírtam
    8. lépés: A `Véglegesítés gomb` egyszeri megnyomása után megváltozott az étterem nyitvatartása
    9. lépés: rossz eredményt kaptam

### 3.16 Saját éttermem nyitvatartás rendelései tesztriportjai

#### 3.16.1 TR-01 (TC-01)
- TP: TP-16
    1. lépés: A `Sajtos Hamburger`-t megrendeltem
    2. lépés: Az `Zsombor Hamburgerezője` fiókban a `Rendeléseim` gomb megnyomása után átirányított a `Rendeléseim` oldalra, ahol ott volt a rendelés
    3. lépés: helyes eredményt kaptam

#### 3.16.2 TR-02 (TC-02)
- TP: TP-16
    1. lépés: A `Sajtos Hamburger`-t megrendeltem
    2. lépés: A `Húsos Hamburger`-t megrendelése után figyelmeztetést kaptam, hogy már van folyamatban lévő rendelésem
    3. lépés: helyes eredményt kaptam

#### 3.16.3 TR-03 (TC-03)
- TP: TP-16
    1. lépés: A `Sajtos Hamburger`-t megrendeltem
    2. lépés: Másik fiókból ugyanezt a rendelést végrahajtottam
    2. lépés: Az `Zsombor Hamburgerezője` fiókban a `Rendeléseim` gomb megnyomása után átirányított a `Rendeléseim` oldalra, ahol ott a rendelések sorai elcsúsztak, így a második fiók rendelése a `Szállítandó rendelések` sorba került
    3. lépés: rossz eredményt kaptam

### 3.17 Saját éttermem készítés alatt lévő rendelés elkészültté tétele tesztriportjai

#### 3.17.1 TR-01 (TC-01)
- TP: TP-17
    1. lépés: A `Sajtos Hamburger`-t megrendeltem
    2. lépés: Az `Zsombor Hamburgerezője` fiókban a `Rendeléseim` oldalon rányomtam az adott rendelés alatt ay `Elkészült` gombra, ahol átkerült a `Szállítandó rendelések` közé és futár fiókba belépve megjelent a rendelés az `Elérhető rendelések` oldalon
    3. lépés: helyes eredményt kaptam
