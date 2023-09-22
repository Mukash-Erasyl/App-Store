using Microsoft.AspNetCore.Mvc;
using ServerApp.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Collections.Generic;
using ServerApp.Models.BindingTargets;
using Microsoft.AspNetCore.JsonPatch;
using System.Text.Json;
using System.Reflection;
using System.ComponentModel;
using Microsoft.AspNetCore.Authorization;


namespace ServerApp.Controllers
{
    [Route("api/products")]
    [ApiController]
    [Authorize(Roles = "Administrator")]
    public class ProductValuesController : Controller
    {
        private DataContext context;
        public ProductValuesController(DataContext ctx)
        {
            context = ctx;
        }
        [HttpGet("{id}")]
        [AllowAnonymous]
        public Product GetProduct(long id)
        {
            Product result = context.Products
                  .Include(p => p.Supplier).ThenInclude(s => s.Products)
                  .Include(p => p.Category).ThenInclude(s => s.Products)
                 .FirstOrDefault(p => p.Id == id);
            if (result != null)
            {
                result.Supplier.Products = result.Supplier.Products.Select(p =>
                       new Product
                       {
                           Id = p.Id,
                           Name = p.Name,
                           Desc = p.Desc,
                           ImgLinks = p.ImgLinks,
                           Price = p.Price,
                           Availability = p.Availability,
                           Count = p.Count,
                           Category = p.Category,
                       });
                if (result.Category != null)
                {

                    result.Category.Products = result.Category.Products.Select(p =>
                       new Product
                       {
                           Id = p.Id,
                           Name = p.Name,
                           Desc = p.Desc,
                           ImgLinks = p.ImgLinks,
                           Price = p.Price,
                           Availability = p.Availability,
                           Count = p.Count,
                       });
                }
            }
            return result;
        }

        [HttpGet]
        [AllowAnonymous]
        public IEnumerable<Product> GetProducts(string category="", string search="",
        bool related = false)
        {
            IQueryable<Product> query = context.Products;
            if (!string.IsNullOrWhiteSpace(category))
            {
                string catLower = category;
                query = query.Where(p => p.Category.Name.Contains(catLower));
            }
            if (!string.IsNullOrWhiteSpace(search))
            {
                string searchLower = search;
                query = query.Where(p => p.Name.Contains(searchLower)
                    || p.Desc.Contains(searchLower));
            }
            if (related && HttpContext.User.IsInRole("Administrator"))
            {
                query = query.Include(p => p.Supplier).Include(p => p.Category);
                List<Product> data = query.ToList();
                data.ForEach(p =>
                {
                    if (p.Supplier != null)
                    {
                        p.Supplier.Products = null;
                    }
                    if (p.Category != null)
                    {
                        p.Category.Products = null;
                    }

                });
                return data;
            }
            else
            {
                return query;
            }
        }

        [HttpPost]
        
        [Authorize]
        public IActionResult CreateProduct([FromBody] ProductData pdata)
        {
            if (ModelState.IsValid)
            {
                Product p = pdata.Product;
                if (p.Supplier != null && p.Supplier.Id != 0)
                {
                    context.Attach(p.Supplier);
                }
                if (p.Category != null && p.Category.Id != 0)
                {
                    context.Attach(p.Category);
                }
                context.Add(p);
                context.SaveChanges();
                return Ok(p.Id);
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        [HttpPatch("{id}")]
        public IActionResult UpdateProduct(long id,
               [FromBody] JsonPatchDocument<ProductData> patch)
        {
            Product product = context.Products
                      .Include(p => p.Supplier)
                      .Include(p => p.Category)
                      .First(p => p.Id == id);
            ProductData pdata = new ProductData { Product = product };
            patch.ApplyTo(pdata, ModelState);
            if (ModelState.IsValid && TryValidateModel(pdata))
            {
                if (product.Supplier != null && product.Supplier.Id != 0)
                {
                    context.Attach(product.Supplier);
                }
                if (product.Category != null && product.Category.Id != 0)
                {
                    context.Attach(product.Category);
                }
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest(ModelState);
            }
        }


        [HttpDelete("{id}")]

        [Authorize]
        public void DeleteProduct(long id)
        {
            context.Products.Remove(new Product { Id = id });
            context.SaveChanges();
        }
    }
}


//   public string Name { get; set; }
//     public string Desc { get; set; }
//     public List<ImgModel> ImgLinks { get; set; }

//      [Column(TypeName = "decimal(8, 2)")]
//     public decimal Price { get; set; }

//     public bool Availability { get; set; } = false;

//     public int Count { get; set; }


