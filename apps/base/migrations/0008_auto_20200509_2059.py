# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2020-05-09 20:59
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_auto_20200427_1308'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projectmanager',
            name='desc',
            field=models.TextField(blank=True, default='', help_text='项目描述', null=True, verbose_name='项目描述'),
        ),
    ]
