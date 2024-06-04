import Link from "next/link";
import ProductItem from "@/components/ProductCard";

const Home = () => {
    return (
        <main className="flex flex-col lg:gap-20 gap-10 p-4 max-w-[1200px] w-full lg:py-20 py-10 mx-auto items-start justify-center">
            <div className="flex flex-col gap-4 w-full justify-between">
                <div className="flex flex-row justify-between">
                    <h1 className="text-xl font-semibold">Shoes</h1>
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

                <div className="lg:grid lg:grid-cols-4 flex flex-row overflow-auto grow-0 shrink-0  gap-3">
                    {Array.from({ length: 6 }, (_, index) => (
                        <ProductItem
                            key={index}
                            product={{
                                name: "Saleor Dash Shoes",
                                price: 5000,
                                description:
                                    " Step into summer with the right balance. Every time your head goes down, you see these beauties, and your mood bounces right back up.",
                                imageUrl:
                                    "https://jckdgjbqxwpoljrkzsjc.supabase.co/storage/v1/object/public/commerce/saleor-dash-force-1_thumbnail_1024%20(1).webp",
                            }}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Home;
