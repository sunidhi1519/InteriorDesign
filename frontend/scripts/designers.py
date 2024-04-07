import mysql.connector

# Establish connection to MySQL database
conn = mysql.connector.connect(
    host="localhost",  # e.g., "localhost"
    user="root",
    password="Sunidhi 19",
    database="interiorDesign",
)

cursor = conn.cursor()

# Create the table if it doesn't exist
cursor.execute(
    """
    CREATE TABLE IF NOT EXISTS designers (
        designer_id VARCHAR(255) PRIMARY KEY,
        designer_name VARCHAR(255),
        password VARCHAR(255),
        email VARCHAR(255),
        phone_number VARCHAR(255)
    )
"""
)

# Define the designer details
designers = [
    {
        "Designer ID": "D2101",
        "Designer Name": "Rachel Stone",
        "Password": "designer123",
        "Email-ID": "rachel.stone@gmail.com",
        "Phone No": "9884576553",
    },
    {
        "Designer ID": "D2102",
        "Designer Name": "Ethan Adams",
        "Password": "designer456",
        "Email-ID": "ethan.adams@gmail.com",
        "Phone No": "9884576576",
    },
    {
        "Designer ID": "D2103",
        "Designer Name": "Jasper James",
        "Password": "designer789",
        "Email-ID": "jasper.james@gmail.com",
        "Phone No": "9884576543",
    },
    {
        "Designer ID": "D2104",
        "Designer Name": "Lily Anniston",
        "Password": "designerabc",
        "Email-ID": "lily.anniston@gmail.com",
        "Phone No": "9884576523",
    },
    {
        "Designer ID": "D2105",
        "Designer Name": "Maxine Monroe",
        "Password": "designerxyz",
        "Email-ID": "maxine.monroe@gmail.com",
        "Phone No": "9884576589",
    },
]

# Insert designers into the database
for designer in designers:
    cursor.execute(
        """
        INSERT INTO designers (designer_id, designer_name, password, email, phone_number)
        VALUES (%s, %s, %s, %s, %s)
    """,
        (
            designer["Designer ID"],
            designer["Designer Name"],
            designer["Password"],
            designer["Email-ID"],
            designer["Phone No"],
        ),
    )

# Commit changes and close connection
conn.commit()
cursor.close()
conn.close()
