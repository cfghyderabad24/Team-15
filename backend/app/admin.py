from django.contrib import admin
from .models import User_Admin, User_Higher, User_Ngo, Project_Table, Ticket, Report

admin.site.register(User_Admin)
admin.site.register(User_Higher)
admin.site.register(User_Ngo)
admin.site.register(Project_Table)
admin.site.register(Ticket)
admin.site.register(Report)
