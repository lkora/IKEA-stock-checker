class StockForecast:
    def __init__(self, *args):
        self.available_stock = 0
        self.available_stock_type = ""          # "STORE"/?
        self.in_stock_probability_code = ""     # "LOW"/"HIGH"
        self.restock_date_time = ""             # "yyyy-mm-dd"
        self.restock_date_time_period = ""      # "DAY"/?
        
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