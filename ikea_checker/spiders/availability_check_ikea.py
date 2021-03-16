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


    def parse(self, response):
        delivery_status = response.xpath('//*[@id="content"]/div/div[1]/div/div[2]/div[3]/div/div[4]/div[1]/div/span[2]')
        store_status = response.xpath('//*[@id="content"]/div/div[1]/div/div[2]/div[3]/div/div[4]/div[2]/div/span[2]')
        