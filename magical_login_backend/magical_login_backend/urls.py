# accounts/urls.py
from django.urls import path
from .views import login_view

urlpatterns = [
    path('login/', login_view, name='login'),
]

# magical_login_backend/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('accounts.urls')),
]