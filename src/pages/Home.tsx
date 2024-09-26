import { bestSelling, flashSales } from "@/lib/sampleData";
import ProductCard from "../components/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const App = () => {
  return (
    <div className="relative p-[4%]">
      <div className="pb-[4%]">
        <div className="text-5xl font-bold bg-gradient-to-r from-red-300 via-red-500 to-red-700 bg-clip-text text-transparent pb-5">
          Flash Sales
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {flashSales.map((item) => {
              return (
                <CarouselItem className="basis-1/1 lg:basis-1/5">
                  <ProductCard data={item} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div>
        <div className="text-5xl font-bold bg-gradient-to-r from-sky-300 via-sky-500 to-sky-700 bg-clip-text text-transparent pb-5">
          Best Selling
        </div>
        <div className="flex flex-row gap-[1%]">
          {bestSelling.map((item) => {
            return <ProductCard data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
