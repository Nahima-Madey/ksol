import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
          alt="Modern living room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white space-y-6 px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Live Like Your Favorite Characters</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover and shop furniture and decor items featured in popular TV shows and movies
          </p>
          <Button size="lg" className="bg-[#CC5500] hover:bg-[#A34400]">
            Explore Collection
          </Button>
        </div>
      </section>

      {/* Featured Shows Section */}
      <section className="py-16 container">
        <h2 className="text-3xl font-bold mb-8 text-center">As Seen In</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredShows.map((show) => (
            <Link
              key={show.title}
              href={`/show/${show.slug}`}
              className="group relative h-[300px] overflow-hidden rounded-lg"
            >
              <Image
                src={show.image}
                alt={show.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-bold text-white">{show.title}</h3>
                <p className="text-white/80">{show.itemCount} items</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Items Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Trending Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingItems.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.slug}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-[200px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">{item.show}</p>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-[#CC5500] font-bold mt-2">${item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const featuredShows = [
  {
    title: "When the phone rings",
    slug: "When the phone rings",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80",
    itemCount: 127
  },
  {
    title: "Queen of tears",
    slug: "Queen of tears",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80",
    itemCount: 84
  },
  {
    title: "Emily in Paris",
    slug: "emily-in-paris",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80",
    itemCount: 156
  }
];

const trendingItems = [
  {
    id: 1,
    name: "Modern Leather Armchair",
    slug: "modern-leather-armchair",
    show: "When the phone rings",
    price: 1299,
    image: "https://images.unsplash.com/photo-1617364852004-f5df7b33b891?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Coastal Table Lamp",
    slug: "coastal-table-lamp",
    show: "Queen of tears",
    price: 249,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Velvet Accent Chair",
    slug: "velvet-accent-chair",
    show: "Emily in Paris",
    price: 899,
    image: "https://images.unsplash.com/photo-1617364852004-f5df7b33b891?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Marble Coffee Table",
    slug: "marble-coffee-table",
    show: "When the phone rings",
    price: 1499,
    image: "https://images.unsplash.com/photo-1577926866949-c1ed2147d862?auto=format&fit=crop&q=80"
  }
];