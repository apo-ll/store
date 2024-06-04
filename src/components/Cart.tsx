"use client";

import useCart from "@/stores/store";
import { ShoppingBag } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";

export const Cart = () => {
    const cartItems = useCart((state: any) => state.cart);
    const removeItemFromCart = useCart(
        (state: any) => state.removeItemFromCart
    );

    function handleRemoveProduct(itemIndex: any) {
        removeItemFromCart({ itemIndex });
    }

    return (
        <div className="flex relative flex-row  items-start ">
            <Sheet>
                <SheetTrigger>
                    <div className="flex relative flex-row p-3 items-start gap-1">
                        {" "}
                        <ShoppingBag />
                        <div className="bg-pumkin absolute top-0 right-0 text-sm text-white px-2 rounded-full w-fit h-fit">
                            {cartItems.length > 0 && (
                                <p className="text-xs sm:text-sm">
                                    {cartItems.length}
                                </p>
                            )}
                        </div>
                    </div>
                </SheetTrigger>

                <SheetContent side="right">
                    <div className="h-full flex flex-col justify-between  ">
                        <div>
                            <div className="flex items-center mb-10 justify-between text-xl relative">
                                <h1>Cart</h1>
                            </div>
                            <div className=" flex-1 flex flex-col gap-4">
                                {cartItems.length === 0 ? (
                                    <p>There is nothing in your cart :'(</p>
                                ) : (
                                    <>
                                        {cartItems.map(
                                            (
                                                cartItem: any,
                                                itemIndex: number
                                            ) => {
                                                return (
                                                    <div
                                                        key={itemIndex}
                                                        className="flex border-solid border-slate-700 px-2 flex-col gap-2">
                                                        <div className="flex flex-row items-center justify-between ">
                                                            <div className="flex flex-row items-center gap-3 ">
                                                                <img
                                                                    src={
                                                                        cartItem.imageUrl
                                                                    }
                                                                    alt=""
                                                                    className="w-[80px] h-[80px] object-cover bg-slate-50 rounded "
                                                                />
                                                                <div className="flex flex-col">
                                                                    <h2>
                                                                        {
                                                                            cartItem.name
                                                                        }
                                                                    </h2>
                                                                    <p className="font-semibold">
                                                                        KES{" "}
                                                                        {
                                                                            cartItem.price
                                                                        }
                                                                    </p>
                                                                    <p className="text-slate-600 text-sm">
                                                                        {`Quantity: ${cartItem.quantity}`}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                onClick={
                                                                    handleRemoveProduct
                                                                }>
                                                                -
                                                            </Button>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                        {cartItems.length === 0 ? (
                            <Button disabled>
                                <Link href={"/checkout"}>
                                    Proceed To Checkout
                                </Link>
                            </Button>
                        ) : (
                            <Button>
                                <Link href={"/checkout"}>
                                    Proceed To Checkout
                                </Link>
                            </Button>
                        )}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};
