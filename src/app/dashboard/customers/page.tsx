import { db } from "@/server/db";
import { User } from "@/server/db/schema";

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

export default async function Customers() {
    const users = await db.select().from(User);

    return (
        <Table className="border border-gray-300 rounded-xl">
            <TableCaption>Customers</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user: any) => (
                    <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

// <Table>
//     <TableCaption>Customers</TableCaption>
//     <TableHead>
//         <TableRow>
//             <TableHeader>Name</TableHeader>
//             <TableHeader>Email</TableHeader>
//             <TableHeader>Phone</TableHeader>
//             <TableHeader>User No</TableHeader>
//         </TableRow>
//     </TableHead>
//     <TableBody>
//         {users.map((user: any) => (
//             <TableRow key={user.id}>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell>{user.email}</TableCell>
//                 <TableCell>{user.phone}</TableCell>
//                 <TableCell>{user.userNo}</TableCell>
//             </TableRow>
//         ))}
//     </TableBody>
// </Table>
