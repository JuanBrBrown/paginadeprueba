jQuery('document').ready(function($){

    var menubtn = $('.ver-menu'),
        menu = $('.navigation ul');

        menubtn.click(function() {

            if( menu.hasClass('show') ) {

                menu.removeClass('show');

            }else{

            menu.addClass('show');

            }

        });



});

var inputs = document.getElementsByClassName('formulario-input');
for (var i =0; i < inputs.length; i++) {
    inputs [i].addEventListener ('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('fijar')
        } else {
            this.nextElementSibling.classList.remove('fijar');

        }
    });
}
