import requests as rq
import json
from bin.classes.item import Item, StockForecast
from bin.check_request_status import check_request_status

def print_split():
    print("\n------------------------------------------------\n")

'''
## TODO:
#   Rewrite check_request_status to work better with requests
#   Move main snippets to functions
#   Implement product generated url
#   Implement read list of urls from file
#   Implement E-mail notification
#   Create shell script that will call this periodically
#   Figure out ART meaning 
'''


def main():
    url = "https://www.ikea.com/rs/sr/products/594/30363594.json"
    if check_request_status(url):
        data = rq.get(url).content
        product_dict = json.loads(data)
        # print(product_dict)

    item = Item()
    item.id = int(product_dict['id'])
    item.url = product_dict['pipUrl']
    item.name = product_dict['name']
    item.type = product_dict['typeName']
    item.design = product_dict['validDesignText']
    item.currency_code = product_dict['currencyCode']
    item.price_incl_vat = product_dict['priceNumeral']
    item.price_no_vat = product_dict['priceExclTaxNumeral']
    item.revamp_price = int(product_dict['revampPrice']['integer'].replace('.', ''))

    url = "https://iows.ikea.com/retail/iows/rs/sr/stores/050/availability/ART/30363594"  # ART??????
    headers = {
          'Accept' : "application/vnd.ikea.iows+json;version=1.0",
          'Contract' : "37249",
          'Consumer' : "MAMMUT#pip-range"
        }
    data = rq.get(url, headers=headers).content
    product_dict = json.loads(data)['StockAvailability']

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
        # day_forecast.print_forecast()
    
    # Print the result so far
    print_split()
    item.print_item()
    print("Stock forecast:")
    item.print_complete_forecast()
    print_split()
    
    
    

if __name__ == "__main__":
    main()