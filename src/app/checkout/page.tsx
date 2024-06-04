"use client";

import { PayWithMpesa } from "@/components/_components/payment";
import useCart from "@/stores/store";
import { calculateTotalPrice } from "@/components/total-price";

import { Separator } from "@/components/ui/separator";

export default function Checkout() {
    const cartItems = useCart((state: any) => state.cart);

    const price = calculateTotalPrice();

    console.log(price);

    return (
        <div className="grid min-h-screen max-w-[1200px] mx-auto w-full overflow-hidden lg:grid-cols-[1fr_400px]">
            <div className="flex flex-col gap-6 border-r bg-gray-100/40 p-6 dark:bg-gray-800/40 lg:p-8">
                <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold">Cart</h1>
                    </div>
                    <div className="grid gap-4">
                        {cartItems.map((cartItem: any, itemIndex: any) => (
                            <div className="grid gap-2" key={itemIndex}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img
                                            alt="Product image"
                                            className="rounded-md"
                                            height="64"
                                            src={cartItem.imageUrl}
                                            style={{
                                                aspectRatio: "64/64",
                                                objectFit: "cover",
                                            }}
                                            width="64"
                                        />
                                        <div>
                                            <h3 className="font-medium">
                                                {cartItem.name}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium">
                                            KES {cartItem.price.toFixed(2)}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Qty: {cartItem.quantity}
                                        </p>
                                    </div>
                                </div>
                                <Separator />
                            </div>
                        ))}
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <p className="text-lg font-bold">
                                KES {calculateTotalPrice()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <PayWithMpesa />
        </div>
    );
}
