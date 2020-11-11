# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2020-04-19 12:09
from __future__ import unicode_literals

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_auto_20200414_0036'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='user_secret',
            field=models.UUIDField(default=uuid.uuid4, verbose_name='用户jwt加密秘钥'),
        ),
    ]
