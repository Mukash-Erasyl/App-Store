using Microsoft.EntityFrameworkCore;
namespace ServerApp.Models {
    public class DataContext : DbContext {
        public DataContext(DbContextOptions<DataContext> opts)
            : base(opts) { }
        public DbSet<Product> Products { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<Category> Categorys { get; set; }
        public DbSet<Order> Orders { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            
                modelBuilder.Entity<Product>().HasOne<Supplier>(p => p.Supplier)
    .WithMany(s => s.Products).OnDelete(DeleteBehavior.SetNull);
                modelBuilder.Entity<Product>().HasOne<Category>(p => p.Category)
    .WithMany(s => s.Products).OnDelete(DeleteBehavior.SetNull);
        }
} }