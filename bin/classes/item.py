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

        
        self.in_stock_range_code = ""       # Restock potential "YES"/"NO"
        self.stock_forecast_days = 0
        self.stock_forecast = []            # Array of StockForecast instances
        

    def print_item(self):
        print("item:",
              f"\tid: {self.id}\n",
              f"\turl: {self.url}\n",
              f"\tname: {self.name}\n",
              f"\ttype: {self.type}\n",
              f"\tdesign: {self.design}\n",
              f"\tcurrency_code: {self.currency_code}\n",  
              f"\tprice_incl_vat: {self.price_incl_vat}\n",
              f"\tprice_no_vat: {self.price_no_vat}\n",
              f"\trevamp_price: {self.revamp_price}\n")

    def print_complete_forecast(self):
        for day in self.stock_forecast:    
            print(f"Date: {day.restock_date_time},",
                f"\tWhen: {day.restock_date_time_period}",
                f"\tNoAvailable: {day.available_stock},",
                f"\tWhere: {day.available_stock_type},",
                f"\tProbability: {day.in_stock_probability_code},")
        
class StockForecast:
    def __init__(self, *args):
        self.available_stock = 0
        self.available_stock_type = ""      # "STORE"/?
        self.in_stock_probability_code = "" # "LOW"/"HIGH"
        self.restock_date_time = ""         # "yyyy-mm-dd"
        self.restock_date_time_period = ""    # "DAY"/?
        
        if len(args) == 5:
            self.available_stock = args[0]
            self.available_stock_type = args[1]    
            self.in_stock_probability_code = args[2] 
            self.restock_date_time = args[3]
            self.restock_date_time_period = args[4]

    def print_forecast(self):
        print(f"Date: {self.restock_date_time},",
              f"\tWhen: {self.restock_date_time_period}",
              f"\tNoAvailable: {self.available_stock},",
              f"\tWhere: {self.available_stock_type},",
              f"\tProbability: {self.in_stock_probability_code},")