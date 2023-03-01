<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="TaskManager.aspx.cs" Inherits="WebDevRequirementsExamples.TaskManager" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <%--<script src="assets/vendor/jquery/jquery.min.js"></script>--%>
    <%--<script src="assets/vendor/jquery/jquery.slim.min.js"></script>--%>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">
                <h4 class="mb-0">Manage Task</h4>
            </div>
            <div class="card-body">
                <div>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addTaskModal">
                        Add Task
                    </button>
                </div>
                <div class="table-responsive my-3">
                    <%--<table class="" id="MyTaskTable">
                        <thead>
                           <tr>
                                <th>S.No.</th><th>User Name</th><th>Task Title</th><th>Date</th><th>Status</th><th>Progress</th><th>View in Detail</th><th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>--%>

                    <table id="taskTable" class="table table-bordered">
                      <thead class="">
                      </thead>
                      <tbody>
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    

    <!-- Modal -->
    <div class="modal fade" id="addTaskModal" tabindex="-1" role="dialog" aria-labelledby="addTaskModalTitle" aria-hidden="true" data-backdrop="static" data-keyboard="false">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addTaskModalTitle">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
              <div class="form-group">
                  <label>User Name</label>
                  <input type="text" name="txtUserName" id="txtUserName" class="form-control" />
              </div>
              <div class="form-group">
                  <label>Task Title</label>
                  <input type="text" name="txtTaskTitle" id="txtTaskTitle" class="form-control" />
              </div>
              <div class="form-group">
                  <label>Description</label>
                  <input type="text" name="txtDescription" id="txtDescription" class="form-control" />
              </div>
              <div class="form-group">
                  <label>Date</label>
                  <input type="date" name="txtDate" id="txtDate" class="form-control" />
              </div>
              <div class="form-group">
                  <label>Status</label>
                  <select class="form-control" id="ddlStatus" name="ddlStatus">
                      <option value="pending">Pending</option>
                      <option value="inprogress">In-Progress</option>
                      <option value="completed">Completed</option>
                  </select>
              </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="SaveTasks">Save</button>
          </div>
        </div>
      </div>
    </div>

    
    <script>

        setTimeout(createTheadFunction, 1000);

        function createTheadFunction() {
            var table = document.getElementById("taskTable");
            var thead = table.getElementsByTagName("thead")[0];
            var row = thead.insertRow(0);
            row.insertAdjacentHTML("beforeend", "<th>S.No.</th><th>User Name</th><th>Task Title</th><th>Date</th><th>Status</th><th>Progress</th><th>View in Detail</th><th>Action</th>");
        }

    </script>

    <script type="text/javascript">

        setTimeout(DataTable, 1001);

        function DataTable() {
            jQuery("#taskTable").dataTable({
                "lengthMenu": [[10, 50, 100, 200, -1], [10, 50, 100, 200, "All"]],
                "stateSave": true,
                "language": {
                    "emptyTable": "No data available"
                }
            });
        }

    </script>
    

</asp:Content>
