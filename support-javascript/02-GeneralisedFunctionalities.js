function generalisedFunctionalities() {
    // Generalised Functionalities
    $.each(configData["Functionalities"], function (iFunc, vFunc) {
        var preparedHtml = "";
        var preparedHtml = "<tr>";
        preparedHtml += "<td>";
        preparedHtml += vFunc["Name"];
        preparedHtml += "</td>";
        $.each(configData["Courses"], function (iCourse, vCourse) {
            preparedHtml += "<td>";
            preparedHtml += "<a target='_blank' href='";
            preparedHtml += configData["MoodleBaseURL"];
            if (vFunc["URLPrefix"]) {
                preparedHtml += vFunc["URLPrefix"];
            }
            preparedHtml += vCourse["MoodleID"];
            if (vFunc["URLSuffix"]) {
                preparedHtml += vFunc["URLSuffix"];
            }
            preparedHtml += "'>"
                + vCourse["ShortName"] + " "
                + vFunc["Name"]
                + "</a>";
            preparedHtml += "</td>";
        });
        preparedHtml += "</tr>";
        $("#MainTableTbody").append(preparedHtml);
    });
}
