import { useSelector } from "react-redux";
import { RootState } from "../Redux/store";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const totalCount = useSelector((state: RootState) => state.cart.totalCount);

  return (
    <header className=" top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <div
          className="text-foreground transition-colors hover:text-foreground cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Dashboard
        </div>
        <div
          className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          onClick={() => {
            navigate("/orders");
          }}
        >
          Orders
        </div>
        <div
          className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          onClick={() => {
            navigate("/product");
          }}
        >
          Products
        </div>
        <div
          className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          onClick={() => {
            navigate("/support");
          }}
        >
          Support
        </div>

        <div
          className="text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart ({totalCount})
        </div>
      </nav>
      <Avatar className="cursor-pointer">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>SR</AvatarFallback>
      </Avatar>
    </header>
  );
};

export default Layout;
