## jobs-app

- 書籍: React Application Architecture for Production

https://github.com/shitakemura/react-application-architecture-for-production/assets/15320295/776daa7d-fc3a-4757-879b-ebb316031ee9

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

#### structure

- src
  - components: all shared components
  - config: application configuration files
  - features: all the feature-based modules
    - api: API request declarations and API hooks
    - components: all components for a feature
    - types: typescript type for a feature
    - index.ts: entry point
  - layouts: different layouts for the pages
  - lib: configurations for different libraries
  - pages: the pages of application
  - providers: all application providers
  - stores: all global state stores
  - testing: test-related mocks, helpers, utilities, and configurations
  - types: all shared typescript type definitions
  - utils: all shared utility functions

#### api

- auth

  - POST /auth/login
  - POST /auth/logout
  - GET /auth/me

- jobs

  - GET /jobs
  - GET /jobs/:jobId
  - POST /jobs

- organizations
  - GET /organizations/:organizationId

#### memo

- Chapter2

  - npx create-next-app@latest jobs-app --typescript
  - npm install -D prettier eslint-config-prettier
  - npm install -D husky lint-staged
  - npx husky install
  - npx husky add .husky/pre-commit "npx lint-staged"
  - npm install -D sort-package-json

- Chapter3

  - npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
  - npm install react-hook-form
  - npx storybook@latest init
  - npm install -D @chakra-ui/storybook-addon
  - npm install @chakra-ui/icons

- Chapter5

  - npm install -D msw msw-devtools
  - npx msw init public/ --save
  - npm install -D @mswjs/data

- Chapter6

  - npm install axios
  - npm install @tanstack/react-query @tanstack/react-query-devtools
  - npm install react-error-boundary

- Chapter7

  - npm install zustand

- Chapter8

  - npm install -D jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom @testing-library/user-event
  - npm install --D cypress @testing-library/cypress
