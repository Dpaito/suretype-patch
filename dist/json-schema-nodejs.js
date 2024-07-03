import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { setSchemaDraft07 } from "./json-schema.js";
const require = createRequire(import.meta.url);
const jsonSchemaSchema = require("./json-schema-draft-07.json");
setSchemaDraft07(jsonSchemaSchema);
