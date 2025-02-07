import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function CollectionPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold">Featured Collections</h1>
        <p className="text-muted-foreground text-lg">
          Discover authentic furniture and decor from your favorite shows and movies
        </p>
      </div>

      {collections.map((collection) => (
        <div key={collection.show} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-semibold">{collection.show}</h2>
            <p className="text-muted-foreground">Season {collection.season}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collection.items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardHeader className="relative h-[300px] p-0">
                  <Image
                    src={item.sceneImage}
                    alt={`Scene from ${collection.show} featuring ${item.name}`}
                    fill
                    className="object-cover"
                  />
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm"
                        >
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-[200px]">{item.sceneDescription}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{item.name}</CardTitle>
                  <CardDescription className="mb-4">
                    {item.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {item.retailers.map((retailer) => (
                      <Link
                        key={retailer.name}
                        href={retailer.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2 rounded-lg border hover:bg-accent transition-colors"
                      >
                        <span>{retailer.name}</span>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const collections = [
  {
    show: "Succession",
    season: 4,
    items: [
      {
        id: 1,
        name: "Modern Platform Bed",
        description: "Gray upholstered platform bed as seen in Kendall Roy's Manhattan apartment",
        sceneImage: "/succession-bedroom.jpg", // Replace with actual scene image
        sceneDescription: "Featured in Season 4, Episode 3 - Kendall's master bedroom during the morning scene",
        retailers: [
          {
            name: "Restoration Hardware",
            url: "https://rh.com/catalog/product/product.jsp?productId=prod2475444",
          },
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/B07Y5MN5K4",
          },
          {
            name: "Wayfair",
            url: "https://www.wayfair.com/furniture/pdp/",
          },
        ],
      },
      // Add more items...
    ],
  },
  {
    show: "The White Lotus",
    season: 2,
    items: [
      {
        id: 2,
        name: "Mediterranean Table Lamp",
        description: "Ceramic table lamp with linen shade from Portia's hotel room",
        sceneImage: "/white-lotus-lamp.jpg", // Replace with actual scene image
        sceneDescription: "Seen in Season 2, Episode 4 - On the bedside table in Portia's room at the resort",
        retailers: [
          {
            name: "Pottery Barn",
            url: "https://www.potterybarn.com/products/",
          },
          {
            name: "Amazon",
            url: "https://www.amazon.com/dp/B08KH3LQPX",
          },
        ],
      },
      // Add more items...
    ],
  },
];