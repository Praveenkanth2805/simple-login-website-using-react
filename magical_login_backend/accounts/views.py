# accounts/views.py
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

DEMO_USERS = {
    'praveen': 'password123',
    'sweetheart': 'love123'
}

@csrf_exempt
def login_view(request):
    status = ''
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        if DEMO_USERS.get(username) == password:
            status = 'success'
        else:
            status = 'fail'
    return render(request, 'login.html', {'status': status})