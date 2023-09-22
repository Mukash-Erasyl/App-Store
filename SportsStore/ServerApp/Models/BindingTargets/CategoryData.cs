
using System.ComponentModel.DataAnnotations;
namespace ServerApp.Models.BindingTargets {
    public class CategoryData {
        
        public string Name { get; set; }
        
        public string Desc { get; set; }
        
        
        public string Logo { get; set; }
        public Category Category => new Category {
            Name = Name, Desc = Desc , Logo = Logo 
}; }
}


        // public string Name { get; set; }
        // public string Desc { get; set; }
        // public string Logo { get; set; }