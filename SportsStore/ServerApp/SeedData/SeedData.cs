using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using ServerApp.Models;
namespace ServerApp {
    public class SeedData {
        public static void SeedDatabase(DataContext context) {
            context.Database.Migrate();
            if (context.Products.Count() == 0) {

                var s1 = new Supplier{Name = "Shantal lingerie" , Desc="Мы предлагаем широкий ассортимент моделей нижнего белья для женщин. " , 
                LogoLink="https://s.optlist.ru/i/26/85/1750cdc778df5a8e-2685-1-w300.jpg" ,city = "Алматы"};
                var s2 = new Supplier{Name = "iD Shop" , Desc="iD Shop — мелко-оптовый и розничный продавец телевизоров Xiaomi." , 
                LogoLink="https://s.optlist.ru/i/70/60/1749dcc97e02764c-7060-1-w300.jpg" ,city = "Алматы"};
                var s3 = new Supplier{Name = "Ayris" , Desc="Наша компания занимается оптовыми продажами одежды и обуви, аксессуары и сумки категории stock и second hand из Европы. " , 
                LogoLink="https://s.optlist.ru/i/70/93/1740eb41a13986cf-7093-1-w300.jpg" ,city = "Алматы"};

                var c1 = new Category{Name="Одежда" , Desc="Оде́жда — изделие или совокупность изделий, надеваемых человеком и несущих утилитарные и эстетические функции. " ,
                Logo = "https://img.freepik.com/premium-vector/clothes-and-accessories-fashion-women-and-men-seasonal-outfits-clothes-footwear-and-bags-accessories-modern-casual-dress-vector-set-fashion-female-shirt-and-jacket-suit-and-skirt-illustration_102902-3415.jpg?w=1800"};

                var c2 = new Category{Name="Техника для дома" , Desc="Электрические механические приборы, которые выполняют некоторые бытовые функции, такие как приготовление пищи или чистка." ,
                Logo="https://www.shutterstock.com/image-vector/set-household-appliances-microwave-oven-600w-2161754315.jpg"};

                context.Products.AddRange(
                    new Product{
                        Name="Чулки" ,
                        Desc="Чулки́ — вид одежды для нижней части ног. Обычно сделаны из текстиля.",
                        ImgLinks="https://st3.depositphotos.com/1177973/14572/i/450/depositphotos_145729713-stock-photo-beautiful-woman-legs.jpg" ,
                        Price=10000,
                        Availability=true ,
                        Count=1200,
                        Supplier=s1,
                        Category=c1
                    } ,
                    new Product{
                        Name="Xiaomi MiJia Laser Projection 150" ,
                        Desc="Лазерный проектор MiJia Laser Projection 150” – это высокотехнологичное устройство от компании Xiaomi.",
                        ImgLinks="https://xiaomi.kz/upload/medialibrary/bdf/bdfa1281bee52c2c1177f4db78f267b3.jpg" ,
                        Price=1209199,
                        Availability=true ,
                        Count=10000,
                        Supplier=s2,
                        Category=c2
                    } ,
                    new Product{
                        Name="Xiaomi Mi TV 4S 55" ,
                        Desc="В нашем обзоре мы поговорим о модели с диагональю 55 дюймов – наиболее востребованной версии у покупателей.",
                        ImgLinks="https://xiaomi.kz/upload/medialibrary/e48/e488caef29d2ac9162c718ccc5347639.jpg" ,
                        Price=809199,
                        Availability=false ,
                        Count=0,
                        Supplier=s2,
                        Category=c2
                    } ,
                    new Product{
                        Name="Куртка DeFacto" ,
                        Desc="Демисезон",
                        ImgLinks="https://cdn1.ozone.ru/s3/multimedia-9/wc1000/6375952581.jpg" ,
                        Price=7312,
                        Availability=true ,
                        Count=276,
                        Supplier=s1,
                        Category=c1
                    } 

                );



            
    context.SaveChanges();
}
} }
}