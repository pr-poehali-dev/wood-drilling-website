import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 bg-secondary/95 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group">
            <img 
              src="https://cdn.poehali.dev/files/f04e9541-af5f-4491-90d2-7d8e27fa8aa1.png" 
              alt="WOOD DRILLING Logo" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
            <span className="text-xl font-bold text-primary-foreground tracking-tight">WOOD DRILLING</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-primary-foreground hover:text-primary transition-colors">О компании</a>
            <a href="#prices" className="text-primary-foreground hover:text-primary transition-colors">Цены</a>
            <a href="#gallery" className="text-primary-foreground hover:text-primary transition-colors">Работы</a>
            <a href="#timeline" className="text-primary-foreground hover:text-primary transition-colors">Сроки</a>
            <a href="#reviews" className="text-primary-foreground hover:text-primary transition-colors">Отзывы</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            Заказать
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-secondary to-secondary/80">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                ЧПУ фрезеровка<br />высшего качества
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                30 лет опыта в столярном производстве.<br />
                3 года современных технологий.<br />
                Идеальная точность каждой детали.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary/30">
                <img 
                  src="https://cdn.poehali.dev/projects/da81d664-c362-42ec-b85c-b7478949a1f5/files/fd09aca3-ea80-4618-ac3e-2d61a20c963f.jpg" 
                  alt="ЧПУ фрезеровка дерева" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">О компании</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мы объединяем традиции мастерства с современными технологиями
          </p>

          <div className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/projects/da81d664-c362-42ec-b85c-b7478949a1f5/files/f973a1dd-3c40-4cd1-a66d-c9a9bece2f0e.jpg" 
                  alt="Процесс ЧПУ фрезеровки" 
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://cdn.poehali.dev/projects/da81d664-c362-42ec-b85c-b7478949a1f5/files/148da66c-1739-42f2-a272-8dea337d9399.jpg" 
                  alt="Готовые изделия" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">30 лет опыта</h3>
                <p className="text-muted-foreground">
                  Три десятилетия работы в столярном производстве. Мы знаем дерево как никто другой.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Cpu" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">3 года ЧПУ</h3>
                <p className="text-muted-foreground">
                  Современные станки с программным управлением для идеальной точности и скорости.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="BadgeCheck" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Качество</h3>
                <p className="text-muted-foreground">
                  Контроль на каждом этапе. Гарантия на все работы. Довольные клиенты — наша цель.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Цены</h2>
          <p className="text-center text-muted-foreground mb-16">
            Прозрачное ценообразование за качественную работу
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="text-accent mb-2">
                  <Icon name="Box" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Простая фрезеровка</h3>
                <p className="text-3xl font-bold text-primary mb-4">от 500₽/час</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>2D фрезеровка</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Простые формы</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Быстрая обработка</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-primary">
              <CardContent className="pt-6">
                <div className="text-accent mb-2">
                  <Icon name="Hexagon" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">3D фрезеровка</h3>
                <p className="text-3xl font-bold text-primary mb-4">от 800₽/час</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Объёмные изделия</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Сложная геометрия</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Детализация</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="text-accent mb-2">
                  <Icon name="Layers" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Гравировка</h3>
                <p className="text-3xl font-bold text-primary mb-4">от 400₽/час</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Надписи, узоры</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Высокая точность</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Любые материалы</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="text-accent mb-2">
                  <Icon name="Package" size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Серийное производство</h3>
                <p className="text-3xl font-bold text-primary mb-4">Договорная</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Скидки от объёма</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Постоянные клиенты</span>
                  </li>
                  <li className="flex gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Индивидуальный подход</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-16">
            Примеры выполненных проектов с ЧПУ фрезеровкой
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "https://cdn.poehali.dev/projects/da81d664-c362-42ec-b85c-b7478949a1f5/files/bbd6f1bb-f578-46ca-a038-2f857376dded.jpg", title: "Декоративная панель" },
              { img: "https://cdn.poehali.dev/projects/da81d664-c362-42ec-b85c-b7478949a1f5/files/aba6117b-65ed-48b6-995f-038e3d610eae.jpg", title: "Мебельные компоненты" },
              { img: "https://cdn.poehali.dev/projects/da81d664-c362-42ec-b85c-b7478949a1f5/files/a0011e76-7f55-4658-b963-4af4ee9bfaba.jpg", title: "3D гравировка" },
              { img: "https://cdn.poehali.dev/projects/da81d664-c362-42ec-b85c-b7478949a1f5/files/e2a8168d-e9b9-479f-808c-89f5f850e879.jpg", title: "Декоративные элементы" },
              { img: "https://cdn.poehali.dev/projects/da81d664-c362-42ec-b85c-b7478949a1f5/files/fd09aca3-ea80-4618-ac3e-2d61a20c963f.jpg", title: "Процесс производства" },
              { img: "https://cdn.poehali.dev/projects/da81d664-c362-42ec-b85c-b7478949a1f5/files/f973a1dd-3c40-4cd1-a66d-c9a9bece2f0e.jpg", title: "Детальная работа" },
              { img: "https://cdn.poehali.dev/projects/da81d664-c362-42ec-b85c-b7478949a1f5/files/148da66c-1739-42f2-a272-8dea337d9399.jpg", title: "Готовые изделия" },
              { img: "https://cdn.poehali.dev/projects/da81d664-c362-42ec-b85c-b7478949a1f5/files/bbd6f1bb-f578-46ca-a038-2f857376dded.jpg", title: "Сложная геометрия" },
            ].map((item, index) => (
              <Card 
                key={index}
                className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(item.img)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-primary-foreground font-bold p-4">{item.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Preview" 
            className="max-w-full max-h-[90vh] object-contain animate-scale-in"
          />
        </div>
      )}

      <section id="timeline" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Сроки выполнения</h2>
          <p className="text-center text-muted-foreground mb-16">
            Работаем быстро, но качественно
          </p>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Zap" className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Срочные заказы</h3>
                    <p className="text-muted-foreground mb-2">От 1-2 дней</p>
                    <p className="text-sm text-muted-foreground">
                      Небольшие изделия или простая фрезеровка. Возможна доплата за срочность.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Icon name="Clock" className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Стандартные заказы</h3>
                    <p className="text-muted-foreground mb-2">3-7 дней</p>
                    <p className="text-sm text-muted-foreground">
                      Средние по сложности проекты, 3D фрезеровка, несколько деталей.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <Icon name="Calendar" className="text-secondary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Крупные проекты</h3>
                    <p className="text-muted-foreground mb-2">От 1-2 недель</p>
                    <p className="text-sm text-muted-foreground">
                      Серийное производство, сложная геометрия, уникальные изделия.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-16">
            Что говорят о нас наши заказчики
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Отличное качество и скорость работы! Заказывал детали для мебели, всё сделано идеально. Рекомендую!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Александр М.</p>
                    <p className="text-sm text-muted-foreground">Мебельная мастерская</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Сотрудничаем уже год. Постоянное качество, соблюдение сроков, адекватные цены. Профессионалы своего дела!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Ирина С.</p>
                    <p className="text-sm text-muted-foreground">Дизайн-студия</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Сложный проект с 3D фрезеровкой выполнили на высшем уровне. Точность до миллиметра. Буду обращаться ещё!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Дмитрий К.</p>
                    <p className="text-sm text-muted-foreground">Архитектурное бюро</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами прямо сейчас и получите консультацию специалиста
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать в WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
              <Icon name="Mail" className="mr-2" size={20} />
              Отправить заявку
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-secondary border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Drill" className="text-primary" size={28} />
                <span className="text-xl font-bold text-primary-foreground">WOOD DRILLING</span>
              </div>
              <p className="text-primary-foreground/70 text-sm">
                ЧПУ фрезеровка высшего качества. 30 лет опыта в столярном производстве.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-primary-foreground mb-4">Контакты</h3>
              <div className="space-y-2 text-primary-foreground/70 text-sm">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@wooddrilling.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Производственная, 12
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-primary-foreground mb-4">Режим работы</h3>
              <div className="space-y-2 text-primary-foreground/70 text-sm">
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб: 10:00 - 16:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm">
            <p>© 2024 WOOD DRILLING. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;