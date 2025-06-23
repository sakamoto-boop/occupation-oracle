import { users, gameSession, type User, type InsertUser, type GameSession, type InsertGameSession } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createGameSession(session: InsertGameSession): Promise<GameSession>;
  getGameSessionsByUser(userId: number): Promise<GameSession[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private gameSessions: Map<number, GameSession>;
  private currentUserId: number;
  private currentSessionId: number;

  constructor() {
    this.users = new Map();
    this.gameSessions = new Map();
    this.currentUserId = 1;
    this.currentSessionId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createGameSession(insertSession: InsertGameSession): Promise<GameSession> {
    const id = this.currentSessionId++;
    const session: GameSession = { ...insertSession, id };
    this.gameSessions.set(id, session);
    return session;
  }

  async getGameSessionsByUser(userId: number): Promise<GameSession[]> {
    return Array.from(this.gameSessions.values()).filter(
      (session) => session.userId === userId,
    );
  }
}

export const storage = new MemStorage();
