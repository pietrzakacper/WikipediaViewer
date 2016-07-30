function showResults(response) {
    $(".result-container").empty();
      $(".result-container").append('<hr></hr>');
    $.each(response[1], function(i, item) {
        $(".result-container").append(
            '<a href="' + response[3][i] + '" target="_blank"><div class="result-item hidden">' + "<strong><p>" + item + "</p></strong>" + "<div>" + response[2][i] + "</div>" + "</div></a>"
        );
        $(".result-item:last").fadeIn(i*200).toggleClass("hidden");
    });
}

function showLoadAnim() {
    $(".result-container").html('<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>');
}

function submitFunction() {
    $.ajax({
        crossOrigin: true,
        data: {
            action: "opensearch",
            type: "json",
            search: $("#search").val(),
        },
        dataType: "jsonp",
        cache: false,
        url: "https://en.wikipedia.org/w/api.php",
        jsonpCallback: "showResults"
    })
    showLoadAnim();
}

$("#search-form").submit(function(e) {
    e.preventDefault();
    submitFunction();
});
