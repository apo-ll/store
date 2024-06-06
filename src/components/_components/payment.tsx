"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { calculateTotalPrice } from "@/components/total-price";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { MpesaPayment } from "@/components/_actions/mpesa";

const initialState = {
    message: "",
};

export function PayWithMpesa() {
    const [state, formAction] = useFormState(MpesaPayment, initialState);

    return (
        <div className="flex flex-col gap-6 p-6 lg:p-8">
            <form action={formAction} method="POST" className="grid gap-4">
                <h2 className="text-2xl font-bold">Payment</h2>
                <p
                    className={`${
                        state?.message === "You cancelled the request" &&
                        "p-3 rounded-lg bg-red-50"
                    } ${
                        state?.message === "The payment was successful" &&
                        "p-3 rounded-lg bg-green-50"
                    }`}>
                    {state?.message}
                </p>
                <div className="grid gap-2">
                    <Label htmlFor="number">Phone number</Label>
                    <Input
                        id="number"
                        name="number"
                        placeholder="Enter your phone number"
                        type="number"
                        required
                    />

                    <input
                        type="hidden"
                        name="total"
                        value={calculateTotalPrice()}
                    />
                </div>
                <SubmitButton />
            </form>
        </div>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button type="submit" className="w-full" disabled={pending}>
            {pending ? "Processing..." : "Lipa Na M-Pesa"}
        </Button>
    );
}
