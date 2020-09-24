import { resolveClassNames } from "./resolveClassNames"
import { expect } from "chai"

describe("resolveClassNames() test", () => {
    it("Case: no params should return empty string", () => {
        expect(resolveClassNames()).to.equal("")
    })

    it("Case: only local classname should return this classname", () => {
        const className = "my-class-name"

        expect(resolveClassNames(className)).to.equal(className)
    })

    it("Case: should concat local classname and args", () => {
        const className = "my-class-name"
        const extraClassName = "extra-class-name"

        expect(resolveClassNames(className, extraClassName)).to.equal(`${className} ${extraClassName}`)
    })

    it("Case: concat lokal className with array of classNames should work", () => {
        const className = "local"
        const extraNames = ["extra-1", "extra-2"]

        expect(resolveClassNames(className, extraNames)).to.equal(`${className} ${extraNames.join(" ")}`)
    })

    it("Case: concat lokal className with spread classNames should work", () => {
        const className = "local"
        const extraName1 = "extra-1"
        const extraName2 = "extra-2"

        expect(resolveClassNames(className, extraName1, extraName2)).to.equal(`${className} ${extraName1} ${extraName2}`)
    })
})
