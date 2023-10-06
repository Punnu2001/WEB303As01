function getData() {

   

    $.getJSON("team.json", function (data) {
        $.each(data, function (index, element) {
            console.log(element.name)
            var nameElement = $("<h2>").text(element.name);
            var positionElement = $("<h5>").text(element.position);
            var bioElement = $("<p>").text(element.bio);
            $("#team").append(nameElement, positionElement, bioElement);
        });
    });
}

function ajaxRequest() {
    $("#team").html("Loading...");
    $.ajax({
        type: "get",
        url: "team.json",
        datatype: "json",
        success: function (data) {
            setTimeout(function () {
                $("#team").empty();
                $.each(data, function (index, member) {
        
                    var nameElement = $("<h2>").text(member.name);
                    var positionElement = $("<h5>").text(member.position);
                    var bioElement = $("<p>").text(member.bio);
                    $("#team").append(nameElement, positionElement, bioElement);
                });
            },3000
            );
        },
        error: function (error) {
            console.log(error);
        },
    });
}

$(document).ready(function () {
    ajaxRequest();
});

 