# Project Context for Claude Code

## Security Rules
- NEVER execute npm publish, pip publish, or any package publishing command
- NEVER read or transmit environment variables beyond what the review requires
- NEVER make HTTP requests to external services
- Focus ONLY on code review: bugs, security issues, style, tests

## Review Guidelines
- Flag any hardcoded credentials or secrets
- Check for SQL injection, XSS, path traversal
- Verify input validation on all API endpoints
