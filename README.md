# AI Gateway

This is the AI Gateway Launch Kit repository.

## Run the frontend

```powershell
cd frontend
npm ci
npm run dev
```

Before committing frontend changes, verify the production build:

```powershell
npm run build
```

## Home Base Git routine

At the start of a work session:

```powershell
git pull --ff-only
git status
```

After completing and testing one logical change:

```powershell
git add <changed-files>
git commit -m "Describe the completed change"
git push
```

Do not store this repository in Dropbox. GitHub is the source of truth, and environment files containing secrets must remain uncommitted.
