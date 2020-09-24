/* eslint-disable no-unused-expressions */
import { filterProps } from "./filterProps"
import { expect } from "chai"

describe("filterProps() Test", () => {
    it("no params return empty object", () => {
        expect(filterProps()).to.be.empty
    })

    it("no filter returns original object", () => {
        const props = {
            testprop: 1
        }

        expect(filterProps(props)).to.equal(props)
    })

    it("with filter returns cropped object", () => {
        const origin = {
            testprop: 1
        }

        const add = {
            toBeFiltered: "hi"
        }

        const props = { ...origin, ...add }

        const filter = ["toBeFiltered"]

        expect(filterProps(props, filter)).to.deep.include(origin)
    })
})
