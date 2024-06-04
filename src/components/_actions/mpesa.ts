"use server";

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
        res.mpesaStatus.ResponseDescription ===
        "The service request has been accepted successsfully"
    ) {
        return {
            message: "The payment was successful",
        };
    } else if (res.mpesaStatus.ResponseCode === "0") {
        return {
            message: "The payment was unsuccessful",
        };
    } else if (res.mpesaStatus.ResponseCode === "3") {
        return {
            message: "The transaction was not found",
        };
    } else if (res.mpesaStatus.ResponseCode === "4") {
        return {
            message: "Invalid transaction",
        };
    } else if (res.mpesaStatus.ResponseCode === "5") {
        return {
            message: "The transaction was not found",
        };
    } else {
        return {
            message: "Unexpected response code",
        };
    }
}
