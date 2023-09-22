using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServerApp.Models;
using ServerApp.Models.BindingTargets;
using System.Collections.Generic;

namespace ServerApp.Controllers {
    [Route("api/categories")]
    public class CategoriesValuesController : Controller {
        private DataContext context;
        public CategoriesValuesController(DataContext ctx) {
            context = ctx;
}
        [HttpGet]
        public IEnumerable<Category> GetCategories(bool related = false) {
            IQueryable<Category> query = context.Categorys;
            if (related) {
                query = query.Include(p => p.Products);
                List<Category> data = query.ToList();
                data.ForEach(p => {
                    if (p.Products != null) {
                        p.Products = null;
                    }
                  
});
                return data;
            } else {
                return query;
            }
}
        [HttpPost]
        public IActionResult CreateCategories([FromBody]CategoryData sdata) {
            if (ModelState.IsValid) {
                Category s = sdata.Category;
                context.Add(s);
                context.SaveChanges();
                return Ok(s.Id);
            } else {
                return BadRequest(ModelState);
} }
} }