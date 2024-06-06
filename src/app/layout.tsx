import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";
import { MainNav } from "@/components/main-nav";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Doc Store",
    description: "Doc Store",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body
                    className={cn(
                        "min-h-screen bg-background font-sans antialiased",
                        inter.className
                    )}>
                    <MainNav />
                    {children}
                    <Toaster />
                </body>
            </html>
        </ClerkProvider>
    );
}
