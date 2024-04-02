import mysql.connector

# Establish connection to MySQL database
conn = mysql.connector.connect(
    host="localhost",    # e.g., "localhost"
    user="root",
    password="Sunidhi 19",
    database="interiorDesign"
)

cursor = conn.cursor()

# Assuming colors.txt contains your color values, one set per line
with open("rgb.txt", "r") as file:
    design_id = 1  # Starting designID
    for line in file:
        # Extract colors from each line
        colors = line.strip().split(", ")
        if len(colors) == 3:  # Ensure there are exactly 3 colors
            color1, color2, color3 = colors
            # SQL query to update the row with the corresponding designID
            query = """
            UPDATE design
            SET color1 = %s, color2 = %s, color3 = %s
            WHERE designID = %s;
            """
            cursor.execute(query, (color1, color2, color3, design_id))
            design_id += 1  # Move to the next designID

# Commit changes and close connection
conn.commit()
cursor.close()
conn.close()
