# from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import QuoteSerializer
from .models import Quote
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class QuoteView(viewsets.ReadOnlyModelViewSet):
    serializer_class = QuoteSerializer
    queryset = Quote.objects.all()
