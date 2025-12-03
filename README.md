## Playwright (JavaScript)

### 1. Instalasi & Setup Playwright
- Buka **VS Code**
- Klik **View**
- Pilih **Command Palette**
- Ketik **Test: Install Playwright**
- Pada konfigurasi instalasi:
  - **Chromium:** ✔️ check  
  - **WebKit:** ❌ uncheck  
  - **Firefox:** ❌ uncheck  
  - **Use JavaScript:** ✔️ check  
  - **Add GitHub Actions workflow:** opsional  
- Klik **OK / Install**

---

### 2. Menjalankan Test

**Menjalankan seluruh test dalam folder `tests`:**
```bash
npx playwright test
```

**Menjalankan test spesifik (file tertentu):**
```bash
npx playwright test nama-file.spec.js
```