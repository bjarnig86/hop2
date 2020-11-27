## Hópverkefni 2
Hópverkefnið er unnið af Bjarna, Steinunni og Lindu eftir hönnun Ólafs Sverris Kjartanssonar. Verkefnið í sjálfu sér er myndbandavefsíða að nafni Fræðslumyndbandaleigan.  

## Hvernig á að keyra verkefnið
Eftir að búið er að sækja verkefnið af github er mikilvægt að sækja ýmis forrit til að verkefnið/síðan virki eins og ætlast er. 
  * npm run dev: keyrir verkefnið og opnar síðuna í nýjum glugga í vafra.
  * npm run lint: keyrir kóða verkefnis í gegnum stylelint sem eru staðlar fyrir uppsetningu CSS og SCSS kóða og skilar villum úr kóðanum ef einhverjar eru.

## Tæki og tól 
* stylelint
* eslint
* babel
* rollup
* browser-sync
* concurrently 
* sass 
* sass-watch


## Lýsing verkefnis
Verkefninu er skipt upp í tvær síður. Heimasíðan samanstendur af þremur flokkum af myndböndum. Ef smellt er á mynband birtist síða með því myndbandi ásamt tengdum myndböndum.

## Uppsetning
Verkefnið er unnið í HTML, CSS og Javascript þar sem CSS hlutinn er útfærður með sass (SCSS) og Javascript hlutinn útfærður með Babel og Rollup tólunum.

## Skipting í möppur
* Dist 
  * Mappa með bundle.js og bundle.js.map.
* img 
  * Mappa með myndum af tökkum svo sem play og pause.
* pages
  * Mappa með video.html skjalinu þar sem valið myndband birtist.
* src
  * Mappa með java scipt af index síðunni sem athugar á hvaða síðu notandinn er.
* lib
  * Mappa með fleiri java scriptum svo sem api, frontpage, utils og videoplayer.
* styles
  * Mappa með öllu scss-inu:
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

* Bjarni Guðmundsson 
  * (bjg17@hi.is) 
  * Github: bjarnig86
* Steinunn María Egilsdóttir 
  * (sme15@hi.is) 
  * Github: steinunnmaria
* Linda Björg Logadóttir  
  * (lbl8@hi.is) 
  * Github: lbl8
