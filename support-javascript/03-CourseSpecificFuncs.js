function courseSpecificFuncs() {
    // Course-Specific Functionalities
    if (configData["CourseSpecificFunctionalities"]) {
        preparedHtml = "";
        preparedHtml += "<td>Course-Specific Functionalities</td>";
        $.each(configData["Courses"], function (iCourse, vCourse) {
            var cmid = vCourse["MoodleID"];
            preparedHtml += "<td>";
            if (configData["CourseSpecificFunctionalities"][cmid]) {
                var csfsThisCourse = configData["CourseSpecificFunctionalities"][cmid];

                $.each(csfsThisCourse, function (iCSF, vCSF) {
                    preparedHtml += "<div>";
                    preparedHtml += "<a target='_blank' href='";
                    preparedHtml += vCSF["FullURL"];
                    preparedHtml += "'>";
                    preparedHtml += vCSF["FunctionalityName"];
                    preparedHtml += "</a>";
                    preparedHtml += "</div>";
                });
            }
            preparedHtml += "</td>";
        });
        $("#MainTableTbody").append(preparedHtml);
    }
}
