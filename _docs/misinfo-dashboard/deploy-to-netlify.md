---
layout: docs
title: "Deploy to Netlify"
---

## Deploy to Netlify

#### Deploy to dev
Link: https://dev-misinfo-dashboard.netlify.app/

To push all changes to the dev site on Netlify using the [Engaging News Project's misinfo-dashboard](https://github.com/engagingnewsproject/misinfo-dashboard) repo's `dev` branch.

_The `dev` branch is the branch that contains the dev live site code._

1.  Checkout the `dev` branch

    `git checkout dev`
    
2.  Merge changes from `main` to `dev`

    `git marge main`
    
3. Push the merge into `dev`

    `git push origin dev`
    
4.  Open the [Netlify UI for the dev site](https://app.netlify.com/sites/dev-misinfo-dashboard/deploys) and monitor the progress. Make sure the top bar has `dev-misinfo-dashboard` active. On the left sidebar navigate to the "Deploys" link. Your latest push will be listed at the top.
    
#### Deploy to prod
Link: https://misinfo-dashboard.netlify.app/

To push all changes to the live site on Netlify using the [Engaging News Project's misinfo-dashboard](https://github.com/engagingnewsproject/misinfo-dashboard) repo's `dev` branch.

_The `prod` branch is the branch that contains the live site code._

1.  Checkout the `main` branch

    `git checkout main`
    
2.  Merge changes from `dev` into `main`

    `git marge dev`
    
3. Push the merge into `main`

    `git push origin main`
    
4.  Checkout the `prod` branch

    `git checkout prod`

5. Merge `main` into `prod`

    `git merge main`
    
6. Push the merge into `prod`

    `git push origin prod`
    
7.  Open the [Netlify UI for the prod site](https://app.netlify.com/sites/misinfo-dashboard/deploys) and monitor the progress. Make sure the top bar has `misinfo-dashboard` active. On the left sidebar navigate to the "Deploys" link. Your latest push will be listed at the top.
    
#### Deploy issues

If you get the below error you will need to install [Git Large File Storage](https://git-lfs.com/).

```
remote: error: File firestore-debug.log is 102.65 MB; this exceeds GitHub's file size limit of 100.00 MB
``` 

To install:

`git lfs install` - make sure git large file storage is installed

`git lfs track "firestore-debug.log"` - to track the large file

`git lfs migrate import --include="firestore-debug.log" --everything` - convert the file types to LFS

`git lfs ls-files` - to list files

`git lfs checkout` -  files can be repopulated with their full expected contents [lfs docs](https://github.com/git-lfs/git-lfs/blob/main/docs/man/git-lfs-migrate.adoc?utm_source=gitlfs_site&utm_medium=doc_man_migrate_link&utm_campaign=gitlfs#examples)

Project Lead Links: [Firebase CLI Tools](https://firebase.google.com/docs/firestore/security/get-started#use_the_firebase_cli) || [Firebase Console](https://console.firebase.google.com/) || [Firebase Cloud Console](https://console.cloud.google.com/welcome?project=misinfo-5d004) || [Syncing a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork#syncing-a-fork-branch-from-the-command-line) || [Netlify dashboard](https://app.netlify.com/sites/misinfo-dashboard/overview) || [ENP Prod Repo](https://github.com/engagingnewsproject/misinfo-dashboard-prod)