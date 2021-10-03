function generateHeading() {
    $.each(configData["Courses"], function (index, value) {
        var preparedHtml = "";
        preparedHtml += "<th>";
        preparedHtml += value["ShortName"];
        preparedHtml += "</th>";
        $("#MainTableTheadRow").append(preparedHtml);
    });
}
