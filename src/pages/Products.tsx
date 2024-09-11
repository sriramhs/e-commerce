import { Badge } from "@/components/ui/badge";
import { CardFooter } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { products } from "@/lib/sampleData";

const Products = () => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden w-[100px] sm:table-cell">
              <span className="sr-only">Image</span>
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden md:table-cell">Price</TableHead>
            <TableHead className="hidden md:table-cell">Total Stock</TableHead>
            <TableHead className="hidden md:table-cell">Items Sold</TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((item) => {
            return (
              <TableRow>
                <TableCell className="hidden sm:table-cell">
                  <img
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={item?.image}
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">{item?.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">Available</Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item?.price}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item?.stock}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item?.reviews?.number}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
      </CardFooter>
    </div>
  );
};

export default Products;
