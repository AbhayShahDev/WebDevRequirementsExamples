$(document).ready(function () {
    $("#SaveTasks").on('click', function () {
        debugger;
        if ($("#txtUserName").val() == "") {
            alert("Please enter Username!!");
            $("#txtUserName").focus();
            return;
        }
        if ($("#txtTaskTitle").val() == "") {
            alert("Please enter Task Title!!");
            $("#txtTaskTitle").focus();
            return;
        }
        if ($("#txtDescription").val() == "") {
            alert("Please enter Description!!");
            $("#txtDescription").focus();
            return;
        }
        if ($("#txtDate").val() == "") {
            alert("Please select date!!");
            $("#txtDate").focus();
            return;
        }
        if ($("#ddlStatus").val() == "") {
            alert("Please select Status!!");
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