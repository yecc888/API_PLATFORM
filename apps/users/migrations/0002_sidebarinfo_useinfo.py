# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2020-04-13 14:08
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='sidebarInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('parentId', models.SmallIntegerField(default=0, verbose_name='父组件ID')),
                ('title', models.CharField(default='', max_length=12, verbose_name='导航名称')),
                ('level', models.SmallIntegerField(default=0, verbose_name='等级')),
                ('sort', models.SmallIntegerField(default=0, verbose_name='排序')),
                ('name', models.CharField(default='', max_length=12, verbose_name='vue组件名称')),
                ('icon', models.CharField(default='', max_length=20, verbose_name='图标')),
                ('hidden', models.SmallIntegerField(default=0, verbose_name='是否隐藏')),
                ('createTime', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
            ],
            options={
                'verbose_name': '侧边栏',
                'verbose_name_plural': '侧边栏',
                'db_table': 'sidebarInfo',
            },
        ),
        migrations.CreateModel(
            name='useInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('icon', models.ImageField(blank=True, null=True, upload_to='icon/images/', verbose_name='头像')),
                ('menus', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='users.sidebarInfo', verbose_name='导航内容')),
            ],
            options={
                'verbose_name': '用户导航',
                'verbose_name_plural': '用户导航',
                'db_table': 'useInfo',
            },
        ),
    ]