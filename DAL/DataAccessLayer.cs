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
        public static SqlConnection GetConnection()
        {
            var conn = new SqlConnection(conStr);
            conn.Open();
            return conn;
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

        public DataTable GetGridViewData()
        {
            DataTable dt = new DataTable();
            using (var con = GetConnection())
            {
                SqlDataAdapter sda = new SqlDataAdapter("Proc_GetGridViewData", con);
                sda.Fill(dt);
            }
            return dt;
        }
    }
}