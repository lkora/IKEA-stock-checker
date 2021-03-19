from .classes.Item import Item
from .classes.StockForecast import StockForecast
from .get_data_from_ import get_data_from_iows, get_data_from_json
from .print_ import *

def create_valid_url_codes(base_url):
    product_id_len = 8
    if base_url[-1] == "/":
        base_url = base_url[: len(base_url)]
    product_id = base_url[-product_id_len-1 : -1 : 1] # Gets last product_id_len numbers
    product_id_short = product_id[-3: ]

    return product_id, product_id_short

def get_data():
    item = Item()
    
    base_url = "https://www.ikea.com/rs/sr/p/jaervfjaellet-kancelarijska-stolica-gunnared-tamnosiva-30363594/"
    product_id, product_id_short = create_valid_url_codes(base_url)

    get_data_from_json(item, product_id_short, product_id)
    get_data_from_iows(item, product_id)
    
    # Print the result so far
    print_split()
    item.print_item()
    print("Stock forecast:")
    item.print_complete_forecast()
    print_split()

    return item