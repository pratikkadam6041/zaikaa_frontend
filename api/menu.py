# zaikaa/app.py
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

menu_data = [
    # Starters & Snacks
    {'id': 1, 'name': 'Mutton Mith Mirchi (5 Pc)', 'category': 'Starters', 'type': 'Non-Veg', 'price': 240},
    {'id': 2, 'name': 'Chicken Mith Mirchi (5 Pc)', 'category': 'Starters', 'type': 'Non-Veg', 'price': 180},
    {'id': 3, 'name': 'Green Piss Fry', 'category': 'Starters', 'type': 'Veg', 'price': 125},
    {'id': 4, 'name': 'Paneer Pakoda', 'category': 'Starters', 'type': 'Veg', 'price': 180},
    {'id': 5, 'name': 'Chicken Fry', 'category': 'Starters', 'type': 'Non-Veg', 'price': 260},
    {'id': 6, 'name': 'Egg Pakoda', 'category': 'Starters', 'type': 'Non-Veg', 'price': 120},
    {'id': 7, 'name': 'Fish Fry (Masala / Kadak)', 'category': 'Starters', 'type': 'Non-Veg', 'price': 140},

    # Chinese Starter
    {'id': 8, 'name': 'Paneer Hot Pan', 'category': 'Chinese Starter', 'type': 'Veg', 'price': 240},
    {'id': 9, 'name': 'Paneer Chilly', 'category': 'Chinese Starter', 'type': 'Veg', 'price': 210},
    {'id': 10, 'name': 'Veg Manchurian', 'category': 'Chinese Starter', 'type': 'Veg', 'price': 190},
    {'id': 11, 'name': 'Chicken Hot Pan', 'category': 'Chinese Starter', 'type': 'Non-Veg', 'price': 250},
    {'id': 12, 'name': 'Chicken Chilly', 'category': 'Chinese Starter', 'type': 'Non-Veg', 'price': 230},
    {'id': 13, 'name': 'Chicken Lollipop', 'category': 'Chinese Starter', 'type': 'Non-Veg', 'price': 150},
    
    # Soup
    {'id': 14, 'name': 'Cream Of Tomato Soup', 'category': 'Soup', 'type': 'Veg', 'price': 120},
    {'id': 15, 'name': 'Veg Manchow Soup', 'category': 'Soup', 'type': 'Veg', 'price': 120},
    {'id': 16, 'name': 'Cream Of Chicken Soup', 'category': 'Soup', 'type': 'Non-Veg', 'price': 130},
    {'id': 17, 'name': 'Chicken Manchow Soup', 'category': 'Soup', 'type': 'Non-Veg', 'price': 130},

    # Veg Main Course
    {'id': 18, 'name': 'Zaika Spl. Veg', 'category': 'Veg Main Course', 'type': 'Veg', 'price': 320},
    {'id': 19, 'name': 'Paneer Korma', 'category': 'Veg Main Course', 'type': 'Veg', 'price': 300},
    {'id': 20, 'name': 'Shahi Paneer Panjabi', 'category': 'Veg Main Course', 'type': 'Veg', 'price': 290},
    {'id': 21, 'name': 'Paneer Butter Masala', 'category': 'Veg Main Course', 'type': 'Veg', 'price': 380},
    {'id': 22, 'name': 'Kaju Paneer Masala', 'category': 'Veg Main Course', 'type': 'Veg', 'price': 240},
    {'id': 23, 'name': 'Dal Kolhapuri', 'category': 'Veg Main Course', 'type': 'Veg', 'price': 130},

    # Non-Veg Main Course (Mutton & Chicken)
    {'id': 24, 'name': 'Mutton Malwani Kala Masala', 'category': 'Non-Veg Main Course', 'type': 'Non-Veg', 'price': 470},
    {'id': 25, 'name': 'Mutton Handi', 'category': 'Non-Veg Main Course', 'type': 'Non-Veg', 'price': 420},
    {'id': 26, 'name': 'Mutton Kolhapuri', 'category': 'Non-Veg Main Course', 'type': 'Non-Veg', 'price': 290},
    {'id': 27, 'name': 'Chicken Malwani Kala Masala', 'category': 'Non-Veg Main Course', 'type': 'Non-Veg', 'price': 420},
    {'id': 28, 'name': 'Chicken Handi', 'category': 'Non-Veg Main Course', 'type': 'Non-Veg', 'price': 350},
    {'id': 29, 'name': 'Butter Chicken', 'category': 'Non-Veg Main Course', 'type': 'Non-Veg', 'price': 450},

    # Thali
    {'id': 30, 'name': 'Dhangari Mutton Thali', 'category': 'Thali', 'type': 'Non-Veg', 'price': 440},
    {'id': 31, 'name': 'Chicken Special Thali', 'category': 'Thali', 'type': 'Non-Veg', 'price': 240},
    {'id': 32, 'name': 'Fish Special Thali', 'category': 'Thali', 'type': 'Non-Veg', 'price': 240},

    # Roti
    {'id': 33, 'name': 'Butter Roti', 'category': 'Roti', 'type': 'Veg', 'price': 25},
    {'id': 34, 'name': 'Butter Naan', 'category': 'Roti', 'type': 'Veg', 'price': 40},
    {'id': 35, 'name': 'Chapati', 'category': 'Roti', 'type': 'Veg', 'price': 18},
    
    # Biryani & Rice
    {'id': 36, 'name': 'Mutton Dum Biryani', 'category': 'Biryani & Rice', 'type': 'Non-Veg', 'price': 200},
    {'id': 37, 'name': 'Chicken Dum Biryani', 'category': 'Biryani & Rice', 'type': 'Non-Veg', 'price': 170},
    {'id': 38, 'name': 'Veg Biryani', 'category': 'Biryani & Rice', 'type': 'Veg', 'price': 180},
    {'id': 39, 'name': 'Jeera Rice', 'category': 'Biryani & Rice', 'type': 'Veg', 'price': 70},
]

@app.route('/api/menu', methods=['GET'])
def get_menu():
    return jsonify(menu_data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)