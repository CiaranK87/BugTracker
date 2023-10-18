using API.Entities;

namespace API.Data.Migrations
{
    public static class DbInitializer
    {
        public static void Initialize(DataContext context)
        {
            if(context.Projects.Any()) return;

            var projects = new List<Project>
            {
                		new Project
                {
                    Title = "Project Winslow",
		            ProjectOwner = "John",
                },
                		new Project
                {
                    Title = "Project Turntable",
		            ProjectOwner = "Mike",

                },
                		new Project
                {
                    Title = "Project PeanutButter",
		            ProjectOwner = "Sarah",

                },
                		new Project
                {
                    Title = "Project Kefir",
		            ProjectOwner = "Jane",

                },
            };

            foreach (var project in projects)
            {
                context.Projects.Add(project);
            }

            context.SaveChanges();
        }
    }
}