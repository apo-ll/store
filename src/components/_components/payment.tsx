"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { calculateTotalPrice } from "@/components/total-price";
import { useFormState } from "react-dom";
import { MpesaPayment } from "@/components/_actions/mpesa";

const initialState = {
    message: "",
};

export function PayWithMpesa() {
    const [state, formAction] = useFormState(MpesaPayment, initialState);

    return (
        <div className="flex flex-col gap-6 p-6 lg:p-8">
            {state?.message === "The payment was successful" ? (
                <div className="flex flex-col gap-2 bg-green-200">
                    <p className="text-lg font-bold">
                        Your payment was successful
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Your payment was successful
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        You will receive a text message with your payment
                        details
                    </p>
                    <Link
                        className="border border-gray-400 p-1 rounded-lg"
                        href="/">
                        Go To Purchases
                    </Link>
                </div>
            ) : (
                <form action={formAction} method="POST" className="grid gap-4">
                    <h2 className="text-2xl font-bold">Payment</h2>
                    <h1>{calculateTotalPrice()}</h1>
                    <div className="grid gap-2">
                        <Label htmlFor="number">Phone number</Label>
                        <Input
                            id="number"
                            name="number"
                            placeholder="Enter your phone number"
                            type="number"
                            required
                        />
                        <p
                            className={`${
                                state.message === "The payment was unsuccessful"
                                    ? "text-red-500"
                                    : ""
                            }`}>
                            {state.message}
                        </p>
                        <input
                            type="hidden"
                            name="total"
                            value={calculateTotalPrice()}
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Lipa Na M-Pesa
                    </Button>
                </form>
            )}
        </div>
    );
}
