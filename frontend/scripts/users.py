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
    CREATE TABLE IF NOT EXISTS users (
        user_id VARCHAR(255) PRIMARY KEY,
        username VARCHAR(255),
        password VARCHAR(255),
        email VARCHAR(255),
        phone_number VARCHAR(255)
    )
"""
)

# Define the user details
users = [
    {
        "User ID": "2101205",
        "Username": "sunidhi05",
        "Password": "21012",
        "Email-ID": "sunidhi205@gmail.com",
        "Phone No": "9884576553",
    },
    {
        "User ID": "2101162",
        "Username": "sindhu62",
        "Password": "21011",
        "Email-ID": "sindhu162@gmail.com",
        "Phone No": "9884576576",
    },
]

# Insert users into the database
for user in users:
    cursor.execute(
        """
        INSERT INTO users (user_id, username, password, email, phone_number)
        VALUES (%s, %s, %s, %s, %s)
    """,
        (
            user["User ID"],
            user["Username"],
            user["Password"],
            user["Email-ID"],
            user["Phone No"],
        ),
    )

# Commit changes and close connection
conn.commit()
cursor.close()
conn.close()