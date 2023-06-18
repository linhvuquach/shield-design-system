### Continuous Integration and Continuous Deployment

We’ve two pipelines set up for deploying to Chromatic:

- "Publish to Chromatic on the main branch": This pipeline triggers whenever changes are made on the main branch

- "Run on Pull Request to Main": This pipeline runs when you create a pull request (PR) from the feature branch to the main branch

These pipelines ensure that your changes are automatically deployed to Chromatic, providing a streamlined process for reviewing and testing your components.

```
image: node:18
pipelines:
  branches:
    main:
      - step:
          name: "Publish to Chromatic on the main branch"
          caches:
            - node
          script:
            - yarn install --fronzen-lockfile
            - yarn build:packages
            - cd apps/shield-react
            - yarn publish:chromatic --auto-accept-changes
  pull-requests:
    feature/*: # this will run on any branch with a feature/ prefix that has a PR open
      - step:
          name: Run on Pull Request to Main
          caches:
            - node
          script:
            - |
              if [[ "$BITBUCKET_PR_DESTINATION_BRANCH" == "main" ]]; then
                # Install dependencies
                yarn install --fronzen-lockfile
                yarn build:packages
                # Go inside the Storybook module
                cd apps/shield-react

                # Deploy to Chromatic
                yarn publish:chromatic --exit-zero-on-changes
              else
                echo "Skipping pipeline as it's not a pull request to main";
              fi
```

If you want to push our service to the Docket hub, you can modify pipelines on the main branch with the below script
```
image: node:18
pipelines:
  branches:
    main:
      - parallel:
          fail-fast: true
          steps:
            - step:
                name: publish chromatic
                caches:
                  - node
                script:
                  - yarn install --fronzen-lockfile
                  - yarn build:packages
                  - cd apps/shield-react
                  - yarn publish:chromatic --auto-accept-changes
            - step:
                name: build docker
                services:
                  - docker
                script:
                  - IMAGE_NAME="netpowerasdockerhub/shield:latest"
                  - docker build -t ${IMAGE_NAME} -f apps/shield-react/Dockerfile .
                  - docker login -u "${DOCKERHUB_USERNAME}" -p ${DOCKERHUB_PASSWORD}
                  - docker push ${IMAGE_NAME}
```