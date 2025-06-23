import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertGameSessionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Save game session
  app.post("/api/game/complete", async (req, res) => {
    try {
      const sessionData = insertGameSessionSchema.parse(req.body);
      const session = await storage.createGameSession(sessionData);
      res.json(session);
    } catch (error) {
      console.error("Error saving game session:", error);
      res.status(400).json({ error: "Invalid session data" });
    }
  });

  // Get game history (optional feature)
  app.get("/api/game/history/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      if (isNaN(userId)) {
        return res.status(400).json({ error: "Invalid user ID" });
      }
      
      const sessions = await storage.getGameSessionsByUser(userId);
      res.json(sessions);
    } catch (error) {
      console.error("Error fetching game history:", error);
      res.status(500).json({ error: "Failed to fetch game history" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
