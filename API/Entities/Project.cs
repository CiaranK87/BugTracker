namespace API.Entities
{
    public class Project
    {
        public int Id { get; set; }        

        public string Title { get; set; }

        public string ProjectOwner { get; set; }

        public string Description { get; set; }

        public DateTime StartDate { get; set; }
        
        public DateTime Updated { get; set; }
    }
}