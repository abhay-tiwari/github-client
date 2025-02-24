## **Upgrade Steps**

### 1. **Upgrade Dependencies**

I upgraded the NPM packages to their latest versions. To do that, I updated packages in `package.json` file then use 

```bash
npm install
```

### 2. **Breaking Changes**

There were some important changes that might break parts of the project. I’ve outlined them below, and I made sure to adjust the code accordingly.

#### **Example Breaking Changes:**
- **Material-UI**: The `@material-ui/core` package has been replaced with `@mui/material` in version `v6`. Some components and their props might have changed.
  - I updated imports throughout the project to use `@mui/material` instead of `@material-ui/core`.
  
  Example:
  ```js
  // Old Import (Material-UI v4)
  import { Button } from '@material-ui/core';

  // New Import (Material-UI v6)
  import { Button } from '@mui/material';
  ```

- **React Router v6**: With the upgrade to React Router v6, routes and navigation handling have changed. I made sure to update any routing logic.

  Example:
  ```js
  // Old Router (React Router v5)
  <Route path="/about" component={Repositories} />

  // New Router (React Router v6)
  <Route path="/about" element={<Repositories />} />
  ```

### 3. **Configuration Updates**

- **Vite**: Since I have moved from webpack to Vite as a build tool, I added `vite.config.ts` and removed `webpack.config.js` file.

- **Environment Variables**: Added `VITE_` in env variables.


## **Changelog**

### v4.0.0 - Tech Stack Upgrade and Component Refactor Latest
 
- Upgraded tech stack.
- Refactored core components (CreateRepositoryForm, Dialog, Navbar, RepositoryList, Repositories).
- Removed deprecated styles for Dialog, Navbar, and RepositoryList components.
- Updated package dependencies and TypeScript configuration.

### v3.0.0
 
Added GitHub repository creation form and GraphQL integration.

### v2.0.0 - List Personal Repositories & Pull Request Details
 
- Fetch and Display Personal Repositories:
  - Integrated Apollo GraphQL to query and fetch the list of personal repositories from the GitHub API.
  - The repositories are displayed in a clean grid format using Material-UI components.

- Repository Details View:
  - Added the ability to view related pull requests (both open and closed) for each repository upon clicking on it. (If available)

### v1.0.0
 
Full Changelog: https://github.com/abhay-tiwari/github-client/commits/v1.0.0
