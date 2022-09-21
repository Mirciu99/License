using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public static class DbInitializer
    {
        public static async Task Initialize(StoreContext context, UserManager<User> userManager)
        {

            if (!userManager.Users.Any())
            {
                var user = new User
                {
                    UserName = "Bogdan",
                    Email = "bogdan99@yahoo.com"
                };

                await userManager.CreateAsync(user, "Bogdan123#");
                await userManager.AddToRoleAsync(user, "Member");

                var admin = new User
                {
                    UserName = "Mirciu",
                    Email = "mirciu99@yahoo.com"
                };

                await userManager.CreateAsync(admin, "Mirciu123#");
                await userManager.AddToRolesAsync(admin, new[] { "Member", "Admin" });
            }

            if (context.Products.Any()) return;

            var products = new List<Product>
            {
               new Product
                {
                    Name = "The Whey",
                    Description = "Only the finest ingredients have been used to create this powder, which delivers 26g of protein per 32g serving via “beadlets” that gradually release muscle-building BCAAs.",
                    Price = 15000,
                    PictureUrl = "/images/products/Protein1.png",
                    Brand = "MyProtein",
                    Type = "Protein",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Impact Whey Protein",
                    Description = "Premium whey with 21 g of protein per serving, for the proteins you need from a quality source.",
                    Price = 15000,
                    PictureUrl = "/images/products/Protein2.png",
                    Brand = "MyProtein",
                    Type = "Protein",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Impact Whey Protein",
                    Description = "With no unwanted surplus, this all-natural blend is full of essential amino acids and 22g of protein per serving for anyone who trains on a plant-based diet.",
                    Price = 13000,
                    PictureUrl = "/images/products/Protein3.png",
                    Brand = "MyProtein",
                    Type = "Protein",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Gold Standard Whey",
                    Description = "One serving has a unique content of 82% high quality protein and 5.5 g of BCAAs",
                    Price = 14000,
                    PictureUrl = "/images/products/Protein4.png",
                    Brand = "OptimumNutrition",
                    Type = "Protein",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Hidro Whey",
                    Description = "Platinum Hydro-Whey is the fastest, purest and most advanced whey protein with 73% lactose-free protein",
                    Price = 11000,
                    PictureUrl = "/images/products/Protein5.png",
                    Brand = "OptimumNutrition",
                    Type = "Protein",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Whey",
                    Description = "Whey is the fastest, purest and most advanced whey protein with 78% lactose-free protein",
                    Price = 14500,
                    PictureUrl = "/images/products/Protein6.png",
                    Brand = "OptimumNutrition",
                    Type = "Protein",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Essential Whey Protein",
                    Description = "One of the three main macronutrients, protein facilitates muscle repair, growth and regeneration. It is recommended to achieve a regular intake of 20-30g of protein to stimulate the protein synthesis needed for this regeneration and growth",
                    Price = 10000,
                    PictureUrl = "/images/products/Protein7.png",
                    Brand = "HealthSpan",
                    Type = "Protein",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Whey Protein",
                    Description = "One of the three main macronutrients, protein facilitates muscle repair, growth and regeneration. ",
                    Price = 9000,
                    PictureUrl = "/images/products/Protein8.png",
                    Brand = "SiS",
                    Type = "Protein",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Whey Protein Rego",
                    Description = "Whey protein rego and isolate blend to increase and maintain lean muscle mass. ",
                    Price = 8000,
                    PictureUrl = "/images/products/Protein9.png",
                    Brand = "SiS",
                    Type = "Protein",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Essential Whey Protein",
                    Description = "Genius Nutrition® presents a new evolution of the purity and quality of protein isolated from naturally filtered whey, due to the manufacturing process of the raw material derived from whey from happy raised cows as it was given from nature without GMOs, chemical treatments, treatments hormones, pesticides or antibiotics.",
                    Price = 10500,
                    PictureUrl = "/images/products/Protein10.png",
                    Brand = "Genius",
                    Type = "Protein",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Creapure",
                    Description = "Creatine improves physical performance by performing a series of short, high-intensity exercises.",
                    Price = 5000,
                    PictureUrl = "/images/products/Creatine1.png",
                    Brand = "MyProtein",
                    Type = "Creatine",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Creapure Plus",
                    Description = "Creatine improves physical performance by performing a series of short, high-intensity exercises.",
                    Price = 6000,
                    PictureUrl = "/images/products/Creatine2.png",
                    Brand = "MyProtein",
                    Type = "Creatine",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Creapure Micro",
                    Description = "Creapure micronized creatine provides the perfect boost to maximize results, whether you're lifting weights or getting ready for a strong start, our convenient capsules will push you to performance.",
                    Price = 3000,
                    PictureUrl = "/images/products/Creatine3.png",
                    Brand = "MyProtein",
                    Type = "Creatine",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Micronised Protein",
                    Description = "Optimum Nutrition micronized powdered creatine is based on creatine monohydrate, specifically Creapure, a creatine monohydrate known for its exceptional purity. It has been micronized, so the powder mixes more easily and does not settle after being mixed in the liquid.",
                    Price = 4000,
                    PictureUrl = "/images/products/Creatine4.png",
                    Brand = "OptimumNutrition",
                    Type = "Creatine",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Micronised Protein Capsules",
                    Description = "Optimum Nutrition micronized powdered creatine is based on creatine monohydrate, specifically Creapure, a creatine monohydrate known for its exceptional purity. It has been micronized, so the powder mixes more easily and does not settle after being mixed in the liquid.",
                    Price = 4500,
                    PictureUrl = "/images/products/Creatine5.png",
                    Brand = "OptimumNutrition",
                    Type = "Creatine",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Micronised Protein Capsules",
                    Description = "Health Span micronized powdered creatine is based on creatine monohydrate, specifically Creapure.",
                    Price = 8500,
                    PictureUrl = "/images/products/Creatine6.png",
                    Brand = "HealthSpan",
                    Type = "Creatine",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Creatine Monohydrate",
                    Description = "Sis powdered creatine is based on creatine monohydrate, specifically Creapure.",
                    Price = 9500,
                    PictureUrl = "/images/products/Creatine7.png",
                    Brand = "SiS",
                    Type = "Creatine",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Genius Creatine",
                    Description = "Genius powdered creatine is based on creatine monohydrate, specifically Creapure.",
                    Price = 6500,
                    PictureUrl = "/images/products/Creatine8.png",
                    Brand = "Genius",
                    Type = "Creatine",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "The Pre-Workout",
                    Description = "More vigilance and fuel for training with THE Pre-Workout. Designed with PhaseTech, our unique technology designed for gradual release, to optimize the administration of ingredients.",
                    Price = 8000,
                    PictureUrl = "/images/products/Pre1.png",
                    Brand = "MyProtein",
                    Type = "PreWorkout",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Pre-Workout",
                    Description = "Optimum Nutrition ON Gold Standard Pre Workout is an excellent mix to increase your energy level before training.",
                    Price = 9000,
                    PictureUrl = "/images/products/Pre2.png",
                    Brand = "Genius",
                    Type = "PreWorkout",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Pre-Go",
                    Description = "Pre-Go is an excellent mix to increase your energy level before training.",
                    Price = 9500,
                    PictureUrl = "/images/products/Pre3.png",
                    Brand = "SiS",
                    Type = "PreWorkout",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Genius-Pre",
                    Description = "Genius-Pre is an excellent mix to increase your energy level before training.",
                    Price = 7500,
                    PictureUrl = "/images/products/Pre4.png",
                    Brand = "Genius",
                    Type = "PreWorkout",
                    QuantityInStock = 100
                }




















            };

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}