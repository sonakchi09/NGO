import Donation from "../models/donation.js";

export const donation = async (req, res) => {
  try {
    const payload = req.body;

    const { amount, name, email, phone, aadhaar, address } = payload;

    // ✅ Validate required fields
    if (!amount || !name || !email || !phone || !aadhaar || !address) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // ✅ Save to database
    const newDonation = await Donation.create({
      amount,
      name,
      email,
      phone,
      aadhaar,
      address,
      paymentStatus: "pending",
    });

    return res.status(201).json({
      success: true,
      message: "Donation saved successfully",
      data: newDonation,
    });

  } catch (error) {
    console.error("Donation Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
