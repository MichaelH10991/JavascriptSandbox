let a = 5
let b = 10
// string literals enable us to make use of syntactic sugar, bascially more readable
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`)

// nested string literals

// if isLargeScreen do nothing, else if icon isCollapsed print 'expander' else 'collapser'
const classes = `header ${
  isLargeScreen() ? "" : `icon-{item.isCollapsed ? 'expander' : 'collapser'}`
}`
