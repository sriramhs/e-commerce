import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";

import { CartItem } from "../Types/types";
import { addItem, removeItem } from "../Redux/reducers/cartSlice";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const addItems = (item: CartItem) => {
    try {
      dispatch(addItem(item));
    } catch (error) {
      toast({
        title: "Warning",
        description: `${error}`,
      });
    }
  };
  const removeItems = (item: CartItem) => {
    if (item?.itemCount === 1) {
      alert("remove item ?");
    }
    dispatch(removeItem(item));
  };

  return cartItems.length ? (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden sm:table-cell">Sl.No</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="hidden md:table-cell">Price</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cartItems.map((item: CartItem, index: number) => {
          return (
            <TableRow>
              <TableCell>[{index + 1}]</TableCell>

              <TableCell className="flex gap-5">
                <img
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="64"
                  src={item?.image}
                  width="64"
                />
                <div className="pt-5">{item?.name}</div>
              </TableCell>
              <TableCell>{item?.itemCount}</TableCell>
              <TableCell>{item?.price}</TableCell>
              <TableCell>
                <div className="flex justify-around">
                  <MinusIcon
                    className="cursor-pointer"
                    onClick={() => {
                      removeItems(item);
                    }}
                  ></MinusIcon>

                  <Badge variant={"secondary"}>{item.itemCount}</Badge>
                  <PlusIcon
                    className="cursor-pointer"
                    onClick={() => {
                      addItems(item);
                    }}
                  ></PlusIcon>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  ) : (
    <h2 className="pl-[40%] pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      The Cart is Empty
    </h2>
  );
};

export default Cart;
