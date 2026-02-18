// ES6/demo.js

const token = process.env.GITHUB_TOKEN;

if (!token) {
  console.error("GITHUB_TOKEN not set");
  process.exit(1);
}

console.log("GitHub token loaded via environment variable");
