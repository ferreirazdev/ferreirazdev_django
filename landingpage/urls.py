from django.urls import path

from . import views

urlpatterns = [
    path('', views.landing_page_home, name='home')
]
