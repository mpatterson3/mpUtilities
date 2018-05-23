using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using donet2.Models;



namespace donet2.Controllers
{
    public class TicketController : Controller
    {
 
        public JsonResult Index()
        {
            var error = new ErrorViewModel{
                RequestId = "hello",
            };  
            var ticket = new TicketViewModel();
            ticket.Organization = "MASC";
           

            return Json(ticket);
            
        }


       
    }
}
