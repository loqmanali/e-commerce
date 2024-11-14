import ProductGrid from '@/components/ProductGrid';
import Hero from '@/components/Hero';
import FeaturedCategories from '@/components/FeaturedCategories';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedCategories />
      <ProductGrid />
      <Newsletter />
    </main>
  );
}