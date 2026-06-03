// Drop down

// 2 Types of DD

// 1. Static drop down - The value will never changes - Gender/country
    // a. Single select DD
    // b. Multi select DD


// 2. Dynamic drop down - The value will be changable - electornics
    // a. Single select DD
    // b. Multi select DD


// Developement of DD

// 1. Using <select> tag
// 2. NON select tag - div, span, li, ul,......


// 1. DD developed using <select> tag

// Step by step procedure to select the value from the DD

// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Get the value from the drop down using - 
// selectOption("value", {label or value or index})

// Example: page.locator("#dd").selectOption("AL", {value: "DZ"} or {label: "Bahrain"})
// OR {index:10}

// 4. If the drop down is multi-select - selectOption(["AS", "BS", "CS"])


// ***********************************************/

// 2. DD developed using NON select tag

// Step by step procedure to select the value from the DD


// 1. Launch the url
// 2. Locate the drop down element by writing the locator
// 3. Click on the drop down element identified in the step #2
// 4. Identify and click on the element that you want to select from the drop down

