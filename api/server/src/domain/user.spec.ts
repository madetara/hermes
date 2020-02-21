import { User } from "./user";

describe("user", () => {
    test("should be created with specified email", () => {
        const email = "test@foo.bar";
        const user = User.CreateNew(email);
        expect(user.email).toBe(email);
    });

    test("should be created with empty documents", () => {
        const user = User.CreateNew("");
        expect(user.ownedDocuments).not.toBeUndefined();
        expect(user.ownedDocuments).not.toBeNull();
        expect(user.ownedDocuments).toHaveLength(0);
    });
});
