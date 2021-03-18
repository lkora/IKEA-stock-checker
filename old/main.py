import scrapy
from scrapy.crawler import CrawlerProcess
from bin.availability_check_ikea_spider import AvailabilityCheckIkea

process = CrawlerProcess(settings={
    "FEEDS": {
        "items.json": {"format": "json"},
    },
})

process.crawl(AvailabilityCheckIkea)
process.start()
