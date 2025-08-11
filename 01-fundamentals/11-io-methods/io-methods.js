/*
  Topic: 11-io-methods.js

  Demonstrates JavaScript basic input and output methods:
    - Console output (log, warn, error)
    - Alert dialog
    - Prompt input
    - Confirm dialog
    - Document.write (not recommended)

  Note:
    - Alert, prompt, and confirm are synchronous and block script execution until dismissed.
    - Avoid document.write() in modern web development due to its drawbacks.
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
    // Covers both null (Cancel) and empty string ("")
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

// --- 5. Document.write: writes directly to the HTML document (not recommended) ---
// ⚠️ Runs only in browsers; using after page load can overwrite the entire document.

document.write("<p>📄 This is written using document.write()</p>");


/*
  🔗 Notes:
    - Use console methods (log, warn, error) for debugging and development output.
    - Alert, prompt, and confirm block script execution and affect user experience; use sparingly.
    - Avoid document.write() in modern apps to prevent overwriting or layout issues.
    - For interactive input, prefer HTML forms or modern UI dialogs over prompt/alert/confirm.
*/
