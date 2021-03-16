import scrapy
import time

# TODO: Make a script that works with requests (product number = request id)
# FIX: Make the request last longer so that the store info can be parsed

class AvailabilityCheckIkea(scrapy.Spider):
    name = "available_check"

    # custom_settings = {
    #     'DOWNLOAD_DELAY' : 1.0,
    #     'RANDOMIZE_DOWNLOAD_DELAY' : False,
    #     'AUTOTHROTTLE_ENABLED' : True,
    #     'COOKIES_ENABLED' : False,


    # }

    def start_requests(self):
        urls = [ 
            'https://www.ikea.com/rs/sr/p/jaervfjaellet-kancelarijska-stolica-gunnared-tamnosiva-30363594/',
            #'https://www.ikea.com/rs/sr/p/jaervfjaellet-kancelarijska-stolica-gunnared-plava-20363599/',
            #'https://www.ikea.com/rs/sr/p/markus-kancelarijska-stolica-vissle-tamnosiva-70261150/',
            'https://www.ikea.com/rs/sr/p/antilop-visoka-stolica-s-posluzavnikom-bela-srebrna-s29067293/'
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)


    def parse(self, page):
        PRODUCT_NAME = 'div.range-revamp-header-section__title--big ::text'
        DELIVERY_DIV = 'div.js-available-for-delivery div.range-revamp-stockcheck__item span.range-revamp-stockcheck__unavailable--error'
        STOCKCHECK_DIV = 'div.js-stockcheck-section div.range-revamp-stockcheck__item span.range-revamp-stockcheck__unavailable--error'
        delivery_unavailable = page.css(DELIVERY_DIV).get()
        store_unavailable = page.css(STOCKCHECK_DIV).get()
        
        # Product name
        name = page.css(PRODUCT_NAME).get()

        # Delivery availability
        delivery = False
        if delivery_unavailable is not None:
            delivery = True
        
        # Store availability
        store = False
        if store_unavailable is not None:
            store = True

        yield {
            'product':name,
            'delivery':delivery,
            # 'store':store
        }
        