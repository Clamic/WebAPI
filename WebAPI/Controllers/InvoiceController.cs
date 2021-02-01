using System;
using System.Net.Http;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Net;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class InvoiceController : ApiController
    {
        // GET: Invoice
        public HttpResponseMessage Get()
        {
            DataTable table = new DataTable();
            using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["Ebix"].ConnectionString))
            using (var cmd = new SqlCommand("selectAllInvoices", conn))
            using (var data = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                conn.Open();
                cmd.ExecuteNonQuery();
                data.Fill(table);
            }

            return Request.CreateResponse (HttpStatusCode.OK, table);
        }

        // GET: InvoiceView
        public HttpResponseMessage GetView()
        {
            DataTable table = new DataTable();
            using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["Ebix"].ConnectionString))
            using (var cmd = new SqlCommand("selectInvoiceView", conn))
            using (var data = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                conn.Open();
                cmd.ExecuteNonQuery();
                data.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public string Put(Invoice invoice)
        {
            try
            {
                using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["Ebix"].ConnectionString))
                using (var cmd = new SqlCommand("insertInvoice", conn))
                using (var data = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@ClientId", SqlDbType.Int).Value = invoice.ClientId;
                    cmd.Parameters.Add("@InvoiceNo", SqlDbType.VarChar).Value = invoice.InvoiceNo;
                    cmd.Parameters.Add("@InvoiceAmount", SqlDbType.Int).Value = invoice.InvoiceAmount;
                    conn.Open();
                    cmd.ExecuteNonQuery();
                }
                return "Invoice Add Request Successful";
            }
            catch (Exception ex)
            {
                return "Invoice Add Request Failed. Error: " + ex.ToString();
            }
        }
    }
}