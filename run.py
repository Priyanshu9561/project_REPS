import os
import webbrowser

# Launch the REPS Gym application in default browser
file_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "index.html"))
print(f"Opening REPS Gym Platform: {file_path}")
webbrowser.open(f"file://{file_path}")
