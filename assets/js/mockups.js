var Mockups={
    init:function(){
        /* any JavaScript Code will go here */
        jQuery(window).load(function(){
            jQuery("body").delay(1500).addClass('loaded');
        })
    }
}
jQuery(function(){
    Mockups.init();
})