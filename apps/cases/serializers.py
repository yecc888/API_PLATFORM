__author__ = 'yecc'
__date__ = '2019/12/31 20:40'

from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.db import transaction
from .models import ApiManagerment, ApiParams, AllHeaders, ApiResponse, \
    Headers,CustomParameters, ApiMock, CaseManagerment,CaseApi,CaseGroup
from base.models import ModelManager, EnvManager
import threading
import json
from rest_framework.utils import model_meta
from base.serializers import ModelInterfaceSerializer, EnvInterfaceSerializer
from users.serializers import UerModelSerializers
from .utils import generate_data,generate_randint, \
    generate_strings,generate_timestamp,generate_uuid


class HeaderTempDeserializer(serializers.ModelSerializer):
    """
    Header 反序列化
    """
    # create_time = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %H:%M')
    # m_time = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %H:%M')
    # add_user = UerModelSerializers()

    class Meta:
        model = Headers
        fields = ['id', 'name', 'value']


class HeaderTempSerializer(serializers.ModelSerializer):
    """
    Header 序列化
    """

    class Meta:
        model = Headers
        fields = "__all__"


class ParamarsSerializer(serializers.ModelSerializer):
    """
    接口参数序列化
    """

    class Meta:
        model = ApiParams
        fields = ('id', 'name', 'value', 'raw')


class ParamarsDeserializer(serializers.ModelSerializer):
    """
    接口参数反序列化
    """

    class Meta:
        model = ApiParams
        fields = ('name', 'value', 'raw')


class HeadersSerializer(serializers.ModelSerializer):
    """
    接口Headers 序列化
    """

    class Meta:
        model = AllHeaders
        fields = ('id', 'name', 'value', 'raw')


class HeadersDeserializer(serializers.ModelSerializer):
    """
    接口Headers 反序列化
    """

    class Meta:
        model = AllHeaders
        fields = ('name', 'value', 'raw')


# 删除数据
def del_data(datas):
    for item in datas:
        item.delete()


# 创建Header数据
def save_header_data(instance, datas):
    for item in datas:
        AllHeaders.objects.create(api=instance, **item)


# 创建请求数据
def save_param_data(instance, datas):
    for items in datas:
        ApiParams.objects.create(api=instance, **items)


class ApiManagermentDeserializer(serializers.ModelSerializer):
    """
    接口管理序反列化，获取用户post的数据，处理数据
    """
    headers = HeadersDeserializer(many=True, write_only=True)
    paramars = ParamarsDeserializer(many=True, write_only=True)
    # create_time = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %H:%M:%S')
    # m_time = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %H:%M:%S')
    name = serializers.CharField(required=True, allow_blank=False,
                                 label="接口名称",
                                 error_messages={"blank": "请输入接口名称",
                                                 "required": "请输入接口名称"})
    url = serializers.CharField(required=True,
                                allow_blank=False, label="接口路径",
                                error_messages={"blank": "请输入接口路径",
                                                "required": "请输入接口路径"})
    method = serializers.CharField(required=True,
                                   allow_blank=False, label="请求方法",
                                   error_messages={"blank": "请输入接口请求方法",
                                                   "required": "请输入接口请求方法"})

    class Meta:
        model = ApiManagerment
        fields = ('id', 'name', 'url', 'method', 'protocol', 'status',
                  'sign', 'operator', 'model', 'env', 'headers', 'paramars', 'desc')

    def create(self, validated_data):
        """
        重载create
        :param validated_data:
        :return:
        """
        headers = validated_data.pop("headers")
        paramars = validated_data.pop("paramars")
        api = ApiManagerment.objects.create(**validated_data)
        for item in headers:
            AllHeaders.objects.create(api=api, **item)
        for value in paramars:
            ApiParams.objects.create(api=api, **value)
        return api

    def update(self, instance, validated_data):
        """
        重载update
        :param instance:
        :param validated_data:
        :return:
        """
        if validated_data.get('headers'):
            headers = validated_data.pop("headers")
            needdels = AllHeaders.objects.filter(api_id=instance.id)
            for item in needdels:
                item.delete()
            for header in headers:
                AllHeaders.objects.create(api=instance, **header)
            # delworker = threading.Thread(target=del_data, args=(needdels,))
            # delworker.start()
            # saveworker = threading.Thread(target=save_header_data, args=(instance,headers,))
            # saveworker.start()
            # saveworker.join()
        with transaction.atomic():  # 禁止自动提交
            sid = transaction.savepoint()  # 开启事物保存点
            try:
                if validated_data.get('paramars'):
                    paramars = validated_data.pop("paramars")
                    needdels = ApiParams.objects.filter(api_id=instance.id)
                    for item in needdels:
                        item.delete()
                    for paramar in paramars:
                        ApiParams.objects.create(api=instance, **paramar)
            except:
                transaction.savepoint_rollback(sid)  # 失败回滚
                raise serializers.ValidationError('数据库保存失败')
            else:
                transaction.savepoint_commit(sid)  # 没有异常，提交
            # delworker1 = threading.Thread(target=del_data, args=(needdels,))
            # delworker1.start()
            # saveworker1 = threading.Thread(target=save_param_data, args=(instance,paramars,))
            # saveworker1.start()
            # saveworker1.join()

        info = model_meta.get_field_info(instance)
        for attr, value in validated_data.items():
            if attr in info.relations and info.relations[attr].to_many:
                field = getattr(instance, attr)
                field.set(value)
            else:
                setattr(instance, attr, value)
        instance.save()
        return instance


class Jsonserializer(serializers.JSONField):
    default_error_messages = {
        'invalid_json': ('无效的json数据格式')
    }

    def to_representation(self, value):
        """
        控制序列化输出
        :param value:
        :return:
        """
        return json.loads(value)

    def to_internal_value(self, data):
        """
        控制反序列化输入
        """
        try:
            json.loads(data)
        except (TypeError, ValueError):
            self.fail('invalid_json')
        return data




class ApiResponseSerializer(serializers.ModelSerializer):
    """
    接口返回接口
    """
    create_time = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %H:%M:%S')
    # response_status = Jsonserializer()
    # response_header = Jsonserializer()
    # response_status = serializers.CharField(read_only=True)
    class Meta:
        model = ApiResponse
        fields = ('id','api','status_code','response_status','response_header',
                  'response_content','response_time','create_time')

    def to_representation(self, instance):
        """
        对数据进入序列化输出处理，控制输出内容及格式
        """
        data = super().to_representation(instance)
        response_header = data['response_header']
        if response_header:
            response_header = json.loads(response_header)
            data['response_header'] = response_header
        response_content = data['response_content']
        if response_content:
            response_content = json.loads(response_content)
            data['response_content'] = response_content
        return data



class ApiManagermentSerializer(serializers.ModelSerializer):
    """
    接口管理序列化,返回给客户的数据，不需要校验
    """
    create_time = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %H:%M')
    m_time = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %H:%M')
    model = ModelInterfaceSerializer()
    operator = UerModelSerializers()
    env = EnvInterfaceSerializer()
    paramars = ParamarsSerializer(many=True)
    headers = HeadersSerializer(many=True)
    # apiResp = serializers.SerializerMethodField()
    # apiRespCount = serializers.SerializerMethodField(read_only=True)
    #
    # def get_apiRespCount(self,obj):
    #     count = 0
    #     if ApiResponse.objects.filter(api_id=obj.id).count():
    #         count = ApiResponse.objects.filter(api_id=obj.id).count()
    #     return count
    #
    # def get_apiResp(self,obj):
    #     # 获取接口请求结果数据
    #     aipresp_json= []
    #     apir = ApiResponse.objects.filter(api_id=obj.id).order_by('-create_time')
    #     if apir:
    #         aipresp_json = ApiResponseSerializer(apir, many=True, context={'request': self.context['request']}).data
    #     return aipresp_json



    class Meta:
        model = ApiManagerment
        fields = ('id', 'name', 'url', 'method', 'protocol', 'status', 'create_time', 'm_time',
                  'sign', 'operator', 'model', 'env', 'paramars', 'headers', 'desc',)


class ApiTestSerializer(serializers.ModelSerializer):
    """
    接口快速测试序列化
    """
    headers = HeadersDeserializer(many=True, write_only=True)
    paramars = ParamarsDeserializer(many=True, write_only=True)

    class Meta:
        model = ApiManagerment
        fields = ('url', 'method', 'protocol', 'headers', 'paramars')


class CustomParametersSerializer(serializers.ModelSerializer):
    """
    自定义变量序列化
    """
    create_time = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %H:%M')
    m_time = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %H:%M')
    key = serializers.CharField(validators=[UniqueValidator(queryset=CustomParameters.objects.all(),message="key已经存在，请重新输入")])
    class Meta:
        model = CustomParameters
        fields = "__all__"

    def create(self, validated_data):
        """
        创建变量
        :param validated_data:
        :return:
        """
        p_type = int(validated_data.get('p_type',''))
        # 常量
        if p_type == 1:
            cp = CustomParameters.objects.create(**validated_data)
        # 随机数
        elif p_type == 2:
            min_p = validated_data.get('min', '')
            max_p = validated_data.get('max', '')
            c_value = generate_randint(min_p, max_p)
            validated_data['value'] = c_value
            cp = CustomParameters.objects.create(**validated_data)
        # 时间戳
        elif p_type == 3:
            validated_data['value'] = generate_timestamp()
            cp = CustomParameters.objects.create(**validated_data)
        # uuid
        elif p_type == 4:
            uuid_t = validated_data.get('uuid_type','')
            if uuid_t:
                validated_data['value'] = generate_uuid(uuidFormt=uuid_t)
            else:
                validated_data['value'] = generate_uuid()
            cp = CustomParameters.objects.create(**validated_data)
        # 日期时间
        elif p_type == 5:
            date_p = validated_data.get('date_type','')
            if date_p:
                validated_data['value'] = generate_data(dataFormt=date_p)
            else:
                validated_data['value'] = generate_data()
            cp = CustomParameters.objects.create(**validated_data)
        # 字符串
        else:
            str_type = validated_data.get('str_type', '')
            length = validated_data.get('str_length', '')
            validated_data['value'] = generate_strings(str_type, length)
            cp = CustomParameters.objects.create(**validated_data)
        return cp

    def update(self, instance, validated_data):
        """
        更新变量
        :param instance:
        :param validated_data:
        :return:
        """
        p_type = validated_data.get('p_type','')
        values = validated_data.pop('value')
        info = model_meta.get_field_info(instance)
        for attr, value in validated_data.items():
            if attr in info.relations and info.relations[attr].to_many:
                field = getattr(instance, attr)
                field.set(value)
            else:
                setattr(instance, attr, value)

        if p_type == 1:
            instance.value = values
        # 随机数
        elif p_type == 2:
            min_p = validated_data.get('min', '')
            max_p = validated_data.get('max', '')
            c_value = generate_randint(min_p, max_p)
            instance.value = c_value
        # 时间戳
        elif p_type == 3:
            instance.value = generate_timestamp()
        # uuid
        elif p_type == 4:
            uuid_t = validated_data.get('uuid_type','')
            if uuid_t:
                instance.value = generate_uuid(uuidFormt=uuid_t)
            else:
                instance.value = generate_uuid()
        # 日期时间
        elif p_type == 5:
            date_p = validated_data.get('date_type','')
            if date_p:
                instance.value = generate_data(dataFormt=date_p)
            else:
                instance.value = generate_data()
        # 字符串
        else:
            str_type = validated_data.get('str_type', '')
            length = validated_data.get('str_length', '')
            instance.value = generate_strings(str_type, length)
        instance.save()
        return instance


class ApiMockSerializer(serializers.ModelSerializer):
    create_time = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %H:%M:%S')
    m_time = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %H:%M:%S')
    # env = EnvInterfaceSerializer()
    mock_times = serializers.IntegerField(read_only=True)

    class Meta:
        model = ApiMock
        fields = ('id', 'name', 'url', 'method', 'protocol', 'status', 'create_time', 'm_time',
                  'body_type', 'mock_bodys', 'response_content', 'env', 'mock_param', 'mock_headers', 'desc',
                  'mock_times','delay')


class CaseSerializer(serializers.ModelSerializer):
    """
    用例序列化
    """
    create_time = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %H:%M:%S')
    m_time = serializers.DateTimeField(read_only=True, format='%Y-%m-%d %H:%M:%S')

    class Meta:
        model = CaseManagerment
        fields = '__all__'


class CaseGroupSerializer(serializers.ModelSerializer):
    """
    分组序列化
    """
    class Meta:
        model = CaseGroup
        fields = '__all__'


class CaseApiSerializer(serializers.ModelSerializer):
    """
    用例接口序列化
    """
    class Meta:
        model = CaseApi
        exclude = ['actual_data', 'extract_result', 'response', 'result_status', 'response_time']


class CaseApiDeserializer(serializers.ModelSerializer):
    """
    用例接口反序列化
    """
    class Meta:
        model = CaseApi
        fields = '__all__'