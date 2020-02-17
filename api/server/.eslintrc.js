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
        'node'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:node/recommended'
    ],
    env: {
        "node": true,
        "es6": true
    }
};
