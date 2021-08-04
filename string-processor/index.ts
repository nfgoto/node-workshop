enum Separator {
  SPACE = " ",
  DASH = "-",
  UNDERSCORE = "_"
}

function toTitleCase(s: string): string {
  const result = s.split(Separator.SPACE).map(word => {
    return `${word[0].toUpperCase()}${word.slice(1, word.length).toLowerCase()}`
  }).join(Separator.SPACE);
  return result;
}

console.assert("War And Peace" === toTitleCase("war AND peace"))
console.assert("Catcher In The Rye" === toTitleCase("Catcher in the Rye"))
console.assert("To Kill A Mocking Bird" === toTitleCase("tO kILL A mOCKING BIRD"))

function countWords(s: string): [number, string[]] {
  const hasSpace = s.includes(Separator.SPACE);
  const hasDash = s.includes(Separator.DASH);
  const hasUnderscore = s.includes(Separator.UNDERSCORE);

  let result: string[] = s.split(Separator.SPACE);

  switch (true) {
    case hasDash: result = result.flatMap(w => w.split(Separator.DASH));
    case hasUnderscore: result = result.flatMap(w => w.split(Separator.UNDERSCORE));
  }

  return [result.length, result]
}

console.assert(countWords("War And Peace")[0] === 3)
console.assert(countWords("catcher-in-the-rye")[0] === 4)
console.assert(countWords("for_whom the-bell-tolls")[0] === 5)

function toWords(s: string): string[] {
  return countWords(s)[1];
}

console.assert(toWords("War and Peace").join(Separator.SPACE) === "War and Peace")
console.assert(toWords("catcher-in-the-rye").join(Separator.DASH) === "catcher-in-the-rye")
console.assert(toWords("for_whom the-bell-tolls").every(w => "for_whom the-bell-tolls".includes(w)))

function repeat(s: string, t: number): string {
  return s.repeat(t)
}

console.assert(repeat("War", 3) === "WarWarWar")
console.assert(repeat("rye", 1) === "rye")
console.assert(repeat("bell", 0) === "")

function isAlpha(s: string): boolean {
  return (/^[a-z]+$/i).test(s)
}

console.assert(isAlpha("War and Peace") === false)
console.assert(isAlpha("Atonement") === true)
console.assert(isAlpha("1Q84") === false)

function isBlank(s: string): boolean {
  return s.trim().length === 0
}

console.assert(isBlank("War and Peace") === false)
console.assert(isBlank("    ") === true)
console.assert(isBlank("") === true)