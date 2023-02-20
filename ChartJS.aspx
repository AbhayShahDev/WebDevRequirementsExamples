<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="ChartJS.aspx.cs" Inherits="WebDevRequirementsExamples.ChartJS" %>
<%@ Register Src="~/UserControls/ChartJSUserControl.ascx" TagName="ChartJsControl" TagPrefix="ChartJSTag" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container-fluid">
        <div class="card mb-3">
            <div class="card-header text-center">
                <h4 class="mb-0">Presentation of Data from Database using Chart JS</h4>
            </div>
            <div class="card-body">
                <ChartJSTag:ChartJsControl runat="server" ID="ChartJSControl" />
            </div>
        </div>
    </div>
</asp:Content>
