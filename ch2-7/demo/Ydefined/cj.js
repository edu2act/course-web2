(function($){  
    $.fn.tableUI = function(options){  
        var defaults = {  
            evenRowClass:"evenRow",  
            oddRowClass:"oddRow",  
            activeRowClass:"activeRow"              
        }  
        var options = $.extend(defaults, options);  
        this.each(function(){  
            var thisTable=$(this);  
            //添加奇偶行颜色  
            thisTable.find("tr:even").addClass(options.evenRowClass);  
            thisTable.find("tr:odd").addClass(options.oddRowClass);  
            //添加活动行颜色(下面注释内容作用和本段相同，但还是有区别的，大家可以百度一下)  
            thisTable.find("tr").bind("mouseover mouseout",function(){  
                $(this).toggleClass(options.activeRowClass);  
            });  
            /* 
            $(thisTable).find("tr").bind("mouseenter mouseleave",function(e){ 
                $(this).toggleClass(options.activeRowClass); 
            }); 
            */  
        });  
    };  
})(jQuery);  