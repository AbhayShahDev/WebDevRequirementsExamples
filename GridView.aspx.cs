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
            if (!IsPostBack)
            {
                try
                {
                    DataAccessLayer dataAccessLayer = new DataAccessLayer();
                    gdv.DataSource = dataAccessLayer.GetGridViewData();
                    gdv.DataBind();
                    //Required for jQuery DataTables to work.
                    gdv.UseAccessibleHeader = true;
                    gdv.HeaderRow.TableSection = TableRowSection.TableHeader;
                }
                catch (Exception ex)
                {

                }
            }
        }
    }
}