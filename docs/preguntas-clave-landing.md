# Cuestionario clave para brief de Landing Page (Base de Conocimiento)

Este cuestionario guía la recopilación de información esencial para diseñar una landing page que convierta. Úsalo en entrevistas, formularios o como checklist interno.

- Objetivo: maximizar conversión con mínima fricción y datos útiles para ventas/CRM.
- Entregable: respuestas claras, ejemplos, métricas y activos (logos, imágenes, testimonios).
- Tiempo estimado: 20–40 minutos según complejidad.

## 1. Objetivo y éxito
- ¿Cuál es la acción primaria única de la landing? (CTA: demo, presupuesto, descarga, compra, WhatsApp)
- ¿Cuál es el objetivo secundario (si lo hay)?
- ¿Qué métrica definirá el éxito (conversión, CPA, MQLs, revenue)? ¿Meta numérica?
- ¿Qué horizonte temporal/fecha límite hay (campaña, lanzamiento, evento)?

## 2. Audiencia y segmentación
- ¿Quién es el usuario ideal? (rol/cargo, industria, tamaño empresa o perfil consumidor)
- ¿Qué dolores/frustraciones tiene hoy?
- ¿Qué resultados desea lograr y en qué plazo?
- ¿Qué objeciones típicas expresa al decidir?
- ¿Para quién NO es esta oferta? (exclusiones)

## 3. Propuesta de valor y oferta
- Describe en una frase el valor principal (5–10 palabras).
- ¿Qué incluye exactamente la oferta? (componentes/entregables)
- ¿Cuál es el antes y después de usarlo? (transformación)
- ¿Qué hace único al producto/servicio vs. alternativas? (diferenciadores)
- ¿Hay garantías, prueba gratuita, políticas de devolución?

## 4. Evidencia y prueba social
- Testimonios (3–5) con nombre, cargo, empresa, permiso de uso.
- Casos de éxito con números (antes/después). KPI: % mejora, tiempo, ahorro.
- Logos de clientes/medios/partners (archivos en alta resolución).
- Reseñas/ratings (Google, G2, Trustpilot) y enlaces.
- Certificaciones/sellos/reconocimientos relevantes.

## 5. Detalles del producto/servicio
- Características clave (lista breve) y el beneficio asociado a cada una.
- Flujo “Cómo funciona” en 3 pasos simples.
- Limitaciones conocidas o requisitos previos.
- Integraciones y compatibilidades (si aplica).

## 6. Pricing y condiciones (si corresponde)
- Estructura de precios (planes/tiers, unitario, por proyecto).
- Qué incluye cada plan y qué no.
- Descuentos, bonos o promos vigentes, fechas y restricciones.
- Formas de pago y condiciones (contrato, permanencia, SLAs).

## 7. Captura de datos y compliance
- ¿Qué campos mínimos debe tener el formulario? (recomendado: Nombre, Email)
- ¿Campos adicionales opcionales? (Teléfono, Empresa, Cargo, País)
- ¿Campos ocultos requeridos? (UTM_source/medium/campaign, referer, página)
- Mensaje de consentimiento y enlace a Política de Privacidad.
- ¿Se usará reCAPTCHA/hCaptcha u otro anti-spam?
- ¿Integra con CRM? (cuál, endpoint, owner, pipeline)

## 8. Contenidos y activos
- Titulares propuestos (3 variantes) orientados a beneficio.
- Subtítulos de apoyo (2–3 variantes).
- Lista de bullets (beneficios, no características) 3–5.
- Imágenes, mockups o video demo disponibles (enlace o archivo).
- Documentos descargables (PDF/guías), si hay oferta de contenido.

## 9. Objeciones y FAQ
- Principales dudas que frenan la compra/contacto.
- Respuestas cortas y honestas a 6–8 preguntas frecuentes.
- Tiempos de respuesta/implementación, soporte, garantías, privacidad.

## 10. Operativa y post‑envío
- ¿Cuál es el siguiente paso tras enviar el formulario? (agenda, descarga, WhatsApp)
- ¿Quién recibe las notificaciones internas? (emails, canal)
- ¿Acuse de recibo al usuario? (email/SMS/WhatsApp)
- ¿SLA de contacto? (p.ej., 24h hábiles)

## 11. Medición y experimentación
- ¿Qué eventos se medirán? (envío, clic CTA, scroll, reproducción video)
- ¿Qué UTMs se usarán? (source/medium/campaign/content/term)
- ¿Habrá A/B test? ¿Qué variable? (titular, hero, formulario 2 vs 3 campos)
- ¿Herramientas de analítica/heatmaps? (GA4, Tag Manager, Hotjar)

---

## Checklist mínimo para lanzar
- [ ] CTA único y repetido
- [ ] Titular claro de valor (<=10 palabras)
- [ ] Formulario con 2–3 campos + consentimiento
- [ ] 2–3 piezas de prueba social
- [ ] Sección “Cómo funciona” en 3 pasos
- [ ] FAQ con 6–8 objeciones
- [ ] Medición: eventos + UTMs + página de gracias
- [ ] Móvil optimizado (CTA sticky / form usable)

## Plantilla JSON de brief (para CRM/ops)
```json
{
  "objetivo": { "primario": "", "secundario": "" },
  "kpi": { "metrica": "conversion_rate", "meta": 0.12, "deadline": "2025-10-31" },
  "audiencia": { "perfil": "", "dolores": [""], "objetivos": [""], "exclusiones": [""] },
  "valor": { "titular": "", "subtitulos": ["", ""], "diferenciadores": [""] },
  "oferta": { "incluye": [""], "garantias": [""], "limitaciones": [""] },
  "prueba_social": { "testimonios": [], "casos": [], "logos": [] },
  "producto": { "beneficios": [""], "caracteristicas": [""], "como_funciona": ["Paso 1", "Paso 2", "Paso 3"] },
  "pricing": { "planes": [], "condiciones": "" },
  "formulario": { "campos_min": ["nombre", "email"], "campos_opc": ["telefono"], "campos_ocultos": ["utm_source", "utm_medium", "utm_campaign", "referer"], "consentimiento": "Acepto la Política de Privacidad" },
  "post_envio": { "siguiente_paso": "agenda", "sla_horas": 24, "notificar_a": ["ventas@empresa.com"] },
  "medicion": { "eventos": ["form_submit", "cta_click"], "utms": { "source": "", "medium": "", "campaign": "" }, "herramientas": ["GA4", "GTM"] }
}
```

## Instrucciones de uso
1. Completa el cuestionario con el cliente o equipo interno.
2. Llena la plantilla JSON y guárdala en `docs/briefs/` para versionado.
3. Conecta los campos del formulario de la landing con el CRM usando los nombres definidos.
4. Define eventos de medición antes del lanzamiento y valida en entorno de pruebas.
5. Planifica un A/B test inicial y período de evaluación (2–4 semanas).