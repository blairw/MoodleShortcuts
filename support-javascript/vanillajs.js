function bodyDidLoad() {
	$.each(configData["Courses"], function (index, value) {
		var preparedHtml = "";
		preparedHtml += "<th>";
		preparedHtml += value["ShortName"];
		preparedHtml += "</th>";
		$("#MainTableTheadRow").append(preparedHtml);
	});

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