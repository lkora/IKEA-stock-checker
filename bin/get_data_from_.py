import requests as rq
import json

from .classes.Item import Item
from .classes.StockForecast import StockForecast
from .request_is_valid import request_is_valid

def get_data_from_json(item, id_short, id_):
    url = "https://www.ikea.com/rs/sr/products/" + id_short + "/" + id_ + ".json"
    headers = {}
    if request_is_valid(url, headers):
        data = rq.get(url).content
        product_dict = json.loads(data)
    else:
        print("Bad request or bad response!\n URL: '" + url + "'")
        exit()

    item.id = int(product_dict['id'])
    item.url = product_dict['pipUrl']
    item.name = product_dict['name']
    item.type = product_dict['typeName']
    item.design = product_dict['validDesignText']
    item.currency_code = product_dict['currencyCode']
    item.price_incl_vat = product_dict['priceNumeral']
    item.price_no_vat = product_dict['priceExclTaxNumeral']
    item.revamp_price = int(product_dict['revampPrice']['integer'].replace('.', ''))



def get_data_from_iows(item, id_):
    url = "https://iows.ikea.com/retail/iows/rs/sr/stores/050/availability/ART/" + id_  # ART??????
    headers = {
          'Accept' : "application/vnd.ikea.iows+json;version=1.0",
          'Contract' : "37249",
          'Consumer' : "MAMMUT#pip-range"
        }
    if request_is_valid(url, headers):
        data = rq.get(url, headers=headers).content
        product_dict = json.loads(data)['StockAvailability']
    else:
        print("Bad request or bad response!\n URL: '" + url + "'")
        exit()

    # Stock forecast
    available_stock_forecast = product_dict['AvailableStockForecastList']['AvailableStockForecast']
    for day in available_stock_forecast:
        available_stock = day['AvailableStock']['$']
        available_stock_type = day['AvailableStockType']['$']
        in_stock_probability_code = day['InStockProbabilityCode']['$']
        restock_date_time = day['ValidDateTime']['$']
        restock_date_time_period = day['ValidDateTimeUnit']['$']

        day_forecast = StockForecast(available_stock, 
                                    available_stock_type, 
                                    in_stock_probability_code, 
                                    restock_date_time, 
                                    restock_date_time_period)
        item.stock_forecast.append(day_forecast)
        item.stock_forecast_days += 1
        
    # Stock
    retail_item_availability = product_dict['RetailItemAvailability']
    item.in_stock_range_code = retail_item_availability['InStockRangeCode']['$']
    item.in_stock_available = int(retail_item_availability['AvailableStock']['$'])
    if not item.is_in_stock():
        # Get restock date
        item.restock_date_time = retail_item_availability['RestockDateTime']['$']
        item.restock_date_time_period = retail_item_availability['RestockDateTimeType']['$']
    else:
        item.restock_date_time = ""
        item.restock_date_time_period = ""
