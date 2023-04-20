$(document).ready(function () {
    function validateInput(input) {
        var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        var sqlKeywords = /(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|TRUNCATE)/i;

        if (specialChars.test(input) || sqlKeywords.test(input)) {
            return true;
        } else {
            return false;
        }
    }

    function validateDescription(input) {
        var specialCharsWithoutDot = /[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/;
        var sqlKeywords = /(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|TRUNCATE)/i;

        if (specialCharsWithoutDot.test(input) || sqlKeywords.test(input)) {
            return true;
        } else {
            return false;
        }
    }

    function validateDate(input) {
        var specialCharsWithoutHyphen = /[!@#$%^&*()_+\=\[\]{};':"\\|,<>\/?]/;
        var sqlKeywords = /(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|TRUNCATE)/i;

        if (specialCharsWithoutHyphen.test(input) || sqlKeywords.test(input)) {
            return true;
        } else {
            return false;
        }
    }


    $("#SaveTasks").on('click', function () {
        debugger;
        if ($("#txtUserName").val() == "") {
            alert("Please enter Username!!");
            $("#txtUserName").focus();
            return;
        }
        else if (validateInput($("#txtUserName").val())) {
            alert("Please enter valid Username!!");
            $("#txtUserName").val("");
            $("#txtUserName").focus();
            return;
        }

        if ($("#txtTaskTitle").val() == "") {
            alert("Please enter Task Title!!");
            $("#txtTaskTitle").focus();
            return;
        }
        else if (validateInput($("#txtTaskTitle").val())) {
            alert("Please enter valid Task Title!!");
            $("#txtTaskTitle").val("");
            $("#txtTaskTitle").focus();
            return;
        }

        if ($("#txtDescription").val() == "") {
            alert("Please enter Description!!");
            $("#txtDescription").focus();
            return;
        }
        else if (validateDescription($("#txtDescription").val())) {
            alert("Please enter valid Description!!");
            $("#txtDescription").val("");
            $("#txtDescription").focus();
            return;
        }

        if ($("#txtDate").val() == "") {
            alert("Please select or enter date!!");
            $("#txtDate").focus();
            return;
        }
        else if (validateDate($("#txtDate").val())) {
            alert("Please select or enter valid date!!");
            $("#txtDate").val("");
            $("#txtDate").focus();
            return;
        }

        if ($("#ddlStatus").val() == "") {
            alert("Please select Status!!");
            $("#ddlStatus").focus();
            return;
        }
        else if (validateInput($("#ddlStatus").val())) {
            alert("Please select valid Status!!");
            $("#ddlStatus").focus();
            return;
        }

        $.ajax({
            type: "POST",
            url: "../../TaskManager.aspx/InsertUpdateTasks",
            data: JSON.stringify({ username: $("#txtUserName").val(), tasktitle: $("#txtTaskTitle").val(), description: $("#txtDescription").val(), date: $("#txtDate").val(), status: $("#ddlStatus").val() }),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                if (response.d == "success") {
                    swal("", "Data Submitted Successfully!!", "success");
                }
                else if (response.d == "failed") {
                    swal("", "Something went wrong!!", "danger");
                }
                $("#txtUserName").val("");
                $("#txtTaskTitle").val("");
                $("#txtDescription").val("");
                $("#txtDate").val("");
                $("#addTaskModal").modal("hide");
            }
        });
    });


});