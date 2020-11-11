# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2020-11-05 17:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cases', '0005_casegroup_level'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='apiresponse',
            name='fail_num',
        ),
        migrations.RemoveField(
            model_name='apiresponse',
            name='success_num',
        ),
        migrations.AddField(
            model_name='apiresponse',
            name='create_time',
            field=models.DateTimeField(auto_now_add=True, help_text='创建时间', null=True, verbose_name='创建时间'),
        ),
    ]
