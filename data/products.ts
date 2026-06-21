export interface ColorVariant {
  color: string;
  colorCode: string;
  image: string;
}

export interface Product {
  id: string;
  category: 'kadin' | 'erkek';
  model: string;
  name: string;
  description: string;
  variants: ColorVariant[];
}

export const products: Product[] = [
  // KADIN MODELLERİ
  {
    id: 'k-01',
    category: 'kadin',
    model: 'Model 01',
    name: 'Çapraz Model',
    description: 'Zarif çapraz tasarımı ile ayağı estetik ve konforlu bir şekilde saran kadın terliği.',
    variants: [
      { color: 'Krem', colorCode: '#F0EAD8', image: '/images/sandals/k_capraz_krem.png' },
      { color: 'Acı Kahve', colorCode: '#3D2B1A', image: '/images/sandals/k_capraz_acıkahve.png' },
      { color: 'Yeşil', colorCode: '#4A7C52', image: '/images/sandals/k_capraz_yesil.png' },
      { color: 'Siyah', colorCode: '#111D14', image: '/images/sandals/k_capraz_siyah.png' },
    ],
  },
  {
    id: 'k-02',
    category: 'kadin',
    model: 'Model 02',
    name: 'Terlik Model',
    description: 'Minimal tasarımı ve yumuşak tabanıyla günlük şıklığı tamamlayan klasik düz model terlik.',
    variants: [
      { color: 'Beyaz', colorCode: '#FFFFFF', image: '/images/sandals/k-terlik_beyaz.png' },
      { color: 'Kahve', colorCode: '#5A4230', image: '/images/sandals/k_terlik_kahve.png' },
      { color: 'Kırmızı', colorCode: '#8B0000', image: '/images/sandals/k_terlik_kırmızı.jpeg' },
      { color: 'Siyah', colorCode: '#111D14', image: '/images/sandals/k_terlik_siyah.png' },
    ],
  },
  {
    id: 'k-03',
    category: 'kadin',
    model: 'Model 03',
    name: 'Tüm Yüz Model',
    description: 'Ayağın üstünü tamamen örten tasarımıyla üst düzey koruma ve sıcaklık sunan özel kadın modeli.',
    variants: [
      { color: 'Beyaz', colorCode: '#FFFFFF', image: '/images/sandals/k_tum_yuz_beyaz.png' },
      { color: 'Kahve', colorCode: '#5A4230', image: '/images/sandals/k_tum_yuz_kahve.png' },
      { color: 'Kırmızı', colorCode: '#8B0000', image: '/images/sandals/k_tum_yuz-model_kırmızı.png' },
      { color: 'Siyah', colorCode: '#111D14', image: '/images/sandals/k_tum_yuz_siyah.png' },
    ],
  },

  // ERKEK MODELLERİ
  {
    id: 'e-01',
    category: 'erkek',
    model: 'Model 01',
    name: 'Kapalı Sandalet',
    description: 'Ayak parmaklarını koruyan önü kapalı dayanıklı yapısıyla ergonomik erkek sandalet modeli.',
    variants: [
      { color: 'Kahve', colorCode: '#5A4230', image: '/images/sandals/erkek_kapalı_sandalet_kahve.png' },
      { color: 'Siyah', colorCode: '#111D14', image: '/images/sandals/erkek_kapalı_sandalet_siyah.png' },
    ],
  },
  {
    id: 'e-02',
    category: 'erkek',
    model: 'Model 02',
    name: 'Terlik Model',
    description: 'Sağlam dikişleri, geniş kalıbı ve rahat iç tabanıyla erkeklerin vazgeçilmez klasiği.',
    variants: [
      { color: 'Gri', colorCode: '#808080', image: '/images/sandals/erkek-terlik_gri.png' },
      { color: 'Kahve', colorCode: '#5A4230', image: '/images/sandals/erkek_terlik_kahve.png' },
      { color: 'Lacivert', colorCode: '#1E293B', image: '/images/sandals/erkek_terlik_lacivert.png' },
      { color: 'Siyah', colorCode: '#111D14', image: '/images/sandals/erkek_terlik_siyah.png' },
    ],
  },
];
