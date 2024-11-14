"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Cotton Casual T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    category: "Men",
    isNew: true,
  },
  {
    id: 2,
    name: "Leather Crossbody Bag",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
    category: "Accessories",
    isNew: true,
  },
  {
    id: 3,
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
    category: "Men",
    isNew: false,
  },
  {
    id: 4,
    name: "Summer Floral Dress",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
    category: "Women",
    isNew: false,
  },
];

export default function ProductGrid() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Featured Products</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                {product.isNew && (
                  <Badge className="absolute top-2 right-2">
                    New Arrival
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="p-4">
              <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <span className="text-lg font-bold">${product.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{product.category}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}