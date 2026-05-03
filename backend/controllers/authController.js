import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// signup
export const signup = async (req, res) => {
  console.log("🔥 Signup API hit:", req.body); // 👈 ADD THIS

  try {
    const { name, email, password } = req.body;

    // check user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log("❌ User already exists");
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      authProvider: "local"
    });

    console.log("✅ User created:", user._id); // 👈 ADD THIS

    res.status(201).json({
      message: "User created successfully",
      user
    });

  } catch (error) {
    console.error("🔥 FULL SIGNUP ERROR:", error); // 👈 VERY IMPORTANT
    res.status(500).json({ message: error.message });
  }
};

// login
export const login = async (req, res) => {
  console.log("🔥 Login API hit:", req.body); // 👈 ADD THIS

  try {
    const { email, password } = req.body;

    // find user
    const user = await User.findOne({ email });

    if (!user) {
      console.log("❌ User not found");
      return res.status(400).json({ message: "User not found" });
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("❌ Invalid password");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // create JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    console.log("✅ Login success:", user._id); // 👈 ADD THIS

    res.status(200).json({
      message: "Login successful",
      token,
      user
    });

  } catch (error) {
    console.error("🔥 FULL LOGIN ERROR:", error); // 👈 ADD THIS
    res.status(500).json({ message: error.message });
  }
};