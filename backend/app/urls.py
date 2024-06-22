from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('ngo/viewprojects', views.view_projects, name='view_projects'),
    path('higher/viewapprovals', views.view_approvals, name='view_approvals'),

path('view/userngo',views.view_user_ngo,name= 'view_user_ngo'),
path('view/userhigher',views.view_user_higher,name= 'view_user_higher'),

    path('ngo/emails', views.emails, name='emails'),

    path('ngo/createreport', views.create_report, name='create_report'),
    path('ngo/createproject', views.create_project, name='create_project'),
path('createuserngo', views.create_user_ngo, name='create_userngo'),
path('createuserhigher', views.create_user_higher, name='create_userngo'),

#higher order
#project ->isapproved = flase - all
    #budject approved or not approved diff
    #ticket - view-create
    #--> pending tickets -> filter by excalation





    #tickets
    path('tickets/', views.view_tickets, name='view_tickets'),
    path('tickets/<str:id>/', views.view_ticket_detail, name='view_ticket_detail'),
    path('tickets/create', views.create_ticket, name='create_ticket'),
    path('tickets/update/<str:id>/', views.update_ticket, name='update_ticket'),
    path('tickets/delete/<str:id>/', views.delete_ticket, name='delete_ticket'),

]
