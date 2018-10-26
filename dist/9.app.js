(window["webpackJsonpopentok_ux_components"] = window["webpackJsonpopentok_ux_components"] || []).push([[9],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.js":
/*!************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.js ***!
  \************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.dockerfile',\n    instructions: /FROM|MAINTAINER|RUN|EXPOSE|ENV|ADD|ARG|VOLUME|LABEL|USER|WORKDIR|COPY|CMD|STOPSIGNAL|SHELL|HEALTHCHECK|ENTRYPOINT/,\n    instructionAfter: /ONBUILD/,\n    variableAfter: /ENV/,\n    variable: /\\${?[\\w]+}?/,\n    tokenizer: {\n        root: [\n            { include: '@whitespace' },\n            { include: '@comment' },\n            [/(@instructionAfter)(\\s+)/, ['keyword', { token: '', next: '@instructions' }]],\n            ['', 'keyword', '@instructions']\n        ],\n        instructions: [\n            [/(@variableAfter)(\\s+)([\\w]+)/, ['keyword', '', { token: 'variable', next: '@arguments' }]],\n            [/(@instructions)/, 'keyword', '@arguments']\n        ],\n        arguments: [\n            { include: '@whitespace' },\n            { include: '@strings' },\n            [/(@variable)/, {\n                    cases: {\n                        '@eos': { token: 'variable', next: '@popall' },\n                        '@default': 'variable'\n                    }\n                }],\n            [/\\\\/, {\n                    cases: {\n                        '@eos': '',\n                        '@default': ''\n                    }\n                }],\n            [/./, {\n                    cases: {\n                        '@eos': { token: '', next: '@popall' },\n                        '@default': ''\n                    }\n                }],\n        ],\n        // Deal with white space, including comments\n        whitespace: [\n            [/\\s+/, {\n                    cases: {\n                        '@eos': { token: '', next: '@popall' },\n                        '@default': ''\n                    }\n                }],\n        ],\n        comment: [\n            [/(^#.*$)/, 'comment', '@popall']\n        ],\n        // Recognize strings, including those broken across lines with \\ (but not without)\n        strings: [\n            [/'$/, 'string', '@popall'],\n            [/'/, 'string', '@stringBody'],\n            [/\"$/, 'string', '@popall'],\n            [/\"/, 'string', '@dblStringBody']\n        ],\n        stringBody: [\n            [/[^\\\\\\$']/, {\n                    cases: {\n                        '@eos': { token: 'string', next: '@popall' },\n                        '@default': 'string'\n                    }\n                }],\n            [/\\\\./, 'string.escape'],\n            [/'$/, 'string', '@popall'],\n            [/'/, 'string', '@pop'],\n            [/(@variable)/, 'variable'],\n            [/\\\\$/, 'string'],\n            [/$/, 'string', '@popall']\n        ],\n        dblStringBody: [\n            [/[^\\\\\\$\"]/, {\n                    cases: {\n                        '@eos': { token: 'string', next: '@popall' },\n                        '@default': 'string'\n                    }\n                }],\n            [/\\\\./, 'string.escape'],\n            [/\"$/, 'string', '@popall'],\n            [/\"/, 'string', '@pop'],\n            [/(@variable)/, 'variable'],\n            [/\\\\$/, 'string'],\n            [/$/, 'string', '@popall']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack://opentok-ux-components/./node_modules/monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.js?");

/***/ })

}]);