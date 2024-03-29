﻿<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="ASPControlsWithValidation.aspx.cs" Inherits="WebDevRequirementsExamples.ASPControlsWithValidation" EnableEventValidation="false" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="container-fluid">
        <div class="card">
            <div class="card-header text-center">
                <h4 class="mb-0">ASP.Net Controls with Client Side Validation using JavaScript</h4>
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
                                    <label class="font-weight-bold">DropDown List</label>
                                    <asp:DropDownList runat="server" ID="ddList" CssClass="form-control">
                                        <asp:ListItem Value="0">--Select--</asp:ListItem>
                                        <asp:ListItem Value="1">DropDownList Item One</asp:ListItem>
                                        <asp:ListItem Value="2">DropDownList Item Two</asp:ListItem>
                                    </asp:DropDownList>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="font-weight-bold">RadioButton List</label>
                                    <asp:RadioButtonList runat="server" ID="rBtnList" CssClass="">
                                        <asp:ListItem Value="1">RadioButtonList Item One</asp:ListItem>
                                        <asp:ListItem Value="2">RadioButtonList Item Two</asp:ListItem>
                                    </asp:RadioButtonList>
                                </div>
                            </div>
                            <div class="col-12">
                                <asp:Button Text="Validate" runat="server" ID="btnValidate" CssClass="btn btn-primary" />
                                <input type="button" id="btnReset" class="btn btn-secondary" value="Reset"/>
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

        var txtBox = document.getElementById("<%=txtBox.ClientID%>");
        var ddList = document.getElementById("<%=ddList.ClientID%>");
        var rb = document.getElementById("<%=rBtnList.ClientID%>");
        var radioBtnList = rb.getElementsByTagName("input");
        var radioBtnListLabel = rb.getElementsByTagName("label");
        var checkedValue = '';
        var checkedText = '';

        function Validate() {
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

                for (var i = 0; i < radioBtnList.length; i++) {
                    if (radioBtnList[i].checked) {
                        checkedText = radioBtnListLabel[i].innerText;
                        break;
                    }
                }

                return true;
            }
            else {
                return false;
            }

        }

        function getCheckedRadioButton() {
            var isChecked = false;
            for (var i = 0; i < radioBtnList.length; i++) {
                if (radioBtnList[i].checked) {
                    isChecked = true;
                    break;
                }
            }
            if (!isChecked) {
                alert("Please select a RadioButton Item!!");
            }

            return isChecked;
        }

        var btnValidate = document.getElementById("<%=btnValidate.ClientID%>");
        btnValidate.addEventListener("click", function (event) {
            event.preventDefault();
            if (Validate()) {
                swal({
                    title: 'Do you want to save the changes?',
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Save',
                    denyButtonText: `Don't save`,
                    buttons: true,
                }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        swal('Saved!', '', 'success')
                    } else if (result.isDenied) {
                        swal('Changes are not saved', '', 'info')
                    }
                })
                //swal("Input Details", "TextBox value is : " + txtBox.value + " | DropDownList item is : " + ddList.options[ddList.selectedIndex].innerHTML + " | RadioButtonList item is : " + checkedText, "success");
            }
        });

        //Reset Button
        var btnReset = document.getElementById("btnReset");
        btnReset.addEventListener('click', function () {
            txtBox.value = '';
            ddList.value = '0';
            for (var i = 0; i < radioBtnList.length; i++) {
                if (radioBtnList[i].checked) {
                    radioBtnList[i].checked = false;
                    break;
                }
            }
        });

    </script>
</asp:Content>
