import * as uu from "uuid/v4";

export type UUID = string;

export type UserId = UUID;

export type Email = string;

export type DocumentId = UUID;

export type Content = string;

function createUUID(): UUID {
    return uu.default();
}

export function createUserId(): UserId {
    return createUUID();
}

export function createDocumentId(): DocumentId {
    return createUUID();
}
