# Tesztjegyzőkönyv-`Legújabb rendelések listása`

Az alábbi tesztdokumentum a `Étel` projekthez tartozó `Legújabb rendelések listása` funkcióihoz készült. Felelőse: `Marik Istán` 

## 1. Teszteljárások (TP)

### 1.1. Rendelések listázása látogatónak
- Azonosító: TP-01
- Tesztesetek: TC-01
- Leírás: főoldalra való belépés látogatóként, és megnézni, hogy látszódiknak-e rendelések.
    0. lépés: Nyissuk meg az alkalmazást nem bejelentkezettként
    1. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: Nem szabad, hogy látszódjon a funkció.

### 1.2. Rendelések listázása felhasználóknak akik nem rendeltek még
- Azonosító: TP-02
- Tesztesetek: TC-01
- Leírás: főoldalra való belépés bejelentkezve és megnézni, hogy látszódiknak-e rendelések.
    0. lépés: Nyissuk meg az alkalmazást és jelentkezzünk be egy felhasználóval.
    1. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Még nincsen rendelésed. Rendelj, hogy megjelenjenek itt a legújabb rendeléseid!`

 ### 1.3. Rendelések listázása felhasználóknak akik rendeltek már egyszer
- Azonosító: TP-03
- Tesztesetek: TC-01
- Leírás: főoldalra való belépés bejelentkezve és megnézni, hogy látszódiknak-e rendelések.
    0. lépés: Nyissuk meg az alkalmazást és jelentkezzünk be egy felhasználóval.
    2. Rendeljünk egy terméket
    3. térjünk vissza a főoldalra
    4. lépés: Ellenőrizzük az eredményt. Elvárt eredmény:
    A megrendelt termék neve, darabszáma és linkkelt Étterem neve
      

## 2. Teszesetek (TC)

### 2.1. Rendelések listázása látogatónak

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: főoldalra való belépés látogatóként, és megnézni, hogy látszódiknak-e rendelés tesztelése.
- Elvárt kimenet: Nem szabad, hogy látszódjon a funkció.

### 2.2. Rendelések listázása felhasználóknak akik nem rendeltek még

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: Rendelések listázása pisti felhasználóval aki nem rendeltek még semmit.
- Elvárt kimenet: `Még nincsen rendelésed. Rendelj, hogy megjelenjenek itt a legújabb rendeléseid!`

### 2.3. Rendelések listázása felhasználóknak akik rendeltek még
#### 2.2.3. TC-01
- TP: TP-03
- Leírás: Pisti felhasználóval rendelek egy 1x King's Brie a BURGER KING-től
- Elvárt kimenet: kattintható BURGER KING®
 1x King's Brie

## 3. Tesztriportok (TR)

### 3.1. Rendelések listázása látogatónak

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: rákkatintottam a "https://rf1-etel-app-7fb8d2e204c5.herokuapp.com/" weboldalra
    2. lépés: helyes eredményt kaptam : Nem látom a funkciót.
    
### 3.2. Rendelések listázása felhasználóknak akik nem rendeltek még

#### 3.2.1. TR-02 (TC-01)
- TP: TP-02
    1. lépés: rákkatintottam a "https://rf1-etel-app-7fb8d2e204c5.herokuapp.com/" weboldalra
    2. lépés: bejelentkeztem pisti felhasználóként
    2. lépés: helyes eredményt kaptam (`Még nincsen rendelésed. Rendelj, hogy megjelenjenek itt a legújabb rendeléseid!`)

### 3.3. Rendelések listázása felhasználóknak aki rendelt már   
#### 3.3.1. TR-03 (TC-01)
- TP: TP-03
    1. lépés: rákkatintottam a "https://rf1-etel-app-7fb8d2e204c5.herokuapp.com/" weboldalra
    2. lépés: bejelentkeztem pisti felhasználóként
    3. lépés: Megrendeltem a King's Brie-t a BURGER KING®
    2. lépés: helyes eredményt kaptam (kattintható BURGER KING® 1x King's Brie)