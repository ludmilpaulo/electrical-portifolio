
# LEO Electrical & Plumbing — Django API

## Quick Start
```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver 0.0.0.0:8000
```
Admin: `http://127.0.0.1:8000/admin/`

## API
- `GET /api/services/`
- `GET /api/projects/`
- `GET /api/testimonials/`
- `POST /api/leads/` (name, email, phone, address?, service_type?, preferred_date?, message?)

## Seed data (optional)
Open admin and add Services like "Electrical Installations", "Solar Installations", "Compliance (COC)", "Fault Finding", "Plumbing", "Geyser/Heatpump".

## Deploy
- Render/Railway/Fly: set Python build, run `python manage.py migrate`, `gunicorn leoserver.wsgi`
- Add env vars from `.env.example`
- Configure CORS/ALLOWED_HOSTS with your domain.
