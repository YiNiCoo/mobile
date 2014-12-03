$(function($){
    $(function(){
        $('#slides').slidesjs({
            generateNextPrev: false,
            generatePagination: false,
            play: {
                active: true,
                auto: true,
                interval: 4000,
                swap: true
            }
        });
        // $("#slides").slides();
    });
});