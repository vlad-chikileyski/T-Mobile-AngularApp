$(document).ready(function () {
    $(document).keyup(function (event) {
        if (event.keyCode === 13) {
            event.target.click();
        }
    });
});