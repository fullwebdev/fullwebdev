import { CONTRIBUTORS } from "./webkit-contributors.js";

const STATUS = "committer";
const MAIL = /@apple.com$/;

console.log(Object.values(CONTRIBUTORS).length);

const filtered = Object.values(CONTRIBUTORS).filter(
  (contributor) =>
    // contributor.status === STATUS
    !contributor.status && contributor.emails.find((email) => email.match(MAIL))
);

console.log(filtered.length);
