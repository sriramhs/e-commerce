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
const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden sm:table-cell">Sl.No</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Status</TableHead>
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
                      dispatch(removeItem(item));
                    }}
                  ></MinusIcon>

                  <Badge variant={"secondary"}>{item.itemCount}</Badge>
                  <PlusIcon
                    className="cursor-pointer"
                    onClick={() => {
                      dispatch(addItem(item));
                    }}
                  ></PlusIcon>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default Cart;
