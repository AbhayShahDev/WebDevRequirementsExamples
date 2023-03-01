using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using WebDevRequirementsExamples.DAL;

namespace WebDevRequirementsExamples
{
    public partial class TaskManager : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static string InsertUpdateTasks(string username, string tasktitle, string description, string date, string status)
        {
            string msg = "";
            try
            {
                DataAccessLayer dal = new DataAccessLayer();
                msg = dal.InsertUpdateTasks(username, tasktitle, description, date, status);
                return msg.ToLower();
            }
            catch (Exception ex)
            {
                return "failed".ToLower();
                throw;
            }
        }
    }
}