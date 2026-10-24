# Site Ray Renova – Cabelos & Estética

**No ar:** https://adailton-silva2.github.io/siteRay/
**Repositório:** git@github.com:Adailton-Silva2/siteRay.git (branch `main`, GitHub Pages em `/ (root)`)

Site estático (HTML/CSS/JS, sem build). Para ver localmente, abra `index.html` no navegador.

## Status (24/10/2026)
Pronto e publicado, já com as fotos reais da Ray (11 trabalhos na galeria + foto dela).

### Pendências
- [x] **Foto do topo (hero)**: cabelo de costas/lado, sem rosto, vertical, ≥1000px.
      Nomear para ficar 1º em ordem alfabética (ex.: `01-destaque.jpg`).
- [x] **Foto da Ray** (Sobre + selinho do topo): vertical, peito pra cima, ≥800px.
      Substituir `midia/fotos/ray.webp` (hoje borrada, recorte de 152px).
- [x] **Galeria**: 8–12 fotos **sem rosto das clientes**, de preferência uma por serviço
      (progressiva, luzes/loiro, botox/selagem, hidratação, escova e corte); antes/depois é bem-vindo.
- [ ] *(opcional)* Foto do Espaço Renova → entraria na seção "Onde estou".
- [ ] *(opcional)* Texto "Minha história" da Ray → substitui o rascunho em `#sobre` no `index.html`.
- [ ] *(opcional)* E-mail dela → rodapé.
- [ ] Colocar o link do site no Beacons e na bio do Instagram.
- [ ] Trocar o WhatsApp antigo (95444-3124) no Beacons/Instagram, se houver botão direto de WhatsApp.
- [ ] *(futuro)* Domínio próprio — ver "Domínio próprio" abaixo.

> Fotos: 3 da galeria mostram o rosto da cliente de perfil (03 Luzes, 05 Reconstrução e finalização, 11 Hidratação).
> Se alguma cliente não puder aparecer, apague de `midia/originais/` e rode o script de novo.

## Quando as fotos chegarem
1. Copie as fotos da galeria para `midia/originais/` (fora do git, ver `.gitignore`).
   A **primeira** em ordem alfabética também vira a foto do topo.
   O nome vira a legenda da foto: `06-Selagem - antes.jpg` → "Selagem - antes".
2. Rode: `python otimizar_fotos.py` → gera `midia/fotos/NN.webp` + miniaturas e reescreve `js/fotos.js`.
   Os cartões "Em breve" somem sozinhos quando houver 6+ fotos.
3. Foto da Ray: converta e salve como `midia/fotos/ray.webp`, por exemplo:
   `python -c "from PIL import Image; Image.open('ray.jpg').convert('RGB').save('midia/fotos/ray.webp', quality=85)"`
4. Se a foto do topo mudar, regenere `og-image.jpg` (prévia do link no WhatsApp, 1200×630).
5. Publique: `git add . && git commit -m "Fotos reais" && git push` (o Pages atualiza em ~1 min).

## Domínio próprio (mais barato)
Domínio `rayrenova.com.br` no **Registro.br** (~R$ 40/ano, CPF, renovação no mesmo preço) +
continuar no GitHub Pages (hospedagem e HTTPS grátis). Evitar pacotes "hospedagem + domínio grátis".
1. Registrar em registro.br e pagar (Pix/boleto).
2. No projeto: criar arquivo `CNAME` com `rayrenova.com.br`; trocar `og:url`/`og:image` no `<head>` do `index.html`.
3. No Registro.br, DNS do domínio → registros **A** para os IPs do GitHub Pages
   (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) e **CNAME** `www` → `adailton-silva2.github.io`.
4. GitHub → Settings → Pages: informar o domínio e marcar "Enforce HTTPS" (após o DNS propagar).
   O endereço antigo passa a redirecionar sozinho.

## Onde mexer
| O quê | Onde |
|---|---|
| WhatsApp (5511978303677) e mensagem padrão | topo de `js/main.js` |
| Serviços, textos, endereço/mapa | `index.html` (seções `#servicos`, `#sobre`, `#local`) |
| Cores e fontes | variáveis em `:root` no `css/style.css` |
| Prévia do link (og:image / og:url) | `<head>` do `index.html` |

## Acesso (este PC)
- SSH: chave `~/.ssh/id_ed25519_adailton-silva2`, cadastrada na conta **Adailton-Silva2**;
  `~/.ssh/config` usa essa chave para `github.com`.
- O Git Credential Manager (HTTPS) está logado em **outra** conta (AdailtonSilva88) — por isso o remote é SSH.
- Identidade do git ainda **não** configurada neste PC (commits saem com erro "Author identity unknown"). Configure uma vez:
  `git config --global user.name "Adailton Silva"` e `git config --global user.email "developeradailton@gmail.com"`
  (o e-mail precisa estar cadastrado na conta Adailton-Silva2 para os commits aparecerem no perfil).

Plano original: `PLANO.md`. Print de referência do Beacons: `referencia/` (fora do git).
