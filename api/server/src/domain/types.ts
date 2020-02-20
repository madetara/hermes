import * as uu from "uuid/v4";

export namespace Types {
    export type UUID = string;

    export type UserId = UUID;

    export type Email = string;

    export type DocumentId = UUID;

    export type Content = string;

    export function createUserId(): UserId {
        return createUUID();
    }

    export function createDocumentId(): DocumentId {
        return createUUID();
    }

    function createUUID(): UUID {
        return uu.default();
    }
}
