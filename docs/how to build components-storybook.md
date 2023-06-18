1. How to develop

Start by checking out the new branch for building your component. It is recommended to use the branch naming convention **“feature/YOUR_COMPONENT”** where the prefix **“feature”** is required.

Continue the development process by placing your component inside the **“apps/shield-react”** module. The structure should resemble the following
```
src/lib/ui/YOUR_COMPONENT
|
+-- types
|
+-- YOUR_COMPONENT.module.css
|
+-- YOUR_COMPONENT.stories.tsx
|
+-- YOUR_COMPONENT.test.tsx
|
+-- YOUR_COMPONENT.tsx
|
+-- index.ts
```

2. Review features on Bitbucket and Chromatic

Once you’ve completed developing the new component, create a pull request (PR) from the “feature/YOUR_COMPONENT” branch to the main branch.

Bitbucket pipelines will automatically run on the pull request to deploy your component to Chromatic.

![image](https://github.com/linhvuquach/shield-design-system/assets/26388126/d37e53c1-7c39-4d1b-829c-59696c982c1e)

You can monitor the progress and details by going to the Pull requests tab and clicking on the “Builds” button.

![image](https://github.com/linhvuquach/shield-design-system/assets/26388126/2d348c78-4c42-482b-82f2-d7b8db39c6ed)

Simultaneously, the component will be built successfully on Chromatic and ready for review.

![image](https://github.com/linhvuquach/shield-design-system/assets/26388126/217027d5-f310-407e-8344-b156c734201d)

Assign the issue to your teammates and watch the feedback roll in

![image](https://github.com/linhvuquach/shield-design-system/assets/26388126/4460f415-00fd-4325-b643-ac1c95ec5f83)

Once the component has been approved by your teammates, it’s ready to be merged into the target branch.

![image](https://github.com/linhvuquach/shield-design-system/assets/26388126/6ca063b8-9575-48ec-93cb-140e0d50faae)

![image](https://github.com/linhvuquach/shield-design-system/assets/26388126/005e93a0-ec7d-4012-9213-626015db1e7a)

Hooray! The component has successfully passed all builds and reviews. It’s now safe to merge and can be used in the global App.