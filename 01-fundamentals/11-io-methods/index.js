/*
  Topic: 11-io-methods.js

  Demonstrates JavaScript basic input and output methods:
    - Console output (log, warn, error)
    - Alert dialog
    - Prompt input
    - Confirm dialog
    - Document.write (not recommended)

  Note:
    - Alert, prompt, confirm are synchronous and block script execution.
    - Avoid document.write() in modern apps.
*/

// --- 1. Console Output: log, warn, error ---

console.log("✅ This is a regular log message.");
console.warn("⚠️ This is a warning message.");
console.error("❌ This is an error message.");

// --- 2. Alert Box: simple message dialog, blocks execution ---

alert("📢 Welcome to JavaScript I/O Methods!");

// --- 3. Prompt Input: text input dialog, returns string or null ---

let name = prompt("📝 What's your name?");
if (!name) {
    // This will cover both: null (Cancel) and empty string ("")
    console.log("❌ User canceled or left the name blank.");
} else {
    console.log("👤 User entered name:", name);
}

// --- 4. Confirm Dialog: OK/Cancel, returns true or false ---

let confirmed = confirm("❓ Do you want to continue?");
if (confirmed) {
    console.log("✅ User chose to continue.");
} else {
    console.log("❌ User canceled the action.");
}

// --- 5. Document Write: writes to HTML document (not recommended) ---
// ⚠️ Must be run in a browser with HTML context
// Running in Node.js or console-only environments won't display this properly
document.write("<p>📄 This is written using document.write()</p>");


/*
  🔗 Note:
    - Use console methods for development and debugging.
    - Use alert, prompt, confirm sparingly in demos or small scripts.
    - Avoid document.write() to prevent page overwrite issues.
*/
