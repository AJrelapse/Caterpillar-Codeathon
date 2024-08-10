import pandas as pd
from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json

app= FastAPI()


class ScoringItem(BaseModel):
    Machine: str
    Temperature: int
    Level: int
    Pressure: int
    Water_Fuel:int

with open('pipe_fuel.pkl','rb') as f:
    model = pickle.load(f)

@app.post('/')

async def scoring_endpoint(item:ScoringItem):
    input_data = item.json()
    input_dictionary = json.loads(input_data)
    Machine = input_dictionary["Machine"]
    Temperature = input_dictionary["Temperature"]
    Level= input_dictionary["Level"]
    Pressure = input_dictionary["Pressure"]
    Water_Fuel = input_dictionary['Water_Fuel']

    df = pd.DataFrame({'Machine': [Machine], 'Temperature': [Temperature], 'Level': [Level],
                       'Pressure': [Pressure],'Water Fuel':[Water_Fuel]})

    result = model.predict(df)

    return {"Result":int(result*100)}
