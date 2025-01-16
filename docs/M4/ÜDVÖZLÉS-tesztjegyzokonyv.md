# Tesztjegyzőkönyv-`Üdvözlés`

Az alábbi tesztdokumentum a `Étel` projekthez tartozó `Üdvözlés` funkcióihoz készült. Felelőse: `Marik Istán` 

## 1. Teszteljárások (TP)

### 1.1. Üdvözlés látogatóként 
- Azonosító: TP-01
- Tesztesetek: TC-01
- Leírás: főoldalra való belépés látogatóként a funkció teszteléséhez
    0. lépés: Nyissuk meg az alkalmazást nem bejelentkezettként
    1. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Üdvözlünk a Wan oldalán!`

### 1.2. Üdvözlés bejelentkezettként
- Azonosító: TP-02
- Tesztesetek: TC-01, TC-02
- Leírás: főoldalra való belépés bejelentkezve a funkció teszteléséhez
    0. lépés: Nyissuk meg az alkalmazást és jelentkezzünk be egy felhasználóval.
    1. lépés: Ellenőrizzük az eredményt. Elvárt eredmény: `Üdvözlünk újra \felhasználónév\!`

    \felhasználónév\ helyére a felhasználó neve kerül
## 2. Teszesetek (TC)

### 2.1. Üdvözlés látogatóként tesztesetei

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: üdvözlés látogatóként tesztelése 
- Bemenet: -
- Művelet: "https://rf1-etel-app-7fb8d2e204c5.herokuapp.com" linkre kattintani
- Elvárt kimenet: `Üdvözlünk a Wan oldalán!`

### 2.2. Üdvözlés bejelentkezettként tesztesetei

#### 2.2.1. TC-01
- TP: TP-02
- Leírás: üdvözlés bejelentkezettként tesztelése 
- Bemenet: testcruiser felhasználóval belépés
- Művelet: "https://rf1-etel-app-7fb8d2e204c5.herokuapp.com" linkre kattintani
- Elvárt kimenet: `Üdvözlünk újra Villám!`

#### 2.2.2. TC-02
- TP: TP-02
- Leírás: üdvözlés bejelentkezettként tesztelése 
- Bemenet: donald felhasználóval belépés
- Művelet: "https://rf1-etel-app-7fb8d2e204c5.herokuapp.com" linkre kattintani
- Elvárt kimenet: `Üdvözlünk újra Mc!`

## 3. Tesztriportok (TR)

### 3.1. Üdvözlés látogatóként funkció tesztriportjai

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: rákkatintottam a "https://rf1-etel-app-7fb8d2e204c5.herokuapp.com/" weboldalra
    2. lépés: helyes eredményt kaptam (`Üdvözlünk a Wan oldalán!`)
    
### 3.2. Üdvözlés bejelentkezettként funkció tesztriportjai

#### 3.2.1. TR-02 (TC-01)
- TP: TP-01
    1. lépés: rákkatintottam a "https://rf1-etel-app-7fb8d2e204c5.herokuapp.com/" weboldalra
    2. lépés: bejelentkeztem testcruiser felhasználóként
    2. lépés: helyes eredményt kaptam (`Üdvözlünk újra Villám!`)

    
#### 3.2.2. TR-02 (TC-02)
- TP: TP-02
    1. lépés: rákkatintottam a "https://rf1-etel-app-7fb8d2e204c5.herokuapp.com/" weboldalra
    2. lépés: bejelentkeztem donald felhasználóként
    2. lépés: helyes eredményt kaptam (`Üdvözlünk újra Mc!`)