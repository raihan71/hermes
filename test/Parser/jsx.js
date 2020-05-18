/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// RUN: %hermes -parse-jsx -dump-ast -pretty-json %s | %FileCheck %s --match-full-lines

// CHECK: {
// CHECK-NEXT:   "type": "Program",
// CHECK-NEXT:   "body": [

<><a /></>;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "JSXFragment",
// CHECK-NEXT:         "openingFragment": {
// CHECK-NEXT:           "type": "JSXOpeningFragment"
// CHECK-NEXT:         },
// CHECK-NEXT:         "children": [
// CHECK-NEXT:           {
// CHECK-NEXT:             "type": "JSXElement",
// CHECK-NEXT:             "openingElement": {
// CHECK-NEXT:               "type": "JSXOpeningElement",
// CHECK-NEXT:               "name": {
// CHECK-NEXT:                 "type": "JSXIdentifier",
// CHECK-NEXT:                 "name": "a"
// CHECK-NEXT:               },
// CHECK-NEXT:               "attributes": [],
// CHECK-NEXT:               "selfClosing": true
// CHECK-NEXT:             },
// CHECK-NEXT:             "children": [],
// CHECK-NEXT:             "closingElement": null
// CHECK-NEXT:           }
// CHECK-NEXT:         ],
// CHECK-NEXT:         "closingFragment": {
// CHECK-NEXT:           "type": "JSXClosingFragment"
// CHECK-NEXT:         }
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     },

<a></a>;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "JSXElement",
// CHECK-NEXT:         "openingElement": {
// CHECK-NEXT:           "type": "JSXOpeningElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a"
// CHECK-NEXT:           },
// CHECK-NEXT:           "attributes": [],
// CHECK-NEXT:           "selfClosing": false
// CHECK-NEXT:         },
// CHECK-NEXT:         "children": [],
// CHECK-NEXT:         "closingElement": {
// CHECK-NEXT:           "type": "JSXClosingElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a"
// CHECK-NEXT:           }
// CHECK-NEXT:         }
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     },

<a:b></a:b>;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "JSXElement",
// CHECK-NEXT:         "openingElement": {
// CHECK-NEXT:           "type": "JSXOpeningElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXNamespacedName",
// CHECK-NEXT:             "namespace": {
// CHECK-NEXT:               "type": "JSXIdentifier",
// CHECK-NEXT:               "name": "a"
// CHECK-NEXT:             },
// CHECK-NEXT:             "name": {
// CHECK-NEXT:               "type": "JSXIdentifier",
// CHECK-NEXT:               "name": "b"
// CHECK-NEXT:             }
// CHECK-NEXT:           },
// CHECK-NEXT:           "attributes": [],
// CHECK-NEXT:           "selfClosing": false
// CHECK-NEXT:         },
// CHECK-NEXT:         "children": [],
// CHECK-NEXT:         "closingElement": {
// CHECK-NEXT:           "type": "JSXClosingElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXNamespacedName",
// CHECK-NEXT:             "namespace": {
// CHECK-NEXT:               "type": "JSXIdentifier",
// CHECK-NEXT:               "name": "a"
// CHECK-NEXT:             },
// CHECK-NEXT:             "name": {
// CHECK-NEXT:               "type": "JSXIdentifier",
// CHECK-NEXT:               "name": "b"
// CHECK-NEXT:             }
// CHECK-NEXT:           }
// CHECK-NEXT:         }
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     },

<a.b></a.b>;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "JSXElement",
// CHECK-NEXT:         "openingElement": {
// CHECK-NEXT:           "type": "JSXOpeningElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXMemberExpression",
// CHECK-NEXT:             "object": {
// CHECK-NEXT:               "type": "JSXIdentifier",
// CHECK-NEXT:               "name": "a"
// CHECK-NEXT:             },
// CHECK-NEXT:             "property": {
// CHECK-NEXT:               "type": "JSXIdentifier",
// CHECK-NEXT:               "name": "b"
// CHECK-NEXT:             }
// CHECK-NEXT:           },
// CHECK-NEXT:           "attributes": [],
// CHECK-NEXT:           "selfClosing": false
// CHECK-NEXT:         },
// CHECK-NEXT:         "children": [],
// CHECK-NEXT:         "closingElement": {
// CHECK-NEXT:           "type": "JSXClosingElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXMemberExpression",
// CHECK-NEXT:             "object": {
// CHECK-NEXT:               "type": "JSXIdentifier",
// CHECK-NEXT:               "name": "a"
// CHECK-NEXT:             },
// CHECK-NEXT:             "property": {
// CHECK-NEXT:               "type": "JSXIdentifier",
// CHECK-NEXT:               "name": "b"
// CHECK-NEXT:             }
// CHECK-NEXT:           }
// CHECK-NEXT:         }
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     },

<a><b></b></a>;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "JSXElement",
// CHECK-NEXT:         "openingElement": {
// CHECK-NEXT:           "type": "JSXOpeningElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a"
// CHECK-NEXT:           },
// CHECK-NEXT:           "attributes": [],
// CHECK-NEXT:           "selfClosing": false
// CHECK-NEXT:         },
// CHECK-NEXT:         "children": [
// CHECK-NEXT:           {
// CHECK-NEXT:             "type": "JSXElement",
// CHECK-NEXT:             "openingElement": {
// CHECK-NEXT:               "type": "JSXOpeningElement",
// CHECK-NEXT:               "name": {
// CHECK-NEXT:                 "type": "JSXIdentifier",
// CHECK-NEXT:                 "name": "b"
// CHECK-NEXT:               },
// CHECK-NEXT:               "attributes": [],
// CHECK-NEXT:               "selfClosing": false
// CHECK-NEXT:             },
// CHECK-NEXT:             "children": [],
// CHECK-NEXT:             "closingElement": {
// CHECK-NEXT:               "type": "JSXClosingElement",
// CHECK-NEXT:               "name": {
// CHECK-NEXT:                 "type": "JSXIdentifier",
// CHECK-NEXT:                 "name": "b"
// CHECK-NEXT:               }
// CHECK-NEXT:             }
// CHECK-NEXT:           }
// CHECK-NEXT:         ],
// CHECK-NEXT:         "closingElement": {
// CHECK-NEXT:           "type": "JSXClosingElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a"
// CHECK-NEXT:           }
// CHECK-NEXT:         }
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     },

<a b:c d />;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "JSXElement",
// CHECK-NEXT:         "openingElement": {
// CHECK-NEXT:           "type": "JSXOpeningElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a"
// CHECK-NEXT:           },
// CHECK-NEXT:           "attributes": [
// CHECK-NEXT:             {
// CHECK-NEXT:               "type": "JSXAttribute",
// CHECK-NEXT:               "name": {
// CHECK-NEXT:                 "type": "JSXNamespacedName",
// CHECK-NEXT:                 "namespace": {
// CHECK-NEXT:                   "type": "JSXIdentifier",
// CHECK-NEXT:                   "name": "b"
// CHECK-NEXT:                 },
// CHECK-NEXT:                 "name": {
// CHECK-NEXT:                   "type": "JSXIdentifier",
// CHECK-NEXT:                   "name": "c"
// CHECK-NEXT:                 }
// CHECK-NEXT:               },
// CHECK-NEXT:               "value": null
// CHECK-NEXT:             },
// CHECK-NEXT:             {
// CHECK-NEXT:               "type": "JSXAttribute",
// CHECK-NEXT:               "name": {
// CHECK-NEXT:                 "type": "JSXIdentifier",
// CHECK-NEXT:                 "name": "d"
// CHECK-NEXT:               },
// CHECK-NEXT:               "value": null
// CHECK-NEXT:             }
// CHECK-NEXT:           ],
// CHECK-NEXT:           "selfClosing": true
// CHECK-NEXT:         },
// CHECK-NEXT:         "children": [],
// CHECK-NEXT:         "closingElement": null
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     },

<a {...src} b='1' c="2" d={3}></a>;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "JSXElement",
// CHECK-NEXT:         "openingElement": {
// CHECK-NEXT:           "type": "JSXOpeningElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a"
// CHECK-NEXT:           },
// CHECK-NEXT:           "attributes": [
// CHECK-NEXT:             {
// CHECK-NEXT:               "type": "JSXSpreadAttribute",
// CHECK-NEXT:               "argument": {
// CHECK-NEXT:                 "type": "Identifier",
// CHECK-NEXT:                 "name": "src",
// CHECK-NEXT:                 "typeAnnotation": null
// CHECK-NEXT:               }
// CHECK-NEXT:             },
// CHECK-NEXT:             {
// CHECK-NEXT:               "type": "JSXAttribute",
// CHECK-NEXT:               "name": {
// CHECK-NEXT:                 "type": "JSXIdentifier",
// CHECK-NEXT:                 "name": "b"
// CHECK-NEXT:               },
// CHECK-NEXT:               "value": {
// CHECK-NEXT:                 "type": "StringLiteral",
// CHECK-NEXT:                 "value": "1"
// CHECK-NEXT:               }
// CHECK-NEXT:             },
// CHECK-NEXT:             {
// CHECK-NEXT:               "type": "JSXAttribute",
// CHECK-NEXT:               "name": {
// CHECK-NEXT:                 "type": "JSXIdentifier",
// CHECK-NEXT:                 "name": "c"
// CHECK-NEXT:               },
// CHECK-NEXT:               "value": {
// CHECK-NEXT:                 "type": "StringLiteral",
// CHECK-NEXT:                 "value": "2"
// CHECK-NEXT:               }
// CHECK-NEXT:             },
// CHECK-NEXT:             {
// CHECK-NEXT:               "type": "JSXAttribute",
// CHECK-NEXT:               "name": {
// CHECK-NEXT:                 "type": "JSXIdentifier",
// CHECK-NEXT:                 "name": "d"
// CHECK-NEXT:               },
// CHECK-NEXT:               "value": {
// CHECK-NEXT:                 "type": "JSXExpressionContainer",
// CHECK-NEXT:                 "expression": {
// CHECK-NEXT:                   "type": "NumericLiteral",
// CHECK-NEXT:                   "value": 3,
// CHECK-NEXT:                   "raw": "3"
// CHECK-NEXT:                 }
// CHECK-NEXT:               }
// CHECK-NEXT:             }
// CHECK-NEXT:           ],
// CHECK-NEXT:           "selfClosing": false
// CHECK-NEXT:         },
// CHECK-NEXT:         "children": [],
// CHECK-NEXT:         "closingElement": {
// CHECK-NEXT:           "type": "JSXClosingElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a"
// CHECK-NEXT:           }
// CHECK-NEXT:         }
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     },

<a>hello<b />world</a>;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "JSXElement",
// CHECK-NEXT:         "openingElement": {
// CHECK-NEXT:           "type": "JSXOpeningElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a"
// CHECK-NEXT:           },
// CHECK-NEXT:           "attributes": [],
// CHECK-NEXT:           "selfClosing": false
// CHECK-NEXT:         },
// CHECK-NEXT:         "children": [
// CHECK-NEXT:           {
// CHECK-NEXT:             "type": "JSXText",
// CHECK-NEXT:             "value": "hello",
// CHECK-NEXT:             "raw": "hello"
// CHECK-NEXT:           },
// CHECK-NEXT:           {
// CHECK-NEXT:             "type": "JSXElement",
// CHECK-NEXT:             "openingElement": {
// CHECK-NEXT:               "type": "JSXOpeningElement",
// CHECK-NEXT:               "name": {
// CHECK-NEXT:                 "type": "JSXIdentifier",
// CHECK-NEXT:                 "name": "b"
// CHECK-NEXT:               },
// CHECK-NEXT:               "attributes": [],
// CHECK-NEXT:               "selfClosing": true
// CHECK-NEXT:             },
// CHECK-NEXT:             "children": [],
// CHECK-NEXT:             "closingElement": null
// CHECK-NEXT:           },
// CHECK-NEXT:           {
// CHECK-NEXT:             "type": "JSXText",
// CHECK-NEXT:             "value": "world",
// CHECK-NEXT:             "raw": "world"
// CHECK-NEXT:           }
// CHECK-NEXT:         ],
// CHECK-NEXT:         "closingElement": {
// CHECK-NEXT:           "type": "JSXClosingElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a"
// CHECK-NEXT:           }
// CHECK-NEXT:         }
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     },

<a>{...b}</a>;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "JSXElement",
// CHECK-NEXT:         "openingElement": {
// CHECK-NEXT:           "type": "JSXOpeningElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a"
// CHECK-NEXT:           },
// CHECK-NEXT:           "attributes": [],
// CHECK-NEXT:           "selfClosing": false
// CHECK-NEXT:         },
// CHECK-NEXT:         "children": [
// CHECK-NEXT:           {
// CHECK-NEXT:             "type": "JSXSpreadChild",
// CHECK-NEXT:             "expression": {
// CHECK-NEXT:               "type": "Identifier",
// CHECK-NEXT:               "name": "b",
// CHECK-NEXT:               "typeAnnotation": null
// CHECK-NEXT:             }
// CHECK-NEXT:           }
// CHECK-NEXT:         ],
// CHECK-NEXT:         "closingElement": {
// CHECK-NEXT:           "type": "JSXClosingElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a"
// CHECK-NEXT:           }
// CHECK-NEXT:         }
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     },

<a-b></a-b>;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "JSXElement",
// CHECK-NEXT:         "openingElement": {
// CHECK-NEXT:           "type": "JSXOpeningElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a-b"
// CHECK-NEXT:           },
// CHECK-NEXT:           "attributes": [],
// CHECK-NEXT:           "selfClosing": false
// CHECK-NEXT:         },
// CHECK-NEXT:         "children": [],
// CHECK-NEXT:         "closingElement": {
// CHECK-NEXT:           "type": "JSXClosingElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a-b"
// CHECK-NEXT:           }
// CHECK-NEXT:         }
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     },

1 + <a>hello</a> + 2;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "BinaryExpression",
// CHECK-NEXT:         "left": {
// CHECK-NEXT:           "type": "BinaryExpression",
// CHECK-NEXT:           "left": {
// CHECK-NEXT:             "type": "NumericLiteral",
// CHECK-NEXT:             "value": 1,
// CHECK-NEXT:             "raw": "1"
// CHECK-NEXT:           },
// CHECK-NEXT:           "right": {
// CHECK-NEXT:             "type": "JSXElement",
// CHECK-NEXT:             "openingElement": {
// CHECK-NEXT:               "type": "JSXOpeningElement",
// CHECK-NEXT:               "name": {
// CHECK-NEXT:                 "type": "JSXIdentifier",
// CHECK-NEXT:                 "name": "a"
// CHECK-NEXT:               },
// CHECK-NEXT:               "attributes": [],
// CHECK-NEXT:               "selfClosing": false
// CHECK-NEXT:             },
// CHECK-NEXT:             "children": [
// CHECK-NEXT:               {
// CHECK-NEXT:                 "type": "JSXText",
// CHECK-NEXT:                 "value": "hello",
// CHECK-NEXT:                 "raw": "hello"
// CHECK-NEXT:               }
// CHECK-NEXT:             ],
// CHECK-NEXT:             "closingElement": {
// CHECK-NEXT:               "type": "JSXClosingElement",
// CHECK-NEXT:               "name": {
// CHECK-NEXT:                 "type": "JSXIdentifier",
// CHECK-NEXT:                 "name": "a"
// CHECK-NEXT:               }
// CHECK-NEXT:             }
// CHECK-NEXT:           },
// CHECK-NEXT:           "operator": "+"
// CHECK-NEXT:         },
// CHECK-NEXT:         "right": {
// CHECK-NEXT:           "type": "NumericLiteral",
// CHECK-NEXT:           "value": 2,
// CHECK-NEXT:           "raw": "2"
// CHECK-NEXT:         },
// CHECK-NEXT:         "operator": "+"
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     },

<a {...{x: 1}} />;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "JSXElement",
// CHECK-NEXT:         "openingElement": {
// CHECK-NEXT:           "type": "JSXOpeningElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a"
// CHECK-NEXT:           },
// CHECK-NEXT:           "attributes": [
// CHECK-NEXT:             {
// CHECK-NEXT:               "type": "JSXSpreadAttribute",
// CHECK-NEXT:               "argument": {
// CHECK-NEXT:                 "type": "ObjectExpression",
// CHECK-NEXT:                 "properties": [
// CHECK-NEXT:                   {
// CHECK-NEXT:                     "type": "Property",
// CHECK-NEXT:                     "key": {
// CHECK-NEXT:                       "type": "Identifier",
// CHECK-NEXT:                       "name": "x",
// CHECK-NEXT:                       "typeAnnotation": null
// CHECK-NEXT:                     },
// CHECK-NEXT:                     "value": {
// CHECK-NEXT:                       "type": "NumericLiteral",
// CHECK-NEXT:                       "value": 1,
// CHECK-NEXT:                       "raw": "1"
// CHECK-NEXT:                     },
// CHECK-NEXT:                     "kind": "init",
// CHECK-NEXT:                     "computed": false
// CHECK-NEXT:                   }
// CHECK-NEXT:                 ]
// CHECK-NEXT:               }
// CHECK-NEXT:             }
// CHECK-NEXT:           ],
// CHECK-NEXT:           "selfClosing": true
// CHECK-NEXT:         },
// CHECK-NEXT:         "children": [],
// CHECK-NEXT:         "closingElement": null
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     },

<a-b c-d="hello" e-f>world</a-b>;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "JSXElement",
// CHECK-NEXT:         "openingElement": {
// CHECK-NEXT:           "type": "JSXOpeningElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a-b"
// CHECK-NEXT:           },
// CHECK-NEXT:           "attributes": [
// CHECK-NEXT:             {
// CHECK-NEXT:               "type": "JSXAttribute",
// CHECK-NEXT:               "name": {
// CHECK-NEXT:                 "type": "JSXIdentifier",
// CHECK-NEXT:                 "name": "c-d"
// CHECK-NEXT:               },
// CHECK-NEXT:               "value": {
// CHECK-NEXT:                 "type": "StringLiteral",
// CHECK-NEXT:                 "value": "hello"
// CHECK-NEXT:               }
// CHECK-NEXT:             },
// CHECK-NEXT:             {
// CHECK-NEXT:               "type": "JSXAttribute",
// CHECK-NEXT:               "name": {
// CHECK-NEXT:                 "type": "JSXIdentifier",
// CHECK-NEXT:                 "name": "e-f"
// CHECK-NEXT:               },
// CHECK-NEXT:               "value": null
// CHECK-NEXT:             }
// CHECK-NEXT:           ],
// CHECK-NEXT:           "selfClosing": false
// CHECK-NEXT:         },
// CHECK-NEXT:         "children": [
// CHECK-NEXT:           {
// CHECK-NEXT:             "type": "JSXText",
// CHECK-NEXT:             "value": "world",
// CHECK-NEXT:             "raw": "world"
// CHECK-NEXT:           }
// CHECK-NEXT:         ],
// CHECK-NEXT:         "closingElement": {
// CHECK-NEXT:           "type": "JSXClosingElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a-b"
// CHECK-NEXT:           }
// CHECK-NEXT:         }
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     },

<a:b c:d />;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "JSXElement",
// CHECK-NEXT:         "openingElement": {
// CHECK-NEXT:           "type": "JSXOpeningElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXNamespacedName",
// CHECK-NEXT:             "namespace": {
// CHECK-NEXT:               "type": "JSXIdentifier",
// CHECK-NEXT:               "name": "a"
// CHECK-NEXT:             },
// CHECK-NEXT:             "name": {
// CHECK-NEXT:               "type": "JSXIdentifier",
// CHECK-NEXT:               "name": "b"
// CHECK-NEXT:             }
// CHECK-NEXT:           },
// CHECK-NEXT:           "attributes": [
// CHECK-NEXT:             {
// CHECK-NEXT:               "type": "JSXAttribute",
// CHECK-NEXT:               "name": {
// CHECK-NEXT:                 "type": "JSXNamespacedName",
// CHECK-NEXT:                 "namespace": {
// CHECK-NEXT:                   "type": "JSXIdentifier",
// CHECK-NEXT:                   "name": "c"
// CHECK-NEXT:                 },
// CHECK-NEXT:                 "name": {
// CHECK-NEXT:                   "type": "JSXIdentifier",
// CHECK-NEXT:                   "name": "d"
// CHECK-NEXT:                 }
// CHECK-NEXT:               },
// CHECK-NEXT:               "value": null
// CHECK-NEXT:             }
// CHECK-NEXT:           ],
// CHECK-NEXT:           "selfClosing": true
// CHECK-NEXT:         },
// CHECK-NEXT:         "children": [],
// CHECK-NEXT:         "closingElement": null
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     },

<></>;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "JSXFragment",
// CHECK-NEXT:         "openingFragment": {
// CHECK-NEXT:           "type": "JSXOpeningFragment"
// CHECK-NEXT:         },
// CHECK-NEXT:         "children": [],
// CHECK-NEXT:         "closingFragment": {
// CHECK-NEXT:           "type": "JSXClosingFragment"
// CHECK-NEXT:         }
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     },

<outer
  attr={() => {
      return (<inner />);
  }}
/>;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "JSXElement",
// CHECK-NEXT:         "openingElement": {
// CHECK-NEXT:           "type": "JSXOpeningElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "outer"
// CHECK-NEXT:           },
// CHECK-NEXT:           "attributes": [
// CHECK-NEXT:             {
// CHECK-NEXT:               "type": "JSXAttribute",
// CHECK-NEXT:               "name": {
// CHECK-NEXT:                 "type": "JSXIdentifier",
// CHECK-NEXT:                 "name": "attr"
// CHECK-NEXT:               },
// CHECK-NEXT:               "value": {
// CHECK-NEXT:                 "type": "JSXExpressionContainer",
// CHECK-NEXT:                 "expression": {
// CHECK-NEXT:                   "type": "ArrowFunctionExpression",
// CHECK-NEXT:                   "id": null,
// CHECK-NEXT:                   "params": [],
// CHECK-NEXT:                   "body": {
// CHECK-NEXT:                     "type": "BlockStatement",
// CHECK-NEXT:                     "body": [
// CHECK-NEXT:                       {
// CHECK-NEXT:                         "type": "ReturnStatement",
// CHECK-NEXT:                         "argument": {
// CHECK-NEXT:                           "type": "JSXElement",
// CHECK-NEXT:                           "openingElement": {
// CHECK-NEXT:                             "type": "JSXOpeningElement",
// CHECK-NEXT:                             "name": {
// CHECK-NEXT:                               "type": "JSXIdentifier",
// CHECK-NEXT:                               "name": "inner"
// CHECK-NEXT:                             },
// CHECK-NEXT:                             "attributes": [],
// CHECK-NEXT:                             "selfClosing": true
// CHECK-NEXT:                           },
// CHECK-NEXT:                           "children": [],
// CHECK-NEXT:                           "closingElement": null
// CHECK-NEXT:                         }
// CHECK-NEXT:                       }
// CHECK-NEXT:                     ]
// CHECK-NEXT:                   },
// CHECK-NEXT:                   "expression": false,
// CHECK-NEXT:                   "async": false
// CHECK-NEXT:                 }
// CHECK-NEXT:               }
// CHECK-NEXT:             }
// CHECK-NEXT:           ],
// CHECK-NEXT:           "selfClosing": true
// CHECK-NEXT:         },
// CHECK-NEXT:         "children": [],
// CHECK-NEXT:         "closingElement": null
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     },

<a foo="abc
  def" />;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "JSXElement",
// CHECK-NEXT:         "openingElement": {
// CHECK-NEXT:           "type": "JSXOpeningElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a"
// CHECK-NEXT:           },
// CHECK-NEXT:           "attributes": [
// CHECK-NEXT:             {
// CHECK-NEXT:               "type": "JSXAttribute",
// CHECK-NEXT:               "name": {
// CHECK-NEXT:                 "type": "JSXIdentifier",
// CHECK-NEXT:                 "name": "foo"
// CHECK-NEXT:               },
// CHECK-NEXT:               "value": {
// CHECK-NEXT:                 "type": "StringLiteral",
// CHECK-NEXT:                 "value": "abc\n  def"
// CHECK-NEXT:               }
// CHECK-NEXT:             }
// CHECK-NEXT:           ],
// CHECK-NEXT:           "selfClosing": true
// CHECK-NEXT:         },
// CHECK-NEXT:         "children": [],
// CHECK-NEXT:         "closingElement": null
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     },

<a><>foo</></a>;
// CHECK-NEXT:     {
// CHECK-NEXT:       "type": "ExpressionStatement",
// CHECK-NEXT:       "expression": {
// CHECK-NEXT:         "type": "JSXElement",
// CHECK-NEXT:         "openingElement": {
// CHECK-NEXT:           "type": "JSXOpeningElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a"
// CHECK-NEXT:           },
// CHECK-NEXT:           "attributes": [],
// CHECK-NEXT:           "selfClosing": false
// CHECK-NEXT:         },
// CHECK-NEXT:         "children": [
// CHECK-NEXT:           {
// CHECK-NEXT:             "type": "JSXFragment",
// CHECK-NEXT:             "openingFragment": {
// CHECK-NEXT:               "type": "JSXOpeningFragment"
// CHECK-NEXT:             },
// CHECK-NEXT:             "children": [
// CHECK-NEXT:               {
// CHECK-NEXT:                 "type": "JSXText",
// CHECK-NEXT:                 "value": "foo",
// CHECK-NEXT:                 "raw": "foo"
// CHECK-NEXT:               }
// CHECK-NEXT:             ],
// CHECK-NEXT:             "closingFragment": {
// CHECK-NEXT:               "type": "JSXClosingFragment"
// CHECK-NEXT:             }
// CHECK-NEXT:           }
// CHECK-NEXT:         ],
// CHECK-NEXT:         "closingElement": {
// CHECK-NEXT:           "type": "JSXClosingElement",
// CHECK-NEXT:           "name": {
// CHECK-NEXT:             "type": "JSXIdentifier",
// CHECK-NEXT:             "name": "a"
// CHECK-NEXT:           }
// CHECK-NEXT:         }
// CHECK-NEXT:       },
// CHECK-NEXT:       "directive": null
// CHECK-NEXT:     }

// CHECK-NEXT:   ]
// CHECK-NEXT: }
