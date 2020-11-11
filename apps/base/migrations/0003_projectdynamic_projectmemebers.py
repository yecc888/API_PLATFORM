# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2020-04-08 18:56
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0002_auto_20200330_1641'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectDynamic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.DateTimeField(auto_now=True, verbose_name='操作时间')),
                ('type', models.CharField(max_length=50, verbose_name='操作类型')),
                ('operationObject', models.CharField(max_length=50, verbose_name='操作对象')),
                ('description', models.CharField(blank=True, max_length=1024, null=True, verbose_name='描述')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dynamic_project', to='base.ProjectManager', verbose_name='所属项目')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='userName', to=settings.AUTH_USER_MODEL, verbose_name='操作人')),
            ],
            options={
                'verbose_name': '项目动态',
                'verbose_name_plural': '项目动态',
                'db_table': 'project_dynamic',
            },
        ),
        migrations.CreateModel(
            name='ProjectMemebers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='base.ProjectManager', verbose_name='所属项目')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='用户')),
            ],
            options={
                'verbose_name': '项目成员',
                'verbose_name_plural': '项目成员',
                'db_table': 'project_memebers',
            },
        ),
    ]
