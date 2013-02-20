/**
 * SOF - Serialize Object Form - jQuery Plugin
 * version: 0.0.3 (14.2.2013)
 * @requires jQuery v1.8.3 or later
 *
 * 2013 Bojan Mazej
 *
 * <code>
 *      // without othore options
 *      $("form-slector").sof().get();
 *
 *      // like this you  can set more options
 *      $("form-slector").sof({
 *          // [json|object] - this two objects can be returned
 *          type : "object" - [json|object]
 *
 *          // By select or checkbox change one child to string
 *          child_to_string : boolean
 *      }).get();
 *
 *      // also set type like this
 *      $("form-slector").sof().get('object');
 *      $("form-slector").sof().setType('object').get();
 * </code>
 */

(function(sof, $){
    var S = {},
        V = {},
        O = {};

    $.extend(sof, {

        //------------------------------------------------------------------------
        setType: function(type)
        {
            if(type)
                S.current.type = type;

            return sof;
        },

        //------------------------------------------------------------------------
        get: function(type)
        {
            return S.prepareOutput(type); 
        }
    });

    $.extend(S, {
        // The current version of sof
        version     : '0.0.3',
        date        : '13.2.2013',

        defaults    : {
            type            : "json",
            selector        : "",
            child_to_string : true
        },

        current     : {},
        
        //------------------------------------------------------------------------
        prepareObject: function()
        {
            O = {};

            $.each(V, function() {
                if(O[this.name])
                {
                    if(!O[this.name].push)
                    {
                        if(O[this.name] != 0)
                        {
                            O[this.name] = [O[this.name]];
                        }
                    }

                    if(this.value != 0)
                    {
                        O[this.name].push(this.value || '');
                    }
                }
                else
                {
                    O[this.name] = this.value || '';
                }
            });
        },

        //------------------------------------------------------------------------
        prepareOutput: function(type)
        {
            type = (type) ? type : S.current.type;

            var json = function(o)
                {
                    return JSON.stringify(o);
                };

            switch(type)
            {
                case "object"   : return O;
                    break;
                case "json"     : return json(O);
                    break;
            };
        },

        /**
         * If parent from select or checkbox has only
         * one child, tha thi can be changed to string
         * 
         * @param  boject obj
         * @return object
         */
        childToString: function(obj)
        {
            if(S.current.child_to_string)
            {
                $.each(obj, function(i, value){
                    if(this instanceof Array && this.length == 1) obj[i] = value[0];
                });
            }

            return obj;
        },

        //------------------------------------------------------------------------
        // Serialize elemnts
        //
        serializeForm: function(obj)
        {
            V = obj.serializeArray();
        },

        //------------------------------------------------------------------------
        serialize: function(el)
        {
            return  $(S.current.selector + el).map( function() {
                        return {"name": this.name, "value": "0"}
                    }).get();
        },

        //------------------------------------------------------------------------
        serializeCheckbox: function()
        {
            V = V.concat(S.serialize(' input[type=checkbox]:not(:checked)'));
        },

        //------------------------------------------------------------------------
        serializeRadio: function()
        {
            V = V.concat(S.serialize(' input[type=radio]:not(:checked)'));
        },

        //------------------------------------------------------------------------
        serializeSelect: function()
        {
            V = V.concat(S.serialize(' select'));
        }
    });

    //------------------------------------------------------------------------
    function init(options)
    {
        $.extend(S.current, S.defaults, options);
    };

    //------------------------------------------------------------------------
    $.fn.sof = function(options)
    {
        // init and set options
        var opt = {
            that        : $(this),
            selector    : this.selector
        }
        init($.extend(options, opt));

        // get Form data
        S.serializeForm(this);
        S.serializeCheckbox();
        S.serializeRadio();
        S.serializeSelect();

        // prepare object
        S.prepareObject();

        // remove parents with one children
        O = S.childToString(O);

        return sof;
    };

})(window.sof = window.sof || {}, jQuery);
