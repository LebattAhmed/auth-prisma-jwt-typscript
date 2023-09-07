import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();

const prisma = new PrismaClient();

router.post("/create", async (req, res) => {
  try {
    const { nom, email, password } = req.body;
    const userCreate = await prisma.user.create({
      data: {
        nom,
        email,
        password,
      },
    });
    res.json(userCreate);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "User creation failed" });
  }
});

module.exports = router;
