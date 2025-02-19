# React-Django Blog Template

# Project Description:

This is a blog template built with React (Vite) and Django REST Framework.

# TECHNOLOGY STACK

| **Component** | **Technology**        | **Directory** | **Version** |
| ------------- | --------------------- | ------------- | ----------- |
| Frontend      | React + Vite          | /blogapp1     | 18.3.1      |
| Backend       | Django                | /blogApi      | 5.1.6       |
| API           | Django REST Framework |               | 3.15.2      |

# Getting Started

## Backend Setup

1. Navigate to the parent blogApi directory:

```bash
cd blogApi
```

2. Create virtual environment:

```bash
python -m venv .venv
```

3. Activate virtual environment:

Windows:

```bash
.venv\Scripts\activate
```

Unix/macOS:

```bash
source .venv/bin/activate
```

4. Create and configure environment variables:

```bash
# Windows
copy .env.example .env

# Unix/macOS
cp .env.example .env
```

5. Install dependencies:

```bash
pip install -r requirements.txt
```

6. Run migrations:

```bash
python manage.py migrate
```

7. Create a superuser (admin account):

```bash
python manage.py createsuperuser
```

8. Collect static files:

```bash
python manage.py collectstatic
```

9. Start the development server:

```bash
python manage.py runserver 8003
```

**NOTE:** Run the Django Backend Server Port on `8003` to ensure the frontend can connect to the backend API.

The backend API will be available at `http://localhost:8003`
The admin interface will be available at `http://localhost:8003/admin`

## Frontend Setup

1. Navigate to the blogapp1 directory:

```bash
cd blogapp1
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Using Fixtures For Backend Setup (Optional)

While still with your **virtual environment** activated,
To load the initial data into your database:

```bash
python manage.py loaddata blogApp/fixtures/initial_data.json
```

To update the fixture file with new data:

```bash
python manage.py dumpdata blogApp --indent 4 > blogApp/fixtures/initial_data.json
```
