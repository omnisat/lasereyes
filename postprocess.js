const fs = require("fs");
const path = require("path");

// Define the directory where the transpiled files are located
const distDir = path.join(__dirname, "dist");

// Utility function to wrap require with toESM
function wrapRequireWithToESM(content) {
  return content.replace(
    /(var\s+\w+\s*=\s*)require\((['"])(.*?)\2\)/g,
    "$1_toESM(require($2$3$2))"
  );
}

// Read all files in the dist directory
fs.readdirSync(distDir).forEach((file) => {
  const filePath = path.join(distDir, file);

  if (path.extname(file) === ".js") {
    // Read the file content
    let content = fs.readFileSync(filePath, "utf-8");

    // Replace require statements with toESM-wrapped requires
    content = wrapRequireWithToESM(content);

    // Write the modified content back to the file
    fs.writeFileSync(filePath, content, "utf-8");

    console.log(`Processed file: ${file}`);
  }
});
