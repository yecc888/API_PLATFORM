# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2020-04-10 13:17
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_auto_20200408_1922'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='projectdynamic',
            name='project',
        ),
    ]
