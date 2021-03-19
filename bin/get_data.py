from .classes.Item import Item
from .classes.StockForecast import StockForecast
from .get_data_from_ import get_data_from_iows, get_data_from_json
from .print_ import *

def create_valid_url_codes(base_url):
    product_id_len = 8
    base_url = base_url.replace('/\n', '')
    product_id = base_url[-product_id_len: ] # Gets last product_id_len numbers
    product_id_short = product_id[-3: ]

    return product_id, product_id_short

def get_data(FILE_item_list):
    
    items_list = []
    
    # Read all URLs given in FILE_item_list
    for item_url in FILE_item_list:
        item = Item()

        product_id, product_id_short = create_valid_url_codes(item_url)
        get_data_from_json(item, product_id_short, product_id)
        get_data_from_iows(item, product_id)

        # Print the result so far
        item.print_item()
        print("Stock forecast:")
        item.print_complete_forecast()
        print_split()
    
        items_list.append(item)
    
    return items_list