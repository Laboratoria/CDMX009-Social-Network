        let elems = document.querySelectorAll('.fixed-action-btn');
        let instances = M.FloatingActionButton.init(elems, {
            direction: 'right',
            hoverEnabled: false
        });
let deleteComments = document.querySelectorAll('.deletePostUser');

deleteComments.forEach(function(deleteComment) {
    deleteComment.addEventListener('click', function(clickedPoints) {
        console.log(clickedPoints.target.dataset.id);
        db.collection('pruebas_300420_Esther').doc(clickedPoints.target.dataset.id).delete()
            .then(function() {
                alert('Post borrado exitosamente'); //AQUI VA LA COLECCION QUE TENGAS TU
            })
            .catch(function(error) {
                alert('Error removing post: ', error);
            });
    });
});

export { deleteComments }