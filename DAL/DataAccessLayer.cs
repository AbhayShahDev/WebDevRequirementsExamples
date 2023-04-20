using Dapper;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using WebDevRequirementsExamples.Domain;

namespace WebDevRequirementsExamples.DAL
{
    public class DataAccessLayer
    {
        static string conStr = ConfigurationManager.AppSettings.Get("ConString").ToString();
        static string conStrTwo = ConfigurationManager.AppSettings.Get("ASPExampleProject").ToString();
        public static SqlConnection GetConnection()
        {
            var conn = new SqlConnection(conStr);
            conn.Open();
            return conn;
        }


        public static string filter_bad_chars_rep(string s)
        {
            if (s == null)
            {
                return "";
            }
            string[] sL_Char = {
            "onfocus",  "\"\"", "=","onmouseover","prompt","%27","alert#","alert","'or","`or","`or`",   "'or'", "'='",  "`=`",  "'","`","9,9,9","src","onload", "select","drop",
            "insert","delete","xp_","having","union","group","update","script", "<script","</script>",
            "language",         "javascript",           "vbscript",         "http",         "~",            "$",            "<",            ">",            "%",            "\\",
            ";",            "@",            "_",            "{",            "}",            "^",            "?",            "[",            "]",            "!",            "#",            "&",
            "*"
        };
            int er = 0;
            int sL_Char_Length = sL_Char.Length - 1;
            while (sL_Char_Length >= 0)
            {
                if (s.Contains(sL_Char[sL_Char_Length]))
                {
                    s.Replace(sL_Char[sL_Char_Length], "");
                    break; // TODO: might not be correct. Was : Exit While
                }
                sL_Char_Length -= 1;
            }
            return s.Trim();
        }


        public static List<customers> FetchList()
        {
            string sql = "SELECT TOP(5) [city] as City, COUNT(customer_id) as TotalCustomers FROM [BikeStores].[sales].[customers] GROUP BY [state], city";
            using(var con = GetConnection())
            {
                //using dapper
                return con.Query<customers>(sql).ToList();
            }
        }


        public DataSet GetGridViewData()
        {
            DataSet ds = new DataSet();

            try
            {
                //using (var con = GetConnection())
                //{
                //    SqlDataAdapter sda = new SqlDataAdapter("Proc_GetGridViewData", con);
                //    sda.Fill(ds);
                //    GetConnection().Close();
                //}


                //Another way
                SqlCommand cmd = new SqlCommand("Proc_GetGridViewData", GetConnection());
                cmd.CommandType = CommandType.StoredProcedure;
                SqlDataAdapter sda = new SqlDataAdapter(cmd);
                sda.Fill(ds);
                cmd.Dispose();
                GetConnection().Close();
            }
            catch (Exception ex)
            {
                return ds = null;
            }
            finally
            {
                if (GetConnection().State == ConnectionState.Open)
                {
                    GetConnection().Close();
                }
            }

            return ds;
        }


        public string InsertUpdateTasks(string username, string tasktitle, string description, string date, string status)
        {
            string msg = "";

            SqlConnection con = new SqlConnection(conStrTwo);
            try
            {
                SqlCommand cmd = new SqlCommand("Task_InsertUpdateProc", con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("UserName", username);
                cmd.Parameters.AddWithValue("TaskTitle", tasktitle);
                cmd.Parameters.AddWithValue("TaskDescription", description);
                cmd.Parameters.AddWithValue("TaskCompletionDate", date);
                cmd.Parameters.AddWithValue("TaskStatus", status);
                cmd.Parameters.AddWithValue("EntryBy", "Admin");
                SqlParameter Sp2 = new SqlParameter("Msg", SqlDbType.VarChar, 1000);
                Sp2.Direction = ParameterDirection.Output;
                cmd.Parameters.Add(Sp2);
                con.Open();
                cmd.ExecuteNonQuery();
                msg = cmd.Parameters["Msg"].Value.ToString();
                con.Close();
            }
            catch (Exception ex)
            {
                return msg;
            }
            finally
            {
                if (con.State == ConnectionState.Open)
                {
                    con.Close();
                }
            }

            return msg;
        }

    }
}