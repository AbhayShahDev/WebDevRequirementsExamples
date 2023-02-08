using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebDevRequirementsExamples
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var list = DAL.DataAccessLayer.FetchList();

            if(list.Count > 0)
            {
                string chartData = "";
                string view = "";
                string labels = "";

                chartData += "<script>";
                foreach(var item in list)
                {
                    view += item.TotalCustomers + ",";
                    labels += "\"" + item.City + "\",";
                }

                view = view.Substring(0, view.Length - 1);
                labels = labels.Substring(0, labels.Length - 1);

                chartData += " chartLabels = [" + labels + "]; chartData = [" + view + "]; ";
                chartData += "</script>";

                ltChartData.Text = chartData;
            }
        }
    }
}