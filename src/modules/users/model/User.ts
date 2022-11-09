import { v4 as uuidV4 } from "uuid";

class User {
    id?: string;
    name: string;
    admin: boolean;
    email: string;
    created_at: Date;
    updated_at: Date;

    constructor(name?: string, email?: string) {
        this.id = uuidV4();
        this.name = name ?? undefined;
        this.email = email ?? undefined;
        this.admin = false;
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}

export { User };
