$(document).ready(function () {
    $(document).keyup(function (event) {
        if (event.keyCode === 13) {
            $(this).click();
            /*if (event.currentTarget.activeElement != undefined) {
                var id = $(event.currentTarget.activeElement).attr('id');
                document.getElementById(id).click();
            }*/
        }
    });
});
