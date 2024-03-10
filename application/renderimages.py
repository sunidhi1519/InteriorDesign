from flask import Flask, send_file, render_template_string
import mysql.connector
import os

app = Flask(__name__)

# Database connection parameters
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'Sunidhi 19',
    'database': 'interiorDesign'
}

# Global database connection
global_conn = None


def get_db_connection():
    """Get or create a database connection."""
    global global_conn
    if global_conn is None or not global_conn.is_connected():
        global_conn = mysql.connector.connect(**db_config)
    return global_conn


@app.route('/')
def index():
    # Simple homepage to list images
    return render_template_string('''
        <html>
            <body>
                <h1>Interior Design Images</h1>
                {% for design_id in design_ids %}
                <div>
                    <h2>Design {{ design_id }}</h2>
                    <img src="/image/{{ design_id }}" width="300">
                </div>
                {% endfor %}
            </body>
        </html>
    ''', design_ids=range(1, 101))  # Assuming you have 100 images


@app.route('/image/<int:design_id>')
def serve_image(design_id):
    conn = get_db_connection()
    cursor = conn.cursor()

    # Retrieve the image for the given design_id
    cursor.execute("SELECT img FROM design WHERE designID = %s", (design_id,))
    row = cursor.fetchone()

    if row:
        # If the image exists, write it to a temporary file and serve it
        temp_path = f"temp_image_{design_id}.jpg"
        with open(temp_path, 'wb') as f:
            f.write(row[0])

        response = send_file(temp_path, mimetype='image/jpeg')

        # Cleanup: remove the temporary file after sending the file
        os.remove(temp_path)
        return response
    else:
        # If no image found, return a 404 error
        return "Image not found", 404


if __name__ == '__main__':
    try:
        app.run(debug=True)
    finally:
        if global_conn is not None and global_conn.is_connected():
            global_conn.close()
