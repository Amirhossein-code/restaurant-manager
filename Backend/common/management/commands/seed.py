from django.core.management.base import BaseCommand
from model_bakery import baker
from app.models import Category, Item


class Command(BaseCommand):
    help = "Generate and save fake data for models"

    def handle(self, *args, **options):
        fake_categories_list = baker.make(Category, _quantity=10)
        fake_items_list = baker.make(Item, _quantity=500)

        # # Save the fake data to the database
        # Category.objects.bulk_create(fake_categories_list)
        # Item.objects.bulk_create(fake_items_list)

        self.stdout.write(
            self.style.SUCCESS("Successfully generated and saved fake data for models")
        )
