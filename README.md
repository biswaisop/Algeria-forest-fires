# Algeria Forest Fire Risk Modeling

This repository explores the **Algerian Forest Fires Dataset** to clean raw observations, perform exploratory analysis, and train several regression models for the Fire Weather Index (FWI). The work is organized in two notebooks:

- `edafe.ipynb` handles data understanding, cleaning, and exploratory plots.
- `model-train.ipynb` focuses on feature engineering, model training, and evaluation.

## Dataset

The project relies on the public *Algerian_forest_fires_dataset* provided alongside this repository. Key characteristics:

- Measurements come from two regions (`Region = 0` for Bejaia, `Region = 1` for Sidi-Bel-Abbes).
- Temporal columns (`day`, `month`, `year`) and weather variables (e.g., `Temperature`, `RH`, `Ws`, `Rain`) are included.
- Target variable is the Fire Weather Index (`FWI`), and the categorical `Classes` column indicates fire vs. not-fire conditions.

`edafe.ipynb` produces a cleaned artifact (`Algerian_forest_fires_dataset_cleaned.csv`) by:

1. Removing null rows and an inconsistent record around index 122.
2. Normalizing column names and fixing data types.
3. Encoding regional information and binary fire classes.

## Project Structure

```
.
├── Algerian_forest_fires_dataset.csv              # Raw dataset
├── Algerian_forest_fires_dataset_cleaned.csv      # Cleaned dataset produced in EDA
├── edafe.ipynb                                    # Data cleaning + EDA
├── model-train.ipynb                              # Feature engineering + modeling
└── README.md
```

## Environment Setup

A simple Python environment with scientific libraries is sufficient. Example steps using PowerShell:

```powershell
python -m venv venv
venv\Scripts\Activate.ps1
pip install -r requirements.txt  # or install manually as below
```

Essential packages (install via `pip install <package>` if no `requirements.txt` exists):

- numpy
- pandas
- matplotlib
- seaborn
- scikit-learn

## Notebook Highlights

### `edafe.ipynb`
- Loads the raw CSV, inspects schema, and fixes formatting issues.
- Creates regional splits and explores distributions via histograms, pie charts, and monthly fire counts.
- Writes the cleaned CSV that downstream modeling consumes.

### `model-train.ipynb`
- Drops date columns and encodes `Classes` as binary.
- Splits data into train/test partitions (75/25) using `train_test_split`.
- Removes highly correlated features (>0.85) and standardizes the remaining features.
- Trains and evaluates several linear models:
  - Ordinary Least Squares (Linear Regression)
  - Lasso, Ridge, and ElasticNet
  - Cross-validated variants `LassoCV`, `RidgeCV`, `ElasticNetCV`
- Visualizes predictions vs. ground truth and reports `MAE` and `R²` metrics.

## How to Reproduce Results

1. **Clean the data**: run `edafe.ipynb` top to bottom to regenerate `Algerian_forest_fires_dataset_cleaned.csv` if needed.
2. **Train models**: open `model-train.ipynb`, ensure the cleaned CSV exists in the same directory, and execute the notebook to reproduce scaling, training, and evaluation.
3. **Experiment further**: adjust correlation thresholds, add new models (e.g., tree-based regressors), or incorporate hyperparameter searches to seek better performance.

## Next Steps

- Add a `requirements.txt` or `environment.yml` for reproducible environments.
- Promote notebook logic into Python modules with unit tests for automation.
- Extend modeling to non-linear algorithms and compare results.

Feel free to open issues or pull requests if you enhance the analysis or add new modeling techniques!
