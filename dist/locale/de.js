!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e.__ree_validate_locale__de=e.__ree_validate_locale__de||{},e.__ree_validate_locale__de.js=n())}(this,function(){"use strict";var e,n={name:"de",messages:{_default:function(e){return e+" ist ungültig."},after:function(e,n){return e+" muss nach "+n[0]+" liegen."},alpha_dash:function(e){return e+" darf alphanumerische Zeichen sowie Striche und Unterstriche enthalten."},alpha_num:function(e){return e+" darf nur alphanumerische Zeichen enthalten."},alpha:function(e){return e+" darf nur alphabetische Zeichen enthalten."},before:function(e,n){return e+" muss vor "+n[0]+" liegen."},between:function(e,n){return e+" muss zwischen "+n[0]+" und "+n[1]+" liegen."},confirmed:function(e,n){return e+" passt nicht zum Inhalt von "+n[0]+"."},date_between:function(e,n){return e+" muss zwischen "+n[0]+" und "+n[1]+" liegen."},date_format:function(e,n){return e+" muss das Format "+n[0]+" haben."},decimal:function(e,n){void 0===n&&(n=[]);var t=n[0];return void 0===t&&(t="*"),e+" muss numerisch sein und darf "+("*"===t?"":t)+" Dezimalpunkte enthalten."},digits:function(e,n){return e+" muss numerisch sein und exakt "+n[0]+" Ziffern enthalten."},dimensions:function(e,n){return e+" muss "+n[0]+" x "+n[1]+" Bildpunkte groß sein."},email:function(e){return e+" muss eine gültige E-Mail-Adresse sein."},ext:function(e){return e+" muss eine gültige Datei sein."},image:function(e){return e+" muss eine Grafik sein."},in:function(e){return e+" muss ein gültiger Wert sein."},ip:function(e){return e+" muss eine gültige IP-Adresse sein."},max:function(e,n){return e+" darf nicht länger als "+n[0]+" Zeichen sein."},mimes:function(e){return e+" muss einen gültigen Dateityp haben."},min:function(e,n){return e+" muss mindestens "+n[0]+" Zeichen lang sein."},not_in:function(e){return e+" muss ein gültiger Wert sein."},numeric:function(e){return e+" darf nur numerische Zeichen enthalten."},regex:function(e){return"Das Format von "+e+" ist ungültig."},required:function(e){return e+" ist ein Pflichtfeld."},size:function(e,n){var t,i,r,u=n[0];return e+" muss kleiner als "+(t=u,i=1024,r=0==(t=Number(t)*i)?0:Math.floor(Math.log(t)/Math.log(i)),1*(t/Math.pow(i,r)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][r])+" sein."},url:function(e){return e+" ist keine gültige URL."}},attributes:{}};return"undefined"!=typeof ReeValidate&&ReeValidate.Validator.localize(((e={})[n.name]=n,e)),n});