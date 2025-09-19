# obscure_2025 - Vitessce OMICS Viewer repo

[![Deploy](https://github.com/vandydata/obscure_2025/actions/workflows/deploy.yml/badge.svg)](https://github.com/vandydata/obscure_2025/actions/workflows/deploy.yml)

Forked on 2025-09-18

Working repo and Github pages build for the VITESSCE OMICS Viewer, leveraging objects storage in AWS S3.

## Data source & preparation

1. CDS project 2024-349
2. `src/obscure_2025/...` to prepare object. Input : Ha/Globus)
4. `03-vitessce-build-h5-from-seurat.R` to convert RDS to H5AD
5. `04-vitessce-build-zarr-and-config.py` to convert H5AD to Zarr
6. `05-transfer-zarr-to-aws.sh` to upload Zarr to S3 bucket

## How to use this repo

2. Clone repo
3. Edit `src/my-view-config.js` to point to appropriate S3 bucket and object params
4. Edit `public/index.html` page TITLE and DESCRIPTION
5. For local testing, open terminal:
    ```bash
    cd src
    npm start
    ```
6. Open browser to `http://localhost:3000`
7. Edit and test as needed
8. Pushing to repo will use GH actions to build the React app

## Fork for new dataset / Vitessce instance

1. Fork this repo into a new repo
2. Name it based on `vitessce-` as prefix, ex. `vitessce-Elgamal_et_al_Diabetes_2023`
3. Edit the following files:
   - [ ]  `package.json` + `package-lock.json` and update `name` and `homepage` values
   - [ ]  `src/my-view-config.js` to point to appropriate S3 bucket and object params
   - [ ]  Actions > Enable Github Actions
   - [ ]  Settings > Pages > Source > Change to Github Actions
   - [ ]  Wait for build, then get Settings > Pages > URL, and copy/paste it into main page description area
4. Test
5. Add URL to metadata loader\
