# accounts/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.shortcuts import render

def home(request):
    return render(request, 'login.html')  # your login template

# Demo users
DEMO_USERS = {
    'praveen': 'password123',
    'sweetheart': 'love123'
}

@csrf_exempt
def login_api(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')
        if DEMO_USERS.get(username) == password:
            return JsonResponse({'status': 'success'})
        else:
            return JsonResponse({'status': 'fail'})
    return JsonResponse({'status': 'error'})