var Mockups={
    init:function(){
        /* any JavaScript Code will go here */
        jQuery(window).load(function(){
            setTimeout(function(){
              jQuery("body").delay(1500).addClass('loaded');  
            },500)
            
        })
    }
}
jQuery(function(){
    Mockups.init();
})