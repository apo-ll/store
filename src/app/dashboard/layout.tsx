import { Nav } from "./(components)/Nav";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col max-w-[1200px] mx-auto w-full min-h-screen">
            <Nav />
            <main className="flex  flex-col gap-2 flex-1 ">{children}</main>
        </div>
    );
}
