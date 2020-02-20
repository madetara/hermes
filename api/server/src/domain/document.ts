import { DocumentId, UserId, Content, createDocumentId } from "./types";

export class Document {
    public documentId: DocumentId;

    public ownerId: UserId;

    public content: Content;

    private constructor(
        documentId: DocumentId,
        ownerId: UserId,
        content: Content
    ) {
        this.documentId = documentId;
        this.ownerId = ownerId;
        this.content = content;
    }

    public static createNew(owner: UserId): Document {
        return new Document(createDocumentId(), owner, "");
    }
}
