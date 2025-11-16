import React from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* HERO with Spline background */}
      <header className="relative w-full overflow-hidden">
        {/* Navigation (verbatim content) */}
        <div className="absolute inset-x-0 top-0 z-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-5">
              {/* Top-left logo text: unial */}
              <div className="text-xl font-semibold tracking-tight text-gray-900">unial</div>

              {/* Top-right nav and button */}
              <div className="hidden md:flex items-center gap-8">
                <nav className="flex items-center gap-6 text-sm text-gray-700">
                  {/* Top-right nav: Speak To Lead | Programs ▼ | Blog | FAQs */}
                  <a href="#speak-to-lead" className="hover:text-gray-900 transition-colors">Speak To Lead</a>
                  <a href="#programs" className="hover:text-gray-900 transition-colors flex items-center gap-1">
                    <span>Programs</span>
                    <span aria-hidden>▼</span>
                  </a>
                  <a href="#blog" className="hover:text-gray-900 transition-colors">Blog</a>
                  <a href="#faqs" className="hover:text-gray-900 transition-colors">FAQs</a>
                </nav>
                {/* Top-right button: Free Consultation */}
                <a href="#consultation" className="inline-flex items-center rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">
                  Free Consultation
                </a>
              </div>
              {/* Mobile menu minimal (keeps verbatim desktop unchanged) */}
              <div className="md:hidden">
                <a href="#consultation" className="inline-flex items-center rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                  Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Spline full-width cover background */}
        <div className="relative h-[80vh] w-full">
          <Spline
            scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />

          {/* soft gradient overlay to ensure readable nav over background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-white"></div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">About</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We help ambitious learners speak with confidence, lead with clarity, and present with impact.
                Our approach blends coaching, practice, and community to create measurable growth.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Whether you are preparing for a high-stakes presentation, building executive presence, or
                refining your communication toolkit, our programs meet you where you are and take you where you want to go.
              </p>
              <div className="mt-8 flex gap-3">
                <a href="#programs" className="inline-flex items-center rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600">Explore Programs</a>
                <a href="#consultation" className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-indigo-200 hover:ring-indigo-300">Get Guidance</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50 shadow-xl ring-1 ring-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1529336953121-0a83d0f5f6e5?q=80&w=1600&auto=format&fit=crop"
                  alt="People collaborating"
                  className="h-full w-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section id="programs" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Programs</h2>
              <p className="mt-2 text-gray-600">Structured learning paths designed for real-world impact.</p>
            </div>
            <a href="#all-programs" className="hidden sm:inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-indigo-200 hover:ring-indigo-300">View all</a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Speak To Lead',
                desc: 'Develop leadership communication skills for teams and stakeholders.',
                img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop',
                tag: 'Leadership'
              },
              {
                title: 'Executive Presence',
                desc: 'Cultivate poise, clarity, and authority in every interaction.',
                img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop',
                tag: 'Presence'
              },
              {
                title: 'Storytelling for Impact',
                desc: 'Craft narratives that inspire action and align teams.',
                img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
                tag: 'Storytelling'
              },
              {
                title: 'Presentation Mastery',
                desc: 'Design and deliver presentations that land with confidence.',
                img: 'https://images.unsplash.com/photo-1523246198061-1bdf0b07b1a8?q=80&w=1600&auto=format&fit=crop',
                tag: 'Presenting'
              },
              {
                title: 'Communicate with Data',
                desc: 'Transform complex insights into clear, compelling messages.',
                img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
                tag: 'Data'
              },
              {
                title: 'Foundations Bootcamp',
                desc: 'Build core communication habits through guided practice.',
                img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
                tag: 'Bootcamp'
              }
            ].map((c, i) => (
              <article key={i} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-md">
                <div className="relative">
                  <img src={c.img} alt={c.title} className="h-48 w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-indigo-600/90 px-3 py-1 text-xs font-medium text-white shadow-sm">
                    {c.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">Learn more →</a>
                    <button className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1.5 text-xs font-semibold text-sky-700 hover:bg-sky-200">Enroll</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why choose us</h2>
            <p className="mt-2 text-gray-600">Practical, human, and outcomes-focused training.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: 'Coaches with industry expertise', c: 'Hands-on leaders with real-world experience.' },
              { t: 'Practice-first methodology', c: 'Learn by doing with feedback you can apply immediately.' },
              { t: 'Personalized pathways', c: 'Adaptive tracks for every role and level.' },
              { t: 'Community & accountability', c: 'Cohorts that keep you motivated and growing.' },
              { t: 'Resources & templates', c: 'Frameworks that scale your communication.' },
              { t: 'Measurable outcomes', c: 'Track progress and impact across your team.' }
            ].map((f, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <div className="mb-3 inline-flex rounded-xl bg-emerald-100 p-2 text-emerald-700">★</div>
                <h3 className="text-base font-semibold text-gray-900">{f.t}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COACH APPLICATION CTA */}
      <section id="coach-application" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-50 via-sky-50 to-emerald-50 p-1 shadow-sm ring-1 ring-gray-100">
            <div className="flex flex-col items-start gap-6 rounded-3xl bg-white/60 p-8 backdrop-blur">
              <h3 className="text-2xl font-bold text-gray-900">Apply to be a Coach</h3>
              <p className="max-w-2xl text-gray-700">Join our network of experts and help learners grow through real practice and feedback.</p>
              <div className="flex flex-wrap gap-3">
                <a href="#apply" className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600">Start Application</a>
                <a href="#guidelines" className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-200 hover:ring-emerald-300">View Guidelines</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Partners</h2>
            <p className="mt-2 text-gray-600">Trusted by teams and leaders across industries.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex h-20 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-100">
                <img
                  src={`https://dummyimage.com/120x48/e5e7eb/111827&text=Logo+${i+1}`}
                  alt={`Partner ${i+1}`}
                  className="opacity-70"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Testimonials</h2>
            <p className="mt-2 text-gray-600">What our learners and partners say.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: 'The coaching transformed my ability to communicate complex ideas simply.',
                name: 'Alex Chen', role: 'Product Manager'
              },
              {
                quote: 'Practical, supportive, and results-driven. I felt the change in weeks.',
                name: 'Priya Kapoor', role: 'Engineering Lead'
              },
              {
                quote: 'Our team now leads meetings with confidence and clarity.',
                name: 'Diego Ramirez', role: 'Head of Design'
              }
            ].map((t, i) => (
              <figure key={i} className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                <div>
                  <div className="mb-4 inline-flex items-center gap-1 text-amber-500">★★★★★</div>
                  <blockquote className="text-gray-700">“{t.quote}”</blockquote>
                </div>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img src={`https://i.pravatar.cc/80?img=${i+5}`} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">From the blog</h2>
              <p className="mt-2 text-gray-600">Insights on communication, leadership, and storytelling.</p>
            </div>
            <a href="#all-posts" className="hidden sm:inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm ring-1 ring-indigo-200 hover:ring-indigo-300">View all</a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'How to structure a compelling presentation',
                img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop'
              },
              {
                title: 'Executive presence: a practical guide',
                img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop'
              },
              {
                title: 'Storytelling frameworks that move people',
                img: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1600&auto=format&fit=crop'
              }
            ].map((p, i) => (
              <article key={i} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 hover:shadow-md">
                <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">Read the full story →</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="text-lg font-semibold text-gray-900">unial</div>
              <p className="mt-3 text-sm text-gray-600">Training designed for clarity, confidence, and impact.</p>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Programs</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#programs" className="hover:text-gray-900">Speak To Lead</a></li>
                <li><a href="#programs" className="hover:text-gray-900">Executive Presence</a></li>
                <li><a href="#programs" className="hover:text-gray-900">Storytelling</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Company</div>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li><a href="#about" className="hover:text-gray-900">About</a></li>
                <li><a href="#partners" className="hover:text-gray-900">Partners</a></li>
                <li><a href="#faqs" className="hover:text-gray-900">FAQs</a></li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Get in touch</div>
              <p className="mt-3 text-sm text-gray-600">Book a <a href="#consultation" className="font-semibold text-indigo-600 hover:text-indigo-700">Free Consultation</a> to get started.</p>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} unial. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-700">Privacy</a>
              <a href="#" className="hover:text-gray-700">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
