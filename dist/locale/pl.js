!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e.__ree_validate_locale__pl=e.__ree_validate_locale__pl||{},e.__ree_validate_locale__pl.js=n())}(this,function(){"use strict";var e,n={name:"pl",messages:{after:function(e,n){return"Pole "+e+" musi być po polu "+n[0]+"."},alpha_dash:function(e){return"Pole "+e+" może zawierać litery, cyfry oraz myślnik lub podkreślnik."},alpha_num:function(e){return"Pole "+e+" może zawierać tylko litery i cyfry."},alpha_spaces:function(e){return"Pole "+e+" może zawierać tylko litery oraz spacje."},alpha:function(e){return"Pole "+e+" może zawierać tylko litery."},before:function(e,n){return"Pole "+e+" musi być przed "+n[0]+"."},between:function(e,n){return"Pole "+e+" must be between "+n[0]+" and "+n[1]+"."},confirmed:function(e,n){return"Pole "+e+" nie zgadza się z polem potwierdzającym "+n[0]+"."},date_between:function(e,n){return"Pole "+e+" musi zawierać się między "+n[0]+" a "+n[1]+"."},date_format:function(e,n){return"Pole "+e+" musi pasować do formatu "+n[0]+"."},decimal:function(e,n){void 0===n&&(n=[]);var i=n[0];return void 0===i&&(i="*"),"Pole "+e+" musi być liczbą i może zawierać "+("*"===i?"":i)+" miejsca po przecinku."},digits:function(e,n){return"Pole "+e+" musi być liczbą i dokładnie "+n[0]+" cyfr."},dimensions:function(e,n){return"Obraz "+e+" musi być szeroki na "+n[0]+" pikseli i wysoki na "+n[1]+" pikseli."},email:function(e){return"Pole "+e+" musi być poprawnym adresem email."},ext:function(e){return"Plik "+e+" musi być poprawnym plikiem."},image:function(e){return"Pole "+e+" musi być obrazem."},in:function(e){return"Pole "+e+" musi być poprawną wartością."},ip:function(e){return"Pole "+e+" musi być poprawnym adresem IP."},max:function(e,n){return"Pole "+e+" nie może być dłuższe niż "+n[0]+" znaków."},mimes:function(e){return"Plik "+e+" musi posiadać poprawne rozszerzenie."},min:function(e,n){return"Pole "+e+" musi być długie na co najmniej "+n[0]+" znaków."},not_in:function(e){return"Pole "+e+" musi być poprawną wartością."},numeric:function(e){return"Pole "+e+" może zawierać tylko cyfry."},regex:function(e){return"Format pola "+e+" jest nieodpowiedni."},required:function(e){return"Pole "+e+" jest wymagane."},size:function(e,n){var i,o,r,t=n[0];return"Plik "+e+" musi być mniejszy niż "+(i=t,o=1024,r=0==(i=Number(i)*o)?0:Math.floor(Math.log(i)/Math.log(o)),1*(i/Math.pow(o,r)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][r])+"."},url:function(e){return"Pole "+e+" nie jest poprawnym URL."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((e={})[n.name]=n,e)),n});