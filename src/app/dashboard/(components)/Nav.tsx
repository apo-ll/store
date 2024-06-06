"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Nav = () => {
    const pathname = usePathname();

    const navs = [
        {
            name: "Dashboard",
            href: "/dashboard",
        },
        {
            name: "Orders",
            href: "/dashboard",
        },
        {
            name: "Products",
            href: "/dashboard",
        },
        {
            name: "Customers",
            href: "/dashboard/customers",
        },
    ];
    return (
        <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
            <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link
                    className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    href="#">
                    <Package2Icon className="w-6 h-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                    className={`${
                        pathname === "/dashboard" ? "font-bold" : ""
                    } text-black`}
                    href="/dashboard">
                    Dashboard
                </Link>
                <Link
                    className={`${
                        pathname === "/dashboard/orders" ? "font-bold" : ""
                    } text-black`}
                    href="/dashboard/orders">
                    Orders
                </Link>
                <Link
                    className={`${
                        pathname === "/dashboard/customers" ? "font-bold" : ""
                    } text-black`}
                    href="/dashboard/customers">
                    Customers
                </Link>
            </nav>
        </header>
    );
};

function Package2Icon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
            <path d="M12 3v6" />
        </svg>
    );
}

function SearchIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    );
}
