export type Work = {
  slug: string
  title: string
  period: string
  shortDescription: string
  description: string[]
  website: string
  role: string
  stack: string
  images: string[]
}

export const works: Work[] = [
  {
    slug: 'hiepkhach',
    title: 'HKGH Mobile',
    period: '04/2018 - 01/2020',
    shortDescription: 'A homepage game website',
    description: [
      'Working with a designer to build a detail page.',
      'Building CMS and rendering detail on web features by project requirements.'
    ],
    website: 'https://hkgh.gamota.com/',
    role: 'Junior Web Developer',
    stack: 'HTML/CSS/JS, PHP, CodeIgniter, MySQL',
    images: ['/images/works/hiepkhach_01.svg', '/images/works/hiepkhach_02.svg', '/images/works/hiepkhach_03.svg']
  },
  {
    slug: 'ngaothien',
    title: 'Ngao Thien Mobile',
    period: '06/2018 - 01/2020',
    shortDescription: 'A homepage game website',
    description: [
      'Working with a designer to build a detail page.',
      'Building CMS and rendering detail on web features by project requirements.'
    ],
    website: 'https://ngaothien.gamota.com/',
    role: 'Junior Web Developer',
    stack: 'HTML/CSS/JS, PHP, CodeIgniter, MySQL',
    images: ['/images/works/ngaothien_01.svg', '/images/works/ngaothien_02.svg']
  }
]

export const getWorkBySlug = (slug: string) => works.find((work) => work.slug === slug)
