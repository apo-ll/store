import React from "react";
import { db } from "@/server/db";
import { eq } from "drizzle-orm";
import { User } from "@/server/db/schema";
import { clerkClient } from "@clerk/nextjs/server";
import { Order } from "@/server/db/schema";

const Orders = () => {
    return <div>Orders</div>;
};

export default Orders;
