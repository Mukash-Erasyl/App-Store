using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
namespace ServerApp.Models {
    public class Order {
        public long Id { get; set; }
        public int CountProduct {get;set;}
        public double priceEach {get;set;}
        public double totalPrice {get;set;}
        public string Comment { get; set; }

        public Customer Customer { get; set; }

        public IEnumerable<Product> Products { get; set; }
    }

}