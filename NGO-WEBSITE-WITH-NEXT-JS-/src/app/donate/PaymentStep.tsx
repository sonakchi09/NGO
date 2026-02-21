"use client";

export default function PaymentStep({ amount }: { amount: number }) {
  const handlePayment = async () => {
    try {
      const res = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const order = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "NGO Donation",
        description: "Donation",
        order_id: order.id,
        handler: function () {
          alert("Payment Successful 🎉");
        },
        modal: {
          ondismiss: () => {
            alert("Payment Cancelled");
          },
        },
        theme: {
          color: "#16a34a",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (err) {
      alert("Payment Failed");
      console.error(err);
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-green-600 text-white px-8 py-3 rounded-md"
    >
      Donate ₹{amount}
    </button>
  );
}
