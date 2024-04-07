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
with open("keywords.txt", "r") as file:
    design_id = 1  # Starting designID
    for line in file:
        # Extract colors from each line
        keywords = line.strip().split(",")
        if len(keywords) == 2:  # Ensure there are exactly 3 colors
            keyword1, keyword2, = keywords
            # SQL query to update the row with the corresponding designID
            query = """
            UPDATE design
            SET keyword1 = %s, keyword2 = %s
            WHERE designID = %s;
            """
            cursor.execute(query, (keyword1, keyword2, design_id))
            design_id += 1  # Move to the next designID

# Commit changes and close connection
conn.commit()
cursor.close()
conn.close()
