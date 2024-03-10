import mysql.connector
import os

# Function to generate a description, colors, space, price, keywords, etc., for each image
# You need to adjust this function to return the actual data for each image


def get_metadata_for_image(image_number):
    # Placeholder for actual metadata logic
    # Return a tuple or dict with the metadata for the given image number
    return {
        'description': f'Description for image {image_number}',
        'color1': 'Red',  # Example color, replace with actual data
        'color2': 'Green',  # Example color, replace with actual data
        'color3': 'Blue',  # Example color, replace with actual data
        'space': 'Living Room',  # Example space, replace with actual data
        'price': 500 + image_number,  # Example price calculation, replace with actual data
        'keyword1': 'Modern',  # Example keyword, replace with actual data
        'keyword2': 'Elegant'  # Example keyword, replace with actual data
    }


# Database connection parameters
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'Sunidhi 19',
    'database': 'interiorDesign'
}

# Establish database connection
conn = mysql.connector.connect(**db_config)
cursor = conn.cursor()

# Base path where images are stored
base_path = r'D:\sunidhi\IIITG\sem6\softwareEngineering\InteriorDesign\designimages'

# Insert SQL template
insert_sql = '''
INSERT INTO design (designID, img, description, color1, color2, color3, space, price, keyword1, keyword2)
VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
'''

# Loop through image numbers
for i in range(1, 101):  # 1 to 100
    # Construct file path
    # Assuming all images are .jpg
    img_path = os.path.join(base_path, f'{i}.jpg')

    # Read image file in binary mode
    with open(img_path, 'rb') as img_file:
        img_blob = img_file.read()

    # Get metadata for the image
    metadata = get_metadata_for_image(i)

    # Execute insert statement
    cursor.execute(insert_sql, (
        i,  # designID, assuming it matches the image number
        img_blob,
        metadata['description'],
        metadata['color1'],
        metadata['color2'],
        metadata['color3'],
        metadata['space'],
        metadata['price'],
        metadata['keyword1'],
        metadata['keyword2']
    ))

# Commit and close
conn.commit()
cursor.close()
conn.close()

print("All images have been inserted into the database.")
