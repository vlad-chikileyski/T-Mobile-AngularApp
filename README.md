**SML - AngularApp for T-Mobile v1.2.0:**
+ Set @dev mode = false ; 
+ Local structure: images and fonts ; 
+ Changed JSON structure ;
+ *.SVG , *.TTF , *.WOFF , *.EOT;
+ Updated all file structure where was url: //cdn.abee.cloud/resources ; 
? //js.abee.cloud/stock/5582c74d97b01eae257e44aa9d5bade97baf/getOffersWithProducts?offerId=tariprom_38931&offerId=tariprom_38933&offerId=tariprom_38935&offerId=tariprom_38937&offerId=tariprom_38939&offerId=tariprom_38941&offerId=tariprom_38955&offerId=tariprom_38779&offerId=tariprom_38780&offerId=tariprom_38734&offerId=tariprom_38735&offerId=tariprom_38736&offerId=tariprom_38737&offerId=tariprom_38739&offerId=tariprom_38740&offerId=tariprom_38679&offerId=tariprom_38681&offerId=tariprom_38683&offerId=tariprom_38685&offerId=tariprom_38690&offerId=tariprom_38692&offerId=tariprom_38694&offerId=tariprom_39465&offerId=tariprom_39485&offerId=tariprom_39487&offerId=tariprom_39568&offerId=tariprom_39572&offerId=tariprom_39577&offerId=tariprom_39580&offerId=tariprom_39559&offerId=tariprom_38927&offerId=tariprom_39723&offerId=tariprom_39672&offerId=tariprom_39700&offerId=tariprom_39701&offerId=tariprom_39698&offerId=tariprom_39699&offerId=tariprom_39673&offerId=tariprom_39674&offerId=tariprom_39675&offerId=tariprom_39676&offerId=tariprom_39685&offerId=tariprom_39687&offerId=tariprom_39690&offerId=tariprom_39677&offerId=tariprom_39678&offerId=tariprom_39680&offerId=tariprom_39679&offerId=tariprom_39682&offerId=tariprom_39681

**SML - AngularApp for T-Mobile v1.1.1:**
+ Little changes for uploading to server ;

**SML - AngularApp for T-Mobile v1.1.0 :**
+ Create new configuration from production version: *config-standard-nowe-pole.json; 
+ Changed default json configuration in main.bundle.js: "http://s3.eu-central-1.amazonaws.com/abee.execon.pl/p/resources/TMobile/AngularFixer/config-standard-nowe-pole.json'" => "localhost/example/config/config-standard-nowe-pole.json";

**SML - AngularApp for T-Mobile v1.0.0 :**
+ Created file structure;
+ style.css and stylescombined.css from production (t-mobile.pl);
- fonts woff, - we not used this woff fonts, because this fonts exists in:
**http://s.t-mobile.pl/binaries/9049/rwd/assets/font** and **http://cdn.abee.cloud/resources/TMobile/T_SML/fonts**
- deleted *.bundle.js.map;
+ include style in index.html;
+ change default location:  "/"** => "example/[FILE_STRUCTURE]";
@Info: version working in debug configuration for @dev.