// Copyright 2024 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

assertTrue(%StringWrapperToPrimitiveProtector());

let x = new String('old');

Object.defineProperty(Object.prototype, Symbol.toPrimitive,
                      {value: () => { return 'new' }});

assertFalse(%StringWrapperToPrimitiveProtector());

assertEquals('got new', 'got ' + x);
