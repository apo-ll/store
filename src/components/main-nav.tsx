import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Cart } from "./Cart";
import { AvatarMenu } from "./avatar-menu";

export function MainNav() {
    return (
        <nav className="flex bg-white mx-auto justify-center items-center border border-solid drop-shadow-md text-black w-full h-full sticky top-0 right-0 left-0 z-50">
            <div className="w-full max-w-[1200px] p-3 flex flex-row justify-between items-center ">
                <div className=" flex flex-row lg:gap-10 md:gap-4  lg:justify-start md:justify-start sm:justify-between justify-between items-center">
                    <div className=" flex flex-row items-center gap-3">
                        <div className="lg:hidden md:hidden sm:block block">
                            <Sheet>
                                <SheetTrigger>
                                    <Menu />
                                </SheetTrigger>
                                <SheetContent
                                    className="w-[400px] sm:w-[540px]"
                                    side="left">
                                    <nav className="flex flex-col gap-x-10">
                                        <Link
                                            href="#"
                                            className="flex items-center gap-2 text-lg font-semibold ">
                                            DOC{" "}
                                            <span className="text-pumkin">
                                                STORE
                                            </span>
                                        </Link>
                                        <div className="flex flex-col gap-5 *:border-b">
                                            <Link
                                                href="#"
                                                className="text-muted-foreground border-b py-2 text-lg hover:text-foreground">
                                                All Products
                                            </Link>
                                            <Link
                                                href="#"
                                                className="text-muted-foreground border-b py-2 text-lg hover:text-foreground">
                                                Shirts
                                            </Link>
                                            <Link
                                                href="#"
                                                className="text-muted-foreground text-lg hover:text-foreground">
                                                Shoes
                                            </Link>
                                        </div>
                                    </nav>
                                </SheetContent>
                            </Sheet>
                        </div>
                        <Link href="/">
                            <h1 className="uppercase text-xl font-semibold">
                                Doc <span className="text-pumkin">Store</span>
                            </h1>
                        </Link>
                    </div>
                    <div className=" flex-row gap-x-14 lg:flex md:flex sm:hidden hidden">
                        <Link
                            href={"/"}
                            className=" font-medium hover:transition-all hover:duration-300 font text-black/60 hover:text-black ">
                            All Products
                        </Link>
                        <Link
                            className=" font-medium hover:transition-all hover:duration-300 font text-black/60 hover:text-black "
                            href={"/"}>
                            Shirts
                        </Link>
                        <Link
                            className=" font-medium hover:transition-all hover:duration-300 font text-black/60 hover:text-black "
                            href={"/"}>
                            Shoes
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row items-center  gap-3">
                    <Cart />
                    <AvatarMenu />
                </div>
            </div>
        </nav>
    );
}
