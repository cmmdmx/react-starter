export const resolveClassNames = (...classNameArgs) => {
  const classNames = [...classNameArgs].filter((n) => n !== false)

  return classNames
    .filter((name) => name !== undefined)
    .map((name) => (Array.isArray(name) ? name.join(" ") : name))
    .join(" ")
}
