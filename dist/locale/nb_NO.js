!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.__ree_validate_locale__nb_NO=e.__ree_validate_locale__nb_NO||{},e.__ree_validate_locale__nb_NO.js=t())}(this,function(){"use strict";var e=function(e){var t=0===(e=1024*Number(e))?0:Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,t)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][t]},t={name:"nb_NO",messages:{after:function(e,t){return e+"-feltet må være etter "+t[0]+"."},alpha_dash:function(e){return e+"-feltet kan bare inneholde alfa-numeriske tegn, samt bindestrek og understrek."},alpha_num:function(e){return e+" kan bare inneholde alfanumeriske tegn."},alpha_spaces:function(e){return e+"-feltet kan bare inneholde alfa-numeriske teng og mellomrom."},alpha:function(e){return e+"-feltet kan bare inneholde bokstaver."},before:function(e,t){return e+"-feltet må være før "+t[0]+"."},between:function(e,t){return e+"-feltet må være imellom "+t[0]+" og "+t[1]+"."},confirmed:function(e){return e+"-feltet kan ikke bekreftes."},credit_card:function(e){return e+"-feltet er ugyldig."},date_between:function(e,t){return e+"-feltet må være imellom "+t[0]+" og "+t[1]+"."},date_format:function(e,t){return e+"-feltet må være i følgende format: "+t[0]+"."},decimal:function(e,t){void 0===t&&(t=["*"]);var n=t[0];return e+"-feltet må være numerisk samt kan inneholde "+("*"===n?"":n)+" desimaler."},digits:function(e,t){return e+"-feltet må være numerisk og inneholde nøyaktig "+t[0]+" siffer."},dimensions:function(e,t){return e+"-feltet må være "+t[0]+" ganger "+t[1]+" piksler."},email:function(e){return e+"-feltet må være en gyldig E-post adresse."},ext:function(e){return e+"-feltet må være en gyldig fil."},image:function(e){return e+"-feltet må være et bilde."},in:function(e){return e+"-feltet må være en gyldig verdi."},ip:function(e){return e+"-feltet må være en gyldig IP Adresse."},max:function(e,t){return e+"-feltet kan ikke være lengre enn "+t[0]+" tegn."},max_value:function(e,t){return e+"-feltet må være "+t[0]+" eller mindre."},mimes:function(e){return e+"-feltet må ha en gyldig filtype."},min:function(e,t){return e+"-feltet må være minst "+t[0]+" tegn."},min_value:function(e,t){return e+"-feltet må være "+t[0]+" eller mer."},not_in:function(e){return e+"-feltet må være en gyldig verdi."},numeric:function(e){return e+"-feltet kan bare inneholde nummer."},regex:function(e){return e+"-feltet sin formatering er ugyldig."},required:function(e){return e+"-feltet er obligatorisk."},size:function(t,n){var r=n[0];return t+"-feltet må være mindre enn "+e(r)+"."},url:function(e){return e+"-feltet er ikkje en gyldig URL."}},attributes:{}};return"undefined"!=typeof ReeValidate&&ReeValidate.Validator.addLocale(t),t});