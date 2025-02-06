'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, Menu, X, Sofa } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const categories = [
  'Living Room',
  'Bedroom',
  'Dining Room',
  'Office',
  'Outdoor',
  'Decor',
];

const mainLinks = [
  { href: '/collection', label: 'TV & Movie Collections' },
  { href: '/shows', label: 'Browse by Show' },
  { href: '/new', label: 'New Arrivals' },
];

export default function Navigation() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-2 py-1 text-lg font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-border my-4" />
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/category/${category.toLowerCase().replace(' ', '-')}`}
                  className="block px-2 py-1 text-lg"
                >
                  {category}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Sofa className="h-6 w-6" style={{ color: '#CC5500' }} />
          <span className="font-bold inline-block">KHomes</span>
        </Link>

        <div className="hidden lg:flex lg:gap-x-12">
          {mainLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className={cn("search-container", isSearchOpen ? "flex flex-1 max-w-sm" : "hidden md:flex md:flex-1 md:max-w-sm")}>
            <form className="flex w-full">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full"
              />
            </form>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Shopping Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}