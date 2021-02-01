using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class ClientController : ApiController
    {
        public HttpResponseMessage Get()
        {
            DataTable table = new DataTable();
            using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["Ebix"].ConnectionString))
            using (var cmd = new SqlCommand("selectAllClients", conn))
            using (var data = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.StoredProcedure;
                conn.Open();
                cmd.ExecuteNonQuery();
                data.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }
        public string Put(Client client)
        {
            try
            {
                using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["Ebix"].ConnectionString))
                using (var cmd = new SqlCommand("insertClient", conn))
                using (var data = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@FirstName", SqlDbType.VarChar).Value = client.FirstName;
                    cmd.Parameters.Add("@Surname", SqlDbType.VarChar).Value = client.Surname;
                    cmd.Parameters.Add("@DateOfBirth", SqlDbType.Date).Value = DateTime.Parse(client.DateOfBirth);
                    cmd.Parameters.Add("@Address", SqlDbType.VarChar).Value = client.Address;
                    cmd.Parameters.Add("@Suburb", SqlDbType.VarChar).Value = client.Suburb;
                    cmd.Parameters.Add("@State", SqlDbType.VarChar).Value = client.State;
                    cmd.Parameters.Add("@PostCode", SqlDbType.VarChar).Value = client.PostCode;
                    cmd.Parameters.Add("@Telephone", SqlDbType.VarChar).Value = client.Telephone;
                    conn.Open();
                    cmd.ExecuteNonQuery();
                }

                return "Client Add Request Successful";
            }
            catch (Exception ex)
            {
                return "Client Add Request Failed. Error: " + ex.ToString();
            }
        }

        public string Post(Client client)
        {
            try
            {
                using (var conn = new SqlConnection(ConfigurationManager.ConnectionStrings["Ebix"].ConnectionString))
                using (var cmd = new SqlCommand("updateClient", conn))
                using (var data = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add("@ClientId", SqlDbType.Int).Value = client.ClientId;
                    cmd.Parameters.Add("@FirstName", SqlDbType.VarChar).Value = client.FirstName;
                    cmd.Parameters.Add("@Surname", SqlDbType.VarChar).Value = client.Surname;
                    cmd.Parameters.Add("@DateOfBirth", SqlDbType.Date).Value = DateTime.Parse(client.DateOfBirth);
                    cmd.Parameters.Add("@Address", SqlDbType.VarChar).Value = client.Address;
                    cmd.Parameters.Add("@Suburb", SqlDbType.VarChar).Value = client.Suburb;
                    cmd.Parameters.Add("@State", SqlDbType.VarChar).Value = client.State;
                    cmd.Parameters.Add("@PostCode", SqlDbType.VarChar).Value = client.PostCode;
                    cmd.Parameters.Add("@Telephone", SqlDbType.VarChar).Value = client.Telephone;
                    conn.Open();
                    cmd.ExecuteNonQuery();
                }

                return "Client UPDATE Request Successful";
            }
            catch (Exception ex)
            {
                return "Client UPDATE Request Failed. Error: " + ex.ToString();
            }
        }
    }
}
