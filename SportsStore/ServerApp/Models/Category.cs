using System.Collections.Generic;
namespace ServerApp.Models {
    public class Category {
        public long Id { get; set; }
        public string? Name { get; set; }
        public string? Desc { get; set; }
        public string? Logo { get; set; }
        public IEnumerable<Product>? Products { get; set; }
    }
}
