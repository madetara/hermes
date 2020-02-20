import { Types } from "./types";

export class User {
    public id: Types.UserId;
    public email: Types.Email;
    public ownedDocuments: Types.DocumentId[];

    private constructor(
        id: Types.UserId,
        email: Types.Email,
        ownedDocuments: Types.DocumentId[]
    ) {
        this.id = id;
        this.email = email;
        this.ownedDocuments = ownedDocuments;
    }

    public static CreateNew(email: Types.Email): User {
        return new User(Types.createUserId(), email, []);
    }
}
