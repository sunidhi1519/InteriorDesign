import mysql.connector

# Establish connection to MySQL database
conn = mysql.connector.connect(
    host="localhost",    # e.g., "localhost"
    user="root",
    password="Sunidhi 19",
    database="interiorDesign"
)

cursor = conn.cursor()

# Define the space assignments based on designID ranges
space_assignments = [
    (11, 20, "kitchen"),
    (21, 30, "bathroom"),
    (31, 40, "hall room"),
    (41, 50, "master bedroom"),
    (51, 60, "dining area"),
    (61, 70, "outdoor spaces"),
    (71, 80, "home office"),
    (81, 90, "dressing room"),
    (91, 100, "kids bedroom"),
]

# Loop through each assignment and execute an UPDATE query
for start_id, end_id, space in space_assignments:
    query = """
    UPDATE design
    SET space = %s
    WHERE designID BETWEEN %s AND %s;
    """
    cursor.execute(query, (space, start_id, end_id))

# Commit changes and close connection
conn.commit()
cursor.close()
conn.close()
