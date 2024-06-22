from django.db import models
from datetime import datetime,timedelta
from django.utils import timezone
# Create your models here.

class User_Admin(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    username = models.CharField(max_length=100,null=False)
    password = models.CharField(max_length=100,null=False)
    email=models.CharField(max_length=100, null = False)
    created_time = models.DateTimeField(default=datetime.now, blank=True)
    level = models.CharField(max_length=5, default='Admin', editable=False)

    def __str__(self):
        return self.username


class User_Higher(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    username = models.CharField(max_length=100, null=False)
    password = models.CharField(max_length=100, null=False)
    email = models.CharField(max_length=100, null=False)
    created_time = models.DateTimeField(default=datetime.now, blank=True)
    level = models.CharField(max_length=50, default='Higher', editable=False)

    def __str__(self):
        return self.username


class Project_Table(models.Model):

    project_id = models.CharField(max_length= 100, primary_key=True)
    project_name = models.CharField(max_length=100, null=False)
    desc = models.CharField(max_length=700, null=False)
    budget = models.IntegerField(null = False)
    isApproved = models.BooleanField(default=False)
    created_date = models.DateTimeField(default=datetime.now, blank=True)
    delivery_date = models.DateTimeField(null = False)

    def __str__(self):
        return self.project_name

class User_Ngo(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    username = models.CharField(max_length=100, null=False)
    password = models.CharField(max_length=100, null=False)
    email = models.CharField(max_length=100, null=False)
    created_time = models.DateTimeField(default=datetime.now, blank=True)
    level = models.CharField(max_length=5, default='Ngo', editable=False)

    def __str__(self):
        return self.username


class Notifications(models.Model):
    project_id = models.CharField(max_length= 100, primary_key=True)
    admin_access = models.BooleanField(default=False)
    higher_access = models.BooleanField(default=False)





def default_deadline():
    return datetime.now() + timedelta(days=10)

class Ticket(models.Model):

    id = models.CharField(max_length= 100, primary_key=True)
    raised_by = models.CharField(max_length=100, null=False)
    assigned_to = models.CharField(max_length=100, null=False)
    desc = models.CharField(max_length=700, null=False)
    escalation_level = models.CharField(max_length=100, null=False)
    upload_time = models.DateTimeField(default=datetime.now)
    solved_time = models.DateTimeField(null = True)
    deadline_time = models.DateTimeField(default=default_deadline)

    def __str__(self):
        return self.username

class Report(models.Model):

    id = models.CharField(max_length= 100, primary_key=True)
    report_name = models.CharField(max_length=100, null=False)
    upload_time = models.DateTimeField(default=datetime.now)
    attachments = models.FileField(null = True)
    created_by = models.CharField(max_length=100, null = False)

    def __str__(self):
        return self.username
