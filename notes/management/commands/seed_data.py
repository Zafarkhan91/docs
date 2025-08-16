import os
import json
from django.core.management.base import BaseCommand
from django.conf import settings
from notes.models import Category, Topic

class Command(BaseCommand):
    help = 'Seeds the database with initial data from static JSON files'

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('Starting database seeding...'))

        # Define the categories and their corresponding JSON file paths
        data_sources = {
            'HTML': 'static/data/html.json',
            'CSS': 'static/data/css.json',
            'JavaScript': 'static/data/js.json',
            'Components': 'static/data/components.json',
        }

        for category_name, file_path in data_sources.items():
            self.stdout.write(f"Processing {category_name} from {file_path}...")

            # Get or create the category
            category, created = Category.objects.get_or_create(name=category_name)
            if created:
                self.stdout.write(self.style.SUCCESS(f'Created category: {category_name}'))

            full_path = os.path.join(settings.BASE_DIR, file_path)

            try:
                with open(full_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)

                # Iterate over the items in the JSON file and create Topic objects
                for item in data:
                    # Use update_or_create to avoid duplicating topics on subsequent runs
                    Topic.objects.update_or_create(
                        name=item['name'],
                        category=category,
                        defaults={
                            'description': item.get('description', ''),
                            'code': item.get('code', '')
                        }
                    )
                self.stdout.write(self.style.SUCCESS(f'Successfully seeded topics for {category_name}'))

            except FileNotFoundError:
                self.stdout.write(self.style.ERROR(f'File not found: {full_path}'))
            except json.JSONDecodeError:
                self.stdout.write(self.style.ERROR(f'Error decoding JSON from {full_path}. Please check the file for syntax errors.'))

        self.stdout.write(self.style.SUCCESS('Database seeding completed.'))
