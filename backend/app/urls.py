from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('viewprojects', views.view_projects, name='view_projects'),
    path('higher/viewapprovals', views.view_approvals, name='view_approvals'),

path('view/userngo',views.view_user_ngo,name= 'view_user_ngo'),
path('view/userhigher',views.view_user_higher,name= 'view_user_higher'),

    path('ngo/emails', views.emails, name='emails'),

path('notifications',views.view_all_notification,name = 'view_all_notification'),
path('notifications/<int:notification_id>', views.get_notification, name='update_notifications'),
# same for both udates

path('notifications/<int:notification_id>/edit', views.update_notifications, name='update_notifications'),
#path('notifications/<int:notification_id>/', get_notification, name='get_notification'),
path('notifications/<int:notification_id>/edit1', views.update_notifications_false, name='update_notifications_false'),



    path('ngo/createreport', views.create_report, name='create_report'),
    path('ngo/createproject', views.create_project, name='create_project'),
path('createuserngo', views.create_user_ngo, name='create_userngo'),
path('createuserhigher', views.create_user_higher, name='create_userngo'),

#higher order
#project ->isapproved = flase - all
    #budject approved or not approved diff
    #ticket - view-create
    #--> pending tickets -> filter by excalation
    #path('project/<str:project_id>/edit', views.edit_is_approved, name='edit_is_approved'),
    path('projects/<str:project_id>/edit/approval', views.edit_project_approval, name='edit_project_approval'),
    path('projects/approved_count/', views.approved_count, name='approved_count'),

    #tickets
    path('tickets', views.view_tickets, name='view_tickets'),
    path('tickets/<str:id>', views.view_ticket_detail, name='view_ticket_detail'),
    path('tickets/create', views.ticket_create, name='ticket_create'),
    path('tickets/update/<str:id>', views.update_ticket, name='update_ticket'),
    path('tickets/delete/<str:id>', views.delete_ticket, name='delete_ticket'),

    #Message_Sending

    path('send_message/', views.send_message, name='send_message')

]
