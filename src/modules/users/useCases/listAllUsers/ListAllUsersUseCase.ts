import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const userAdmin = this.usersRepository.findById(user_id);

        if (!userAdmin) {
            throw new Error("User not Found");
        }

        if (!userAdmin.admin) {
            throw new Error("User is not a Admin!");
        }

        return this.usersRepository.list();
    }
}

export { ListAllUsersUseCase };
