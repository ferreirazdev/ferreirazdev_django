from django.shortcuts import render


def landing_page_home(request):
    return render(request, 'home.html')
