import { cp, mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const distRoot = resolve(projectRoot, "dist");
const clientRoot = resolve(distRoot, "client");
const staticRoot = resolve(projectRoot, ".dist-static");

await rm(staticRoot, { recursive: true, force: true });
await mkdir(staticRoot, { recursive: true });
await cp(clientRoot, staticRoot, { recursive: true });

await writeFile(
  resolve(staticRoot, ".htaccess"),
  `RewriteEngine On
DirectoryIndex index.html

# Keep existing files (assets, images, favicon) untouched.
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Let TanStack Router handle direct visits to internal routes.
RewriteRule ^ index.html [L]
`,
  "utf8",
);

await rm(distRoot, { recursive: true, force: true });
await rename(staticRoot, distRoot);

const index = await readFile(resolve(distRoot, "index.html"), "utf8");
if (!index.includes("<html")) {
  throw new Error("La sortie statique ne contient pas index.html valide.");
}

console.log("Static site prepared in dist/");
