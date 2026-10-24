# Site Ray Renova – Cabelos & Estética (site estático)

## Contexto
A Ray (mãe do usuário) é cabeleireira e hoje só tem uma página de links no Beacons (beacons.ai/rayrenova). Pelo print em `D:\Claude\RayRenova\`, ela tem fundo caramelo, foto redonda dela, botões brancos (WhatsApp, Agendamento, Endereço) e um carrossel de fotos de cabelo. A ideia é um **site próprio, moderno e gratuito**, que mostre o trabalho dela com galeria, história e localização e leve o visitante até o WhatsApp. O que mais importa: **ser 100% responsivo** e ter o **WhatsApp sempre a um toque**. O Beacons continua existindo, e o site pode virar mais um link lá dentro.

**Tudo do projeto fica em `D:\Claude\RayRenova\`**, incluindo uma cópia deste plano como `PLANO.md`.

## Identidade (tirada do Beacons + Instagram @ray.renova)
- Marca: **Ray Renova | Cabelos & Estética**
- Slogans: **"Beleza que Renova"** e **"Transformações que Renovam sua identidade."**
- Pilares: Cabelos Perfeitos · Inteligência de Cor · Estética
- Serviços: progressiva, luzes, botox capilar, selagem, hidratação, escova e corte
- Local: **Espaço Renova, Brás – São Paulo**
- WhatsApp: **(11) 97830-3677** → `https://wa.me/5511978303677`
- Paleta que segue o Beacons, só que mais sofisticada:
  - caramelo `#D1AD8A` (cor principal, igual ao Beacons)
  - areia clara `#F6EEE6` (fundos)
  - branco `#FFFFFF` (cards)
  - café `#3B2A20` (texto/títulos)
  - dourado suave `#B8925F` (detalhes e hover)
- Tipografia: **Montserrat** (a mesma do Beacons, no texto e nos botões) + **Playfair Display** (títulos elegantes)

## Hospedagem: GitHub Pages
- Grátis e sem cobrança surpresa. Endereço `https://<usuario>.github.io/rayrenova`, com domínio próprio opcional depois (ex.: rayrenova.com.br, ~R$40/ano).
- Para atualizar fotos, basta um `git push`.

## Estrutura (HTML/CSS/JS puros, sem build)
```
D:\Claude\RayRenova\
  PLANO.md
  index.html
  css\style.css      – tokens de cor acima, layout mobile-first
  js\main.js         – lightbox, animação ao rolar (IntersectionObserver), menu mobile
  midia\originais\   – fotos que o usuário colocar (sem rosto)
  midia\fotos\       – .webp otimizados (~1200px + miniaturas ~500px)
  og-image.jpg, favicon
  referencia\        – o print do Beacons vai para cá
```

## Seções (página única)
1. **Hero**: foto grande de cabelo (sem rosto), "Ray Renova", "Transformações que Renovam sua identidade." e botão "Agendar pelo WhatsApp".
2. **Serviços**: cards com ícones (Progressiva, Luzes/Inteligência de Cor, Botox capilar, Selagem, Hidratação, Escova e corte), sem preços. Cada card tem um link "Quero esse" que abre o WhatsApp com o nome do serviço na mensagem.
3. **Galeria**: grade masonry **só com fotos e sem rosto de clientes**. Toque abre o lightbox (setas e deslizar).
4. **Sobre a Ray**: a foto dela (a mesma do Beacons, se ela quiser) + texto curto "Minha história" (rascunho meu).
5. **Onde estou**: Espaço Renova – Brás/SP, mapa do Google embutido e botão "Como chegar".
6. **Rodapé**: WhatsApp, Instagram, e-mail.
7. **Botão flutuante de WhatsApp** fixo no canto, com a mensagem pré-preenchida "Olá Ray! Vi seu site e gostaria de agendar um horário."

## Fotos
- As imagens do Instagram e do Beacons não são acessíveis de forma automática (os dois bloqueiam), e as URLs do CDN expiram.
- O usuário coloca de 8 a 12 fotos sem rosto em `midia\originais\` (download ou print dos posts). Eu converto para WebP e redimensiono com ffmpeg, se estiver instalado, ou com PowerShell/.NET.
- Até lá: imagens provisórias de cabelo de costas e mechas (Unsplash), fáceis de trocar.

## Qualidade
- Mobile-first, testado em 360px, 768px e desktop.
- `loading="lazy"`, `alt` em tudo, meta OG (prévia ao mandar o link no WhatsApp), `prefers-reduced-motion`.

## Publicação
1. `git init` em `D:\Claude\RayRenova` (o print vai em `referencia\`, ou fica fora do git).
2. `gh repo create rayrenova --public` (com a confirmação do usuário) e push.
3. Ativar o Pages (branch `main`, root) e conferir o link.

## Confirmado pelo usuário
- WhatsApp: **(11) 97830-3677** → `https://wa.me/5511978303677` (este substitui o número do Instagram)
- Fotos da Ray: **podem ser usadas** (Hero/Sobre)
- Endereço: **Rua Barão de Ladário, 585 – Brás, São Paulo/SP** (mapa: `https://www.google.com/maps?q=Rua+Barão+de+Ladário+585+Brás+São+Paulo&output=embed`)

## Verificação
- Abrir `index.html` localmente e checar as 3 larguras.
- Botões de WhatsApp: abrem wa.me com o número e a mensagem certos.
- Lightbox funcionando no celular.
- Depois de publicar, mandar o link no WhatsApp e ver se a prévia aparece.

---
## Execução (24/10/2026)
- Site implementado conforme o plano e publicado em https://adailton-silva2.github.io/siteRay/
  (repo `Adailton-Silva2/siteRay`, push via SSH).
- Mudanças em relação ao plano: favicon em SVG; galeria alimentada por `js/fotos.js`,
  gerado pelo `otimizar_fotos.py` (Pillow, sem ffmpeg); og:image com URL absoluta.
- Fotos reais da Ray publicadas (11 na galeria, com legenda pelo nome do arquivo; foto da Ray; og-image refeita).
- WhatsApp trocado para (11) 97830-3677.
- Pendências restantes e passo a passo do domínio próprio: `LEIA-ME.md`.
