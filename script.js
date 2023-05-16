let number = 0;

$('#increase').on('click', () => {
    number++;
    $('h2').replaceWith('<h2>' + number + '</h2>');
});

$('#decrease').on('click', () => {
    number--;
    $('h2').replaceWith('<h2>' + number + '</h2>');
});