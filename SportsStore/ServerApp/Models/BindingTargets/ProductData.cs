
using System.ComponentModel.DataAnnotations;
namespace ServerApp.Models.BindingTargets
{
    public class ProductData
    {

        public string Name
        {
            get => Product.Name; set => Product.Name = value;
        }

        public string Desc { get => Product.Desc; set => Product.Desc = value; }
        public string ImgLinks { get => Product.ImgLinks; set => Product.ImgLinks = value; }
        public decimal Price { get => Product.Price; set => Product.Price = value; }
        public bool Availability { get => Product.Availability; set => Product.Availability = value; }
        public int Count { get => Product.Count; set => Product.Count = value; }

        public long? Supplier
        {
            get => Product.Supplier?.Id ?? null;
            set
            {
                if (!value.HasValue)
                {
                    Product.Supplier = null;
                }
                else
                {
                    if (Product.Supplier == null)
                    {
                        Product.Supplier = new Supplier();
                    }
                    Product.Supplier.Id = value.Value;
                }
            }
        }

        public long? Category
        {
            get => Product.Category?.Id ?? null;
            set
            {
                if (!value.HasValue)
                {
                    Product.Category = null;
                }
                else
                {
                    if (Product.Category == null)
                    {
                        Product.Category = new Category();
                    }
                    Product.Category.Id = value.Value;
                }
            }
        }


        public Product Product { get; set; } = new Product();
    }
}


// public long Id { get; set; }
// public string Name { get; set; }
// public string Desc { get; set; }
// public string ImgLinks { get; set; }

//  [Column(TypeName = "decimal(8, 2)")]
// public decimal Price { get; set; }

// public bool Availability { get; set; } = false;

// public int Count { get; set; }

// public Supplier Supplier { get; set; }
// public Category Category { get; set; }