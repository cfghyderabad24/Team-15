from rest_framework import serializers
from .models import *

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project_Table
        fields = '__all__'

class ReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = '__all__'


class UserNgoSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_Ngo
        fields = '__all__'


class UserHigherSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_Higher
        fields = '__all__'

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = '__all__'


class ProjectTableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project_Table
        fields = '__all__'