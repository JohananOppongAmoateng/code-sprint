def goto(browser, server_address, url):
    if url.startswith("http"):
        browser.get(url)
    else:
        browser.get(server_address + url)
