# Ha et al, PanKbase dataset - Vitessce OMICS Viewer repo

[![Deploy](https://github.com/vandydata/Vitessce-Ha-Pankbase-ND-subset/actions/workflows/deploy.yml/badge.svg)](https://github.com/vandydata/Vitessce-Ha-Pankbase-ND-subset/actions/workflows/deploy.yml)

Forked on 2025-08-04

Working repo and Github pages build for the VITESSCE OMICS Viewer, leveraging objects storage in AWS S3.

## Data source & preparation

1. CDS project 2024-349
2. `src/10-Ha-Pankbase-ND-subset/01b-subset-actual.R` to prepare object. Input src: https://zenodo.org/records/15588240)
```
   data <- readRDS("data/min.cells0.01pct_min.features5pct_rmDoublets_harmony_data.Rds")
   metadata <- data@meta.data[, c("samples", "RRID", "Study", "Source", "diabetes_status_description")]
    hpap_ids <- c("HPAP-019", "HPAP-022", "HPAP-024", "HPAP-029", "HPAP-035",
    "HPAP-036", "HPAP-037", "HPAP-038", "HPAP-039", "HPAP-040", "HPAP-042",
    "HPAP-043", "HPAP-044", "HPAP-045", "HPAP-047", "HPAP-049", "HPAP-050",
    "HPAP-052", "HPAP-053", "HPAP-054", "HPAP-056", "HPAP-059", "HPAP-063",
    "HPAP-072", "HPAP-074", "HPAP-075", "HPAP-077", "HPAP-080", "HPAP-082",
    "HPAP-092", "HPAP-095", "HPAP-097", "HPAP-099", "HPAP-101", "HPAP-103",
    "HPAP-104", "HPAP-105", "HPAP-107", "HPAP-110", "HPAP-114", "HPAP-117",
    "HPAP-118", "HPAP-119", "HPAP-122")
    data_subset <- subset(data, subset = samples %in% hpap_ids) # Ha et al (2025) - 87505 cells, 44 donors, 18704 genes
```
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
5. Add URL to metadata loader
