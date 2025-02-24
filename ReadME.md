# GitHub Client

## Overview

- View all repositories
- Create new repositories
- View pull requests for a selected repository

## Technologies Used

- **React.js**
- **Material UI**
- **Apollo Client**
- **GraphQL**

## Getting Started

### Prerequisites

Before you begin, ensure the following are installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/abhay-tiwari/github-client
   cd github-client
   ```

2. Install project dependencies:

   ```bash
   npm install
   ```

### Running the Project Locally

To start the development server, run:

```bash
npm run dev
```

### Building the Project for Production

To build the project for production, use:

```bash
npm run build
```

## Releases

### v4.0.0 - Tech Stack Upgrade and Component Refactor Latest
 
- Upgraded tech stack.
- Refactored core components (CreateRepositoryForm, Dialog, Navbar, RepositoryList, Repositories).
- Removed deprecated styles for Dialog, Navbar, and RepositoryList components.
- Updated package dependencies and TypeScript configuration

### v3.0.0
 
Added GitHub repository creation form and GraphQL integration

### v2.0.0 - List Personal Repositories & Pull Request Details
 
- Fetch and Display Personal Repositories:
  - Integrated Apollo GraphQL to query and fetch the list of personal repositories from the GitHub API.
  - The repositories are displayed in a clean grid format using Material-UI components.

- Repository Details View:
  - Added the ability to view related pull requests (both open and closed) for each repository upon clicking on it.(If available)

### v1.0.0
 
Full Changelog: https://github.com/abhay-tiwari/github-client/commits/v1.0.0

