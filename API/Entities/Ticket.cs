namespace API.Entities
{
    public class Ticket
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Assigned { get; set; }
        public string Submitter { get; set; }
        public string Priority { get; set; }
        public string Status { get; set; }
        public string Type { get; set; }
        public DateTime Created { get; set; }
        public DateTime Updated { get; set; }
        public Project Project { get; set; }

    }
}