# Site Ray Renova

Site estático (HTML/CSS/JS, sem build). Abra `index.html` no navegador para ver.

## Trocar / adicionar fotos da galeria
1. Coloque as fotos (sem rosto das clientes) em `midia/originais/` — JPG, PNG ou WEBP.
   A ordem é alfabética; a **primeira** também aparece no topo do site (hero).
2. Rode: `python otimizar_fotos.py`
3. Pronto — a galeria lê `js/fotos.js` automaticamente.

## Foto da Ray
`midia/fotos/ray.webp` (hoje é um recorte pequeno do Beacons). Substitua por uma foto
maior dela (de preferência vertical, ~900px de largura) com o mesmo nome.

## Dados de contato
- WhatsApp e mensagem padrão: topo de `js/main.js`
- Endereço/mapa: seção `#local` em `index.html`

## Publicar (GitHub Pages)
```
git init && git add . && git commit -m "Site Ray Renova"
gh repo create rayrenova --public --source . --push
gh api -X POST repos/{owner}/rayrenova/pages -f "source[branch]=main" -f "source[path]=/"
```
Endereço: `https://<seu-usuario>.github.io/rayrenova/`
