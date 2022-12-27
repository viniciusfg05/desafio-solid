import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id?: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (user === undefined) {
      throw new Error("User already exists!");
    }

    if (user.admin === false) {
      throw new Error("User not admin!");
    }

    const userList = this.usersRepository.list();

    return userList;
  }
}

export { ListAllUsersUseCase };
