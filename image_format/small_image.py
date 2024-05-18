import os
from PIL import Image


# 780 for thumbnail, 1100 for article, 350 for peek
def resize_image(image_path, resized_path, new_width=1100):
    img = Image.open(image_path)
    width, height = img.size
    new_height = round(new_width * height / width)
    img = img.resize((new_width, new_height), Image.LANCZOS)
    img.save(resized_path)

for f in os.listdir('image_format/input'):
    if f.endswith('.DS_Store'):
        continue
    resize_image('image_format/input/' + f, 'image_format/output/' + f)
