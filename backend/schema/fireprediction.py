from pydantic import BaseModel
class firePredictionInput(BaseModel):
    Temperature: float
    RH: float
    Ws: float
    Rain: float
    FFMC: float
    DMC: float
    ISI: float
    # Classes: str
    Region: str