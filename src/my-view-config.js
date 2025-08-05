export const myViewConfig = {
  "version": "1.0.4",
  "name": "Ha_2025_ND_subset",
  "description": "",
  "datasets": [
    {
      "uid": "A",
      "name": "Ha_2025_ND_subset",
      "files": [
        {
          "fileType": "anndata.zarr",
          "url": "s3://cds-pancreatlas-public/Ha_2025_ND_subset.20250804.zarr",
          "options": {
            "obsEmbedding": [
              {
                "path": "obsm/X_umap",
                "dims": [
                  0,
                  1
                ],
                "embeddingType": "UMAP"
              }
            ],
            "obsSets": [
              {
                "name": "Cell Type",
                "path": "obs/idents_orig"
              },
              {
                "name": "Source",
                "path": "obs/Source"
              },
              {
                "name": "Diabetes Status",
                "path": "obs/diabetes_status_description"
              },
              {
                "name": "Sex",
                "path": "obs/Reported_gender"
              }
            ],
            "obsFeatureMatrix": {
              "path": "X"
            }
          }
        }
      ]
    }
  ],
  "coordinationSpace": {
    "dataset": {
      "A": "A"
    },
    "embeddingType": {
      "A": "UMAP"
    }
  },
  "layout": [
    {
      "component": "scatterplot",
      "coordinationScopes": {
        "dataset": "A",
        "embeddingType": "A"
      },
      "x": 0,
      "y": 0,
      "w": 6,
      "h": 6
    },
    {
      "component": "obsSets",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 6,
      "y": 0,
      "w": 6,
      "h": 3
    },
    {
      "component": "featureList",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 6,
      "y": 3,
      "w": 6,
      "h": 3
    },
    {
      "component": "obsSetSizes",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 0,
      "y": 6,
      "w": 6,
      "h": 6
    },
    {
      "component": "obsSetFeatureValueDistribution",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 6,
      "y": 6,
      "w": 6,
      "h": 6
    }
  ],
  "initStrategy": "auto"
}
