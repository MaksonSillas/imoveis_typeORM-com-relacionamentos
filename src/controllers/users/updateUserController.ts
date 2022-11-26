import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import { IUserUpdate } from "../../interfaces/users";
import { updateUserService } from "../../services/users/updateUser.service";

export async function updateUserController(req: Request, res: Response) {
  try {
    const { id: id_params } = req.params;
    const data: IUserUpdate = req.validatedBody;
    await updateUserService(id_params, data);

    return res.status(200).json({ message: "User update" });
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
}
