@echo off  & for /f "delims=^" %%i in ('npm outdated --parseable --depth=0') do (
for /f "delims=:" %%i in ("%%~ni") do (npm install %%i@latest)
)& pause