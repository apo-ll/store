"use client";

import useCart from "@/stores/store";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PlusIcon, Minus } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";

export default function ProductInfo() {
    const product = useCart((state: any) => state.product);
    const addItemToCart = useCart((state: any) => state.addItemToCart);
    const { name, price, imageUrl, description } = product;
    const [quantity, setQuantity] = useState(1);

    const handleClick = () => {
        setQuantity(quantity + 1);
    };
    const handleRemove = () => {
        if (quantity === 1) {
            setQuantity(quantity);
        } else {
            setQuantity(quantity - 1);
        }
    };

    if (!product?.name) {
        window.location.href = "/";
    }

    function handleAddToCart() {
        console.log("PRICE ID: ", price);
        const newItem = {
            quantity: quantity,
            price,
            name,
            imageUrl,
        };
        addItemToCart({ newItem });
    }

    return (
        <div className="flex flex-col p-4 gap-10 w-full max-w-[1200px] lg:py-20 py-10  mx-auto  justify-center items-center">
            <div className=" flex items-center mx-auto justify-center ma w-full">
                <div className="flex lg:flex-row flex-col  w-fit items-center gap-10">
                    <img
                        src={imageUrl}
                        alt=""
                        className="lg:w-[500px] w-screen h-[450px] lg:h-[500px] border rounded-lg bg-gray-100 object-cover"
                    />
                    <div className="flex flex-col lg:gap-10 gap-5">
                        <h1 className="text-3xl">{name}</h1>
                        <div className="flex flex-row gap-2 text-sm">
                            <p className="font-semibold">KES {price}</p>
                            <h1>IN STOCK</h1>
                        </div>

                        <div className="flex flex-row gap-4">
                            <Button variant="outline">39</Button>
                            <Button variant="outline">40</Button>
                            <Button variant="outline">41</Button>
                            <Button variant="outline">43</Button>
                        </div>

                        <div className="flex flex-col gap-3 items-start">
                            <p>Quantity</p>
                            <div className="flex flex-row gap-3 items-center">
                                <Button
                                    variant="outline"
                                    onClick={handleRemove}
                                    className="rounded-full p-3"
                                    size="sm">
                                    <Minus />
                                </Button>
                                <p className="">{quantity}</p>
                                <Button
                                    variant="outline"
                                    onClick={handleClick}
                                    className="rounded-full p-3"
                                    size="sm">
                                    <PlusIcon />
                                </Button>
                            </div>
                        </div>

                        <Button
                            onClick={() => {
                                toast(name, {
                                    description: `${name} added to cart`,
                                });
                                handleAddToCart();
                            }}
                            className="w-fit">
                            Add To Cart
                        </Button>
                        <p className=" ">{description}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full justify-between">
                <div className="flex flex-row justify-between">
                    <h1 className="text-xl font-semibold">More Like this</h1>
                    <Link href="/" className="flex flex-row gap-1 items-center">
                        <h1>Show More</h1>{" "}
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"></path>
                        </svg>
                    </Link>
                </div>

                <div className="grid lg:grid-cols-4 grid-cols-2 gap-3">
                    <Link
                        href={"/product-info"}
                        className="flex flex-col gap-3">
                        <img
                            src="https://jckdgjbqxwpoljrkzsjc.supabase.co/storage/v1/object/public/commerce/saleor-dash-force-1_thumbnail_1024%20(1).webp"
                            alt=""
                            className="lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] border rounded-lg bg-white object-cover"
                        />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-sm">Saleor Dash Shoes</h2>
                            <p className="font-semibold">KSH 5000</p>
                        </div>
                    </Link>

                    <div className="flex flex-col gap-3">
                        <img
                            src="https://jckdgjbqxwpoljrkzsjc.supabase.co/storage/v1/object/public/commerce/saleor-dash-force-1_thumbnail_1024%20(1).webp"
                            alt=""
                            className="lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] border rounded-lg bg-white"
                        />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-sm">Saleor Dash Shoes</h2>
                            <p className="font-semibold">KSH 5000</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <img
                            src="https://jckdgjbqxwpoljrkzsjc.supabase.co/storage/v1/object/public/commerce/saleor-dash-force-1_thumbnail_1024%20(1).webp"
                            alt=""
                            className="lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] border rounded-lg bg-white"
                        />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-sm">Saleor Dash Shoes</h2>
                            <p className="font-semibold">KSH 5000</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <img
                            src="https://jckdgjbqxwpoljrkzsjc.supabase.co/storage/v1/object/public/commerce/saleor-dash-force-1_thumbnail_1024%20(1).webp"
                            alt=""
                            className="lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] border rounded-lg bg-white"
                        />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-sm">Saleor Dash Shoes</h2>
                            <p className="font-semibold">KSH 5000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
