!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(e.__ree_validate_locale__hr=e.__ree_validate_locale__hr||{},e.__ree_validate_locale__hr.js=i())}(this,function(){"use strict";var e={name:"hr",messages:{_default:function(e){return"Vrijednost "+e+" ne valja."},after:function(e,i){return e+" mora biti poslje "+i[0]+"."},alpha_dash:function(e){return e+" može sadržavati alfanumeričke znakove kao i crtice i podvlake."},alpha_num:function(e){return e+" može sadržavati samo alfanumeričke znakove."},alpha_spaces:function(e){return e+" može sadržavati samo abecedne znakove kao i razmake."},alpha:function(e){return e+" može sadržavati samo abecedne znakove."},before:function(e,i){return e+" mora biti prije "+i[0]+"."},between:function(e,i){return e+" mora biti između "+i[0]+" i "+i[1]+"."},confirmed:function(e){return"Potvrda "+e+" ne odgovara."},credit_card:function(e){return e+" nije valjan."},date_between:function(e,i){return e+" mora biti između "+i[0]+" i "+i[1]+"."},date_format:function(e,i){return"The "+e+" mora biti u formatu "+i[0]+"."},decimal:function(e,i){void 0===i&&(i=["*"]);var n=i[0];return e+" mora biti numerički i može sadržavati "+("*"===n?"":n)+" decimalne bodove."},digits:function(e,i){return e+" mora biti numerički i točno sadrživati "+i[0]+" znamenke."},dimensions:function(e,i){return e+" mora biti "+i[0]+" piksela za "+i[1]+" piksela."},email:function(e){return e+" mora biti važeća e-pošta."},ext:function(e){return e+" mora biti važeća datoteka."},image:function(e){return e+" mora biti slika."},in:function(e){return"Vrijednost "+e+" mora biti važeća vrijednost."},ip:function(e){return e+" mora biti važeća IP adresa."},max:function(e,i){return e+" ne smije biti veći od "+i[0]+" znakova."},max_value:function(e,i){return"Vrijednost "+e+" mora biti "+i[0]+" ili manje."},mimes:function(e){return e+" mora imati valjanu vrstu datoteke."},min:function(e,i){return e+" mora biti barem "+i[0]+" znakova."},min_value:function(e,i){return"Vrijednost "+e+" mora biti "+i[0]+" ili više."},not_in:function(e){return"Vrijednost "+e+" mora biti važeća vrijednost."},numeric:function(e){return e+" može sadrživati samo numeričke znakove"},regex:function(e){return"Oblik "+e+" nije važeći."},required:function(e){return"Polje "+e+" je obavezno."},size:function(e,i){return e+" mora biti manje od "+i[0]+" KB."},url:function(e){return e+" nije važeći URL."}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate&&(VeeValidate.Validator,!0)&&VeeValidate.Validator.addLocale(e),e});