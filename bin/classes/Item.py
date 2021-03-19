class Item:
    def __init__(self):
        self.id = ""
        self.url = ""
        self.name = ""
        self.type = ""
        self.design = ""
        self.currency_code = ""
        self.price_incl_vat = 0
        self.price_no_vat = 0
        self.revamp_price = 0

        # Stock
        self.in_stock_range_code = ""           # Restock potential "YES"/"NO"
        self.in_stock_available = 0
        self.restock_date_time = ""             # "yyyy-mm-dd"
        self.restock_date_time_period = ""      # "DAY"/?

        # Restocking
        self.stock_forecast = []                # Array of StockForecast instances
        self.stock_forecast_days = 0
    
    def is_in_stock(self):
        in_stock = False
        if self.in_stock_available > 0:
            in_stock = True
        return in_stock

    def print_item(self):
        print("Item:\n",
             f"id: {self.id}\n",
             f"url: {self.url}\n",
             f"name: {self.name}\n",
             f"type: {self.type}\n",
             f"design: {self.design}\n",
             f"currency_code: {self.currency_code}\n",  
             f"price_incl_vat: {self.price_incl_vat}\n",
             f"price_no_vat: {self.price_no_vat}\n",
             f"revamp_price: {self.revamp_price}\n",
             f"in_stock_range_code: {self.in_stock_range_code}\n",
             f"in_stock_available: {self.in_stock_available}\n",
             f"restock_date_time: {self.restock_date_time}\n",
             f"restock_date_time_period: {self.restock_date_time_period}\n",
             )

    def print_complete_forecast(self):
        for day in self.stock_forecast:    
            print(f"Date: {day.restock_date_time}",
                  f"\tWhen: {day.restock_date_time_period}",
                  f"\tNoAvailable: {day.available_stock}",
                  f"\tWhere: {day.available_stock_type}",
                  f"\tProbability: {day.in_stock_probability_code}")
        
