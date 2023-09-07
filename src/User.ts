import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.send(users);
  } catch (error) {
    console.error("Error listing users:", error);
    res.status(500).json({ error: "Users listed failed" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    res.send(user);
  } catch (error) {
    console.error("Error search users:", error);
    res.status(500).json({ error: "Users searshing failed" });
  }
});

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

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, email, password } = req.body;
    const upUser = await prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nom,
        email,
        password,
      },
    });
    res.json(upUser);
  } catch (error) {
    console.error("Error editing user:", error);
    res.status(500).json({ error: "User editing failed" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const delUser = await prisma.user.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.send("user deleted succesfully !");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "User delete failed" });
  }
});

module.exports = router;
