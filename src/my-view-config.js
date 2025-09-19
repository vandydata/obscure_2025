export const myViewConfig = {
  "version": "1.0.4",
  "name": "sctransform.rna.20250918",
  "description": "",
  "datasets": [
    {
      "uid": "A",
      "name": "sctransform.rna.20250918",
      "files": [
        {
          "fileType": "anndata.zarr",
          "url": "https://cds-pancreatlas-public.s3.amazonaws.com/sctransform.rna.20250918.zarr",
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
                "name": "Sample",
                "path": "obs/samp"
              },
              {
                "name": "SCT_snn_res.0.8",
                "path": "obs/SCT_snn_res.0.8"
              },
              {
                "name": "seurat_clusters",
                "path": "obs/seurat_clusters"
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
