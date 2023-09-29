$(document).ready(function () {
    function loadcotent(filePath) {

        var fetech = new XMLHttpRequest();

        fetech.open("GET", filePath, true);
        fetech.onload = function () {
            if (fetech.status === 200) {
                $("#content").fadeOut(300, function () {
                    $("#content").html(fetech.responseText);
                    $("#content").fadeIn(300);
                });
            }
        };
        fetech.send();

    }
    $("#prospect").on("click", function (e) {
        e.preventDefualt;
        loadcotent("prospect.html");
    })

    $("#convert").on("click", function (e) {
        e.preventDefualt;
        loadcotent("convert.html");
    })

    $("#retain").on("click", function (e) {
        e.preventDefualt;
        loadcotent("retain.html");
    })

})