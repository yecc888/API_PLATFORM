# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2020-04-13 18:57
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_useinfo_role'),
    ]

    operations = [
        migrations.AddField(
            model_name='useinfo',
            name='user',
            field=models.ForeignKey(blank=True, default=1, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='用户'),
        ),
    ]
