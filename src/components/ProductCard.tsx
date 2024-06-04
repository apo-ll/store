"use client";

import useCart from "@/stores/store";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProductItem = (props: any) => {
    const router = useRouter();

    const { product } = props;
    const { name, price, description, imageUrl } = product;
    const setProduct = useCart((state: any) => state.setProduct);

    function onProductClick() {
        const newProduct = {
            name,
            description,
            price,
            imageUrl,
        };
        setProduct({ newProduct });
        router.push("/product-info");
    }

    return (
        <Link
            onClick={onProductClick}
            href={"/product-info"}
            className="flex flex-col gap-3 grow-0 shrink-0">
            <img
                src={imageUrl}
                alt={name}
                className="lg:w-[300px] w-[220px] h-[220px] grow-0 shrink-0 lg:h-[300px] border rounded-lg bg-white object-cover"
            />
            <div className="flex flex-col gap-1">
                <h2 className="text-sm">{name}</h2>
                <p className="font-semibold">KES {price}</p>
            </div>
        </Link>
    );
};

export default ProductItem;
