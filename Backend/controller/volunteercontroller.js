import volunteer from "../models/volunteer.js";

export const Volunteer=async(req,res)=>{
    try {
        const formData=req.body;
        const {name,email,phoneno,city,helpType,message,timestamps}=formData;
            // ✅ Validate required fields
            if (!name || !email || !phoneno || !city || !helpType || !message) {
              return res.status(400).json({
                success: false,
                message: "All fields are required",
              });
            }
        
            // ✅ Save to database
            const newVolunteer = await volunteer.create({
              name,
              email,
              phoneno,
              city,
              helpType,
              message,
              timestamps,
            });
        
            return res.status(201).json({
              success: true,
              message: "volunteer saved successfully",
              data: newVolunteer,
            });

    } catch (error) {
         console.error("volunteer Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
    }
}