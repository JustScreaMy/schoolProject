import os
from PIL import Image

for filename in os.listdir('.'):
    if filename.endswith((".jpg", ".jpeg")):
        with Image.open(filename) as img:
            if(img.width < img.height):
                img = img.transpose(Image.ROTATE_90)
            resized_img = img.resize((320, 180))
            resized_img.save("thumb_"+filename)
        print("Compressed", filename)
