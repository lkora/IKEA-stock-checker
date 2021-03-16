import scrapy


class AvailabilityCheckIkea(scrapy.Spider):
    name = "available_check"

    def start_requests(self):
        urls = [ 
            'https://www.ikea.com/rs/sr/p/jaervfjaellet-kancelarijska-stolica-gunnared-tamnosiva-30363594/',
            'https://www.ikea.com/rs/sr/p/jaervfjaellet-kancelarijska-stolica-gunnared-plava-20363599/',
            'https://www.ikea.com/rs/sr/p/markus-kancelarijska-stolica-vissle-tamnosiva-70261150/'
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)


    def parse(self, page):
        
        PRODUCT_NAME = 'div.range-revamp-header-section__title--big ::text'
        ERROR_BUTTON = 'span.range-revamp-stockcheck__status--error'
        
        avalable = False
        if page.css(ERROR_BUTTON).get() is not None:
            avalable = True

        yield {
            'product':page.css(PRODUCT_NAME).get(),
            'available':avalable
        }
        