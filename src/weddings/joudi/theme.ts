const PRIMARY        = '#C9A84C'   // main accent (warm gold)
const PRIMARY_LIGHT  = '#D4AF6E'   // lighter gold for headings
const PRIMARY_DARK   = '#A8883A'   // darker gold for secondary
const PRIMARY_BRIGHT = '#E8CC80'   // brightest highlight
const BG_DEEP        = '#F5F0E8'   // off-white deep
const BG_MID         = '#FAF6EE'   // off-white mid
const BG_CARD        = '#FFFDF8'   // near-white card
const BG_BASE        = '#F8F3E8'   // off-white base

export const scrollbarColors = {
  main: {
    track:   BG_DEEP,
    thumb1:  PRIMARY,
    thumb2:  PRIMARY_DARK,
    thumb3:  '#B8924A',
  },
}

export const theme = {
  bg: {
    section: `linear-gradient(160deg, ${BG_DEEP} 0%, ${BG_MID} 30%, ${BG_CARD} 60%, ${BG_BASE} 100%)`,
    vignette: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(180,150,80,0.08) 100%)',
    glow: `radial-gradient(ellipse 55% 40% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)`,
  },

  color: {
    gold:        PRIMARY,
    goldLight:   PRIMARY_LIGHT,
    goldDark:    PRIMARY_DARK,
    navy:        '#6B5B35',
    textOnDark:  'rgba(80,60,20,0.85)',
    textMuted:   'rgba(120,90,30,0.5)',
    tagline:     'rgba(201,168,76,0.8)',
    subtle:      'rgba(201,168,76,0.5)',
  },

  ornament: {
    solid: PRIMARY,
    half:  'rgba(201,168,76,0.5)',
    soft:  'rgba(201,168,76,0.4)',
    mid:   'rgba(201,168,76,0.6)',
  },

  font: {
    display: "'Playfair Display', 'Noto Naskh Arabic', Georgia, serif",
    body:    "'Lato', 'Noto Naskh Arabic', system-ui, sans-serif",
  },

  shadow: {
    name: `0 0 40px rgba(201,168,76,0.25), 0 0 80px rgba(201,168,76,0.1), 0 2px 20px rgba(0,0,0,0.08)`,
  },

  scroll: {
    line:  `linear-gradient(to bottom, ${PRIMARY}, transparent)`,
    label: 'rgba(201,168,76,0.5)',
  },

  dust: [PRIMARY, PRIMARY_BRIGHT, PRIMARY_DARK, 'rgba(201,168,76,0.4)'] as string[],

  corner: {
    strokeOpacity:      0.5,
    innerStrokeOpacity: 0.2,
    dotOpacity:         0.6,
  },

  card: {
    bg:     'rgba(201,168,76,0.05)',
    border: 'rgba(201,168,76,0.2)',
    topBar: `linear-gradient(to right, ${PRIMARY}, rgba(201,168,76,0.3))`,
  },

  button: {
    bg:      `linear-gradient(135deg, ${BG_MID} 0%, ${BG_CARD} 100%)`,
    border:  'rgba(201,168,76,0.5)',
    text:    PRIMARY,
    hoverBg: 'rgba(201,168,76,0.1)',
  },
} as const
