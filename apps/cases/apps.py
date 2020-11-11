from django.apps import AppConfig


class CasesConfig(AppConfig):
    name = 'cases'
    verbose_name = '用例相关'

    def ready(self):
        import cases.signals
