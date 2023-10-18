namespace API.Entities
{
    public class Project
    {
        public int Id { get; set; }        

        public string Title { get; set; }

        public string ProjectOwner { get; set; }

        public ICollection<Ticket> Tickets { get; set; }
    }
}