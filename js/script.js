///////////////////////////////////////////////////
function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}

const titulo = document.querySelector('.typing');
typeWriter(titulo);

/////////////////////////////////////////////////////

$(".Apresentação").slick({


});
$('a[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.Apresentação').slick('slickGoTo', slideno - 1);
});