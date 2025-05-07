import pytest
from functools import partial
from django.core.cache import cache
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from selenium_tests.urls import goto


def get_chrome_options():
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--disable_gpu")
    return chrome_options


def setup_driver(chrome_options):
    return webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=chrome_options)


@pytest.fixture(scope="function")
def browser(live_server, settings, request):
    settings.DEBUG = True
    settings.USE_TZ = True

    chrome_options = get_chrome_options()
    driver = setup_driver(chrome_options)

    driver.implicitly_wait(5)
    driver.goto = partial(goto, driver, live_server.url)
    # TODO: Setup extended browser functions
    driver.maximize_window()

    try:
        yield driver
    finally:
        cache.clear()
        driver.quit()
