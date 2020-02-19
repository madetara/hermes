module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true
        }
    },
    plugins: [
        '@typescript-eslint',
        "prettier",
        'node'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:node/recommended',
        "plugin:prettier/recommended"
    ],
    env: {
        "node": true,
        "es6": true
    },
    "rules": {
        "prettier/prettier": "error",
        "node/no-missing-import": ["error", {
            "tryExtensions": [".js", ".json", ".node", ".ts"]
        }]
    }
};
