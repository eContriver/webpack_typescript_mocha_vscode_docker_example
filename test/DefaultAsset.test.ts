// Copyright (c) 2021 eContriver LLC

import { ExampleImpl } from '../src/ExampleImpl';
import { assert } from "chai";

describe("ExampleImpl", function() {
    describe("changeIt", function () {
        it("checks that the value changed", function () {
            let impl: ExampleImpl = new ExampleImpl();
            impl.changeIt();
            assert.equal(impl.value, true);
        });
    });
});
