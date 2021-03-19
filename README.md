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

    ------------------------------------------------

    Item:
     id: 30363594
     url: https://www.ikea.com/rs/sr/p/jaervfjaellet-kancelarijska-stolica-gunnared-tamnosiva-30363594/
     name: JÄRVFJÄLLET
     type: Kancelarijska stolica
     design: Gunnared tamnosiva
     currency_code: RSD
     price_incl_vat: 18999
     price_no_vat: 15832.5
     revamp_price: 18999
     in_stock_range_code: YES
     in_stock_available: 17
     restock_date_time: 
     restock_date_time_period: 

    Stock forecast:
    Date: 2021-03-20 	When: DAY 	NoAvailable: 16 	Where: STORE 	Probability: HIGH
    Date: 2021-03-21 	When: DAY 	NoAvailable: 25 	Where: STORE 	Probability: HIGH
    Date: 2021-03-22 	When: DAY 	NoAvailable: 25 	Where: STORE 	Probability: HIGH
    Date: 2021-03-23 	When: DAY 	NoAvailable: 25 	Where: STORE 	Probability: HIGH

    ------------------------------------------------




## TODO ##
- [x] Rewrite request_is_valid to give clearer information
- [x] Move main snippets to functions
- [ ] Implement product generated url
- [ ] Implement read list of urls from file
- [ ] Implement E-mail notification
- [ ] Create shell script that will call this periodically
- [ ] Figure out ART meaning 
- [ ] Make it global


