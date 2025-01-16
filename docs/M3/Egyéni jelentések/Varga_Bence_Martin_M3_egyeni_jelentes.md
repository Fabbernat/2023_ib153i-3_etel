### Összefoglaló a 3. mérföldkőben végzett munkáról

### Projekt tag: Varga Bence Martin


### Vállalásaim a mérföldkőben: 
   backend fejlesztés, adatbázis kezelés, bugfix, heroku kitelepités

   #### dao(adatbázissal kommunikáló) fájlok létrehozása
   - adatbázis létrehozása: #15 1801953f
   - adatbázis kapcsolódás megvalósitása: #16 82c324d5
   - user-dao.js elkészitése: #17 a64b3ab1
   - address-dao.js elkészitése: #18 e2c9f549
   - useraddress-dao.js elkészitése: #19 17f1f8b2
   - food-dao.js elkészitése: #20 41c65d80
   - restaurant-dao.js elkészitése: #21 133d2c2c
   - likedrestaurant-dao elkészitése: #22 b1cb3082
   - cart-dao.js elkészitése: #23 d0b675e2
   - cartfood-dao.js elkészitése: #24 f50e56fe
   - order-dao.js elkészitése: #25 f5680ef7



   #### route(logikát megvalósitó) fájlok létrehozása
   az issue task-onként lett megvalósitva és feltöltve, igy azoknak a számát nem tartalmazza a jelentés, csak a fő issue-ét

   ##### sima felhasználókat irányitó logika megvalósitása ( #29 )
   - 73d324ca
   - 3a2516d2
   - dd35c9b8
   - 0cd2d4b1
   - e74c8e79
   - 1080f20e
   - f40f4a62
   - 59fb4f80
   - f24fd995
   - c81e9226
   - 5c0812b5
   - 6ab02f3c
   - 26676d8c
   - e22a311d
   - 24cc0bf1
   - 25bfd843
   - 59b1eeb4

   ##### éttermeket irányitó logika megvalósitása ( #49 )
   - d1f85173
   - b89594fb
   - 96799e3b
   - 0a0f5a84
   - 8d80315b
   - 3b5bcf0b
   - 0ae38d11

   ##### éttermeket irányitó logika megvalósitása ( #57 )
   - 4259ee54
   - 878d90f4
   - 930960b4



   #### hibajavitások
   a projekt elkészitése során számtalan kisebb/nagyobb hibába ütköztünk, igy csak párat fogok felsorolni
   - egy ételből nem lehetett többet kosárba rakni: #133 4e815c3a
   - kedvelt ételek nem jelentek meg rendesen: #128 0855d754
   - étteremként nem lehetett regisztrálni: #114 60548422
   - lassú volt a jelszókezelés: 2dcac83e
   - étterem nem tudott ételt módositani: #124 46184324



   #### kisebb, különálló feladatok
   - email kezelő létrehozása: #27 0af0d29d
   - munkamenet kezelő létrehozása: #26 e5da56f8



   #### heroku kitelepitéshez kapcsolódó feladatok
   - környezeti változók bevezetése: a681f792
   - az oldal az alábbi linken érhető el: https://rf1-etel-app-7fb8d2e204c5.herokuapp.com/