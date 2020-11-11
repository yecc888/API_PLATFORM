# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2020-07-08 23:32
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cases', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='caseapi',
            name='case',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='case_api', to='cases.CaseManagerment', verbose_name='所属用例'),
        ),
        migrations.AlterField(
            model_name='casemanagerment',
            name='case_group',
            field=models.ForeignKey(blank=True, help_text='用例所属分组', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cases', to='cases.CaseGroup', verbose_name='用例所属分组'),
        ),
    ]