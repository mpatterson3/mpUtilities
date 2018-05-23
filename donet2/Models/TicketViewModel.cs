using System;

namespace donet2.Models
{
    public class TicketViewModel
    {
        public int id { get; set; }
        public string Product { get; set; } 
        public string RequestType { get; set; }
        public string Subject { get; set; }
        public string Requester { get; set; }
        public string Requested { get; set; }
        public string Updated { get; set; }
        public string UpdatedByAssignee { get; set; }
        public string Organization { get; set; }
        public string Assignee { get; set; }
        public string AssignedDeveloper { get; set; }
        public string DartTeam { get; set; }

    }
}