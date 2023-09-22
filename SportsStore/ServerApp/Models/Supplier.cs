using System.Collections.Generic;
namespace ServerApp.Models {
    public class Supplier {
        public long Id { get; set; }
        public string? Name { get; set; }
        public string? Desc { get; set; }
        public string? LogoLink { get; set; }
        public string? city { get; set; }
        public IEnumerable<Product>? Products { get; set; }
    }
}
