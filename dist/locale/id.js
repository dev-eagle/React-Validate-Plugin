!function(a,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(a.__ree_validate_locale__id=a.__ree_validate_locale__id||{},a.__ree_validate_locale__id.js=n())}(this,function(){"use strict";var a=function(a){var n=0===(a=1024*Number(a))?0:Math.floor(Math.log(a)/Math.log(1024));return 1*(a/Math.pow(1024,n)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][n]},n={name:"id",messages:{_default:function(a){return"Nilai "+a+" tidak sah."},after:function(a,n){return a+" harus sebelum "+n[0]+"."},alpha_dash:function(a){return a+" boleh mengandung karakter alfanumerik, tanda hubung, dan garis bawah."},alpha_num:function(a){return a+" hanya boleh mengandung karakter alfanumerik."},alpha_spaces:function(a){return a+" hanya boleh berisi karakter alfabet serta spasi."},alpha:function(a){return a+" hanya boleh mengandung karakter alfabet."},before:function(a,n){return a+" harus setelah "+n[0]+"."},between:function(a,n){return a+" harus di antara "+n[0]+" dan "+n[1]+"."},confirmed:function(a,n){return a+" tidak cocok dengan "+n[0]+"."},credit_card:function(a){return a+" tidak sah."},date_between:function(a,n){return a+" harus di antara "+n[0]+" dan "+n[1]+"."},date_format:function(a,n){return a+" harus dalam format "+n[0]+"."},decimal:function(a,n){void 0===n&&(n=["*"]);var e=n[0];return a+" harus berupa angka dan boleh mengandung "+("*"===e?"":e)+" titik desimal."},digits:function(a,n){return a+" harus berupa "+n[0]+" digit angka."},dimensions:function(a,n){return a+" harus berdimensi lebar "+n[0]+" pixel dan tinggi "+n[1]+" pixel."},email:function(a){return a+" harus berupa alamat surel yang benar."},ext:function(a){return a+" harus berupa berkas yang benar."},image:function(a){return a+" harus berupa gambar."},in:function(a){return a+" harus berupa nilai yang sah."},integer:function(a){return a+" harus berupa bilangan bulat."},ip:function(a){return a+" harus berupa alamat ip yang sah."},length:function(a,n){var e=n[0],r=n[1];return r?"Panjang "+a+" harus di antara "+e+" dan "+r+".":"Panjang "+a+" harus tepat "+e+"."},max:function(a,n){return a+" tidak boleh lebih dari "+n[0]+" karakter."},max_value:function(a,n){return"Nilai "+a+" tidak boleh lebih dari "+n[0]+"."},mimes:function(a){return"Tipe berkas "+a+" harus benar."},min:function(a,n){return a+" minimal mengandung "+n[0]+" karakter."},min_value:function(a,n){return"Nilai "+a+" tidak boleh kurang dari "+n[0]+"."},not_in:function(a){return a+" harus berupa nilai yang sah."},numeric:function(a){return a+" harus berupa angka."},regex:function(a){return"Format "+a+" salah."},required:function(a){return a+" harus diisi."},size:function(n,e){var r=e[0];return n+" harus lebih kecil dari "+a(r)+"."},url:function(a){return a+" harus berupa tautan yang benar."}},attributes:{}};return"undefined"!=typeof ReeValidate&&ReeValidate.Validator.addLocale(n),n});