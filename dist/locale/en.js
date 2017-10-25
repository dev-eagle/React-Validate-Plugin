!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e.__ree_validate_locale__en=e.__ree_validate_locale__en||{},e.__ree_validate_locale__en.js={}))}(this,function(e){"use strict";var n=function(e){var n=0===(e=1024*Number(e))?0:Math.floor(Math.log(e)/Math.log(1024));return 1*(e/Math.pow(1024,n)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][n]},t={_default:function(e){return"The "+e+" value is not valid."},after:function(e,n){var t=n[0];return"The "+e+" must be after "+(n[1]?"or equal to ":"")+t+"."},alpha_dash:function(e){return"The "+e+" field may contain alpha-numeric characters as well as dashes and underscores."},alpha_num:function(e){return"The "+e+" field may only contain alpha-numeric characters."},alpha_spaces:function(e){return"The "+e+" field may only contain alphabetic characters as well as spaces."},alpha:function(e){return"The "+e+" field may only contain alphabetic characters."},before:function(e,n){var t=n[0];return"The "+e+" must be before "+(n[1]?"or equal to ":"")+t+"."},between:function(e,n){return"The "+e+" field must be between "+n[0]+" and "+n[1]+"."},confirmed:function(e){return"The "+e+" confirmation does not match."},credit_card:function(e){return"The "+e+" field is invalid."},date_between:function(e,n){return"The "+e+" must be between "+n[0]+" and "+n[1]+"."},date_format:function(e,n){return"The "+e+" must be in the format "+n[0]+"."},decimal:function(e,n){void 0===n&&(n=["*"]);var t=n[0];return"The "+e+" field must be numeric and may contain "+(t&&"*"!==t?t:"")+" decimal points."},digits:function(e,n){return"The "+e+" field must be numeric and exactly contain "+n[0]+" digits."},dimensions:function(e,n){return"The "+e+" field must be "+n[0]+" pixels by "+n[1]+" pixels."},email:function(e){return"The "+e+" field must be a valid email."},ext:function(e){return"The "+e+" field must be a valid file."},image:function(e){return"The "+e+" field must be an image."},in:function(e){return"The "+e+" field must be a valid value."},integer:function(e){return"The "+e+" field must be an integer."},ip:function(e){return"The "+e+" field must be a valid ip address."},length:function(e,n){var t=n[0],a=n[1];return a?"The "+e+" length be between "+t+" and "+a+".":"The "+e+" length must be "+t+"."},max:function(e,n){return"The "+e+" field may not be greater than "+n[0]+" characters."},max_value:function(e,n){return"The "+e+" field must be "+n[0]+" or less."},mimes:function(e){return"The "+e+" field must have a valid file type."},min:function(e,n){return"The "+e+" field must be at least "+n[0]+" characters."},min_value:function(e,n){return"The "+e+" field must be "+n[0]+" or more."},not_in:function(e){return"The "+e+" field must be a valid value."},numeric:function(e){return"The "+e+" field may only contain numeric characters."},regex:function(e){return"The "+e+" field format is invalid."},required:function(e){return"The "+e+" field is required."},size:function(e,t){var a=t[0];return"The "+e+" size must be less than "+n(a)+"."},url:function(e){return"The "+e+" field is not a valid URL."}},a={name:"en",messages:t,attributes:{}};"undefined"!=typeof ReeValidate&&ReeValidate.Validator.addLocale(a),e.messages=t,e.default=a,Object.defineProperty(e,"__esModule",{value:!0})});