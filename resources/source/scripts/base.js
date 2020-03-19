module.exports = {
    methods: {
        /**
         * Translate the given key.
         */
        __(key, replace = {}) {
 
            var translation = key.split('.').reduce((o,i)=>o[i], this.$page.language)
 
            Object.keys(replace).forEach(function (key) {
                translation = translation.replace(':' + key, replace[key])
            });
 
            if (translation === undefined) {
                str = key.toLowerCase().split(' ');

                for (var i = 0; i < str.length; i++) {
                    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
                }

                return str.join(' ');
            }
            
            return translation;
        },
        /**
         * Search the object.
         * 
         * @param {*} obj 
         * @param {*} i 
         */
        index(obj,i) {
            return obj[i]
        },
        /** 
        * Translate the given key with basic pluralization. 
        */
        __n(key, number, replace = {}) { 
            var options = key.split('|');   
 
            key = options[1]; 
            if(number == 1) { 
                key = options[0]; 
            }   
 
            return tt(key, replace); 
        },
    },
}