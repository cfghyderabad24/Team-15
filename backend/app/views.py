from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Project_Table, Report
from .serializers import *

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

@api_view(['POST'])
def create_project(request):
    if request.method == 'POST':
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
def create_ticket(request):
    serializer = TicketSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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


@api_view(['GET', 'POST'])
def emails(request):
    if request.method == 'GET':
        return Response({"message": "Emails functionality not implemented yet."})

    if request.method == 'POST':
        # handle sending emails
        return Response({"message": "Emails functionality not implemented yet."}, status=status.HTTP_501_NOT_IMPLEMENTED)
