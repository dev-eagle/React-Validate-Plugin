!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n.__ree_validate_locale__sr=n.__ree_validate_locale__sr||{},n.__ree_validate_locale__sr.js=e())}(this,function(){"use strict";var n=function(n){var e=0===(n=1024*Number(n))?0:Math.floor(Math.log(n)/Math.log(1024));return 1*(n/Math.pow(1024,e)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][e]},e={name:"sr",messages:{_default:function(n){return"Поље "+n+" није валидно."},after:function(n,e){return"Поље "+n+" мора бити после "+e[0]+"."},alpha_dash:function(n){return"Поље "+n+" може садржати алфанумеричке карактере и повлаке."},alpha_num:function(n){return"Поље "+n+" може садржати само алфанумеричке карактере."},alpha_spaces:function(n){return"Поље "+n+" може садржати само алфанумеричке карактере и размаке."},alpha:function(n){return"Поље "+n+" може садржати само слова."},before:function(n,e){return"Поље "+n+" мора бити пре "+e[0]+"."},between:function(n,e){return"Поље "+n+" мора бити између "+e[0]+" и "+e[1]+"."},confirmed:function(n){return"Потврда поља "+n+" се не поклапа."},credit_card:function(n){return"Поље "+n+" није валидно."},date_between:function(n,e){return"Поље "+n+" мора бити између "+e[0]+" и "+e[1]+"."},date_format:function(n,e){return"Поље "+n+" мора бити у формату "+e[0]+"."},decimal:function(n,e){void 0===e&&(e=["*"]);var t=e[0];return"Поље "+n+" мора бити број и може садржати "+("*"===t?"":t)+" децималних места."},digits:function(n,e){return"Поље "+n+" мора бити број и садржати тачно "+e[0]+" цифара."},dimensions:function(n,e){return"Поље "+n+" мора бити "+e[0]+" x "+e[1]+" пиксела."},email:function(n){return"Поље "+n+" мора бити валидан имејл."},ext:function(n){return"Поље "+n+" мора бити валидан фајл."},image:function(n){return"Поље "+n+" мора бити слика."},in:function(n){return"Поље "+n+" мора бити валидна вредност."},ip:function(n){return"Поље "+n+' мора бити валидна "ај пи" адреса.'},max:function(n,e){return"Поље "+n+" не сме бити дуже од "+e[0]+" карактера."},max_value:function(n,e){return"Поље "+n+" не сме бити веће од "+e[0]+"."},mimes:function(n){return"Поље "+n+" мора бити валидан тип фајла."},min:function(n,e){return"Поље "+n+" мора садржати најмање "+e[0]+" карактера."},min_value:function(n,e){return"Поље "+n+" не сме бити мање од "+e[0]+"."},not_in:function(n){return"Поље "+n+" мора имати валидну вредност."},numeric:function(n){return"Поље "+n+" мора бити број."},regex:function(n){return"Формат поља "+n+" није валидан."},required:function(n){return"Поље "+n+" је обавезно."},size:function(e,t){var r=t[0];return"Поље "+e+" мора бити мање од "+n(r)+"."},url:function(n){return"Поље "+n+" није валидна веб адреса."}},attributes:{}};return"undefined"!=typeof ReeValidate&&ReeValidate.Validator.addLocale(e),e});