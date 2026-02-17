# Update PR Title and Body

Let's now update the PR title and body with all the work done in this PR. Using
gh cli and the project's @.github/PULL_REQUEST_TEMPLATE.md to explain the
changes.

Analyze all the commits and changes in this branch, then:

1. Generate an appropriate PR title following the template format (e.g., "feat:
   ✨ YOUR_FEATURE_NAME")
2. Fill out the PR body following the template structure:
   - Summary (What, Why, Who benefits)
   - Details (Technical Implementation)
   - Extra (Additional Work Done, Notes)
3. **IMPORTANT**: To avoid shell escaping issues with quotes and special characters:
   - Write the PR body to a temporary file (e.g., `pr_body.md`)
   - Use `gh pr edit <PR_NUMBER> --title "..." --body-file pr_body.md`
   - Delete the temporary file after the PR is updated
4. Use `gh pr view --json number,title,body` to get the current PR number if needed
5. Use `git log --oneline origin/master..HEAD` to see commits in this branch
6. Use `git diff --stat origin/master..HEAD` to see file changes summary
