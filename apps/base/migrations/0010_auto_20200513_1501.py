# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2020-05-13 15:01
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0009_auto_20200511_1246'),
    ]

    operations = [
        migrations.AlterField(
            model_name='modelmanager',
            name='model_owner',
            field=models.ManyToManyField(blank=True, help_text='模块负责人', to=settings.AUTH_USER_MODEL, verbose_name='模块负责人'),
        ),
    ]
