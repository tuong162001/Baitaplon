window.onscroll = function(item) {
    if (item.path[1].scrollY > 100) {
        var header = document.getElementById("menu");
        header.style.position = "fixed" ;
        header.style.top = 0;
        header.style.width = '100%';
        header.style.right= 0;
        header.style.left= 0;
        header.style.transition= 'width 2s';
    }else{
        var header = document.getElementById("menu");
        header.style.position = "fixed" ;
        header.style.left= '10%';
        header.style.right= '10%';
        header.style.top= '7%';
        header.style.width= '80%';

    }
}


$(document).ready(function () {
    $('#onTop').on('click',function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    })
  });

$(document).ready(function(){
    $('#btn-next').click(function(event) {
        var slide_sau =  $('.active').next();
        console.log(slide_sau.length);
        if(slide_sau.length != 0) {
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event){
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
        }else{
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            }); 
            $('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event){
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            }); 
        }  
    });
    $('#btn-prev').click(function(event) {

		var slide_truoc = $('.active').prev();
		if(slide_truoc.length!=0){
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			slide_truoc.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
		}else{
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			$('.slide:last-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
		}
	});
});
