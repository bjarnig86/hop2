# Hópverkefni 2

Verkefnið felst í því að smíða vef lítinn myndbandavef sem nýtir gögn úr JSON skrá.

Gögn skulu lesin úr `videos.json` skjali sem gefið er og engar upplýsingar skulu „harðkóðaðar“ í HTML. Birta skal skilaboð á meðan gögn eru hlaðin. Athugið að ef þetta væri „alvöru“ verkefni værum við með bakenda sem myndi sjá um að skrifa út rétt gögn í HTML í byrjun.

Uppbygging á `videos.json` er hlutur sem inniheldur:

* `videos` fylki af myndböndum þar sem hvert vídeó hefur
  - `id`, einkvæmt auðkenni
  - `title`, titill sem birtur er
  - `description`, lýsing á myndbandi
  - `created`, dagsetning þegar myndband var „búið til“, millisekúndur 1. jan 1970
  - `duration`, lengd í sekúndum
  - `poster`, slóð á plakat
  - `video`, slóð á myndband
  - `related`, fylki af tengdum myndböndum
* `categories`, fylki af flokkum
  - `title`, titill flokks
  - `videos`, fylki af vísunum í myndband að ofan, þau myndband sem eru í flokk

Undir `gogn/videos` eru prufumyndband ásamt plakötum sem vísað er í.

## Myndbandalisti

Þegar vefur er opnaður (þ.e. `index.html`) skal lista upp alla flokka í þeirri röð sem þeir eru skilgreindir í `videos.json` ásamt öllum myndböndum sem eru í þeim flokki:

* Plakat fyrir myndband
* Lengd sem liggur ofan á plakati formuð í mínútur og sekúndur, t.d. `30:20` væri 30 mín og 20 sek, sjá fyrirmynd, í fyrirmynd er bakgrunnslitur `rgba(0, 0, 0, 0.5)`
* Aldur myndbands formað eftir eftirfarandi reglum og mun á eintölu og fleirtölu (ekki þarf þó að gera ráð fyrir eintölu í 21, 31 o.s.fr.)
  - Ef aldur er meiri en eitt ár (365 dagar) er birt `Fyrir X ári/árum síðan`
  - Annars, ef aldur er meiri en mánuður (30 dagar) er birt `Fyrir X mánuði/mánuðum síðan`
  - Annars, ef aldur er meiri en vika (7 dagar) er birt `Fyrir X viku/vikum síðan`
  - Annars, ef aldur er meiri en dagur (24 klst) er birt `Fyrir X degi/dögum síðan`
  - Annars, er aldur í klukkustundum birtur `Fyrir x klukkustund/klukkustundum síðan`

## Myndband

Þegar myndband er valið er farið á aðra síðu með auðkenni á myndbandi í _querystring_, t.d. `video.html?id=1`. Sá vefur grípur hvert það myndband er og birtir það með titil þess í haus og stýringum:

* Til baka takki, þegar ýtt er á hann og myndband er að spila, er það fært til baka um 3 sekúndur eða á byrjun
* Spila takki, ef videó er ekki að spila er það spilað, annars er pásu táknmynd sýnd og vídeó pásað
* Slökkva á hljóði takki, ef hljóð er að spila er slökkt á því annars öfugt
* _Fullscreen_ takki, setur vídeó í fullscreen (athuga þarf stuðning og gera ráðstafanir með `requestFullscreen` API)
* Áfram takki, þegar ýtt er á hann og myndband er að spila, er það fært áfram um 3 sekúndur eða á enda

Meðan vídeó er ekki að spila er sýnt _overlay_ með play takka í miðju og gegnsæum bakgrunn (`rgba(0, 0, 0, 0.2)` í fyrirmynd).

Ef vídeó er ekki til (`id` er ekki í `videos.json`) eru skilaboð um það birt.

Táknmyndir fyrir stýringar á myndböndum eru gefnar í `img/`.

Fyrirmyndir að útliti eru í `fyrirmynd/`, ekki þarf að fylgja útliti nákvæmlega, það er aðeins til viðmiðunnar en skal þó vera nothæft. Verkefnið snýst um JavaScript virkni

## Tæki og tól

Setja skal upp þau tæki og tól sem notuð hafa verið í námskeiðinu:

* `stylelint`
* `eslint` með plugins eins og í verkefni 8, 9
* `babel`
* `rollup` með plugins til að geta notað NPM module
* `browser-sync`
* `concurrently`

`rollup` skal sjá um að pakka JavaScript kóða og gera aðgengilegann í `dist/`.

Þegar verkefni er metið er `npm install` keyrt fyrst, síðan `npm run dev` á að keyra upp verkefni og opna vafra glugga, að lokum `npm test` sem á að keyra eslint og stylelint, og sýna engar villur.

## Hópavinna

Verkefnið skal unnið í hóp með 3-4 einstaklingum. Hafið samband við kennara ef ekki er mögulegt að vinna í hóp. Hægt er að leita að félögum á slack á rásinni #2020-v1-vantar-hop

Notast skal við Git og GitHub. Engar zip skrár með kóða ættu að ganga á milli í hópavinnu, heldur á að „committa“ allan kóða og vinna gegnum Git.

## Lýsing á verkefni

`README.md` skrá skal vera í rót verkefnis og innihalda:

* Upplýsingar um hvernig keyra skuli verkefnið
  * `npm run dev` eða `npm start` skal annaðhvort að vera til staðar
  * `npm run lint` skal vera til staðar og keyra stylelint á Sass
* Lýsingu á uppsetningu verkefnis, hvernig því er skipt í möppur, hvernig CSS/Sass er skipulagt og fleira sem á við
* Upplýsingar um alla sem unnu verkefni, nöfn, HÍ notendanöfn og GitHub notendanöfn

## Tæki og tól

Verkefnið skal innihalda `package.json` og `package-lock.json` sem innihalda öll notuð tól.

Þegar verkefnið er sótt verður `npm install` keyrt á undan öllum öðrum skipunum.
Setja skal upp Sass og stylelint með `stylelint-config-sass-guidelines` og `stylelint-config-standard` fyrir verkefnið.

Til að passa upp á samræmi eru skrárnar `.gitignore`, `.gitattributes` og `.editorconfig` gefnar.

## Mat

* 10% - `README` eftir forskrift, tæki og tól uppsett
* 10% – Skalanlegt útlit sem fylgir fyrirmynd
* 20% – Sass/CSS og JavaScript snyrtilegt og án lint villa þegar `npm run lint -s` er keyrt
* 20% – Gögn sótt úr `videos.json`
* 20% – Virkni fyrir myndbandalista
* 20% – Virkni fyrir myndband

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 5. október 2020.

## Skil

Einn aðili úr hóp skal skila fyrir hönd allra og skila skal í Canvas í seinasta lagi 27. nóvember.

Skil skulu innihalda:

* Nöfn allra í hóp ásamt notendanafni
* Skilaboð skulu innihalda slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)). Notendanöfn þeirra eru:
  * `GaddiSunshine`
  * `boxandri`
  * `StimmiKex`
  * `jonnigs`
  * `Tobbasn`
  * `thth168`

## Skipting í möppur
* Dist 
  * Mappa með bundle.js og bundle.js.map
* img 
  * Mappa með mynum af tökkum svo sem play og pause
* pages
  * Mappa með video.html skjalinu
* src
 * Mappa með java scipt af index síðunni og video
 * lib
  * Mappa með fleiri java scriptum svo sem api, frontpage, utils og videoplayer.
* styles
  * Mappa með öllu scss-inu
    * card, config, controls, global, grid og video.
* videos 
  * Mappa með myndum og myndböndum

## Skipulag scss
  * card
   * .card, h3, poster, .img__container, img__container p, img, .line-container og created.
  * config
   * Einfaldar breytur til að segja til um colums og max breidd
  * controls
   * .controls, > img, .button-hidden og .button-visible
  * global
   * (*) fyrir allt, header, h1, h2, h3, body og footer.
  * grid
   * .grid, .row, .col , og svo breytur eftir stærð skjás.
  * video
   * &__title, &__description, &__poster__container, &__poster__container > play, &__poster, &__button-cisible og &__button-hidden.
  




## Hverjir unnu verkefnið

Bjarni Guðmundsson (bjg17@hi.is) bjarnig86
Steinunn María Egilsdóttir (sme15@hi.is) steinunnmaria
Linda Björg Logadóttir  (lbl8@hi.is) lbl8
