import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingCollection() {
  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-4 mb-8">
        <Skeleton className="h-12 w-[300px]" />
        <Skeleton className="h-6 w-[500px]" />
      </div>

      <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <Skeleton className="h-8 w-[200px]" />
          <Skeleton className="h-6 w-[100px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border overflow-hidden">
              <Skeleton className="h-[300px] w-full" />
              <div className="p-6 space-y-4">
                <Skeleton className="h-6 w-[200px]" />
                <Skeleton className="h-4 w-full" />
                <div className="space-y-2">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}