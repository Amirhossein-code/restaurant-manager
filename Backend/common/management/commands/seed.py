from django.core.management.base import BaseCommand
from model_bakery import baker
from app.models import Category, Item


class Command(BaseCommand):
    help = "Generate and save fake data for models"

    def handle(self, *args, **options):
        baker.make(Item, _quantity=200, _bulk_create=True)
        baker.make(Category, _quantity=10, _bulk_create=True)

        self.stdout.write(
            self.style.SUCCESS("Successfully generated and saved fake data for models")
        )
