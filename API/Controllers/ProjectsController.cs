using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class ProjectsController : BaseApiController
    {
        private readonly DataContext _context;
        public ProjectsController(DataContext context)
        {
            _context = context;
            
        }

        [HttpGet]
        public async Task<ActionResult<List<Project>>> GetProjects()
        {
            var projects = await _context.Projects.ToListAsync();

            return Ok(projects);
        }

        [HttpGet("{id}", Name ="GetProject")]
        public async Task<ActionResult<Project>> GetProject(int id)
        {
           var project = await _context.Projects.FindAsync(id);

           if(project == null) return NotFound();

           return project;
        }


    }
}