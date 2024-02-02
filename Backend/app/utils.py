from django.utils.text import slugify


def round_to_nearest_thousand(value):
    # round 000  ex)   35378 -> 35000
    return round(value / 1000) * 1000


def round_to_nearest_hundred(value):
    # round 000  ex)   35378 -> 35300
    return round(value / 100) * 100


def custom_slugify(value):
    # allows persian text slugification
    return slugify(value, allow_unicode=True)
