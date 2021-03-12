import urllib.request as req
url="https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json"
request = req.Request(url, headers={
    "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36"
})
with req.urlopen(url) as response:
    data=response.read().decode("utf-8")

import json
data=json.loads(data)
for i in range(0,319):
    place_name=data["result"]["results"][i]["stitle"]
    longitude_number=data["result"]["results"][i]["longitude"]
    latitude_number=data["result"]["results"][i]["latitude"]
    place_picture_net=data["result"]["results"][i]["file"]
    place_picture=place_picture_net.split("http://",2)
    place_picture_1="http://"+place_picture[1]
    with open("data.txt","a") as f:
        f.write(f"{place_name},{longitude_number},{latitude_number},{place_picture_1}\n")

