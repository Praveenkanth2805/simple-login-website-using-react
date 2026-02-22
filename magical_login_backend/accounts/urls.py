from django.urls import path
from .views import login_api, home

urlpatterns = [
    path('', home, name='home'),         # root path
    path('login_api/', login_api, name='login_api'),
]