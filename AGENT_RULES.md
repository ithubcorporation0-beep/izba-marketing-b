# AGENT RULES: IT HUB CORPORATION (STATIC NEXT.JS)

Every AI coding assistant, agent, or developer working on this codebase MUST strictly follow these rules without exception.

---

### 1. One Phase at a Time

- Never leap ahead into future development phases or build features the user has not asked for yet.
- Focus exclusively on the current scope, verify it thoroughly, and stop when finished.

### 2. No Invented Facts or Fake Content

- Do not invent fake client logos, fabricated case studies, fake metrics (e.g. "$9.4M saved"), or fake customer testimonials.
- If real company details (email, phone, address, social links) are not provided by the client, use explicit placeholders (e.g. `PLACEHOLDER_EMAIL`) accompanied by a clear `// TODO:` comment.

### 3. Every Interactive Element Must Work

- Every link, button, and tab must lead to a valid route, open an action, or trigger an accessible behavior.
- No dead `href="#"` links or non-functional mock triggers.
- For forms in this static build, integrate static lead submission (such as Web3Forms via `.env`) or provide clean, validated client-side workflows with accessible confirmation states.

### 4. Accessibility First (WCAG 2.1 AA)

- Always use semantic HTML tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Ensure all interactive elements have accessible labels (`aria-label`, visible text, or associated `<label>`).
- Maintain WCAG 2.1 Level AA color contrast ratios across dark and light surfaces.

### 5. Zero Secrets in Code

- Never hardcode API keys, access tokens, or private credentials into source files or Git.
- Always read sensitive configurations from environment variables (`.env.local`) and document them in `.env.example`.

### 6. Build & Quality Verification Before Every Commit

- Before completing any task or making a Git commit, you MUST execute and pass all verification commands:
  ```bash
  npm run lint
  npm run typecheck
  npm run build
  ```
- If any command fails or generates errors, fix all issues immediately before declaring completion.

### 7. Explain Changes in Simple, Beginner-Friendly Language

- Always explain results in plain, simple language suitable for a beginner.
- Avoid unnecessary technical jargon, or clearly explain terms when you use them.
- Always provide a clear report of which files were created or modified.
