!function(a,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(a.__ree_validate_locale__tr=a.__ree_validate_locale__tr||{},a.__ree_validate_locale__tr.js=r())}(this,function(){"use strict";var a=function(a){var r=0===(a=1024*Number(a))?0:Math.floor(Math.log(a)/Math.log(1024));return 1*(a/Math.pow(1024,r)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][r]},r={name:"tr",messages:{after:function(a,r){return a+" "+r[0]+" alanından ileri bir tarih olmalıdır."},alpha_dash:function(a){return a+" alanı harf ve tire (-) yada alttan tire (_) içerebilir."},alpha_num:function(a){return a+" yalnızca harf ve rakam içerebilir."},alpha_spaces:function(a){return a+" yalnızca harf boşluk (space) içerebilir."},alpha:function(a){return a+" yalnızca harf içerebilir."},before:function(a,r){return a+" "+r[0]+" alanından önce bir tarih olmalıdır."},between:function(a,r){return a+" "+r[0]+" ile "+r[1]+" aralığında olmalıdır."},confirmed:function(a){return a+" doğrulaması hatalı."},credit_card:function(a){return a+" numarası hatalı."},date_between:function(a,r){return a+" "+r[0]+" ile "+r[1]+" tarihleri arasında olmalıdır."},date_format:function(a,r){return a+" "+r[0]+" formatında olmalıdır."},decimal:function(a,r){void 0===r&&(r=["*"]);var e=r[0];return a+" sayısal"+("*"!==e?"ve noktadan sonra "+e+" basamaklı":"")+" olmalıdır."},digits:function(a,r){return a+" sayısal ve "+r[0]+" basamaklı olmalıdır."},dimensions:function(a,r){return a+" alanı "+r[0]+" piksel ile "+r[1]+" piksel arasında olmalıdır."},email:function(a){return a+" alanının geçerli bir e-posta olması gerekir."},ext:function(a){return a+" alanı geçerli bir dosya olmalıdır."},image:function(a){return a+" alanı resim dosyası olmalıdır."},in:function(a){return a+" alanına geçerli bir değer giriniz."},ip:function(a){return a+" alanı geçerli bir ip adresi olmalıdır."},max:function(a,r){return a+" alanı "+r[0]+" karakterden fazla olmamalıdır."},max_value:function(a,r){return a+" alanı "+r[0]+" yada daha az bir değer olmalıdır."},mimes:function(a){return a+" geçerli bir dosya olmalıdır."},min:function(a,r){return a+" alanına en az "+r[0]+" karakter girilmelidir."},min_value:function(a,r){return a+" alanı "+r[0]+" yada daha fazla bir değer olmalıdır."},not_in:function(a){return a+" alanına geçerli bir değer giriniz."},numeric:function(a){return a+" alanına sayısal bir değer giriniz."},regex:function(a){return a+" formatı geçersiz."},required:function(a){return a+" alanı gereklidir."},size:function(r,e){var n=e[0];return r+" alanı "+a(n)+"'dan daha az olmalıdır."},url:function(a){return a+" geçersiz URL."}},attributes:{}};return"undefined"!=typeof ReeValidate&&ReeValidate.Validator.addLocale(r),r});