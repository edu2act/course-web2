(function($){  
    $.fn.tableUI = function(options){  
        var defaults = {  
            evenRowClass:"evenRow",  
            oddRowClass:"oddRow",  
            activeRowClass:"activeRow"              
        }  
        var options = jQuery.extend(defaults, options);  
        this.each(function(){  
            var thisTable=$(this);  
            //添加奇偶行颜色
            thisTable.find("tr:even").addClass(options.evenRowClass);  
            thisTable.find("tr:odd").addClass(options.oddRowClass);
			//更改选中行的颜色
            thisTable.find("tr").bind("mouseover mouseout",function(){  
                $(this).toggleClass(options.activeRowClass);  
            }); 
        });  
    };
})(jQuery);  