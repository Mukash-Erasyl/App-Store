using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
namespace ServerApp.Models {
    public class Product {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Desc { get; set; }
        public string ImgLinks { get; set; }

        public decimal Price { get; set; }

        public bool Availability { get; set; } = false;

        public int Count { get; set; }

        public Supplier? Supplier { get; set; }
        public Category? Category { get; set; }

    }
}