module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": 'off',
        "@typescript-eslint/explicit-function-return-type": "off",
        "indent": ['error', 'tab'],
        "@typescript-eslint/indent": ['error', 'tab'],
		"no-tabs": ['error', { allowIndentationTabs: true }],
		"react/react-in-jsx-scope": 'off',
		"react/prop-types": 'off',
		"jsx-quotes": ['error', 'prefer-double'],
        "@typescript-eslint/promise-function-async": 'off',
    }
}
