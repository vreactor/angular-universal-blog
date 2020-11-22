module.exports = {
    plugins: ['rxjs'],
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@angular-eslint/all',
        'plugin:prettier/recommended'
    ],
    rules: {
        '@angular-eslint/no-host-metadata-property': 'off',
        '@angular-eslint/use-injectable-provided-in': 'off',
        '@angular-eslint/use-component-view-encapsulation': 'off',
        '@angular-eslint/no-forward-ref': 'off',
        '@angular-eslint/no-output-native': 'off',
        '@angular-eslint/template/cyclomatic-complexity': 'off',
        'no-var': 'error',
        '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'none' }],
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array-simple'
            }
        ],
        '@angular-eslint/template/no-call-expression': 'off',
        '@angular-eslint/prefer-on-push-component-change-detection': 'off',
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true
            }
        ],
        'max-len': [
            'error',
            {
                code: 160,
                ignoreUrls: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignorePattern: '^import |^export +(.*?)'
            }
        ],
        'grouped-accessor-pairs': ['error', 'setBeforeGet'],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'typeLike',
                format: ['PascalCase']
            },
            {
                selector: 'property',
                modifiers: ['private'],
                format: ['camelCase'],
                leadingUnderscore: 'require'
            },
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'allow'
            }
        ],
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    // Index signature
                    'signature',

                    // Fields
                    'private-static-field',
                    'protected-static-field',
                    'public-static-field',

                    'private-instance-field',
                    'private-decorated-field',
                    'protected-decorated-field',
                    'protected-instance-field',
                    'public-decorated-field',
                    'public-instance-field',

                    'private-abstract-field',
                    'protected-abstract-field',
                    'public-abstract-field',

                    'private-constructor',
                    'protected-constructor',
                    'public-constructor',

                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',

                    'public-decorated-method',
                    'protected-decorated-method',
                    'private-decorated-method',

                    'public-instance-method',
                    'protected-instance-method',
                    'private-instance-method',

                    'public-abstract-method',
                    'protected-abstract-method',
                    'private-abstract-method'
                ]
            }
        ]
    },
    overrides: [
        {
            files: ['*.ts'],
            rules: {
                'rxjs/no-async-subscribe': 'error',
                'rxjs/no-ignored-observable': 'error',
                'rxjs/no-nested-subscribe': 'error',
                'rxjs/no-unbound-methods': 'error',
                'rxjs/throw-error': 'error',
                'rxjs/no-subject-value': 'error',
                'rxjs/suffix-subjects': ['error', { suffix: '\\$' }],
                'rxjs/prefer-observer': 'error'
            }
        },
        {
            files: ['*.html'],
            parser: '@angular-eslint/template-parser',
            rules: {
                'max-len': 'off'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 2020,
        createDefaultProgram: true,
        sourceType: 'module'
    }
};
