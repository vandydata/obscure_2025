export const myViewConfig = {
  "version": "1.0.4",
  "name": "20251014_seurat-v5_harmony_sample-rmDblts_res0.8.20251015",
  "description": "",
  "datasets": [
    {
      "uid": "A",
      "name": "20251014_seurat-v5_harmony_sample-rmDblts_res0.8.20251015.zarr",
      "files": [
        {
          "fileType": "anndata.zarr",
          "url": "https://cds-pancreatlas-public.s3.amazonaws.com/20251014_seurat-v5_harmony_sample-rmDblts_res0.8.20251015.zarr",
          "options": {
            "obsEmbedding": [
              {
                "path": "obsm/X_umap",
                "dims": [0, 1],
                "embeddingType": "UMAP_1_2"
              },
              {
                "path": "obsm/X_umap", 
                "dims": [1, 2],
                "embeddingType": "UMAP_2_3"
              }
            ],
            "obsSets": [
              {
                "name": "Sample",
                "path": "obs/samples"
              },
              {
                "name": "Cell Type",
                "path": "obs/coarse_annot"
              },
              {
                "name": "Sex",
                "path": "obs/sex"
              },
              {
                "name": "Age",
                "path": "obs/age"
              },
              {
                "name": "Group",
                "path": "obs/group"
              },
              {
                "name": "Seurat Clusters",
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
      "A": "UMAP_1_2",
      "B": "UMAP_2_3"
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
      "w": 3,
      "h": 6
    },
    {
      "component": "scatterplot",
      "coordinationScopes": {
        "dataset": "A",
        "embeddingType": "B"
      },
      "x": 3,
      "y": 0,
      "w": 3,
      "h": 6
    },
    {
      "component": "obsSets",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 6,
      "y": 0,
      "w": 3,
      "h": 6
    },
    {
      "component": "featureList",
      "coordinationScopes": {
        "dataset": "A"
      },
      "x": 9,
      "y": 0,
      "w": 3,
      "h": 6
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
