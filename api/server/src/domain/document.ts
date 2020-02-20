import { Types } from "./types";

export class Document {
    public documentId: Types.DocumentId;

    public ownerId: Types.UserId;

    public content: Types.Content;

    private constructor(
        documentId: Types.DocumentId,
        ownerId: Types.UserId,
        content: Types.Content
    ) {
        this.documentId = documentId;
        this.ownerId = ownerId;
        this.content = content;
    }

    public static createNew(owner: Types.UserId) {
        return new Document(Types.createDocumentId(), owner, "");
    }
}
