from rest_framework.decorators import api_view
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from .models import Project_Table, Report
from .serializers import *
from twilio.rest import Client
from decouple import config
import time
from django.shortcuts import render
TWILIO_ACCOUNT_SID = config('TWILIO_ACCOUNT_SID')
TWILIO_AUTH_TOKEN = config('TWILIO_AUTH_TOKEN')

@api_view(['GET'])
def index(request):
    return Response({"message": "Welcome to the project management system."})

@api_view(['GET'])
def view_projects(request):
    projects = Project_Table.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def view_approvals(request):
    projects = Project_Table.objects.filter(isApproved=False)
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def view_user_ngo(request):
    projects = User_Ngo.objects.all()
    serializer = UserNgoSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def view_user_higher(request):
    projects = User_Higher.objects.all()
    serializer = UserHigherSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_report(request):
    if request.method == 'POST':
        serializer = ReportSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def create_notification(project_id):
    d = {
        'project_id': project_id,
    }
    serializer = NotificationSerializer(data=d)
    if serializer.is_valid():
        serializer.save()


@api_view(['GET'])
def get_notification(request, notification_id):
    try:
        notification = Notifications.objects.get(id=notification_id)
    except Notifications.DoesNotExist:
        return Response({'error': 'Notification not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = NotificationSerializer(notification)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def update_notifications(request, notification_id):
    try:
        notification = Notifications.objects.get(project_id=notification_id)
    except Notifications.DoesNotExist:
        return Response({'error': 'Notification not found'}, status=status.HTTP_404_NOT_FOUND)

    # Set admin_access to True
    notification.admin_access = True
    notification.save()

    # Serialize the updated notification
    serializer = NotificationSerializer(notification)

    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def update_notifications_false(request, notification_id):
    try:
        notification = Notifications.objects.get(project_id=notification_id)
    except Notifications.DoesNotExist:
        return Response({'error': 'Notification not found'}, status=status.HTTP_404_NOT_FOUND)

    # Set admin_access to True
    notification.admin_access = False
    notification.save()

    # Serialize the updated notification
    serializer = NotificationSerializer(notification)

    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def view_all_notification(request):
    if request.method == 'GET':
        notifications = Notifications.objects.all()
        projects = Project_Table.objects.all()  # Assuming you have a Project model

        notification_serializer = NotificationSerializer(notifications, many=True)
        project_serializer = ProjectSerializer(projects, many=True)

        # Combine the serialized data into a dictionary
        data = {
            'notifications': notification_serializer.data,
            'projects': project_serializer.data
        }

        return Response(data)

@api_view(['POST'])
def create_project(request):
    if request.method == 'POST':
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            project = serializer.save()
            create_notification(project.project_id)
            # send notifications
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['POST'])
# def create_project(request):
#     if request.method == 'POST':
#         # Check if project with the given ID already exists
#         project_id = request.data.get('project_id')
#         if Project_Table.objects.filter(project_id=project_id).exists():
#             return Response(
#                 {"project_id": ["A project with this project_id already exists."]},
#                 status=status.HTTP_400_BAD_REQUEST
#             )
#
#         serializer = ProjectSerializer(data=request.data)
#         if serializer.is_valid():
#             project = serializer.save()
#             create_notification(project.project_id)
#             # send notifications
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_user_ngo(request):
    if request.method == 'POST':
        serializer = UserNgoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def create_user_higher(request):
    if request.method == 'POST':
        serializer = UserHigherSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def view_tickets(request):
    tickets = Ticket.objects.all()
    serializer = TicketSerializer(tickets, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def view_ticket_detail(request, id):
    try:
        ticket = Ticket.objects.get(id=id)
    except Ticket.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = TicketSerializer(ticket)
    return Response(serializer.data)


@api_view(['POST'])
def ticket_create(request):
    serializer = TicketSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['POST'])
def edit_is_approved(request, project_id):
    project = get_object_or_404(Project_Table, project_id=project_id)
    is_approved = request.data.get('isApproved', False)
    project.isApproved = is_approved
    project.save()
    return Response({'status': 'success', 'project_id': project_id, 'isApproved': project.isApproved})



@api_view(['PUT'])
def update_ticket(request, id):
    try:
        ticket = Ticket.objects.get(id=id)
    except Ticket.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = TicketSerializer(ticket, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def delete_ticket(request, id):
    try:
        ticket = Ticket.objects.get(id=id)
    except Ticket.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    ticket.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['PUT'])
def edit_project_approval(request, project_id):
    try:
        project = Project_Table.objects.get(project_id=project_id)
    except Project_Table.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = ProjectSerializer(project, data=request.data,partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def approved_count(request):
    total_count = Project_Table.objects.count()
    approved_count = Project_Table.objects.filter(isApproved=True).count()
    return Response({'total_count': total_count,'approved_count':approved_count})


@api_view(['GET', 'POST'])
def emails(request):
    if request.method == 'GET':
        return Response({"message": "Emails functionality not implemented yet."})

    if request.method == 'POST':
        # handle sending emails
        return Response({"message": "Emails functionality not implemented yet."}, status=status.HTTP_501_NOT_IMPLEMENTED)

@api_view(['GET'])
def send_message(request):
    obj=Project_Table.objects.all()
    account_sid = 'Account sid (api)'
    auth_token = 'Account auth token'
    client = Client(account_sid, auth_token)
    id=obj[0].project_id
    message = client.messages.create(
    from_='whatsapp:+14155238886',
    body='Reminder! Project ID :'+str(id)+'is due in 7 days',
    to='whatsapp:+919971189661'
    )
    print(message.status)
    return Response({"message": "Message Sent"})