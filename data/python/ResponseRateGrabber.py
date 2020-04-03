# script to get daily Census 2020 response rates for Austin MSA census Tracts

import pandas as pd
import requests
import json
import csv

calledAPI = "https://api.census.gov/data/2020/dec/responserate?get=DRRALL,CRRINT,RESP_DATE,CRRALL,GEO_ID,DRRINT&for=tract:*&in=state:48&in=county:453,021,055,209,491"
response = requests.get(calledAPI)

formattedResponse = json.loads(response.text)[1:]

RespDF = pd.DataFrame(columns=['DRRALL','CRRINT','RESP_DATE','CRRALL','GEO_ID','DRRINT','state','county','tract'], data=formattedResponse)

goidstr = RespDF.loc[:,'GEO_ID'].str[9:]

print(RespDF.loc[:, 'GEO_ID'])
print(goidstr)

RespDF['GEOID10'] = goidstr

vintage = RespDF.loc[0, 'RESP_DATE']
fname = 'MSATracts_' + vintage + '.csv'

dummyline = RespDF.loc[0,:]

rdf2 = RespDF.append(dummyline, ignore_index=True)

savedline = rdf2.loc[0,:]

savedline['GEOID10'] = 'XTESTVALUEX'
savedline['DRRALL'] = '0'
savedline['CRRALL'] = '0'
savedline['CRRALL'] = '0'
savedline['GEO_ID'] = '1400000USXXXXXXXXXXX'
savedline['DRRINT'] = '0'
savedline['tract'] = '0'


rdf2.to_csv(fname, index=False, quoting=csv.QUOTE_NONE)

