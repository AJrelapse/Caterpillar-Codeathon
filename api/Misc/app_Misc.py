
import pandas as pd
from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json

app= FastAPI()

class ScoringItem(BaseModel):
    Machine: str
    Hydraulic_Pump_Rate: int
    Exhaust_Gas_Temperature: int
    System_Voltage: int
    Air_Filter_Pressure: int

with open('pipe_misc.pkl','rb') as f:
    model = pickle.load(f)

print("Model Loaded")
@app.post('/')

async def scoring_endpoint(item:ScoringItem):
    input_data = item.json()
    input_dictionary = json.loads(input_data)
    Machine = input_dictionary["Machine"]
    Hydraulic_Pump_Rate= input_dictionary["Hydraulic_Pump_Rate"]
    Exhaust_Gas_Temperature= input_dictionary["Exhaust_Gas_Temperature"]
    System_Voltage = input_dictionary["System_Voltage"]
    Air_Filter_Pressure = input_dictionary["Air_Filter_Pressure"]

    df = pd.DataFrame({'Machine': [Machine], 'Hydraulic_Pump_Rate': [Hydraulic_Pump_Rate], 'Exhaust_Gas_Temperature': [Exhaust_Gas_Temperature],
                       'System_Voltage': [System_Voltage],'Air_Filter_Pressure':[Air_Filter_Pressure]})

    result = model.predict(df)

    return {"Probabilty of failure":int(result*100)}

