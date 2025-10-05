# Static Site Checker

> Started in: 2022-07
>
> ![Python](https://img.shields.io/badge/Python-3776AB?logo=Python&logoColor=FFDE57)

Static Site Checker is a web scraper that checks if a website changes e.g. if the price of a product on amazon.co.uk changes.

I add the URLs of products I would like to monitor to a file and my phone is pinged when the price changes. It helps me save a few pounds every so often.


## Usage

### Format of Adding Sites

```json
[
    {
        "url": "<url>",
        "siteName": "<name of site>",
        "services": ["<name of service>"],
        "productName": "<name of product>",
        "productNotes": "<notes about product>"
    }
]
```

- A site can be commented and not parsed by prefixing \<url> with '//'


### Services

- availability: check if a site is up
  - Required: siteName
- content: check if a site is updated (ignores tags and contents of script and style tags)
  - Required: siteName
- price: check if the price of an Amazon product changes
  - Required: productName
  - Optional: productNotes
