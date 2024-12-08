# 

Antes de nada, vamos a instalar bun como runtime para el proyecto:

```bash
powershell -c "irm bun.sh/install.ps1|iex"
```

Es posible que tengamos que abrir el vs code en modo administrador para poder utilizar bun como comando.

A continuación, utilizamos bun para instalar las dependencias del proyecto:
```bash
bun install
```

Para comprobar que todo está correcto, ejecutamos el proyecto:
```bash
bun run index.ts
```
