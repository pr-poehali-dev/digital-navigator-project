import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const directions = [
  {
    id: 1,
    title: 'Образование и знания',
    slogan: 'Учись и познавай!',
    icon: 'GraduationCap',
    link: 'https://vk.com/mypervie_nauka',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 2,
    title: 'Наука и технологии',
    slogan: 'Дерзай и открывай!',
    icon: 'Microscope',
    link: 'https://vk.com/mypervie_nauka',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 3,
    title: 'Труд, профессия и своё дело',
    slogan: 'Найди призвание!',
    icon: 'Briefcase',
    link: 'https://vk.com/mypervie_professia',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 4,
    title: 'Культура и искусство',
    slogan: 'Создавай и вдохновляй!',
    icon: 'Palette',
    link: 'https://vk.com/mypervie_tvorchestvo',
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 5,
    title: 'Волонтёрство и добровольчество',
    slogan: 'Благо твори!',
    icon: 'Heart',
    link: 'https://vk.com/mypervie_dobro',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 6,
    title: 'Патриотизм и историческая память',
    slogan: 'Служи Отечеству!',
    icon: 'Flag',
    link: 'https://vk.com/mypervie_patrioty',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    id: 7,
    title: 'Спорт',
    slogan: 'Достигай и побеждай!',
    icon: 'Trophy',
    link: 'https://vk.com/mypervie_sportzozh',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    id: 8,
    title: 'Здоровый образ жизни',
    slogan: 'Будь здоров!',
    icon: 'Activity',
    link: 'https://vk.com/mypervie_sportzozh',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 9,
    title: 'Медиа и коммуникации',
    slogan: 'Расскажи о главном!',
    icon: 'Radio',
    link: 'https://vk.com/mypervie_media',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    id: 10,
    title: 'Дипломатия и международные отношения',
    slogan: 'Умей дружить!',
    icon: 'Globe',
    link: 'https://vk.com/mypervie_diplomaty',
    color: 'from-violet-500 to-violet-600'
  },
  {
    id: 11,
    title: 'Экология и охрана природы',
    slogan: 'Береги планету!',
    icon: 'Leaf',
    link: 'https://vk.com/mypervie_ecologia',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    id: 12,
    title: 'Туризм и путешествия',
    slogan: 'Открывай страну!',
    icon: 'Plane',
    link: 'https://vk.com/mypervie_puteshestvia',
    color: 'from-sky-500 to-sky-600'
  }
];

const faqItems = [
  {
    question: 'Что такое Движение Первых?',
    answer: 'Движение Первых предоставляет уникальную возможность раскрыть свой потенциал, стать достойным продолжателем традиций первооткрывателей, новаторов и тех, кто стремится к победе и развитию. В это движение вступают сильные духом люди, которые хотят оставить значимый след в истории нашей страны.'
  },
  {
    question: 'Как присоединиться к Движению?',
    answer: 'Для регистрации на официальном сайте будьвдвижении.рф выполните следующие шаги: 1) Заполните раздел «Контакты»; 2) Выберите подходящее первичное отделение (вероятно, это будет ваше школьное отделение); 3) Подтвердите участие в течение 30 дней одним из способов: онлайн через систему электронной подписи ГосКлюч, лично в отделении или по почте. Дети от 6 до 14 лет регистрируются с родителями или законными представителями. После 14 лет участие становится самостоятельным. С 18 лет можно стать наставником движения.'
  },
  {
    question: 'Где можно узнать новости первичного отделения?',
    answer: 'Новости первичного отделения доступны в социальных сетях ВКонтакте: https://vk.com/club229068743'
  },
  {
    question: 'Какие проекты доступны участникам?',
    answer: 'Детальную информацию о проектах Первых можно найти на сайте: https://projects.pervye.ru/'
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDirections = directions.filter(dir =>
    dir.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dir.slogan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Icon name="Rocket" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Цифровой навигатор
                </h1>
                <p className="text-sm text-gray-600">Движение Первых</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <a href="https://vk.com/club229068743" target="_blank" rel="noopener noreferrer">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  VK
                </a>
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" asChild>
                <a href="https://будьвдвижении.рф" target="_blank" rel="noopener noreferrer">
                  Вступить
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Добро пожаловать в Движение Первых! 🚀
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Первичное отделение МБОУ СОШ села Новый Мир Комсомольского муниципального района Хабаровского края
            </p>
            <p className="text-lg text-gray-600 mb-12">
              Здесь мы собрали ответы на часто задаваемые вопросы участников о работе, расписании мероприятий и других важных аспектах нашей деятельности.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              12 направлений развития
            </h3>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Поиск по направлениям..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-lg border-purple-200 focus:border-purple-400"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDirections.map((direction, index) => (
              <Card
                key={direction.id}
                className="group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 cursor-pointer animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${direction.color}`} />
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${direction.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={direction.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                    {direction.title}
                  </CardTitle>
                  <CardDescription className="text-base font-semibold text-gray-900">
                    «{direction.slogan}»
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all text-gray-900 font-semibold"
                    asChild
                  >
                    <a href={direction.link} target="_blank" rel="noopener noreferrer">
                      Перейти в VK
                      <Icon name="ExternalLink" size={16} className="ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredDirections.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600 text-lg">Направления не найдены. Попробуйте изменить запрос.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Часто задаваемые вопросы
          </h3>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl border-2 border-purple-100 px-6 overflow-hidden hover:border-purple-300 transition-colors"
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-purple-600 py-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-left">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bold mb-6">Присоединяйтесь к нам!</h3>
          <p className="text-xl mb-8 opacity-90">
            Движение Первых — это пространство для общения детей, родителей, педагогов и наставников. Здесь каждый может реализовать свои идеи и мечты.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8" asChild>
              <a href="https://будьвдвижении.рф" target="_blank" rel="noopener noreferrer">
                <Icon name="UserPlus" size={20} className="mr-2" />
                Зарегистрироваться
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 font-bold" asChild>
              <a href="https://projects.pervye.ru" target="_blank" rel="noopener noreferrer">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Проекты
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 font-bold" asChild>
              <a href="https://dobro.ru" target="_blank" rel="noopener noreferrer">
                <Icon name="Heart" size={20} className="mr-2" />
                Добрые дела
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://vk.com/club229068743" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Icon name="ExternalLink" size={24} />
            </a>
            <a href="https://будьвдвижении.рф" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              <Icon name="Globe" size={24} />
            </a>
          </div>
          <p className="text-gray-400">
            © 2026 Движение Первых • МБОУ СОШ села Новый Мир
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Если ты есть — будь Первым! 🚀
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;