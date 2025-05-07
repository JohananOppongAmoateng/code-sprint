from .settings import *  # noqa: F401, F403

SECRET_KEY = "django-insecure-rhzwm4hh$sa6d0yf1h8p*4!o0%iemlmezk#010w7+#p#)sbdd^"

DEBUG = True

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}