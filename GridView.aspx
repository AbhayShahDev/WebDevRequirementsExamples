<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="GridView.aspx.cs" Inherits="WebDevRequirementsExamples.GridView" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container-fluid">
        <div class="card mb-3">
            <div class="card-header text-center">
                <h4 class="mb-0">Binding data from Database using GridView Control</h4>
            </div>
            <div class="card-body">
                <asp:GridView ID="gdv" runat="server" CssClass="table table-bordered display gdv" AutoGenerateColumns="false">
                    <Columns>
                        <asp:BoundField DataField="SNo" HeaderText="SNo." />
                        <asp:BoundField DataField="FirstName" HeaderText="First Name" />
                        <asp:BoundField DataField="LastName" HeaderText="Last Name" />
                        <asp:BoundField DataField="Phone" HeaderText="Phone" />
                    </Columns>
                </asp:GridView>
            </div>
        </div>
    </div>
</asp:Content>
