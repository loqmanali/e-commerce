"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Stay updated with our latest products, trends, and exclusive offers.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-primary-foreground text-primary"
          />
          <Button variant="secondary" className="whitespace-nowrap">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}