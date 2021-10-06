function generalisedFunctionalities() {
    // Generalised Functionalities
    $.each(configData["Functionalities"], function (iFunc, vFunc) {
        var preparedHtml = "";
        var preparedHtml = "<tr>";
        preparedHtml += "<td>";
        if (vFunc["Icon"]) {
            preparedHtml += "<span style='display: inline-block; width: 1.8rem;'>"
            preparedHtml += vFunc["Icon"];
            preparedHtml += "</span>";
        }
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
