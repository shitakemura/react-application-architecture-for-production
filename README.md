## jobs-app

- 書籍: React Application Architecture for Production

#### overview
- an application that allows organizations to manage their job boards

#### requirements
- publicly facing part
    - landing page
    - public organization view
    - a public job view   
- organization admin dashboard
    - login page
    - jobs list view
    - create a job view
    - job details view

#### memo
- Chapter2
    - npx create-next-app@latest jobs-app --typescript
    - npm install -D prettier eslint-config-prettier
    - npm install -D husky lint-staged
    - npx husky install
    - npx husky add .husky/pre-commit "npx lint-staged"