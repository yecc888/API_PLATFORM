__author__ = 'yecc'
__date__ = '2020/5/4 11:00'

from apscheduler.schedulers.background import BackgroundScheduler
from django_apscheduler.jobstores import DjangoJobStore, register_events, register_job


# 实例化调度器
scheduler = BackgroundScheduler()
# 调度器使用默认的DjangoJobStore()
scheduler.add_jobstore(DjangoJobStore(), 'default')

# 每天8点半执行这个任务
@register_job(scheduler, 'cron', id='test', hour=11, minute=18 , args=['test'])
def test(s):
    # 具体要执行的代码
    print('dfdfdf')

# 注册定时任务并开始
register_events(scheduler)
scheduler.start()