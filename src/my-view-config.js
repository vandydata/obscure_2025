export const myViewConfig = {
  "version": "1.0.4",
  "name": "20260130_rna_harmony_coarse-subclusters.20260204.zarr",
  "description": "",
  "datasets": [
    {
      "uid": "A",
      "name": "20260130_rna_harmony_coarse-subclusters.20260204.zarr",
      "files": [
        {
          "fileType": "anndata.zarr",
          "url": "https://cds-pancreatlas-public.s3.amazonaws.com/20260130_rna_harmony_coarse-subclusters.20260204.zarr",
          "options": {
            "obsEmbedding": [
              {
                "path": "obsm/X_umap",
                "dims": [0, 1],
                "embeddingType": "UMAP"
              }
            ],
            "obsSets": [
              {
                "name": "Coarse Annotation",
                "path": "obs/coarse_annot"
              },
              {
                "name": "Endocrine subset coarse anno",
                "path": "obs/endocrine_coarse_subclusters"
              },
              {
                "name": "Immune subset coarse anno",
                "path": "obs/immune_coarse_subclusters"
              },
              {
                "name": "Samples",
                "path": "obs/samples"
              },
              {
                "name": "hdl_id",
                "path": "obs/hdl_id"
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
