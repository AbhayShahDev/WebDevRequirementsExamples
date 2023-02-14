<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="ASPControlsWithValidation.aspx.cs" Inherits="WebDevRequirementsExamples.ASPControlsWithValidation" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container-fluid">
        <div class="card">
            <div class="card-header">
                <h4 class="mb-0">ASP.Net Controls with Client Side Validation</h4>
            </div>
            <div class="card-body">
                <asp:UpdatePanel runat="server">
                    <ContentTemplate>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="font-weight-bold">TextBox</label>
                                    <asp:TextBox runat="server" ID="txtBox" CssClass="form-control"/>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="font-weight-bold">DropDown</label>
                                    <asp:DropDownList runat="server" ID="ddList" CssClass="form-control">
                                        <asp:ListItem Value="0">--Select--</asp:ListItem>
                                        <asp:ListItem Value="1">DropDownList Item One</asp:ListItem>
                                        <asp:ListItem Value="2">DropDownList Item Two</asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="font-weight-bold">Radio Button List</label>
                                    <asp:RadioButtonList runat="server" ID="rBtnList" CssClass="">
                                        <asp:ListItem Value="1">RadioButtonList Item One</asp:ListItem>
                                        <asp:ListItem Value="2">RadioButtonList Item Two</asp:ListItem>
                                    </asp:RadioButtonList>
                                </div>
                            </div>
                            <div class="col-12">
                                <asp:Button Text="Validate" runat="server" ID="btnValidate" CssClass="btn btn-primary" OnClientClick="return Validate();" />
                            </div>
                        </div>
                    </ContentTemplate>
                    <Triggers>
                        <asp:PostBackTrigger ControlID="btnValidate" />
                    </Triggers>
                </asp:UpdatePanel>
            </div>
        </div>
    </div>

    <script>
        function Validate() {
            var txtBox = document.getElementById("<%=txtBox.ClientID%>");
            var ddList = document.getElementById("<%=ddList.ClientID%>");

            if (txtBox.value == "") {
                alert("Please enter something in the TextBox!!");
                txtBox.focus();
                return false;
            }
            if (ddList.value == "0") {
                alert("Please select a DropDownList Item!!");
                ddList.focus();
                return false;
            }

            var rdbtn = getCheckedRadioButton();

            if (rdbtn) {
                var checkedValue = '';
                var checkedText = '';
                var rb = document.getElementById("<%=rBtnList.ClientID%>");
                var radioBtnList = rb.getElementsByTagName("input");

                radioBtnList.forEach(function (radio) {
                    if (radio.checked) {
                        checkedValue = radio.value;
                        checkedText = radio.textContent || radio.innerHTML;
                    }
                });
                for (var i = 0; i < radio.length; i++) {
                    if (radioBtnList[i].checked) {
                        checkedText = radioBtnList.value;
                        break;
                    }
                }

                alert("TextBox value is : " + txtBox.value + " | DropDownList item is : " + ddList.options[ddList.selectedIndex].innerHTML + " | RadioButtonList item is : " + checkedText);
            }

            return true;
        }

        function getCheckedRadioButton() {
            var rb = document.getElementById("<%=rBtnList.ClientID%>");
            var radio = rb.getElementsByTagName("input");
            var isChecked = false;
            for (var i = 0; i < radio.length; i++) {
                if (radio[i].checked) {
                    isChecked = true;
                    break;
                }
            }
            if (!isChecked) {
                alert("Please select a RadioButton Item!!");
            }

            return isChecked;
        }


    </script>
</asp:Content>
