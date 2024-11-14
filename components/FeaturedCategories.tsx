import { Card, CardContent } from "@/components/ui/card";
import { Shirt, Watch, Gem } from "lucide-react";

const categories = [
  {
    name: "Clothing",
    description: "Latest fashion trends",
    icon: Shirt,
  },
  {
    name: "Accessories",
    description: "Complete your look",
    icon: Watch,
  },
  {
    name: "Jewelry",
    description: "Timeless pieces",
    icon: Gem,
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.name} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{category.name}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}