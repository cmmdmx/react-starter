import { resolveClassNames } from "./resolveClassNames"

describe("resolveClassNames() test", () => {
    it("Case: no params should return empty string", () => {
        expect(resolveClassNames()).toEqual("")
    })

    it("Case: only local classname should return this classname", () => {
        const className = "my-class-name"

        expect(resolveClassNames(className)).toEqual(className)
    })

    it("Case: should concat local classname and args", () => {
        const className = "my-class-name"
        const extraClassName = "extra-class-name"

        expect(resolveClassNames(className, extraClassName)).toEqual(`${className} ${extraClassName}`)
    })

    it("Case: concat lokal className with array of classNames should work", () => {
        const className = "local"
        const extraNames = ["extra-1", "extra-2"]

        expect(resolveClassNames(className, extraNames)).toEqual(`${className} ${extraNames.join(" ")}`)
    })

    it("Case: concat lokal className with spread classNames should work", () => {
        const className = "local"
        const extraName1 = "extra-1"
        const extraName2 = "extra-2"

        expect(resolveClassNames(className, extraName1, extraName2)).toEqual(`${className} ${extraName1} ${extraName2}`)
    })
})