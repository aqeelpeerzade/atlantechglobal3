# Actions Log – Pulling the Latest GitHub Code

Repository: https://github.com/aqeelpeerzade/atlantechglobal3 (branch: `main`, latest commit `d0d9839` "Update Atlantech Global website")

Target folder: `E:\Atlantech Global Solutions Pvt Ltd\atlantech-global-new`

The target folder was **not** a git repository and already contained older files, so the repo was cloned to a temporary folder first, the old files were backed up, and then the latest files were copied in.

## 1. Inspect the target folder

```powershell
Get-ChildItem -Force | Select-Object Name, Mode
git --version
```

## 2. Clone the repository into a temporary folder

```powershell
$s = "C:\Users\siddi\AppData\Local\Temp\claude\...\scratchpad"
git clone https://github.com/aqeelpeerzade/atlantechglobal3 "$s\repo"
```

Checkout failed with `Filename too long` (a Windows path-length limit hit by the `out_backup_23102026` folder).

## 3. Fix the long-path problem and finish the checkout

```powershell
git -C "$s\repo" config core.longpaths true
git -C "$s\repo" restore --source=HEAD --staged --worktree :/
git -C "$s\repo" status --short      # empty output = clean checkout
```

## 4. Compare remote files with the local folder

Compared every tracked file by SHA hash (`Get-FileHash`). Result (excluding `out_backup_*`):

- 388 files in the repo
- 85 identical, 54 different, 249 new
- Local-only old files: `src/app/page.tsx`, `src/app/page.module.css`, and 6 old components in `src/components/`

## 5. Back up the old local files

```powershell
robocopy "E:\Atlantech Global Solutions Pvt Ltd\atlantech-global-new" `
         "E:\Atlantech Global Solutions Pvt Ltd\atlantech-global-new-backup-20261028" `
         /E /XD .next node_modules
```

Backup location: `E:\Atlantech Global Solutions Pvt Ltd\atlantech-global-new-backup-20261028` (149 files).

## 6. Copy the latest files into the project folder

```powershell
robocopy "$s\repo" "E:\Atlantech Global Solutions Pvt Ltd\atlantech-global-new" `
         /E /XD .git out_backup_23102026
```

- `.git` was excluded, so the folder is still not a git repo.
- `out_backup_23102026` (an old build backup with very long paths) was excluded.
- Nothing was deleted: old local-only files are still there, and also saved in the backup.

## 7. Verify

Re-hashed all 388 files: **0 mismatches** between the repo and the project folder.

## Next steps (run by you)

```powershell
cd "E:\Atlantech Global Solutions Pvt Ltd\atlantech-global-new"
npm install
npm run dev
```

To make the folder a real git repo that can pull updates later:

```powershell
git init
git remote add origin https://github.com/aqeelpeerzade/atlantechglobal3
git fetch origin
git reset origin/main      # keeps your files, only sets the branch pointer
```

## 8. Make the folder a git repo (done by user)

```powershell
git init
git remote add origin https://github.com/aqeelpeerzade/atlantechglobal3
git fetch origin
git reset origin/main
git status
```

## 9. Clean-up (done after `git status`)

`git status` showed `out_backup_23102026/*` as deleted (not copied earlier) and 8 old files as untracked.
The old `src/app/page.tsx` also served `/`, which conflicts with the repo's `src/app/(home)/page.tsx`.

```powershell
git config core.longpaths true
Remove-Item src/app/page.tsx, src/app/page.module.css, `
  src/components/Contact.tsx, src/components/Footer.tsx, src/components/Header.tsx, `
  src/components/Hero.tsx, src/components/WhoWeAre.tsx, src/components/WhyUs.tsx
git restore --source=HEAD --worktree -- out_backup_23102026
git checkout -B main origin/main      # rename local branch master -> main
git status -sb
```

The 8 removed files are still in `atlantech-global-new-backup-20261028`.

## 10. Code fixes (see FIXES.md for the reasons)

```powershell
npm install                       # restore node_modules
npm install libphonenumber-js     # country list, dial codes, per-country phone rules
npx tsc --noEmit                  # type check (0 errors)
npx eslint src                    # lint (0 errors, 0 warnings)
npx next build                    # server-mode build, includes /api/lead
```

Static-hosting build check:

```powershell
$env:STATIC_EXPORT = "true"
$env:NEXT_PUBLIC_LEAD_ENDPOINT = "/agbeta3/api/lead.php"
npx next build                    # out/ contains api/lead.php, no Node route
```

API smoke test (server on port 3100 with a dummy key):

```powershell
$env:WEB3FORMS_ACCESS_KEY = "dummy"; npx next start -p 3100
curl -X POST http://localhost:3100/agbeta3/api/lead/ -H "Content-Type: application/json" -d '{"email":"nope","human":"1","elapsed_ms":"5000"}'
```

Image conversion (sharp): six large PNGs in `public/images` were converted to WebP (1600px max, quality 82) and the code now points to the `.webp` files.
