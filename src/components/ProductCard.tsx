import { useDispatch } from "react-redux";
import { addItem } from "../Redux/reducers/cartSlice";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";

type Props = {
  data: {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    reviews: { stars: number; number: number };
    stock: number;
    image: string;
    itemCount: number;
  };
};

const ProductCard = ({ data }: Props) => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const addToCart = () => {
    try {
      dispatch(addItem(data));
      console.log("added to cart");
      toast({
        title: "Item added",
        description: `${data?.name} added to cart`,
      });
    } catch (error) {
      toast({
        title: "Warning",
        description: `${error}`,
      });
    }
  };

  return (
    <>
      <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
        <CardHeader>
          <CardTitle>{data?.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-items-center">
          <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
            <img
              src={data?.image}
              alt="Your Image"
              style={{ objectFit: "contain" }}
            />
          </Card>

          <Button onClick={addToCart}>Add to cart</Button>
        </CardContent>
        <CardDescription className="flex justify-around pb-[5%]">
          <Badge variant="outline">
            <div className="line-through">₹{data?.originalPrice}</div>
            <div className="pl-[5px]">₹{data?.price}</div>
          </Badge>
          <Badge variant="secondary">
            {data?.reviews.stars}/5 <StarFilledIcon />({data?.reviews?.number})
          </Badge>
        </CardDescription>
      </Card>
    </>
  );
};

export default ProductCard;
