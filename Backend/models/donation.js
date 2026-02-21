import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "Donation amount is required"],
      min: [1, "Amount must be greater than 0"],
    },

    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^[0-9]{10}$/, "Phone number must be 10 digits"],
    },

    aadhaar: {
      type: String,
      required: true,
      match: [/^[0-9]{12}$/, "Aadhaar must be 12 digits"],
    },

    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);

export default mongoose.models.Volunteer || mongoose.model("Donation", donationSchema);
