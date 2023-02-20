using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebDevRequirementsExamples.DAL;

namespace WebDevRequirementsExamples
{
    public partial class GridView : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataAccessLayer dataAccessLayer = new DataAccessLayer();
            gdv.DataSource = dataAccessLayer.GetGridViewData();
        }
    }
}