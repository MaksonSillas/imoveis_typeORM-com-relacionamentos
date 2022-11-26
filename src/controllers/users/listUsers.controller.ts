import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { listUsersService } from "../../services/users/listUsers.service";

export async function listUsersController(req: Request, res: Response) {
  try {
    const users = await listUsersService();

    return res.send(users);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
}
