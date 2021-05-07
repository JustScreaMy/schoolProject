import os
from PIL import Image

for filename in os.listdir('.'):
    if filename.endswith((".jpg", ".jpeg")):
        with Image.open(filename) as img:
            img_ratio = img.width / img.height
            resized_img = img.resize((320, 180))
            resized_img.save("thumb_"+filename)
        print("Compressed", filename)
