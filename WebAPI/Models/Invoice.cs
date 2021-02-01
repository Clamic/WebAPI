using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Invoice
    {
        public int InvoiceId { get; set; }
        public int ClientId { get; set; }
        public string InvoiceDate { get; set; }
        public string InvoiceNo { get; set; }
        public int InvoiceAmount { get; set; }
    }
}