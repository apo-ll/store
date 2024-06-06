"use server";
import { db } from "@/server/db";
import { Orders } from "@/server/db/schema";
import { clerkClient } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";

export async function MpesaPayment(prevState: any, formData: any) {
    const numberString = formData.get("number");
    const totalString = formData.get("total");

    const total = Number(totalString);
    const number = Number(numberString); // Convert to number (either int or float)

    console.log(total);

    const businessShortCode = 174379;
    const passKey: string = process.env.PASS_KEY!;
    const date = new Date();

    const time =
        date.getFullYear() +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        ("0" + date.getDate()).slice(-2) +
        ("0" + date.getHours()).slice(-2) +
        ("0" + date.getMinutes()).slice(-2) +
        ("0" + date.getSeconds()).slice(-2);

    // Encode the password using base64
    const password = Buffer.from(businessShortCode + passKey + time).toString(
        "base64"
    );

    // Create the request payload
    const paymentPayload = {
        BusinessShortCode: businessShortCode,
        Password: password,
        Timestamp: time,
        TransactionType: "CustomerPayBillOnline",
        Amount: 1,
        PartyA: number,
        PartyB: 174379,
        PhoneNumber: number,
        CallBackURL: "https://mydomain.com/pat",
        AccountReference: "Kayakeva Decor",
        TransactionDesc: "Payment of Decor",
    };

    const res = await fetch("http://localhost:3000/api/Mpesa/MpesaPayment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentPayload),
    }).then((res) => res.json());

    console.log(res);

    if (
        res.mpesaStatus.ResultDesc ===
        "The service request is processed successfully."
    ) {
        const { userId } = auth();
        const user = await clerkClient.users.getUser(userId as string);

        await db
            .insert(Orders)
            .values({
                total: "1",
                customerName: `${user.firstName} ${user.lastName}`,
                status: "pending",
            })
            .returning({ id: Orders.id })
            .onConflictDoNothing();
    }

    if (res.mpesaStatus.ResultDesc === "Request cancelled by user") {
        return {
            message: "You cancelled the request",
        };
    } else if (
        res.mpesaStatus.ResultDesc ===
        "The service request is processed successfully."
    ) {
        return {
            message: "The payment was successful",
        };
    } else {
        return {
            message: "Try Again",
        };
    }
}
