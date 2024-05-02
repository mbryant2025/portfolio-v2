import os
from PIL import Image


# 780 for thumbnail, 1100 for article
def resize_image(image_path, resized_path, new_width=3000):
    img = Image.open(image_path)
    width, height = img.size
    new_height = round(new_width * height / width)
    img = img.resize((new_width, new_height), Image.LANCZOS)
    img.save(resized_path)

for f in os.listdir('small-image/input'):
    if f.endswith('.DS_Store'):
        continue
    resize_image('small-image/input/' + f, 'small-image/output/' + f)
