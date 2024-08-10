import pandas as pd
from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json

app= FastAPI()

class ScoringItem(BaseModel):
    Machine: str
    Speed: int
    Temperature: int
    Oil_Pressure: int

with open('pipe_en.pkl','rb') as f:
    model = pickle.load(f)

@app.post('/')

async def scoring_endpoint(item:ScoringItem):
    input_data = item.json()
    input_dictionary = json.loads(input_data)
    Machine = input_dictionary["Machine"]
    Speed = input_dictionary["Speed"]
    Temperature = input_dictionary["Temperature"]
    Oil_Pressure = input_dictionary["Oil_Pressure"]

    df = pd.DataFrame({'Machine': [Machine], 'Speed': [Speed], 'Temperature': [Temperature],
                       'Oil_Pressure': [Oil_Pressure]})

    result = model.predict(df)

    return {"Probabilty of failure":int(result*100)}