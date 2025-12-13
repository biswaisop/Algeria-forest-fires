from fastapi import FastAPI
import json
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler

app = FastAPI()

@app.get('/')
def read_root():
    return {"Hello": "world"}