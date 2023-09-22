using System.ComponentModel.DataAnnotations;
namespace ServerApp.Models.BindingTargets {
    public class SupplierData {
        
        public string Name { get; set; }
        
        public string Desc { get; set; }
        
        
        public string LogoLink { get; set; }
        
        public Supplier Supplier => new Supplier {
            Name = Name, Desc = Desc , LogoLink = LogoLink 
}; }
}

        // public string Name { get; set; }
        // public string Desc { get; set; }
        // public string LogoLink { get; set; }
        // public string city { get; set; }
        // public IEnumerable<Product> Products { get; set; }