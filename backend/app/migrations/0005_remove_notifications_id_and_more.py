# Generated by Django 5.0.6 on 2024-06-22 20:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_notifications'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='notifications',
            name='id',
        ),
        migrations.AlterField(
            model_name='notifications',
            name='project_id',
            field=models.CharField(max_length=100, primary_key=True, serialize=False),
        ),
    ]
