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
                    Description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                    StartDate = DateTime.Now,
		            Updated = DateTime.Now,
                },
                		new Project
                {
                    Title = "Project Turntable",
		            ProjectOwner = "Mike",
                    Description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                    StartDate = DateTime.Now,
		            Updated = DateTime.Now,
                },
                		new Project
                {
                    Title = "Project PeanutButter",
		            ProjectOwner = "Sarah",
                    Description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                    StartDate = DateTime.Now,
		            Updated = DateTime.Now,
                },
                		new Project
                {
                    Title = "Project Kefir",
		            ProjectOwner = "Jane",
                    Description = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                    StartDate = DateTime.Now,
		            Updated = DateTime.Now,
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