import pandas as pd
from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json

app= FastAPI()

class ScoringItem(BaseModel):
    Machine: str
    Transmission_Pressure: int
    Pedal_Sensor: int
    Brake_Control: int

with open('pipe_drive.pkl','rb') as f:
    model = pickle.load(f)

@app.post('/')

async def scoring_endpoint(item:ScoringItem):
    input_data = item.json()
    input_dictionary = json.loads(input_data)
    Machine = input_dictionary["Machine"]
    Transmission_Pressure = input_dictionary["Transmission_Pressure"]
    Pedal_Sensor= input_dictionary["Pedal_Sensor"]
    Brake_Control = input_dictionary["Brake_Control"]

    df = pd.DataFrame({'Machine': [Machine], 'Transmission_Pressure': [Transmission_Pressure ], 'Pedal_Sensor': [Pedal_Sensor],
                       'Brake_Control': [Brake_Control]})

    result = model.predict(df)

    return {"Probabilty of failure":int(result*100)}
