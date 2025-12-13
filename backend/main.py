from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
import pickle
from pydantic import BaseModel
from schema.fireprediction import firePredictionInput


# import ridge regressor and standard scaler model
with open("models/scaler.pkl", "rb") as f:
    scaler = pickle.load(f)

with open("models/ridge.pkl", "rb") as f:
    model = pickle.load(f)


app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/{slug}')
def read_root(slug:str):
    return {"Hello": f"{slug}"}


@app.post("/predict")
def predict_fire(data: firePredictionInput):
    
    region_map = {"Bejaia":0, "Sidi Bel-abbes":1}
    # class_map = {"fire":1, "not fire":1}

    region_val = region_map.get(data.Region, -1)
    # class_val = class_map.get(data.Classes, -1)

    features = np.array([
        data.Temperature,
        data.RH,
        data.Ws,
        data.Rain,
        data.FFMC,
        data.DMC,
        data.ISI,
        # class_val,
        region_val
    ]).reshape(1, -1)

    scaled_features = scaler.transform(features)

    prediction = model.predict(scaled_features)[0]

    print("✅ prediction successful")

    return {
        "predicted_FWI": float(prediction),
        "is_fire": bool(prediction > 0.5)
    }