import os
from flask import Flask, render_template
from random import randint, choice
from math import floor

app = Flask(__name__)

class DishSales():
    def __init__(self, name, in_store, take_out, online, total, trend="+0%"):
        self.name = name
        self.in_store = in_store
        self.take_out = take_out
        self.online = online
        self.total = total
        self.trend = trend

def get_sales():
    highest_total_start = 273
    highest_total = highest_total_start
    # DISH_NAMES = ["Tandoori Chicken","Chicken Tikka","Sesame Naan","Cheese Naan","Chicken Biryani","Lamb Biryani","Chicken Kabab","Chicken Tikka Kabab","Mixed Tandoori Platter","Seikh Kabab Lamb","Tandoori Shrimp","Chicken Curry","Chicken Jalfrezi","Chicken Korma","Chicken Vindaloo","Murg Shahi Saag","Chicken Tikka Masala","Chicken Mushroom","Chicken Madras","Chicken Mango","Chicken Bhuna","Chilli Chicken","Chicken Methi Malai","Lamb Curry","Lamb Saag","Lamb Mushroom","Lamb Mango","Lamb Korma","Lamb Jazfrezi","Goat Curry","Goat Spinach","Lamb Vindaloo","Lamb Rogan Josh","Keema Muttar","Shrimp Curry","Shrimp Vindaloo","Shrimp Mushroom","Shrimp Saag","Shrimp Korma","Shrimp Masala","Fish Curry","Fish Masala","Malabar Fish Curry","Aloo Palak","Aloo Mattar","Bombay Aloo","Mixed Vegetable Curry","Channa Masala","Vegetable Vindaloo","Eggplant Bhartha","Navrattan Korma","Aloo Gobi","Palak Paneer","Mattar Paneer","Dal Makhani","Vegetable Malai Kofta","Palak Chole","Mattar Methi Malai","Vegetable Mango","Paneer Masala","Yellow Dal Tadka","Paneer Methi Malai","Paneer Shahi Korma","Bhindi Masala","Chili Paneer","Vegetable Biryani","Shrimp Biryani","Special Nawabi Biryani","Pulao Rice","Naan","Garlic Naan","Chapati","Tandoori Roti","Plain Paratha","Aloo Paratha","Aloo Naan","Vegetable Soup","Lentil Soup","Khopa Soup","Mulligatawny Soup","Masala Papadum","Vegetable Samosa (2 pc)","Mixed Vegetable Pakora","Onion Bhaji","Alu Tikki","Chicken Pakora","Cheese Pakora","Mixed Appetizer Platter","Vegetarian Thali","Non-Vegetarian Thali","Dinner For Two","Onion Kulcha","Pashwari Naan","Chilli Naan","Keema Naan","Garlic Cheese Naan","Cucumber Rayta","Green Fresh Salad","Achaar","Sweet Mango Chutney","Gulab Jamun","Rice Pudding","Mango Ice Cream"]
    # dish_names = DISH_NAMES
    # dish_names = ['Burrito', 'Taco', 'Carnitas', 'Beans', 'Horchata']
    dish_names = ["Tandoori Chicken","Chicken Tikka","Sesame Naan","Cheese Naan","Chicken Biryani","Lamb Biryani","Chicken Kabab","Chicken Tikka Kabab","Mixed Tandoori Platter","Seikh Kabab Lamb","Tandoori Shrimp","Chicken Curry","Chicken Jalfrezi","Chicken Korma","Chicken Vindaloo","Murg Shahi Saag","Chicken Tikka Masala","Chicken Mushroom","Chicken Madras","Chicken Mango","Chicken Bhuna","Chilli Chicken","Chicken Methi Malai","Lamb Curry","Lamb Saag","Lamb Mushroom","Lamb Mango","Lamb Korma","Lamb Jazfrezi","Goat Curry","Goat Spinach","Lamb Vindaloo","Lamb Rogan Josh","Keema Muttar","Shrimp Curry","Shrimp Vindaloo","Shrimp Mushroom","Shrimp Saag","Shrimp Korma","Shrimp Masala","Fish Curry","Fish Masala","Malabar Fish Curry","Aloo Palak","Aloo Mattar","Bombay Aloo","Mixed Vegetable Curry","Channa Masala","Vegetable Vindaloo","Eggplant Bhartha","Navrattan Korma","Aloo Gobi","Palak Paneer","Mattar Paneer","Dal Makhani","Vegetable Malai Kofta","Palak Chole","Mattar Methi Malai","Vegetable Mango","Paneer Masala","Yellow Dal Tadka","Paneer Methi Malai","Paneer Shahi Korma","Bhindi Masala","Chili Paneer","Vegetable Biryani","Shrimp Biryani","Special Nawabi Biryani","Pulao Rice","Naan","Garlic Naan","Chapati","Tandoori Roti","Plain Paratha","Aloo Paratha","Aloo Naan","Vegetable Soup","Lentil Soup","Khopa Soup","Mulligatawny Soup","Masala Papadum","Vegetable Samosa","Mixed Vegetable Pakora","Onion Bhaji","Alu Tikki","Chicken Pakora","Cheese Pakora","Mixed Appetizer Platter","Vegetarian Thali","Non-Vegetarian Thali","Onion Kulcha","Pashwari Naan","Chilli Naan","Keema Naan","Garlic Cheese Naan","Cucumber Rayta","Green Fresh Salad","Achaar","Sweet Mango Chutney","Gulab Jamun","Rice Pudding","Mango Ice Cream"]

    dish_sales = []
    for name in dish_names:
        highest_total = randint(highest_total - 5, highest_total)
        if highest_total < 20: highest_total = randint(highest_total_start - 15, highest_total_start)
        in_store = randint(floor(0.6*highest_total), floor(0.8*highest_total))
        remaining = highest_total - in_store
        take_out = randint(floor(0.6*remaining), floor(0.8*remaining))
        remaining -= take_out
        trend_percent = randint(-233, 430)
        trend = str(trend_percent) + '%'
        if trend_percent > 0: trend = '+' + trend
        dish_sale = DishSales(name, in_store, take_out, remaining, highest_total, trend)
        dish_sales.append(dish_sale)
    return dish_sales

@app.route('/')
@app.route('/index.html')
@app.route('/analytics')
def dashboard():
    return render_template('index.html')

@app.route('/details')
@app.route('/details.html')
def details():
    return render_template('details.html')

@app.route('/promos')
@app.route('/promos.html')
def promos():
    return render_template('promos.html')

@app.route('/sales')
def sales():
    return render_template('tables.html', dish_sales=get_sales())

@app.errorhandler(404)
def page_not_found(error):
    return render_template('login.html'), 404

if __name__ == '__main__':
    app.run()