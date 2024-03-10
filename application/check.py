from flask import Flask, send_file, render_template_string, after_this_request
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

# Database configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:Sunidhi19@localhost/interiorDesign'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Assuming `Design` is your model class for the `design` table


class Design(db.Model):
    __tablename__ = 'design'
    designID = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.LargeBinary)


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
    design = Design.query.filter_by(designID=design_id).first()
    if design:
        temp_path = f"temp_image_{design_id}.jpg"
        with open(temp_path, 'wb') as f:
            f.write(design.img)

        @after_this_request
        def remove_file(response):
            os.remove(temp_path)
            return response

        return send_file(temp_path, mimetype='image/jpeg')
    else:
        # If no image found, return a 404 error
        return "Image not found", 404


if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create tables based on models
    app.run(debug=True)
