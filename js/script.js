$(document).ready(function () {
    $.ajax({
        url: 'js/moviesCast.json', 
        dataType: 'json',
        success: function (data) {
            populateTable(data);
            updateFilterButtons(data);
        }
    });

    $("#search").on("input", function () {
        var searchTerm = $(this).val().toLowerCase();
        highlightRows(searchTerm);
    });

    $(".filter-btn").on("click", function () {
        var filter = $(this).data("filter");
        filterRows(filter);
    });

    function populateTable(characters) {
        var table = $("#character-table");
        table.empty();

        $.each(characters, function (index, character) {
            var row = $("<tr>").appendTo(table);
            $.each(character, function (key, value) {
                $("<td>").text(value).appendTo(row);
            });
        });
    }

    function highlightRows(searchTerm) {
        var table = $("#character-table");
        $("tr", table).each(function () {
            var firstName = $("td:first", this).text().toLowerCase();
            if (firstName.includes(searchTerm)) {
                $(this).addClass("highlight");
            } else {
                $(this).removeClass("highlight");
            }
        });
    }

    function filterRows(filter) {
        var table = $("#character-table");
        $("tr", table).hide();
        $("tr." + filter, table).show();
    }

    function updateFilterButtons(characters) {
        var aMCount = 0;
        var nZCount = 0;

        $.each(characters, function (index, character) {
            var lastName = character.lastName.charAt(0).toUpperCase();
            if (lastName >= "A" && lastName <= "M") {
                aMCount++;
            } else if (lastName >= "N" && lastName <= "Z") {
                nZCount++;
            }
        });

        $('.filter-btn[data-filter="A-M"]').text("A - M (" + aMCount + ")");
        $('.filter-btn[data-filter="N-Z"]').text("N - Z (" + nZCount + ")");
    }
});
