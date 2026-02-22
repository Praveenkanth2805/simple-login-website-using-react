# magical_login_backend/settings.py
INSTALLED_APPS = [
    ...,
    'accounts',
]

TEMPLATES = [
    {
        ...,
        'DIRS': [BASE_DIR / 'templates'],  # add templates folder
        ...
    }
]

# Optional: Use SQLite (default)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}