import { UserId, Email, DocumentId, createUserId } from "./types";

export class User {
    public id: UserId;
    public email: Email;
    public ownedDocuments: DocumentId[];

    private constructor(
        id: UserId,
        email: Email,
        ownedDocuments: DocumentId[]
    ) {
        this.id = id;
        this.email = email;
        this.ownedDocuments = ownedDocuments;
    }

    public static CreateNew(email: Email): User {
        return new User(createUserId(), email, []);
    }
}
