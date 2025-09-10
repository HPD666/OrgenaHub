# Contributing to Orgena Hub

First off, thank you for considering contributing to **Orgena Hub**! 🙌  
Whether you’re fixing bugs, adding new features, or improving documentation, your help is always welcome.

This document outlines guidelines and best practices for contributing to the project.

---

## Table of Contents
1. [How to Contribute](#how-to-contribute)
2. [Code of Conduct](#code-of-conduct)
3. [Reporting Issues](#reporting-issues)
4. [Pull Requests](#pull-requests)
5. [Coding Standards](#coding-standards)
6. [Commit Message Guidelines](#commit-message-guidelines)
7. [Local Development Setup](#local-development-setup)

---

## How to Contribute

1. **Fork the repository** and clone it to your local machine.
2. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
Make your changes following the coding standards below.
Test your changes to ensure nothing is broken.
Commit your changes with clear, descriptive messages.
Push to your branch:
git push origin feature/your-feature-name
Open a Pull Request to the main branch.
Code of Conduct
Please follow our Code of Conduct. We aim to foster an inclusive and welcoming community. Harassment, discrimination, or inappropriate behavior will not be tolerated.
Reporting Issues
If you find a bug or want to suggest a feature:
Check the Issues to see if it already exists.
If it doesn’t, open a new issue with:
Title: Short and descriptive
Description: Detailed explanation of the problem or suggestion
Steps to Reproduce: (for bugs)
Expected vs. Actual Behavior: (for bugs)
Screenshots: if applicable
Pull Requests
When creating a PR:
Base your PR on the main branch.
Make sure your branch name is descriptive, e.g., feature/add-login.
Provide a clear title and description of your changes.
Link the related issue (if any) using Closes #issue-number.
Ensure all tests pass before submitting.
Coding Standards
Language & Frameworks: Follow the style guide of the language/framework in use.
Formatting: Use consistent indentation, spacing, and naming conventions.
Comments: Write clear, concise comments for complex logic.
Testing: Add tests for new features or bug fixes wherever possible.
Commit Message Guidelines
Use clear and consistent commit messages:
<type>(<scope>): <short summary>
Types:
feat → new feature
fix → bug fix
docs → documentation only changes
style → formatting, missing semi-colons, etc.
refactor → code change that neither fixes a bug nor adds a feature
test → adding or updating tests
chore → maintenance changes
Example:
feat(auth): add Google OAuth login
fix(api): resolve issue with data serialization
Local Development Setup
Clone the repo:
git clone https://github.com/<your-org>/orgena-hub.git
cd orgena-hub
Install dependencies:
npm install
# or
yarn install
Run the development server:
npm start
# or
yarn start
Run tests:
npm test
# or
yarn test
Thank you for contributing to Orgena Hub! Your contributions make the project stronger and better for everyone. 💜
