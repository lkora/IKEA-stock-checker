# IKEA Stock Checker #
- - - - 
*Currently works only for IKEA in Belgrade, Serbia*

Script reads page responses for all the product links given in the file periodically, checking if the given item is in stock or not. If the item becomes available in stock it notifies the user via e-mail. 

## Prerequisites ##
- python 3
- requests
- json
- os

## Executing ##

    python3 main.py

## Output

        Item:
         id: 70261150
         url: https://www.ikea.com/rs/sr/p/markus-kancelarijska-stolica-vissle-tamnosiva-70261150/
         name: MARKUS
         type: Kancelarijska stolica
         design: Vissle tamnosiva
         currency_code: RSD
         price_incl_vat: 14999
         price_no_vat: 12499.17
         revamp_price: 14999
         in_stock_range_code: YES
         in_stock_available: 0
         restock_date_time: 2021-03-27
         restock_date_time_period: DAY

        Stock forecast:
        Date: 2021-03-20 	When: DAY 	NoAvailable: 0 	Where: STORE 	Probability: LOW
        Date: 2021-03-21 	When: DAY 	NoAvailable: 0 	Where: STORE 	Probability: LOW
        Date: 2021-03-22 	When: DAY 	NoAvailable: 0 	Where: STORE 	Probability: LOW
        Date: 2021-03-23 	When: DAY 	NoAvailable: 0 	Where: STORE 	Probability: LOW

        ------------------------------------------------





## TODO ##
- [x] Rewrite request_is_valid to give clearer information
- [x] Move main snippets to functions
- [x] Implement product generated url
- [x] Implement read list of urls from file
- [ ] Implement E-mail notification
- [ ] Create shell script that will call this periodically
- [ ] Make a web page to make it more seamless
- [ ] Figure out ART meaning
- [ ] Make it global


