# Converts all pixels to white uness transparent

from PIL import Image
import os


def convert_image(image, output):
    # Load the image
    img = Image.open(image)
    img = img.convert("RGBA")
    datas = img.getdata()

    new_image = []
    
    for item in datas:
        # If not transparent
        if item[3] > 20:
            new_image.append((255, 255, 255, item[3]))

        else:
            new_image.append(item)

    # Update image data
    img.putdata(new_image)

    # Save new image
    img.save(output)

    # Display new image
    img.show()

for f in os.listdir('image_format/input'):
    if f.endswith('.DS_Store'):
        continue
    convert_image('image_format/input/' + f, 'image_format/output/' + f)
