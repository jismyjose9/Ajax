$('.nav a').click(function(e){
    e.preventDefault();
    $.ajax({
        type: "GET",
        url: this.href,
        data: { },
        success: function(data){
            $('.load').html(data);
        }
    });
});