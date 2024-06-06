import { db } from "@/server/db";
import { Orders } from "@/server/db/schema";
export const dynamic = "force-dynamic";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export default async function OrderPage() {
    const orders = await db.select().from(Orders);

    return (
        <div className="flex flex-col gap-4 w-full">
            {orders ? (
                <Table className="border border-gray-300 rounded-xl">
                    <TableCaption>Orders</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Customer Name</TableHead>
                            <TableHead>Order Date</TableHead>
                            <TableHead>Total</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {orders.map((order: any) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.customerName}</TableCell>

                                <TableCell>{order.total}</TableCell>
                                <TableCell>
                                    <div className="bg-orange-200 py-1 px-2 rounded-lg w-fit text-orange-500">
                                        {order.status}
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            ) : (
                <p>No orders found</p>
            )}
        </div>
    );
}
