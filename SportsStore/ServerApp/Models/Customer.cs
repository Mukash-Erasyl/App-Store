using System.Collections.Generic;
namespace ServerApp.Models {
    public class Customer {
        public long Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public bool Status { get; set; }


        public List<ContactsModel> Contacts { get; set; }
        public IEnumerable<Product> Products { get; set; }
    }
}
