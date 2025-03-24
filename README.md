# Expense Tracker Frontend

React-based frontend for the Expense Tracker application.

## Getting Started

1. Clone & Install
```bash
# Clone repository
git clone https://github.com/darshit-javia/expense-tracker.git
cd expense-tracker2/trainee_frontend

# Install dependencies
npm install
```

2. Environment Setup
```bash
# Copy environment file
cp .env.example .env

# Configure environment variables
REACT_APP_API_URL=http://localhost:5000
REACT_APP_ENV=development
```

3. Start Development
```bash
npm start
```

## Development Guide

### Branch Management
```bash
# Create feature branch
git checkout -b feature/new-feature

# Create bugfix branch
git checkout -b bugfix/issue-description
```

### Commit Convention
```bash
# Feature
git commit -m "feat: add expense form"

# Bug fix
git commit -m "fix: correct date format"

# Documentation
git commit -m "docs: update README"
```

## 🛠️ Tech Stack

- React 18
- TypeScript
- Chart.js
- Axios
- React Router DOM

## 📋 Requirements

- Node.js ≥ 14
- npm ≥ 6

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/        # Reusable components
├── pages/            # Route components
├── services/         # API services
├── utils/            # Helper functions
└── App.tsx           # Main component
```

## 📚 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run development server |
| `npm test` | Run test suite |
| `npm run build` | Build for production |
| `npm run lint` | Run linter |


## Troubleshooting

Common issues and solutions:

1. API Connection
```bash
# Check API status
curl http://localhost:5000/health

# Verify environment variables
echo $REACT_APP_API_URL
```

2. Build Issues
```bash
# Clear cache
npm clean-cache

# Rebuild node modules
rm -rf node_modules
npm install
```



