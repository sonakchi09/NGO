"use client";

interface Props {
  donorInfo: {
    name: string;
    email: string;
    phone: string;
    aadhaar: string;
    address: string;
  };
  setDonorInfo: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      phone: string;
      aadhaar: string;
      address: string;
    }>
  >;
  selectedAmount: number | null;
  handlePayment: () => void;
}

export default function InfoStep({
  donorInfo,
  setDonorInfo,
  selectedAmount,
  handlePayment,
}: Props) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDonorInfo({
      ...donorInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-800">
        Donor Information
      </h2>

      <p className="mt-2 text-sm text-gray-600">
        Donation Amount: ₹ {selectedAmount}
      </p>

      <div className="space-y-3 mt-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={donorInfo.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={donorInfo.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={donorInfo.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />

        <input
          type="text"
          name="aadhaar"
          placeholder="Aadhaar Number"
          value={donorInfo.aadhaar}
          onChange={handleChange}
          maxLength={12}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />

        <textarea
          name="address"
          placeholder="Full Address"
          value={donorInfo.address}
          onChange={handleChange}
          rows={3}
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
      </div>

      <button
        onClick={handlePayment}
        className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-2.5 text-sm rounded-md font-medium"
      >
        Pay Now
      </button>
    </div>
  );
}
