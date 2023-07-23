from flask import  Flask, render_template
from flask_frozen import Freezer 

app = Flask(__name__)
freezer = Freezer(app)

# route
@app.route('/')
def index():
    return render_template('index.html')


if __name__=="__main__":
    # To run the development server locally, use:
    # app.run(debug=True)
    
    # For Flask Frozen, use the following instead:
    freezer.freeze()

